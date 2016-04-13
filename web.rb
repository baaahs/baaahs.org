require 'sinatra'
require "sinatra/compass"
require "sinatra/reloader" if development?

require 'pathname'

public_html = Pathname('public')

set :bind, '0.0.0.0'

# redirects to keep!
get('/drive') { redirect "https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg" }
get('/pspride') { redirect "/psp/" }
get('/join') { redirect "http://goo.gl/forms/XUvltyxql2" }

# old URLs to support for a while!
get('/shifts') { redirect "http://www.volunteerspot.com/login/entry/375755452038" } # todo kill after 20151201

# routes!

get '/' do
  send_file public_html.join('index.html')
end

get '/*' do |file|
  file = file.gsub(/\.\./, '')

  if public_html.join("#{file}.html").file?
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

