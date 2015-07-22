require 'sinatra'
require "sinatra/compass"
require "sinatra/reloader" if development?

set :bind, '0.0.0.0'

get '/' do
  # redirect "/volunteer2015.html"
  File.read(File.join('public', 'index.html'))
end

get '/camp' do
  File.read(File.join('public', 'camp.html'))
end

get '/camp.html' do
  redirect "/camp"
end

get '/shifts' do
  redirect "http://www.volunteerspot.com/login/entry/375755452038"
end

#get '/camp' do
#    redirect "http://baaahs.wufoo.com/forms/baaahs-on-playa-questionnaire/"
#end

not_found do
  File.read(File.join('public', '404.html'))
end
