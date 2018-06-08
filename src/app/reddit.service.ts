import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from "./types/Item";

@Injectable({
  providedIn: 'root'
})

export class RedditService {
  private subredditUrl = "http://localhost:9292/api/subreddits/";
  subreddits;
  activeSubName;

  constructor(
    private http: HttpClient
  ) { }

  getSubbreddits() {
    return this.http.get(this.subredditUrl)
  }

  getSubredditDefault(sub, type = 'hot'){
    this.activeSubName = sub;

    return this.http.get(this.subredditUrl + `${sub}/${type}`)
  }

  getActiveSubName(){
    return this.activeSubName;
  }

  searchFor(name){
    return this.http.get(`${this.subredditUrl}search/${name}`);
  }

  subscribe(name){
    return this.http.get(`${this.subredditUrl}subscribe/${name}`);
  }

  unsubscribe(name){
    return this.http.get(`${this.subredditUrl}unsubscribe/${name}`);
  }

  getThreadDetails(sub, id){
    return this.http.get(`${this.subredditUrl}specific/${sub}/${id}`);
  }

  getFrontPage(){
    return this.http.get(`${this.subredditUrl}front`);
  }

  loadMore(sub, page, type = 'hot'){
    return this.http.get(`${this.subredditUrl}load/${sub}/${page}/${type}`);
  }

  loadMoreComments(linkId, children){
    return this.http.get(`${this.subredditUrl}comments/${linkId}?children=${children.join(",")}`);
  }
  /* 
    Convert a comment tree provided by the /morecomments/ api into an object that 
    complies with the same signature as the OTHER API calls for threads, e.g. taking a flat object
    and turning it into one where the parent comment's children are a member of its object 
  */
  processCommentTree( comments: Item[] ) : Item[]{
    let map = {};

    comments.map( (item : Item) => {
      item.key = `${item.kind}_${item.data.id}`;
      item.parentKey = item.data.parent_id;
 
      map[item.key] = item;
    })
    // Reversing here means we're processing from the nested ones up,
    // meaning we won't have to worry about comments being popped off the 
    // chain that shouldn't be
    comments.reverse().forEach((item: Item, idx: number, arr) => {
      let foundItem;

      if( map[item.parentKey] ){
        foundItem = map[item.parentKey];

        if( ! Array.isArray(foundItem.data.replies) ){
          foundItem.data.replies = [];
        }
        
        foundItem.data.replies.push(item);

        map[item.parentKey] = foundItem;

        delete map[item.key];
      }
    })

    comments = Object.keys(map)
                .map( (key: string) : Item => map[key] )
                .map( (item: Item) : Item => {
                  let replies = item.data.replies;
                  
                  if( replies === "")
                    return item;

                  item.data.replies = {
                    data: {
                      children: []
                    }
                  };
                  
                  item.data.replies.data.children = replies;

                  return item;
                });
    
    return comments;
  }
}
