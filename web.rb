require 'sinatra'
require "sinatra/compass"
require "sinatra/reloader" if development?

set :bind, '0.0.0.0'

get('/shifts') { redirect "http://www.volunteerspot.com/login/entry/375755452038" }
get('/drive') { redirect "https://drive.google.com/drive/folders/0B_TasILTM6TWa18zdHdmNHpUYzg" }
get('/setup/setup') { redirect "/setup" }

get '/' do
  File.read(File.join('public', 'index.html'))
end

get '/*' do |file|
  file = file.gsub(/\.\./, '')

  begin
    File.read(File.join('public', "#{file}.html"))
  rescue
    dir_file = File.join('public', file)
    index_file = File.join(dir_file, 'index.html')

    if File.directory?(dir_file) && File.exists?(index_file)
      File.read(index_file)
    else
      raise
    end
  end
end

not_found do
  File.read(File.join('public', '404.html'))
end

