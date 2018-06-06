require 'redd'
require 'yaml'

def redditGet(url, options = {})
    reddit = request.env['redd.session']

    if reddit
        response = reddit.client.get(url, options)

        response.raw_body
    else
        false
    end
end

def redditPost(url, options = {})
    reddit = request.env['redd.session']

    if reddit
        response = reddit.client.post(url, options)

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

get "/api/subreddits/search/:name" do
    json redditGet( "/api/search_reddit_names?query=#{params['name']}" )
end

get "/api/subreddits/subscribe/:name" do
    json redditPost( "/api/subscribe", {
        :action => "sub",
        :sr_name => params['name'],
        :skip_initial_defaults => true
    } )
end

get "/api/subreddits/unsubscribe/:name" do
    json redditPost( "/api/subscribe", {
        :action => "unsub",
        :sr_name => params['name']
    } )
end