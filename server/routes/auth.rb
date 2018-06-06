get '/auth/reddit/callback' do
  redirect to('/') unless request.env['redd.error']
  "Error: #{request.env['redd.error'].message} (<a href='/'>Back</a>)"
end

get '/logout' do
  request.env['redd.session'] = nil
  redirect to('/')
end