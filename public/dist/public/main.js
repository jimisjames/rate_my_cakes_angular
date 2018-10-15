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
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "body{\n    max-width: 1000px;\n    padding: 20px;\n    margin: auto;\n}\n\nimg{\n    width: 100%;\n    margin: 10px;\n    border: 1px solid rgb(151, 151, 151);\n    border-radius: 3px;\n}\n\n.comments{\n    margin: 10px;\n}\n\n.post{\n    padding: 10px 0;\n}\n\n#main{\n    height: 500px;\n    overflow: scroll;\n    border: 2px solid gray;\n    border-radius: 3px;\n    background-color: rgb(199, 199, 199);\n    padding: 30px;\n    margin: 20px 0;\n}"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!DOCTYPE html>\n<html lang='en'>\n\n<head>\n\n  <meta charset='UTF-8'>\n  <meta name='viewport' content='width=device-width, initial-scale=1.0'>\n  <meta http-equiv='X-UA-Compatible' content='ie=edge'>\n  <title>Rate my Cakes</title>\n\n  <link rel='stylesheet' href='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/css/bootstrap.min.css' integrity='sha384-MCw98/SFnGE8fJT3GXwEOngsV7Zt27NXFoaoApmYm81iuXoPkFOJwJ8ERdknLPMO'\n    crossorigin='anonymous'> <!-- Bootstrap -->\n  <script src='https://ajax.googleapis.com/ajax/libs/jquery/3.3.1/jquery.min.js'></script> <!-- jQuery -->\n  <script src='https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.3/umd/popper.min.js' integrity='sha384-ZMP7rVo3mIykV+2+9J3UJ46jBk0WLaUAdn689aCwoqbBJiSnjAK/l8WvCWPIPm49'\n    crossorigin='anonymous'></script> <!-- Bootstrap -->\n  <script src='https://stackpath.bootstrapcdn.com/bootstrap/4.1.3/js/bootstrap.min.js' integrity='sha384-ChfqqxuZUCnJSK3+MXmPNIyE6ZbWh2IMqE241rYiqJxyMiZ6OW/JmZQ5stwEULTy'\n    crossorigin='anonymous'></script> <!-- Bootstrap -->\n\n  <script> /* JS */\n\n    $(document).ready(function () {\n\n    })\n\n  </script>\n\n</head>\n\n<body>\n  <div style=\"text-align:center\">\n    <h1>Rate my Cakes</h1>\n  </div>\n  <h3>New Cake</h3>\n  <form (submit)=\"create()\">\n    <div class=\"form-group\">\n      <label for=\"name\">Your Name:</label>\n      <input [(ngModel)]=\"newPost.name\" type=\"text\" class=\"form-control\" name=\"newPost.name\" id=\"name\" placeholder=\"Enter name\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"image\">Photo url:</label>\n      <input class=\"form-control\" [(ngModel)]=\"newPost.image\" id=\"image\" name=\"newPost.image\" type=\"text\" placeholder=\"url\">\n    </div>\n    <div class=\"form-group\">\n      <label for=\"description\">Description:</label>\n      <input [(ngModel)]=\"newPost.description\" type=\"text\" class=\"form-control\" name=\"newPost.description\" id=\"description\"\n        placeholder=\"Description\">\n    </div>\n    <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n  </form>\n\n  <hr>\n\n  <div class=\"form-group\">\n      <label for=\"search\">Search by Poster:</label>\n      <input class=\"form-control\" (keyup)=\"search($event)\" id=\"image\" name=\"search\" type=\"text\" placeholder=\"poster name\">\n  </div>\n\n  <div id=\"main\">\n    <div *ngFor=\"let post of posts\" class=\"post row\">\n      <div class=\"col-4\">\n        <img src=\"{{post.image}}\" alt=\"Cake\">\n        <h6>{{ post.description }}</h6>\n        <h4>Posted by: {{ post.poster_name }}</h4>\n        <button class=\"btn-sm btn-info\" (click)=\"showDetails(post._id)\">View Cake</button>\n      </div>\n      <div class=\"col comments\">\n        <form (submit)=\"comment(post._id)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Your Name:</label>\n            <input [(ngModel)]=\"newComment.commenter_name\" type=\"text\" class=\"form-control\" name=\"newComment.commenter_name\"\n              id=\"name\" placeholder=\"Enter name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"comment\">Comment:</label>\n            <input [(ngModel)]=\"newComment.comment\" type=\"text\" class=\"form-control\" name=\"newComment.comment\" id=\"comment\"\n              placeholder=\"Comment\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"rating\">Star Rating</label>\n            <select [(ngModel)]=\"newComment.rating\" name=\"newComment.rating\" class=\"form-control\" id=\"rating\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n\n  <app-task *ngIf=\"post\" [postToShow]=\"post\" (anotherTaskEventEmitter)=\"close($event)\" (aTaskEventEmitter)=\"commentFromChild($event)\"></app-task>\n\n</body>\n\n\n</html>"

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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
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
    function AppComponent(_httpService) {
        this._httpService = _httpService;
        this.post = null;
        this.newPost = {
            name: "",
            description: "",
            image: ""
        };
        this.newComment = {
            commenter_name: "",
            comment: "",
            rating: 0
        };
    }
    AppComponent.prototype.ngOnInit = function () {
        this.allPosts();
    };
    AppComponent.prototype.create = function () {
        var _this = this;
        var observable = this._httpService.newPost(this.newPost);
        observable.subscribe(function (data) {
            console.log("data", data);
            _this.allPosts();
        });
        this.newPost.name = "";
        this.newPost.description = "";
        this.newPost.image = "";
    };
    AppComponent.prototype.allPosts = function () {
        var _this = this;
        var observable = this._httpService.getPosts();
        observable.subscribe(function (data) {
            _this.posts = data["posts"];
        });
    };
    AppComponent.prototype.comment = function (id) {
        var _this = this;
        var observable = this._httpService.newComment({ id: id, comment: this.newComment });
        observable.subscribe(function (data) {
            _this.allPosts();
        });
        this.newComment.commenter_name = "";
        this.newComment.comment = "";
        this.newComment.rating = 0;
    };
    AppComponent.prototype.commentFromChild = function (data) {
        this.newComment.commenter_name = data.comment.commenter_name;
        this.newComment.comment = data.comment.comment;
        this.newComment.rating = data.comment.rating;
        this.comment(data.id);
        this.showDetails(data.id);
    };
    AppComponent.prototype.showDetails = function (id) {
        var _this = this;
        var observable = this._httpService.getById(id);
        observable.subscribe(function (data) {
            _this.post = data["post"];
        });
    };
    AppComponent.prototype.close = function (data) {
        this.post = null;
    };
    AppComponent.prototype.search = function (data) {
        var _this = this;
        //console.log(data.target.value)
        if (data.target.value.length > 0) {
            var observable = this._httpService.getByPoster(data.target.value);
            observable.subscribe(function (data) {
                //console.log(data)
                _this.posts = data["posts"];
            });
        }
        else {
            this.allPosts();
        }
    };
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [_http_service__WEBPACK_IMPORTED_MODULE_1__["HttpService"]])
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
/* harmony import */ var _http_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./http.service */ "./src/app/http.service.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_task_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./task/task.component */ "./src/app/task/task.component.ts");
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
                _app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"],
                _task_task_component__WEBPACK_IMPORTED_MODULE_6__["TaskComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClientModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ],
            providers: [_http_service__WEBPACK_IMPORTED_MODULE_2__["HttpService"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/http.service.ts":
/*!*********************************!*\
  !*** ./src/app/http.service.ts ***!
  \*********************************/
/*! exports provided: HttpService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HttpService", function() { return HttpService; });
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


var HttpService = /** @class */ (function () {
    function HttpService(_http) {
        this._http = _http;
    }
    HttpService.prototype.newPost = function (data) {
        return this._http.post('/', data);
    };
    HttpService.prototype.getPosts = function () {
        return this._http.get('/posts');
    };
    HttpService.prototype.newComment = function (data) {
        return this._http.post('/' + data.id, data.comment);
    };
    HttpService.prototype.getById = function (id) {
        return this._http.get("/" + id);
    };
    HttpService.prototype.getByPoster = function (name) {
        return this._http.get("/poster/" + name);
    };
    HttpService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HttpService);
    return HttpService;
}());



/***/ }),

/***/ "./src/app/task/task.component.css":
/*!*****************************************!*\
  !*** ./src/app/task/task.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\nimg{\n    width: 100%;\n    margin: 10px;\n    border: 1px solid rgb(151, 151, 151);\n    border-radius: 3px;\n}\n\n.comment{\n    border: 1px solid black;\n    border-radius: 3px;\n    background-color: rgb(218, 218, 218);\n    margin: 10px 0;\n    padding: 10px;\n}\n\n.comments{\n    margin-top: 10px;\n    padding-left: 10px;\n    padding-right: 10px;\n    padding-bottom: 10px;\n    overflow: scroll;\n    max-height: 750px;\n    background: white;\n    border-radius: 3px;\n}\n\n#content{\n    position: relative;\n    top: -520px;\n    min-height: 800px;\n    width: 960px;\n    border: 2px solid gray;\n    border-radius: 3px;\n    background-color: rgb(199, 199, 199);\n    padding: 30px;\n    margin: 20px 0;\n}"

/***/ }),

/***/ "./src/app/task/task.component.html":
/*!******************************************!*\
  !*** ./src/app/task/task.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"content\">\n  <div class=\"row\">\n    <div class=\"col-8\">\n      <img src=\"{{ postToShow.image }}\" alt=\"Cake\">\n      <h3>{{ postToShow.description }}</h3>\n      <h3>Average rating: {{ avg_rating }}</h3>\n      <h2>Posted by: {{ postToShow.poster_name }}</h2>\n      <hr>\n      <button class=\"btn btn-warning\" (click)=\"close($event)\">Back to Cakes</button>\n    </div>\n    <div class=\"col\">\n      <div class=\"comments\">\n        <div *ngFor=\"let comment of postToShow.comments\" class=\"comment\">\n          <p>{{ comment.comment }}</p>\n          <p>Rating: {{ comment.rating }}</p>\n          <h5>- {{ comment.commenter_name }}</h5>\n        </div>\n        <form (submit)=\"triggerEvent($event)\">\n          <div class=\"form-group\">\n            <label for=\"name\">Your Name:</label>\n            <input [(ngModel)]=\"newComment.commenter_name\" type=\"text\" class=\"form-control\" name=\"newComment.commenter_name\"\n              id=\"name\" placeholder=\"Enter name\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"comment\">Comment:</label>\n            <input [(ngModel)]=\"newComment.comment\" type=\"text\" class=\"form-control\" name=\"newComment.comment\" id=\"comment\"\n              placeholder=\"Comment\">\n          </div>\n          <div class=\"form-group\">\n            <label for=\"rating\">Star Rating</label>\n            <select [(ngModel)]=\"newComment.rating\" name=\"newComment.rating\" class=\"form-control\" id=\"rating\">\n              <option>1</option>\n              <option>2</option>\n              <option>3</option>\n              <option>4</option>\n              <option>5</option>\n            </select>\n          </div>\n          <button type=\"submit\" class=\"btn btn-primary\">Submit</button>\n        </form>\n      </div>\n    </div>\n  </div>\n</div>"

/***/ }),

/***/ "./src/app/task/task.component.ts":
/*!****************************************!*\
  !*** ./src/app/task/task.component.ts ***!
  \****************************************/
/*! exports provided: TaskComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskComponent", function() { return TaskComponent; });
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

var TaskComponent = /** @class */ (function () {
    function TaskComponent() {
        this.aTaskEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.anotherTaskEventEmitter = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
        this.newComment = {
            commenter_name: "",
            comment: "",
            rating: 0
        };
        this.avg_rating = 0;
    }
    TaskComponent.prototype.ngOnInit = function () {
        this.findAvg();
    };
    TaskComponent.prototype.close = function () {
        this.anotherTaskEventEmitter.emit("close");
    };
    TaskComponent.prototype.findAvg = function () {
        var sum = 0;
        for (var _i = 0, _a = this.postToShow.comments; _i < _a.length; _i++) {
            var comment = _a[_i];
            sum += comment.rating;
        }
        this.avg_rating = sum / this.postToShow.comments.length;
    };
    TaskComponent.prototype.triggerEvent = function () {
        this.aTaskEventEmitter.emit({ id: this.postToShow._id, comment: this.newComment });
        this.newComment = {
            commenter_name: "",
            comment: "",
            rating: 0
        };
        this.findAvg();
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "postToShow", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "aTaskEventEmitter", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", Object)
    ], TaskComponent.prototype, "anotherTaskEventEmitter", void 0);
    TaskComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task',
            template: __webpack_require__(/*! ./task.component.html */ "./src/app/task/task.component.html"),
            styles: [__webpack_require__(/*! ./task.component.css */ "./src/app/task/task.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], TaskComponent);
    return TaskComponent;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /Users/newuser/Documents/coding_dojo/mean_stack/angular/rate_my_cakes/public/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map