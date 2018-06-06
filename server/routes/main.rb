require "sinatra/json"

get '/' do
  reddit = request.env['redd.session']
  
  if reddit
    session[:redditUser] = reddit.me.name
    File.read(File.join('../dist', 'raidr/index.html'))
  else
    "<a href='/auth/reddit'>Sign in with reddit</a>"
  end
end    