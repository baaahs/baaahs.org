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
      erb :tag_asset, locals: {tag: tag}
    end

    get '/assman/assets/:tag' do
      tag = params[:tag]
      asset = ::Asset.find_or_initialize_by tag: tag
      asset.save! if asset.changed?

      if request.accept? "application/json"
        asset.to_json
      else
        erb :asset, locals: {asset: asset}
      end
    end

    get '/assman/assets' do
      erb :assets, locals: {assets: ::Asset.all}
    end

    post '/assman/assets/:tag' do
      protected!
      tag = params[:tag]
      asset = ::Asset.find_by_tag tag

      scan_params = json_body["scan"]
      if scan_params
        scan = asset.scans.find_by_id scan_params["id"]
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
      ::Scan.create!(
                asset: asset,
                user: current_user,
                latitude: json_body["latitude"],
                longitude: json_body["longitude"],
                accuracy: json_body["accuracy"],
                altitude: json_body["altitude"],
                altitude_accuracy: json_body["altitudeAccuracy"],
      )
    end

    get '/assman/assets/:tag/scans' do
      tag = params[:tag]
      asset = ::Asset.find_by_tag tag
      scans = ::Scan.where(asset: asset).order(:created_at => "DESC")

      if request.accept? "application/json"
        scans.map do |scan|
          {
              latitude: scan.latitude,
              longitude: scan.longitude,
              userName: scan.user ? scan.user.name : nil,
              createdAt: scan.created_at,
          }
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
