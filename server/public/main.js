(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/active-subreddit/active-subreddit.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/active-subreddit/active-subreddit.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thread-list{\n    padding-left: 0px;\n    list-style-type: none;\n}\n\n.thread-list li{\n    margin-bottom: 10px;\n    cursor: pointer;\n}\n\n.refresh-button img{\n    width: 20px;\n}"

/***/ }),

/***/ "./src/app/active-subreddit/active-subreddit.component.html":
/*!******************************************************************!*\
  !*** ./src/app/active-subreddit/active-subreddit.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h4>r/{{ activeSubName }}</h4>\n<hr />\n<div class='subredditActions'>\n  <button \n    class=\"btn btn-sm mr-2 refresh-button btn-outline-secondary\" \n    (click)=\"refreshActive(activeSubName)\"\n  ><img src=\"/assets/svg/loop-circular.svg\" alt=\"\"></button>\n  <button *ngIf=\"isSubscribed\" class='btn btn-primary btn-sm' (click)=\"unsubscribe()\">Unsubscribe</button>\n  <button *ngIf=\"! isSubscribed\" class='btn btn-primary btn-sm' (click)=\"subscribe()\">Subscribe</button>\n</div>\n<hr />\n \n<ul class=\"thread-list\" *ngIf=\"activeSub.children\">\n  <li *ngFor=\"let thread of activeSub.children\" class=\"mt-2\">\n    <app-thread [data]=\"thread.data\"></app-thread>\n  </li>\n</ul>   \n\n<div class=\"row mt-5 mb-5\">\n  <div class=\"col-12\">\n    <button class=\"btn btn-outline-secondary btn-block\" (click)=\"loadMore()\">LOAD MORE</button>\n  </div>\n</div>\n \n "

/***/ }),

/***/ "./src/app/active-subreddit/active-subreddit.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/active-subreddit/active-subreddit.component.ts ***!
  \****************************************************************/
/*! exports provided: ActiveSubredditComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ActiveSubredditComponent", function() { return ActiveSubredditComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reddit.service */ "./src/app/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ActiveSubredditComponent = /** @class */ (function () {
    function ActiveSubredditComponent(redditService) {
        this.redditService = redditService;
    }
    ActiveSubredditComponent.prototype.ngOnInit = function () {
        this.currentAfter = this.activeSub.after;
    };
    ActiveSubredditComponent.prototype.subscribe = function () {
        var _this = this;
        this.redditService.subscribe(this.activeSubName).subscribe(function (response) { return _this.refresh(); });
    };
    ActiveSubredditComponent.prototype.unsubscribe = function () {
        var _this = this;
        this.redditService.unsubscribe(this.activeSubName).subscribe(function (response) { return _this.refresh(); });
    };
    ActiveSubredditComponent.prototype.loadMore = function () {
        var _this = this;
        this.redditService.loadMore(this.activeSubName, this.currentAfter).subscribe(function (response) {
            var data = JSON.parse(response.toString()).data;
            var newChildren = data.children;
            _this.currentAfter = data.after;
            _this.activeSub.children = _this.activeSub.children.concat(newChildren);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActiveSubredditComponent.prototype, "activeSub", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ActiveSubredditComponent.prototype, "refresh", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ActiveSubredditComponent.prototype, "refreshActive", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ActiveSubredditComponent.prototype, "activeSubName", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Boolean)
    ], ActiveSubredditComponent.prototype, "isSubscribed", void 0);
    ActiveSubredditComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-active-subreddit',
            template: __webpack_require__(/*! ./active-subreddit.component.html */ "./src/app/active-subreddit/active-subreddit.component.html"),
            styles: [__webpack_require__(/*! ./active-subreddit.component.css */ "./src/app/active-subreddit/active-subreddit.component.css")]
        }),
        __metadata("design:paramtypes", [_reddit_service__WEBPACK_IMPORTED_MODULE_1__["RedditService"]])
    ], ActiveSubredditComponent);
    return ActiveSubredditComponent;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".nav-link{\n    cursor: pointer;\n}\n\n.preloader{\n    position: fixed;\n    left: 50%;\n    top: 50%;\n    -webkit-transform: translateX(-50%) translateY(-50%);\n            transform: translateX(-50%) translateY(-50%);\n}\n\n.side-nav{\n    position: relative;\n}\n\n.fixed-nav{\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    width: 100%;\n    width: 16.666667%;\n    padding-left: 15px;\n    padding-right: 15px;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"container-fluid\">\n  <div class=\"row\">\n    <div class=\"col-2 pt-4 side-nav\">\n      <div class=\"fixed-nav pt-4\">\n        <h5>Welcome {{activeUser}}</h5>\n        <app-subreddit-search [setActive]=\"passableGetSpecificSubreddit\"></app-subreddit-search>\n        <hr />\n        <h6>Your Subreddits</h6>\n        <ul class='nav nav-pills flex-column'>\n          <a class=\"nav-link\" (click)=\"loadFrontPage()\" [class.active]=\"activeSubName === 'front'\">Front Page</a>\n          <a class='nav-link' *ngFor=\"let subs of subreddits\" (click)=\"getSpecificSubreddit(subs.data.display_name)\" [class.active]=\"subs.data.display_name === activeSubName\">\n            {{ subs.data.display_name }}\n          </a>\n        </ul>\n      </div>\n    </div> \n    <div class=\"col-10 pl-5 pr-5 pt-4\" *ngIf=\"activeSub\">\n      <app-active-subreddit \n        [activeSub]=\"activeSub\" \n        [activeSubName]=\"activeSubName\"\n        [isSubscribed]=\"subscribedToActive\"\n        [refresh]=\"passableRefresh\"\n        [refreshActive]=\"passableGetSpecificSubreddit\"\n      >\n      </app-active-subreddit>\n    </div>      \n\n    <div class=\"col-10\" *ngIf=\"!activeSub\">\n      <img class='preloader' src=\"/assets/preloader.gif\" alt=\"\" />\n    </div>\n  </div>\n</div>   "

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user.service */ "./src/app/user.service.ts");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./reddit.service */ "./src/app/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = /** @class */ (function () {
    function AppComponent(userService, redditService) {
        this.userService = userService;
        this.redditService = redditService;
        this.title = 'app';
        this.activeUser = null;
        this.subscribedToActive = false;
    }
    AppComponent.prototype.ngOnInit = function () {
        this.getUser();
        this.getSubbredits();
        this.loadFrontPage();
        this.passableGetSpecificSubreddit = this.getSpecificSubreddit.bind(this);
        this.passableRefresh = this.getSubbredits.bind(this);
    };
    AppComponent.prototype.loadFrontPage = function () {
        var _this = this;
        this.activeSubName = "front";
        this.activeSub = null;
        this.redditService.getFrontPage().subscribe(function (response) {
            _this.activeSub = JSON.parse(response.toString()).data;
        });
    };
    AppComponent.prototype.getSubbredits = function () {
        var _this = this;
        this.redditService.getSubbreddits().subscribe(function (response) {
            _this.subreddits = JSON.parse(response.toString()).data.children.sort(function (a, b) {
                return a.data.display_name.toLowerCase() > b.data.display_name.toLowerCase();
            });
        });
    };
    AppComponent.prototype.getSpecificSubreddit = function (name) {
        var _this = this;
        this.activeSubName = name;
        this.activeSub = null;
        this.redditService.getSubredditDefault(name).subscribe(function (response) {
            _this.activeSub = JSON.parse(response.toString()).data;
            _this.subscribedToActive = _this.subreddits.some(function (sub) { return sub.data.display_name === name; });
        });
    };
    AppComponent.prototype.getUser = function () {
        var _this = this;
        this.userService.getUser().subscribe(function (response) {
            _this.activeUser = response;
        });
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_user_service__WEBPACK_IMPORTED_MODULE_1__["UserService"],
            _reddit_service__WEBPACK_IMPORTED_MODULE_2__["RedditService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _active_subreddit_active_subreddit_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./active-subreddit/active-subreddit.component */ "./src/app/active-subreddit/active-subreddit.component.ts");
/* harmony import */ var _thread_thread_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./thread/thread.component */ "./src/app/thread/thread.component.ts");
/* harmony import */ var _subreddit_search_subreddit_search_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./subreddit-search/subreddit-search.component */ "./src/app/subreddit-search/subreddit-search.component.ts");
/* harmony import */ var _thread_details_thread_details_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./thread-details/thread-details.component */ "./src/app/thread-details/thread-details.component.ts");
/* harmony import */ var _thread_detail_comment_thread_detail_comment_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./thread-detail-comment/thread-detail-comment.component */ "./src/app/thread-detail-comment/thread-detail-comment.component.ts");
/* harmony import */ var _thread_media_thread_media_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./thread-media/thread-media.component */ "./src/app/thread-media/thread-media.component.ts");
/* harmony import */ var _thread_media_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./thread-media/twitter/twitter.component */ "./src/app/thread-media/twitter/twitter.component.ts");
/* harmony import */ var _thread_detail_more_thread_detail_more_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./thread-detail-more/thread-detail-more.component */ "./src/app/thread-detail-more/thread-detail-more.component.ts");
/* harmony import */ var _thread_detail_comment_flair_thread_detail_comment_flair_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./thread-detail-comment-flair/thread-detail-comment-flair.component */ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};














var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _active_subreddit_active_subreddit_component__WEBPACK_IMPORTED_MODULE_5__["ActiveSubredditComponent"],
                _thread_thread_component__WEBPACK_IMPORTED_MODULE_6__["ThreadComponent"],
                _subreddit_search_subreddit_search_component__WEBPACK_IMPORTED_MODULE_7__["SubredditSearchComponent"],
                _thread_details_thread_details_component__WEBPACK_IMPORTED_MODULE_8__["ThreadDetailsComponent"],
                _thread_detail_comment_thread_detail_comment_component__WEBPACK_IMPORTED_MODULE_9__["ThreadDetailCommentComponent"],
                _thread_media_thread_media_component__WEBPACK_IMPORTED_MODULE_10__["ThreadMediaComponent"],
                _thread_media_twitter_twitter_component__WEBPACK_IMPORTED_MODULE_11__["TwitterComponent"],
                _thread_detail_more_thread_detail_more_component__WEBPACK_IMPORTED_MODULE_12__["ThreadDetailMoreComponent"],
                _thread_detail_comment_flair_thread_detail_comment_flair_component__WEBPACK_IMPORTED_MODULE_13__["ThreadDetailCommentFlairComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientJsonpModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/reddit.service.ts":
/*!***********************************!*\
  !*** ./src/app/reddit.service.ts ***!
  \***********************************/
/*! exports provided: RedditService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "RedditService", function() { return RedditService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var RedditService = /** @class */ (function () {
    function RedditService(http) {
        this.http = http;
        this.subredditUrl = "http://localhost:9292/api/subreddits/";
    }
    RedditService.prototype.getSubbreddits = function () {
        return this.http.get(this.subredditUrl);
    };
    RedditService.prototype.getSubredditDefault = function (sub) {
        this.activeSubName = sub;
        return this.http.get(this.subredditUrl + (sub + "/hot"));
    };
    RedditService.prototype.getActiveSubName = function () {
        return this.activeSubName;
    };
    RedditService.prototype.searchFor = function (name) {
        return this.http.get(this.subredditUrl + "search/" + name);
    };
    RedditService.prototype.subscribe = function (name) {
        return this.http.get(this.subredditUrl + "subscribe/" + name);
    };
    RedditService.prototype.unsubscribe = function (name) {
        return this.http.get(this.subredditUrl + "unsubscribe/" + name);
    };
    RedditService.prototype.getThreadDetails = function (sub, id) {
        return this.http.get(this.subredditUrl + "specific/" + sub + "/" + id);
    };
    RedditService.prototype.getFrontPage = function () {
        return this.http.get(this.subredditUrl + "front");
    };
    RedditService.prototype.loadMore = function (sub, page) {
        return this.http.get(this.subredditUrl + "load/" + sub + "/" + page);
    };
    RedditService.prototype.loadMoreComments = function (linkId, children) {
        return this.http.get(this.subredditUrl + "comments/" + linkId + "?children=" + children.join(","));
    };
    RedditService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], RedditService);
    return RedditService;
}());



/***/ }),

/***/ "./src/app/subreddit-search/subreddit-search.component.css":
/*!*****************************************************************!*\
  !*** ./src/app/subreddit-search/subreddit-search.component.css ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".search-results{\n    list-style-type: none;\n    margin-left: 0px;\n    padding-left: 0px;\n}\n\n.search-result{\n    cursor: pointer;\n    padding-left: 6px;\n    padding-top: 2px;\n    padding-bottom: 2px;\n}\n\n.search-result:hover{\n    background-color: #cdcdcd;\n    transition: all .2s ease;\n    border-radius: 4px;\n}\n\n.icon{\n    height: 15px;\n    cursor: pointer;\n    margin-top: 2px;\n}\n\n"

/***/ }),

/***/ "./src/app/subreddit-search/subreddit-search.component.html":
/*!******************************************************************!*\
  !*** ./src/app/subreddit-search/subreddit-search.component.html ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div>\n  <form class='form-inline mb-2'>\n    <div class=\"input-group\">\n      <input [(ngModel)]=\"searchTerm\" type=\"text\" placeholder=\"/r/query\" class='form-control' name=\"searchTerm\" />\n      <div class=\"input-group-append\">\n        <button (click)=\"runSearch()\" class='btn btn-primary'>Search</button>\n      </div>\n    </div>\n  </form>\n</div>\n\n<div *ngIf=\"searchResults\">\n  <h6>Search Results <img src=\"/assets/svg/circle-x.svg\" class='icon float-right' alt=\"\" (click)=\"closeResults()\"></h6>\n  <ul class=\"search-results\">\n    <li \n      class='search-result' \n      *ngFor=\"let result of searchResults\"\n      (click)=\"setActiveSub(result)\"\n    >\n      <small>{{ result }}</small>\n    </li> \n  </ul> \n</div>\n\n"

/***/ }),

/***/ "./src/app/subreddit-search/subreddit-search.component.ts":
/*!****************************************************************!*\
  !*** ./src/app/subreddit-search/subreddit-search.component.ts ***!
  \****************************************************************/
/*! exports provided: SubredditSearchComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SubredditSearchComponent", function() { return SubredditSearchComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reddit.service */ "./src/app/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SubredditSearchComponent = /** @class */ (function () {
    function SubredditSearchComponent(redditService) {
        this.redditService = redditService;
    }
    SubredditSearchComponent.prototype.ngOnInit = function () { };
    SubredditSearchComponent.prototype.runSearch = function () {
        var _this = this;
        var searchResults = this.redditService.searchFor(this.searchTerm).subscribe(function (response) {
            _this.searchResults = JSON.parse(response.toString()).names;
        });
    };
    SubredditSearchComponent.prototype.closeResults = function () {
        this.searchResults = null;
    };
    SubredditSearchComponent.prototype.setActiveSub = function (subName) {
        this.setActive(subName);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], SubredditSearchComponent.prototype, "setActive", void 0);
    SubredditSearchComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-subreddit-search',
            template: __webpack_require__(/*! ./subreddit-search.component.html */ "./src/app/subreddit-search/subreddit-search.component.html"),
            styles: [__webpack_require__(/*! ./subreddit-search.component.css */ "./src/app/subreddit-search/subreddit-search.component.css")]
        }),
        __metadata("design:paramtypes", [_reddit_service__WEBPACK_IMPORTED_MODULE_1__["RedditService"]])
    ], SubredditSearchComponent);
    return SubredditSearchComponent;
}());



/***/ }),

/***/ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.css":
/*!***************************************************************************************!*\
  !*** ./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.css ***!
  \***************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".flair{\n    background-color: #cdcdcd;\n    border-radius: 2px;\n    margin-left: 8px;\n    font-size: 12px;\n    line-height: 22px;\n    padding: 2px;\n    padding-left: 6px;\n    padding-right: 6px;\n}"

/***/ }),

/***/ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.html":
/*!****************************************************************************************!*\
  !*** ./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.html ***!
  \****************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<span class='flair'>{{ data }}</span>\n"

/***/ }),

/***/ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.ts":
/*!**************************************************************************************!*\
  !*** ./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.ts ***!
  \**************************************************************************************/
/*! exports provided: ThreadDetailCommentFlairComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadDetailCommentFlairComponent", function() { return ThreadDetailCommentFlairComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreadDetailCommentFlairComponent = /** @class */ (function () {
    function ThreadDetailCommentFlairComponent() {
    }
    ThreadDetailCommentFlairComponent.prototype.ngOnInit = function () {
        console.log(this.data);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThreadDetailCommentFlairComponent.prototype, "data", void 0);
    ThreadDetailCommentFlairComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread-detail-comment-flair',
            template: __webpack_require__(/*! ./thread-detail-comment-flair.component.html */ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.html"),
            styles: [__webpack_require__(/*! ./thread-detail-comment-flair.component.css */ "./src/app/thread-detail-comment-flair/thread-detail-comment-flair.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreadDetailCommentFlairComponent);
    return ThreadDetailCommentFlairComponent;
}());



/***/ }),

/***/ "./src/app/thread-detail-comment/thread-detail-comment.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/thread-detail-comment/thread-detail-comment.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "[class*=depth]{\n    padding-left: 10px;\n    border-left: 2px solid #333;\n    padding-top: 4px;\n    padding-bottom: 4px;\n}\n\n.depth-0{\n    border-left: 4px solid #333;\n    margin-bottom: 10px;\n    background-color: rgba(100, 100, 100, .05);\n    padding-left: 15px;\n    padding-right: 15px;\n}\n\n.comment{\n    font-size: 14px;\n    line-height: 22px;\n    width: 100%;\n    position: relative;\n    padding-right: 85px;\n}\n\n.comment p{ \n    margin-bottom: 0px;\n}\n\n.comment .comment{\n    position: static;\n}\n\n.fixed-right{\n    position: absolute;\n    right: 15px;\n}\n\n.collapse{\n    cursor: pointer;\n    width: 14px;\n    display: inline-block;\n    margin-right: 8px;\n}\n\n.collapse-expand{\n    top: 4px;\n}\n\n.load-more-comment{\n    cursor: pointer;\n}\n\n.depth-1{\n    border-color: rgba(123, 12, 184, 1);\n}\n\n.depth-2{\n    border-color: rgba(12, 123, 184, 1);\n}"

/***/ }),

/***/ "./src/app/thread-detail-comment/thread-detail-comment.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/thread-detail-comment/thread-detail-comment.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='comment depth-{{data.depth}}' *ngIf=\"! collapsed\">\n  <strong *ngIf=\"data.author\">\n    {{ data.author }} \n    <app-thread-detail-comment-flair *ngIf=\"data.author_flair_text\" [data]=\"data.author_flair_text\"></app-thread-detail-comment-flair>\n  </strong>\n  <strong *ngIf=\"!data.author\">[deleted]</strong>\n\n  <div class=\"fixed-right\">\n    <img class='collapse' src=\"/assets/svg/fullscreen-exit.svg\" alt=\"\" (click)=\"collapse()\">\n\n    <span *ngIf=\"data.score\">[{{data.score}}]</span>\n    <span *ngIf=\"!data.score\">[-]</span>\n  </div>\n\n  <p *ngIf=\"!data.body_html\">[deleted]</p>\n  <p *ngIf=\"data.body_html\" [innerHTML]=\"data.body_html\"></p>\n\n  <div class='comment-children' *ngIf=\"data.replies !== undefined\">\n    <div *ngIf=\"data.replies\">\n      <div *ngFor=\"let child of data.replies.data.children\">\n        <app-thread-detail-comment *ngIf=\"child.kind !== 'more'\" [data]=\"child.data\"></app-thread-detail-comment>\n        <app-thread-detail-more *ngIf=\"child.kind === 'more'\" [loadMore]=\"passableLoadMore\" [data]=\"child.data\"></app-thread-detail-more>\n      </div>\n    </div> \n  </div> \n</div>\n\n<div class='comment depth-{{data.depth}}' *ngIf=\"collapsed\">\n  <strong *ngIf=\"data.author\">\n    <em>[hidden]</em>\n  </strong>\n\n  <div class=\"fixed-right collapse-expand\">\n    <img class='collapse' src=\"/assets/svg/fullscreen-enter.svg\" alt=\"\" (click)=\"collapse()\">\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/thread-detail-comment/thread-detail-comment.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/thread-detail-comment/thread-detail-comment.component.ts ***!
  \**************************************************************************/
/*! exports provided: ThreadDetailCommentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadDetailCommentComponent", function() { return ThreadDetailCommentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reddit.service */ "./src/app/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadDetailCommentComponent = /** @class */ (function () {
    function ThreadDetailCommentComponent(redditService) {
        this.redditService = redditService;
        this.collapsed = false;
    }
    ThreadDetailCommentComponent.prototype.ngOnInit = function () {
        this.passableLoadMore = this.loadMore.bind(this);
    };
    ThreadDetailCommentComponent.prototype.collapse = function () {
        this.collapsed = !this.collapsed;
    };
    ThreadDetailCommentComponent.prototype.loadMore = function (children) {
        var _this = this;
        this.redditService.loadMoreComments(this.data.link_id, children).subscribe(function (data) {
            data = JSON.parse(data).json;
            if (data.data) {
                data = data.data.things;
                _this.data.replies.data.children.pop();
                _this.data.replies.data.children = _this.data.replies.data.children.concat(data);
            }
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThreadDetailCommentComponent.prototype, "data", void 0);
    ThreadDetailCommentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread-detail-comment',
            template: __webpack_require__(/*! ./thread-detail-comment.component.html */ "./src/app/thread-detail-comment/thread-detail-comment.component.html"),
            styles: [__webpack_require__(/*! ./thread-detail-comment.component.css */ "./src/app/thread-detail-comment/thread-detail-comment.component.css")]
        }),
        __metadata("design:paramtypes", [_reddit_service__WEBPACK_IMPORTED_MODULE_1__["RedditService"]])
    ], ThreadDetailCommentComponent);
    return ThreadDetailCommentComponent;
}());



/***/ }),

/***/ "./src/app/thread-detail-more/thread-detail-more.component.css":
/*!*********************************************************************!*\
  !*** ./src/app/thread-detail-more/thread-detail-more.component.css ***!
  \*********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thread-detail-more/thread-detail-more.component.html":
/*!**********************************************************************!*\
  !*** ./src/app/thread-detail-more/thread-detail-more.component.html ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='comment depth-{{data.depth}} load-more-comment'>\n  <strong (click)=\"loadMore(data.children)\">Load More Comments</strong>\n</div>\n\n"

/***/ }),

/***/ "./src/app/thread-detail-more/thread-detail-more.component.ts":
/*!********************************************************************!*\
  !*** ./src/app/thread-detail-more/thread-detail-more.component.ts ***!
  \********************************************************************/
/*! exports provided: ThreadDetailMoreComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadDetailMoreComponent", function() { return ThreadDetailMoreComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreadDetailMoreComponent = /** @class */ (function () {
    function ThreadDetailMoreComponent() {
    }
    ThreadDetailMoreComponent.prototype.ngOnInit = function () { };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ThreadDetailMoreComponent.prototype, "loadMore", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThreadDetailMoreComponent.prototype, "data", void 0);
    ThreadDetailMoreComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread-detail-more',
            template: __webpack_require__(/*! ./thread-detail-more.component.html */ "./src/app/thread-detail-more/thread-detail-more.component.html"),
            styles: [__webpack_require__(/*! ./thread-detail-more.component.css */ "./src/app/thread-detail-more/thread-detail-more.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreadDetailMoreComponent);
    return ThreadDetailMoreComponent;
}());



/***/ }),

/***/ "./src/app/thread-details/thread-details.component.css":
/*!*************************************************************!*\
  !*** ./src/app/thread-details/thread-details.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".thread-overlay{\n    position: fixed;\n    top: 0;\n    bottom: 0;\n    right: 0;\n    left: 10%;\n    background-color: rgba(255, 255, 255, .95);\n    overflow-y: scroll;\n    z-index: 999;\n    border-left: 2px solid rgba(0,0,0,.5);\n}\n\n.icon{\n    width: 15px;\n    margin-right: 4px;\n}\n\n.thread-text{\n    font-size: 16px;\n    line-height: 24px;\n    border-bottom: 1px solid #cdcdcd;\n    padding-top: 15px;\n    padding-bottom: 15px;\n}\n\n.arrow-icon {\n  width: 24px;\n  cursor: pointer;\n}\n\n.collapse-icon{\n    width: 24px;\n    cursor: pointer;\n}\n\n.refresh-icon{\n    width: 24px;\n}\n\n.span-row{\n    width: 100%;\n}"

/***/ }),

/***/ "./src/app/thread-details/thread-details.component.html":
/*!**************************************************************!*\
  !*** ./src/app/thread-details/thread-details.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='thread-overlay' *ngIf=\"threadDetails\">\n  <div class=\"container\">\n    <div class=\"row pt-4 pb-4\">\n      <div class=\"col-12\">\n        <h3>{{ threadDetails.title }}</h3>\n      </div>\n      <div class=\"col-12\">\n        <div class=\"row\">\n          <div class=\"col-1\">\n            <img src=\"/assets/svg/arrow-thick-left.svg\" class='arrow-icon icon' (click)=\"close()\"/>\n          </div>\n          <div class=\"col-2\">\n            <img src=\"/assets/svg/comment-square.svg\" class='comment-icon icon' alt=\"\"> {{ threadDetails.num_comments }}\n          </div>\n          <div class=\"col-1\">\n            <img src=\"/assets/svg/loop-circular.svg\" alt=\"\" class='refresh-icon icon' (click)=\"refreshFeed()\"/>\n          </div>\n          <div class=\"col-6\"></div>\n          <div class=\"col-1\">\n            <img src=\"/assets/svg/fullscreen-exit.svg\" alt=\"\" class=\"collapse-icon icon\" (click)=\"toggleText()\">\n          </div>\n          <div class=\"col-1\">\n            <img src=\"/assets/svg/arrow-thick-right.svg\" class='arrow-icon icon' (click)=\"redirect('http://old.reddit.com/' + threadDetails.permalink)\" />\n          </div>\n        </div>\n      </div>\n     \n      <div class=\"media col-12\" *ngIf=\"threadDetails.media\">\n        <div class=\"row span-row\">\n          <app-thread-media class=\"col-12\" [media]=\"threadDetails.media\"></app-thread-media>\n        </div>        \n      </div>\n\n      <div class=\"col-12\" *ngIf=\"threadDetails.selftext_html\">\n        <hr />\n        <p class='thread-text' *ngIf=\"! collapsed\" [innerHTML]=\"threadDetails.selftext_html\"></p>\n      </div>\n    </div>   \n   \n    <div class=\"row\" *ngFor=\"let comment of comments\">\n      <app-thread-detail-comment class='col-12' [data]=\"comment.data\"></app-thread-detail-comment>\n    </div>\n  </div>  \n</div> \n"

/***/ }),

/***/ "./src/app/thread-details/thread-details.component.ts":
/*!************************************************************!*\
  !*** ./src/app/thread-details/thread-details.component.ts ***!
  \************************************************************/
/*! exports provided: ThreadDetailsComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadDetailsComponent", function() { return ThreadDetailsComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _reddit_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../reddit.service */ "./src/app/reddit.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadDetailsComponent = /** @class */ (function () {
    function ThreadDetailsComponent(redditService) {
        this.redditService = redditService;
        this.collapsed = false;
    }
    ThreadDetailsComponent.prototype.redirect = function (link) {
        window.open(link);
    };
    ThreadDetailsComponent.prototype.refreshFeed = function () {
        this.load();
    };
    ThreadDetailsComponent.prototype.toggleText = function () {
        this.collapsed = !this.collapsed;
    };
    ThreadDetailsComponent.prototype.load = function () {
        var _this = this;
        this.redditService.getThreadDetails(this.sub, this.id).subscribe(function (response) {
            _this.fullData = JSON.parse(response.toString());
            _this.threadDetails = _this.fullData[0].data.children[0].data;
            if (_this.threadDetails.url.includes("twitter.com")) {
                _this.threadDetails.media = {
                    type: "twitter.com",
                    url: _this.threadDetails.url
                };
            }
            console.log(_this.threadDetails);
            _this.comments = _this.fullData[1].data.children;
        });
    };
    ThreadDetailsComponent.prototype.ngOnInit = function () {
        this.load();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThreadDetailsComponent.prototype, "id", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], ThreadDetailsComponent.prototype, "sub", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Function)
    ], ThreadDetailsComponent.prototype, "close", void 0);
    ThreadDetailsComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread-details',
            template: __webpack_require__(/*! ./thread-details.component.html */ "./src/app/thread-details/thread-details.component.html"),
            styles: [__webpack_require__(/*! ./thread-details.component.css */ "./src/app/thread-details/thread-details.component.css")]
        }),
        __metadata("design:paramtypes", [_reddit_service__WEBPACK_IMPORTED_MODULE_1__["RedditService"]])
    ], ThreadDetailsComponent);
    return ThreadDetailsComponent;
}());



/***/ }),

/***/ "./src/app/thread-media/thread-media.component.css":
/*!*********************************************************!*\
  !*** ./src/app/thread-media/thread-media.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thread-media/thread-media.component.html":
/*!**********************************************************!*\
  !*** ./src/app/thread-media/thread-media.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"col-12\">\n  <hr />\n    <div *ngIf=\"media.type === 'streamable.com'\" [innerHTML]=\"embed\"></div>\n    <app-twitter *ngIf=\"media.type === 'twitter.com'\" [url]=\"embed\"></app-twitter>\n  <hr />\n</div> "

/***/ }),

/***/ "./src/app/thread-media/thread-media.component.ts":
/*!********************************************************!*\
  !*** ./src/app/thread-media/thread-media.component.ts ***!
  \********************************************************/
/*! exports provided: ThreadMediaComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadMediaComponent", function() { return ThreadMediaComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ThreadMediaComponent = /** @class */ (function () {
    function ThreadMediaComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    ThreadMediaComponent.prototype.ngOnInit = function () {
        console.log(this.media);
        switch (this.media.type) {
            case "streamable.com":
                this.embed = this.sanitizer.bypassSecurityTrustHtml(this.media.oembed.html.replace("width=\"600\"", "width=\"1200\"").replace("height=\"338\"", "height=\"676\""));
                break;
            case "twitter.com":
                this.embed = this.media.url.replace("mobile.", '');
                break;
        }
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThreadMediaComponent.prototype, "media", void 0);
    ThreadMediaComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread-media',
            template: __webpack_require__(/*! ./thread-media.component.html */ "./src/app/thread-media/thread-media.component.html"),
            styles: [__webpack_require__(/*! ./thread-media.component.css */ "./src/app/thread-media/thread-media.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["DomSanitizer"]])
    ], ThreadMediaComponent);
    return ThreadMediaComponent;
}());



/***/ }),

/***/ "./src/app/thread-media/twitter/twitter.component.css":
/*!************************************************************!*\
  !*** ./src/app/thread-media/twitter/twitter.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/thread-media/twitter/twitter.component.html":
/*!*************************************************************!*\
  !*** ./src/app/thread-media/twitter/twitter.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div *ngIf=\"embed\" [innerHTML]=\"embedHtml\"></div>"

/***/ }),

/***/ "./src/app/thread-media/twitter/twitter.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/thread-media/twitter/twitter.component.ts ***!
  \***********************************************************/
/*! exports provided: TwitterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterComponent", function() { return TwitterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _twitter_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../twitter.service */ "./src/app/twitter.service.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var TwitterComponent = /** @class */ (function () {
    function TwitterComponent(twitterService, sanitizer) {
        this.twitterService = twitterService;
        this.sanitizer = sanitizer;
    }
    TwitterComponent.prototype.ngOnInit = function () {
        this.fetch();
    };
    TwitterComponent.prototype.fetch = function () {
        var _this = this;
        this.twitterService.fetchTweet(this.url).subscribe(function (data) {
            _this.embed = JSON.parse(data);
            _this.embedHtml = _this.sanitizer.bypassSecurityTrustHtml(_this.embed.html);
        });
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", String)
    ], TwitterComponent.prototype, "url", void 0);
    TwitterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-twitter',
            template: __webpack_require__(/*! ./twitter.component.html */ "./src/app/thread-media/twitter/twitter.component.html"),
            styles: [__webpack_require__(/*! ./twitter.component.css */ "./src/app/thread-media/twitter/twitter.component.css")]
        }),
        __metadata("design:paramtypes", [_twitter_service__WEBPACK_IMPORTED_MODULE_1__["TwitterService"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_2__["DomSanitizer"]])
    ], TwitterComponent);
    return TwitterComponent;
}());



/***/ }),

/***/ "./src/app/thread/thread.component.css":
/*!*********************************************!*\
  !*** ./src/app/thread/thread.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".icon{\n    margin-right: 10px;\n    height: 15px;\n}\n\nh6{\n    padding-left: 60px;\n    padding-right: 80px;\n    position: relative;\n}\n\n.fixed-left{\n    position: absolute;\n    left: 0;\n    top: 0;\n}\n\n.fixed-right{\n    position: absolute;\n    right: 0;\n    top: 0;\n}\n\np{\n    font-size: 14px;\n    line-height: 22px;\n    font-weight: light;\n    background-color: #efefef;\n    padding: 12px;\n}"

/***/ }),

/***/ "./src/app/thread/thread.component.html":
/*!**********************************************!*\
  !*** ./src/app/thread/thread.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h6>\n    <img *ngIf=\"! textVisible\" class='icon expand-icon fixed-left' src=\"/assets/svg/arrow-bottom.svg\" alt=\"\" (click)=\"toggleText()\" />\n    <img *ngIf=\"textVisible\" class='icon expand-icon fixed-left' src=\"/assets/svg/arrow-top.svg\" alt=\"\" (click)=\"toggleText()\" />\n\n    <a (click)=\"getThread()\">{{ data.title }}\n        <span class='fixed-right'>({{data.num_comments}})</span>\n    </a>\n\n</h6>\n<p *ngIf=\"textVisible\" [innerHTML]=\"data.selftext_html\"></p>       \n\n<div *ngIf=\"threadVisible\">\n    <app-thread-details [id]=\"data.id\" [sub]=\"data.subreddit\" [close]=\"passableClose\" ></app-thread-details>\n</div>     "

/***/ }),

/***/ "./src/app/thread/thread.component.ts":
/*!********************************************!*\
  !*** ./src/app/thread/thread.component.ts ***!
  \********************************************/
/*! exports provided: ThreadComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ThreadComponent", function() { return ThreadComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ThreadComponent = /** @class */ (function () {
    function ThreadComponent() {
        this.textVisible = false;
        this.threadVisible = false;
    }
    ThreadComponent.prototype.ngOnInit = function () {
        //console.log(this.data);
        this.passableClose = this.closeThread.bind(this);
    };
    ThreadComponent.prototype.closeThread = function () {
        this.threadVisible = false;
    };
    ThreadComponent.prototype.toggleText = function () {
        this.textVisible = !this.textVisible;
    };
    ThreadComponent.prototype.getThread = function () {
        this.threadVisible = true;
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], ThreadComponent.prototype, "data", void 0);
    ThreadComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-thread',
            template: __webpack_require__(/*! ./thread.component.html */ "./src/app/thread/thread.component.html"),
            styles: [__webpack_require__(/*! ./thread.component.css */ "./src/app/thread/thread.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ThreadComponent);
    return ThreadComponent;
}());



/***/ }),

/***/ "./src/app/twitter.service.ts":
/*!************************************!*\
  !*** ./src/app/twitter.service.ts ***!
  \************************************/
/*! exports provided: TwitterService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TwitterService", function() { return TwitterService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var TwitterService = /** @class */ (function () {
    function TwitterService(http) {
        this.http = http;
        this.baseUrl = "/twitter/";
    }
    TwitterService.prototype.fetchTweet = function (url) {
        return this.http.get(this.baseUrl + "?url=" + url);
    };
    TwitterService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], TwitterService);
    return TwitterService;
}());



/***/ }),

/***/ "./src/app/user.service.ts":
/*!*********************************!*\
  !*** ./src/app/user.service.ts ***!
  \*********************************/
/*! exports provided: UserService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "UserService", function() { return UserService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var UserService = /** @class */ (function () {
    function UserService(http) {
        this.http = http;
        this.userUrl = "http://localhost:9292/api/user/";
    }
    UserService.prototype.getUser = function () {
        return this.http.get(this.userUrl);
    };
    UserService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], UserService);
    return UserService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/andrew/sandbox/raidr/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map