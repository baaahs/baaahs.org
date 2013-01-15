require 'sinatra'
require "sinatra/compass"

get '/' do
    File.read(File.join('public', 'index.html'))
end
