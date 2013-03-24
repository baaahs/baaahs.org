require 'sinatra'
require "sinatra/compass"

get '/' do
    File.read(File.join('public', 'index.html'))
end

not_found do
  'This sheep intentionally left blank.'
end
