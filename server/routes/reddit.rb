require 'redd'
require 'yaml'

def redditRequest(url)
    reddit = request.env['redd.session']

    if reddit
        response = reddit.client.get(url)

        response.raw_body
    else
        false
    end
end

get "/api/user/" do 
    reddit = request.env['redd.session']

    if reddit
        response = reddit.me.name

        json response
    else
        json false
    end
end

get "/api/subreddits/" do
    reddit = request.env['redd.session']

    if reddit
        response = reddit.client.get("/subreddits/mine/subscriber.json")

        json response.raw_body
    end
end

get "/api/subreddits/:name/hot" do
    reddit = request.env["redd.session"]

    if reddit
        response = reddit.client.get("/r/#{params['name']}/hot")
        puts response
        json response.raw_body
    else
        json false
    end
end