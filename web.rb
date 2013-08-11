require 'sinatra'
require "sinatra/compass"

set :bind, '0.0.0.0'

get '/' do
    File.read(File.join('public', 'index.html'))
end

get '/camp' do
    redirect "http://baaahs.wufoo.com/forms/baaahs-on-playa-questionnaire/"
end

not_found do
  'This sheep intentionally left blank.'
end
