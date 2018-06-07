require 'sinatra'
require 'redd/middleware'
require 'sinatra/cors'

use Rack::Session::Cookie, :key => 'rack.session',
                           :path => '/',
                           :secret => 'aslkdjflajsdl;kfja;ldfjlakdjf;l'

set :allow_origin, "http://evil.com localhost localhost:4200"
set :allow_methods, "GET,HEAD,POST"
set :allow_headers, "content-type,if-modified-since"
set :expose_headers, "location,link"

use Rack::Session::Cookie
use Redd::Middleware,
    user_agent:     'Redd:RaidrApp App:v1.0.0',
    client_id:      'M87SktYd1xy25g',
    secret:         'oe6f8DgMiOpLERMxWXkWcNrVnew',
    redirect_uri:   'http://localhost:9292/auth/reddit/callback',
    scope:          %w(identity mysubreddits edit flair history modconfig modwiki read report subscribe vote wikiedit wikiread edit),
    via:            '/auth/reddit'
 
require_relative 'routes/main'
require_relative 'routes/auth'
require_relative 'routes/reddit' 
require_relative 'routes/twitter'