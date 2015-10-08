require 'sinatra'
require "sinatra/compass"
require "sinatra/reloader" if development?

set :bind, '0.0.0.0'

get '/shifts' do
  redirect "http://www.volunteerspot.com/login/entry/375755452038"
end

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/*' do |file|
  File.read(File.join('public', "#{file}.html"))
end

not_found do
  File.read(File.join('public', '404.html'))
end

