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

get "/api/subreddits/:sub/:type" do
    reddit = request.env["redd.session"]

    if reddit
        case params[:type]
            when "rising"
                json redditGet("/r/#{params['sub']}/rising", {
                    limit: 25
                })
            when "controversial"
                json redditGet("/r/#{params['sub']}/controversial", {
                    limit: 25
                })
            when "new"
                json redditGet("/r/#{params['sub']}/new", {
                    limit: 25
                })
            else
                json redditGet("/r/#{params['sub']}/hot", {
                    limit: 25
                })
        end 
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

get "/api/subreddits/specific/:sub/:id" do
    json redditGet("/r/#{params['sub']}/comments/#{params['id']}")
end

get "/api/subreddits/front" do
    json redditGet("/");
end 

get "/api/subreddits/load/:sub/:after/:type?" do
    if params[:sub] === "front"
        json redditGet("/", {
            after: params[:after],
            limit: 25
        })        
    else
        case params[:type]
            when "rising"
                json redditGet("/r/#{params['sub']}/rising", {
                    after: params[:after],
                    limit: 25
                })
            when "controversial"
                json redditGet("/r/#{params['sub']}/controversial", {
                    after: params[:after],
                    limit: 25
                })
            when "new"
                json redditGet("/r/#{params['sub']}/new", {
                    after: params[:after],
                    limit: 25
                })
            else
                json redditGet("/r/#{params['sub']}/hot", {
                    after: params[:after],
                    limit: 25
                })
        end 
    end
end

get "/api/subreddits/comments/:id" do
    options = {
        api_type: "json",
        children: params[:children],
        limit_children: false,
        link_id: params[:id],
        sort: "top",
        showmore: true,
        threaded: true
    }

    json redditGet("/api/morechildren", options)
end