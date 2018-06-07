require 'http'

get "/twitter/" do
    url = "https://publish.twitter.com/oembed"

    json HTTP.get("#{url}?url=#{params[:url]}")
end