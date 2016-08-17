require 'rubygems'
require 'bundler'
require 'sinatra'
require "sinatra/compass"
require "sinatra/reloader" if development?
require "sinatra/activerecord"
require "action_view"
require 'erubis'

require 'pathname'

# Bundler.require

$: << File.expand_path('../app', __FILE__)

require 'models/asset'
require 'models/event'
require 'models/scan'
require 'models/user'

class Helper
  include ActionView::Helpers::JavaScriptHelper

  def self.escape_js(text)
    @instance ||= self.new
    return @instance.escape_javascript(text)
  end
end

module BaaahsOrg
  class App < Sinatra::Application
    configure do
      disable :method_override
      disable :static

      set :sessions,
          :httponly => true,
          :secure => production?,
          :expire_after => 31557600, # 1 year
          :secret => ENV['SESSION_SECRET']
    end

    helpers do
      def auth
        @auth ||= Rack::Auth::Basic::Request.new(request.env)
      end

      def authorized?
        auth.provided? and auth.basic? and auth.credentials
      end

      def protected!
        return if authorized?
        headers['WWW-Authenticate'] = 'Basic realm="Restricted Area"'
        halt 401, "Not authorized\n"
      end

      def current_user
        @user ||= ::User.where(name: auth.credentials[0]).first!
      end

      def json_body
        @json_body ||= JSON.parse(request.body.read)
      end

      def asset_info(asset)
        last_scan = asset.last_scan
        container = asset.container

        {
            tag: asset.tag,
            name: asset.name,
            createdAt: asset.created_at,
            lastScan: last_scan ? scan_info(last_scan) : nil,
            state: asset.state,
            container: container ? {
                tag: container.tag,
                name: container.name,
            } : nil
        }
      end

      def scan_info(scan)
        {
            latitude: scan.latitude,
            longitude: scan.longitude,
            userName: scan.user ? scan.user.name : nil,
            eventName: scan.event ? scan.event.name : nil,
            createdAt: scan.created_at,
            intoContainer: scan.into_container ? {
                id: scan.into_container.id,
                name: scan.into_container.name,
            } : nil
        }
      end
    end


    public_html = Pathname('public')
    set :public_folder => Pathname(root) + public_html

# redirects to keep!
    get('/drive') { redirect "https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg" }
    get('/pspride') { redirect "/psp/" }
    get('/join') { redirect "http://goo.gl/forms/XUvltyxql2" }

    get('/assets') { redirect "/assman/assets" }

# old URLs to support for a while!
    get('/shifts') { redirect "http://www.volunteerspot.com/login/entry/375755452038" } # todo kill after 20151201

# routes!

    get '/' do
      send_file public_html.join('index.html')
    end

    get '/a/:tag' do
      tag = params[:tag]
      erb :asset, locals: {tag: tag, perform_scan: true}
    end

    get '/assman/assets/:tag' do
      tag = params[:tag]

      if request.accept?("application/json") && params[:js]
        asset = ::Asset.find_or_initialize_by tag: tag
        asset.save! if asset.changed?

        asset_info(asset).to_json
      else
        erb :asset, locals: {tag: tag, perform_scan: false}
      end
    end

    get '/assman/assets' do
      assets = ::Asset.all.includes(:container).order(:tag)
      scans = {}
      ::Scan.where(asset_id: assets.map { |a| a.id }).
          select("DISTINCT ON (asset_id) scans.*").
          order("asset_id, created_at DESC").
          includes(:user, :event).each do |s|
        scans[s.asset_id] = s
      end

      if request.accept?("application/json") && params[:js]
        assets.map do |asset|
          asset.last_scan = scans[asset.id]
          asset_info(asset)
        end.to_json
      else
        erb :assets, locals: {assets: assets}
      end
    end

    post '/assman/assets/:tag' do
      protected!
      tag = params[:tag]
      asset = ::Asset.find_by_tag tag

      scan_params = json_body["scan"]
      if scan_params
        scan = asset.scans.find_by_82 scan_params["id"]
        if scan
          {
              latitude: "latitude",
              longitude: "longitude",
              accuracy: "accuracy",
              altitude: "altitude",
              altitude_accuracy: "altitudeAccuracy",
          }.each do |k, v|
            scan.__send__("#{k}=", scan_params[v]) if scan_params[v]
          end
          scan.save! if scan.changed?
        end
      end

      asset.name = json_body["name"] if json_body["name"]
      # asset.user = ::User.find_by_id if params[:name]
      asset.save! if asset.changed?

      {}.to_json
    end

    put '/assman/assets/:tag/scans' do
      protected!

      tag = params[:tag]
      asset = ::Asset.find_by_tag tag
      event = json_body["eventId"] ? ::Event.find_by_id(json_body["eventId"]) : nil

      container_tag = json_body["containerTag"]
      container = container_tag ? ::Asset.find_by_tag(container_tag) : nil

      Scan.transaction do
        scan = ::Scan.create!(
            asset: asset,
            user: current_user,
            latitude: json_body["latitude"],
            longitude: json_body["longitude"],
            accuracy: json_body["accuracy"],
            altitude: json_body["altitude"],
            altitude_accuracy: json_body["altitudeAccuracy"],
            event: event,
            into_container: container
        )

        asset.container = container
        asset.save! if asset.changed?

        searched_containers = []
        containers_to_search = [asset]
        contained_assets = {}
        until containers_to_search.empty?
          found_assets = ::Asset.where(container: containers_to_search)
          searched_containers += containers_to_search
          found_assets.each { |contained_asset| contained_assets[contained_asset.id] = contained_asset }
          containers_to_search = found_assets - searched_containers
        end

        contained_assets.values.each do |contained_asset|
          ::Scan.create!(
              asset: contained_asset,
              user: current_user,
              latitude: json_body["latitude"],
              longitude: json_body["longitude"],
              accuracy: json_body["accuracy"],
              altitude: json_body["altitude"],
              altitude_accuracy: json_body["altitudeAccuracy"],
              event: event,
              container_scan: scan
          )
        end

        scan_info(scan).to_json
      end
    end

    get '/assman/assets/:tag/scans' do
      tag = params[:tag]
      asset = ::Asset.find_by_tag tag
      scans = ::Scan.where(asset: asset).order(:created_at => "DESC")

      if request.accept? "application/json"
        scans.map do |scan|
          scan_info(scan)
        end.to_json
      # else
      #   erb :asset_scans, locals: {asset: asset}
      end
    end

    get '/assman/users' do
      users = ::User.all.order(:name)
      users.to_json if request.accept? "application/json"
    end

    put '/assman/users' do
      user = User.create!(name: json_body["name"])
      user.to_json if request.accept? "application/json"
    end

    get '/assman/events' do
      event = ::Event.all.order(:name)
      event.to_json if request.accept? "application/json"
    end

    put '/assman/events' do
      event = Event.create!(name: json_body["name"])
      event.to_json if request.accept? "application/json"
    end

    get '/*' do |file|
      file = file.gsub(/\.\./, '')

      if public_html.join("#{file}").file?
        send_file public_html.join("#{file}")
      elsif public_html.join("#{file}.html").file?
        send_file public_html.join("#{file}.html")
      elsif public_html.join(file).directory? && public_html.join(file, 'index.html').file?
        if file =~ /\/$/
          send_file public_html.join(file, 'index.html')
        else
          redirect "#{file}/"
        end
      else
        pass
      end
    end

    not_found do
      send_file public_html.join('404.html')
    end

    use Rack::Deflater
  end
end
