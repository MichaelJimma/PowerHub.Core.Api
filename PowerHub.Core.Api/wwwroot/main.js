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

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#ph-logo {\r\n    width: 150px;\r\n}\r\n\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\r\n  <a class=\"navbar-brand\" href=\"http://powerhub.com\">\r\n    <img id=\"ph-logo\" src=\"/assets/img/ph-logo.png\"/>\r\n  </a>\r\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\r\n    <span class=\"navbar-toggler-icon\"></span>\r\n  </button>\r\n\r\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\r\n    <ul class=\"navbar-nav mr-auto\">\r\n      <li class=\"nav-item active\">\r\n        <a class=\"nav-link\" [routerLink]=\"['/tasks']\" [queryParams]=\"{ page: 1 }\" routerLinkActive=\"active\">Tasks</a>\r\n      </li>\r\n    </ul>\r\n  </div>\r\n</nav>\r\n\r\n<main role=\"main\" class=\"container\">\r\n  <router-outlet></router-outlet>\r\n</main>\r\n\r\n"

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
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        })
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
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app.routing */ "./src/app/app.routing.ts");
/* harmony import */ var src_app_tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/tasks/tasks.module */ "./src/app/tasks/tasks.module.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
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
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                src_app_home_home_component__WEBPACK_IMPORTED_MODULE_5__["HomeComponent"],
                src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_6__["NotFoundComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                src_app_tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__["TasksModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClientModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"],
            ],
            providers: [_angular_common_http__WEBPACK_IMPORTED_MODULE_7__["HttpClient"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/app.routing.ts":
/*!********************************!*\
  !*** ./src/app/app.routing.ts ***!
  \********************************/
/*! exports provided: AppRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRouting", function() { return AppRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");



var appRoutes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: src_app_home_home_component__WEBPACK_IMPORTED_MODULE_1__["HomeComponent"] },
    { path: '**', component: src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_2__["NotFoundComponent"] },
];
var AppRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forRoot(appRoutes, {
    useHash: true
});


/***/ }),

/***/ "./src/app/home/home.component.css":
/*!*****************************************!*\
  !*** ./src/app/home/home.component.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/home/home.component.html":
/*!******************************************!*\
  !*** ./src/app/home/home.component.html ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h1>Welcome to PowerHub</h1>\r\n"

/***/ }),

/***/ "./src/app/home/home.component.ts":
/*!****************************************!*\
  !*** ./src/app/home/home.component.ts ***!
  \****************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
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

var HomeComponent = /** @class */ (function () {
    function HomeComponent() {
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/not-found/not-found.component.css":
/*!***************************************************!*\
  !*** ./src/app/not-found/not-found.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/not-found/not-found.component.html":
/*!****************************************************!*\
  !*** ./src/app/not-found/not-found.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\r\n  not-found works!\r\n</p>\r\n"

/***/ }),

/***/ "./src/app/not-found/not-found.component.ts":
/*!**************************************************!*\
  !*** ./src/app/not-found/not-found.component.ts ***!
  \**************************************************/
/*! exports provided: NotFoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NotFoundComponent", function() { return NotFoundComponent; });
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

var NotFoundComponent = /** @class */ (function () {
    function NotFoundComponent() {
    }
    NotFoundComponent.prototype.ngOnInit = function () {
    };
    NotFoundComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-not-found',
            template: __webpack_require__(/*! ./not-found.component.html */ "./src/app/not-found/not-found.component.html"),
            styles: [__webpack_require__(/*! ./not-found.component.css */ "./src/app/not-found/not-found.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], NotFoundComponent);
    return NotFoundComponent;
}());



/***/ }),

/***/ "./src/app/pagination/pagination.component.css":
/*!*****************************************************!*\
  !*** ./src/app/pagination/pagination.component.css ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/pagination/pagination.component.html":
/*!******************************************************!*\
  !*** ./src/app/pagination/pagination.component.html ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\r\n<ul *ngIf=\"pages.length > 1\" class=\"pagination\">\r\n  <li *ngIf=\"currentPage != 1\" class=\"page-item\">\r\n    <a [routerLink]=\"[routePath]\" [queryParams]=\"{ page: currentPage - 1 }\" class=\"page-link\" href=\"#\">Previous</a>\r\n  </li>\r\n  <li *ngFor=\"let p of pages\" class=\"page-item\" [ngClass]=\"{'active' : p === currentPage}\">\r\n    <a [routerLink]=\"[routePath]\" [queryParams]=\"{ page: p }\" class=\"page-link\" href=\"#\">{{p}}</a>\r\n  </li>\r\n  <li *ngIf=\"currentPage != pages.length\" class=\"page-item\">\r\n    <a [routerLink]=\"[routePath]\" [queryParams]=\"{ page: currentPage + 1 }\" class=\"page-link\" href=\"#\">Next</a>\r\n  </li>\r\n</ul>"

/***/ }),

/***/ "./src/app/pagination/pagination.component.ts":
/*!****************************************************!*\
  !*** ./src/app/pagination/pagination.component.ts ***!
  \****************************************************/
/*! exports provided: PaginationComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PaginationComponent", function() { return PaginationComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../shared/app-settings.service */ "./src/shared/app-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var PaginationComponent = /** @class */ (function () {
    function PaginationComponent(settingsService) {
        this.settingsService = settingsService;
    }
    Object.defineProperty(PaginationComponent.prototype, "totalRecords", {
        set: function (val) {
            var totalPages = Math.ceil(val / this.settingsService.getSettings().PAGE_SIZE);
            this.pages = Array(totalPages).fill(0).map(function (q, i) { return i + 1; });
        },
        enumerable: true,
        configurable: true
    });
    ;
    PaginationComponent.prototype.ngOnInit = function () {
        this.pages = [];
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('total-records'),
        __metadata("design:type", Number),
        __metadata("design:paramtypes", [Number])
    ], PaginationComponent.prototype, "totalRecords", null);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('current-page'),
        __metadata("design:type", Number)
    ], PaginationComponent.prototype, "currentPage", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])('route-path'),
        __metadata("design:type", String)
    ], PaginationComponent.prototype, "routePath", void 0);
    PaginationComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-pagination',
            template: __webpack_require__(/*! ./pagination.component.html */ "./src/app/pagination/pagination.component.html"),
            styles: [__webpack_require__(/*! ./pagination.component.css */ "./src/app/pagination/pagination.component.css")]
        }),
        __metadata("design:paramtypes", [_shared_app_settings_service__WEBPACK_IMPORTED_MODULE_1__["AppSettingsService"]])
    ], PaginationComponent);
    return PaginationComponent;
}());



/***/ }),

/***/ "./src/app/tasks/task-create/task-create.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tasks/task-create/task-create.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    margin-left: 5px;\r\n    top:7px;\r\n  }"

/***/ }),

/***/ "./src/app/tasks/task-create/task-create.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tasks/task-create/task-create.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Create Task</h3>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label required\" for=\"task-key\">Key</label>\r\n    <input formControlName=\"key\"\r\n           type=\"text\"\r\n           name=\"key\" \r\n           class=\"form-control\" \r\n           id=\"task-key\" \r\n           placeholder=\"Enter task key\"\r\n           required>\r\n    <div class=\"alert\" *ngIf=\"!this.form.controls['key'].valid && this.form.controls['key'].touched\">{{invalidKeyMessage}}</div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label required\" for=\"task-name\">Name</label>\r\n    <input formControlName=\"name\"\r\n           type=\"text\" \r\n           name=\"name\"\r\n           class=\"form-control\" \r\n           id=\"task-name\" \r\n           placeholder=\"Enter task name\"\r\n           required>\r\n    <div class=\"alert\" *ngIf=\"!this.form.controls['name'].valid && this.form.controls['name'].touched\">{{invalidNameMessage}}</div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"task-description\">Description</label>\r\n      <textarea formControlName=\"description\"\r\n                class=\"form-control\" \r\n                name=\"description\"\r\n                id=\"task-description\" \r\n                rows=\"3\"></textarea>\r\n  </div>\r\n  <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Create</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/tasks/task-create/task-create.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tasks/task-create/task-create.component.ts ***!
  \************************************************************/
/*! exports provided: TaskCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskCreateComponent", function() { return TaskCreateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TaskCreateComponent = /** @class */ (function () {
    function TaskCreateComponent(fb, taskService, router) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.invalidKeyMessage = 'Key is required (min 3, max 50 characters)';
        this.invalidNameMessage = 'Name is required (max 200 characters)';
        this.form = fb.group({
            key: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].minLength(3), _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(50)
                ])],
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([
                    _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)
                ])],
            description: ''
        });
    }
    TaskCreateComponent.prototype.ngOnInit = function () {
    };
    TaskCreateComponent.prototype.onSubmit = function () {
        var _this = this;
        var task = this.form.value;
        this.taskService.addTask(task).subscribe(function () { return _this.router.navigate(['/tasks']); });
    };
    TaskCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/tasks/task-create/task-create.component.html"),
            styles: [__webpack_require__(/*! ./task-create.component.css */ "./src/app/tasks/task-create/task-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]])
    ], TaskCreateComponent);
    return TaskCreateComponent;
}());



/***/ }),

/***/ "./src/app/tasks/task-update/task-update.component.css":
/*!*************************************************************!*\
  !*** ./src/app/tasks/task-update/task-update.component.css ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".control-label.required:after { \r\n    color: #d00;\r\n    content: \"*\";\r\n    margin-left: 5px;\r\n    top:7px;\r\n  }"

/***/ }),

/***/ "./src/app/tasks/task-update/task-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tasks/task-update/task-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<h3>Update Task</h3>\r\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label required\" for=\"task-key\">Key</label>\r\n    <input formControlName=\"key\"\r\n           type=\"text\"\r\n           name=\"key\" \r\n           class=\"form-control\" \r\n           id=\"task-key\" \r\n           placeholder=\"Enter task key\">\r\n  </div>\r\n  <div class=\"form-group\">\r\n    <label class=\"control-label required\" for=\"task-name\">Name</label>\r\n    <input formControlName=\"name\"\r\n           type=\"text\" \r\n           name=\"name\"\r\n           class=\"form-control\" \r\n           id=\"task-name\" \r\n           placeholder=\"Enter task name\"\r\n           required>\r\n    <div class=\"alert\" *ngIf=\"!this.form.controls['name'].valid && this.form.controls['name'].touched\">{{invalidNameMessage}}</div>\r\n  </div>\r\n  <div class=\"form-group\">\r\n      <label class=\"control-label\" for=\"task-description\">Description</label>\r\n      <textarea formControlName=\"description\"\r\n                class=\"form-control\" \r\n                name=\"description\"\r\n                id=\"task-description\" \r\n                rows=\"3\"></textarea>\r\n  </div>\r\n  <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Update</button>\r\n</form>\r\n"

/***/ }),

/***/ "./src/app/tasks/task-update/task-update.component.ts":
/*!************************************************************!*\
  !*** ./src/app/tasks/task-update/task-update.component.ts ***!
  \************************************************************/
/*! exports provided: TaskUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskUpdateComponent", function() { return TaskUpdateComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskUpdateComponent = /** @class */ (function () {
    function TaskUpdateComponent(fb, taskService, router, route) {
        this.fb = fb;
        this.taskService = taskService;
        this.router = router;
        this.route = route;
        this.invalidNameMessage = 'Name is required (max 200 characters)';
        this.form = fb.group({
            taskid: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', readonly: true }),
            key: new _angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormControl"]({ value: '', readonly: true }),
            name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].compose([_angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].required, _angular_forms__WEBPACK_IMPORTED_MODULE_1__["Validators"].maxLength(200)])],
            description: '',
        });
    }
    TaskUpdateComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.paramMap.get('id');
        this.taskService
            .getTaskById(id)
            .subscribe(function (q) {
            Object.keys(q).forEach(function (w) { return _this.form.controls[w].patchValue(q[w]); });
        });
    };
    TaskUpdateComponent.prototype.onSubmit = function () {
        var _this = this;
        var task = this.form.value;
        this.taskService.updateTask(task)
            .subscribe(function () { return _this.router.navigate(['/tasks']); });
    };
    TaskUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-update',
            template: __webpack_require__(/*! ./task-update.component.html */ "./src/app/tasks/task-update/task-update.component.html"),
            styles: [__webpack_require__(/*! ./task-update.component.css */ "./src/app/tasks/task-update/task-update.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"],
            _task_service__WEBPACK_IMPORTED_MODULE_2__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"],
            _angular_router__WEBPACK_IMPORTED_MODULE_3__["ActivatedRoute"]])
    ], TaskUpdateComponent);
    return TaskUpdateComponent;
}());



/***/ }),

/***/ "./src/app/tasks/task.service.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/task.service.ts ***!
  \***************************************/
/*! exports provided: TaskService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskService", function() { return TaskService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../shared/app-settings.service */ "./src/shared/app-settings.service.ts");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var TaskService = /** @class */ (function () {
    function TaskService(http, config) {
        this.http = http;
        this.config = config;
        this.baseUrl = config.getSettings().API_URL;
    }
    TaskService.prototype.getTasks = function (pageNumber, pageSize, query) {
        if (pageSize === void 0) { pageSize = 3; }
        if (query === void 0) { query = ''; }
        var url = this.baseUrl + "/tasks";
        var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]();
        params = params.append('page', pageNumber.toString());
        params = params.append('pageCount', pageSize.toString());
        params = params.append('query', query);
        return this.http
            .get(url, { params: params, observe: 'response' })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])(function (res) {
            var payload = res.body;
            var page = Number(res.headers.get('x-pagination'));
            var output = [payload, page];
            return output;
        }));
    };
    TaskService.prototype.getTaskById = function (taskId) {
        var url = this.baseUrl + "/tasks/" + taskId;
        return this.http.get(url);
    };
    TaskService.prototype.addTask = function (task) {
        var url = this.baseUrl + "/tasks";
        return this.http.post(url, task);
    };
    TaskService.prototype.updateTask = function (task) {
        var url = this.baseUrl + "/tasks/" + task.taskid;
        return this.http.put(url, task);
    };
    TaskService.prototype.deleteTask = function (id) {
        var url = this.baseUrl + "/tasks/" + id;
        return this.http.delete(url);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"], _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_2__["AppSettingsService"]])
    ], TaskService);
    return TaskService;
}());



/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.css":
/*!***********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.css ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".header-wrapper {\r\n    padding: 10px;\r\n}\r\n\r\n#create-task-button {\r\n    float:right;\r\n}\r\n\r\n#header {\r\n    float:left;\r\n}\r\n\r\n.clearfix {\r\n    float:none;\r\n}\r\n\r\n.center-cell {\r\n    text-align: center;\r\n}\r\n\r\n.search-box-swapper {\r\n    margin-top: 10px;\r\n    margin-bottom: 30px;\r\n}"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header-wrapper'>\r\n    <h3 id=\"header\">Tasks List</h3>\r\n    <button routerLink=\"/tasks/create\" id=\"create-task-button\" type=\"button\" class=\"btn btn-success\">Create Task</button>\r\n    <div class=\"clearfix\"></div>\r\n</div>\r\n<div class=\"search-box-swapper\">\r\n  <div class=\"input-group\">\r\n    <input (keyup.enter)=\"getTasks(1,textbox.value)\" #textbox class=\"form-control py-2\" type=\"search\" id=\"example-search-input\">\r\n    <span class=\"input-group-append\">\r\n      <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"getTasks(1)\">Clear</button>\r\n      <button class=\"btn btn-outline-secondary\" type=\"button\" (click)=\"getTasks(1,textbox.value)\">\r\n        <fa name=\"search\"></fa>\r\n      </button>\r\n    </span>\r\n  </div>\r\n</div>\r\n\r\n<table class=\"table\">\r\n    <colgroup>\r\n      <col style=\"width:40%\">\r\n      <col style=\"width:40%\">\r\n      <col style=\"width:10%\">\r\n      <col style=\"width:10%\">\r\n    </colgroup>  \r\n    <thead>\r\n      <tr>\r\n        <th scope=\"col\">Key</th>\r\n        <th scope=\"col\">Name</th>\r\n        <th class=\"center-cell\" scope=\"col\">Update</th>\r\n        <th class=\"center-cell\" scope=\"col\">Delete</th>\r\n      </tr>\r\n    </thead>\r\n    <tbody>\r\n      <tr *ngFor=\"let task of tasks\">\r\n        <td>{{task.key}}</td>\r\n        <td>{{task.name}}</td>\r\n        <td class=\"center-cell\">\r\n          <button [routerLink]=\"['/tasks/update', task.taskid]\" type=\"button\" class=\"btn btn-warning\">Update</button>\r\n        </td>\r\n        <td class=\"center-cell\">\r\n          <button type=\"button\" class=\"btn btn-danger\" (click)=\"deleteTask(task.taskid)\">Delete</button>\r\n        </td>\r\n      </tr>\r\n    </tbody>\r\n  </table>\r\n  <app-pagination [total-records]=\"totalRecords\" [current-page]=\"currentPage\" [route-path]=\"'/tasks'\">\r\n\r\n  </app-pagination>\r\n\r\n"

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.ts":
/*!**********************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.ts ***!
  \**********************************************************/
/*! exports provided: TasksListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksListComponent", function() { return TasksListComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _task_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../shared/app-settings.service */ "./src/shared/app-settings.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var TasksListComponent = /** @class */ (function () {
    function TasksListComponent(taskService, route, settings) {
        var _this = this;
        this.taskService = taskService;
        this.route = route;
        this.settings = settings;
        this.tasks = [];
        this.totalRecords = 0;
        this.currentPage = 1;
        this.pageSize = this.settings.getSettings().PAGE_SIZE;
        route.queryParams.subscribe(function (q) {
            _this.currentPage = Number(q.page ? q.page : 1);
            _this.getTasks(_this.currentPage);
        });
    }
    TasksListComponent.prototype.ngOnInit = function () {
    };
    TasksListComponent.prototype.getTasks = function (page, query) {
        var _this = this;
        if (query === void 0) { query = ''; }
        this.taskService
            .getTasks(page, this.pageSize, query)
            .subscribe(function (q) {
            _this.tasks = q[0];
            _this.totalRecords = q[1];
        });
    };
    TasksListComponent.prototype.deleteTask = function (id) {
        var _this = this;
        this.taskService.deleteTask(id)
            .subscribe(function () { return _this.getTasks(_this.currentPage); });
    };
    TasksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.css */ "./src/app/tasks/tasks-list/tasks-list.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["ActivatedRoute"],
            _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_3__["AppSettingsService"]])
    ], TasksListComponent);
    return TasksListComponent;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.module.ts":
/*!***************************************!*\
  !*** ./src/app/tasks/tasks.module.ts ***!
  \***************************************/
/*! exports provided: TasksModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksModule", function() { return TasksModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-create/task-create.component */ "./src/app/tasks/task-create/task-create.component.ts");
/* harmony import */ var _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./task-update/task-update.component */ "./src/app/tasks/task-update/task-update.component.ts");
/* harmony import */ var _tasks_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./tasks.routing */ "./src/app/tasks/tasks.routing.ts");
/* harmony import */ var src_app_tasks_task_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/tasks/task.service */ "./src/app/tasks/task.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../shared/app-settings.service */ "./src/shared/app-settings.service.ts");
/* harmony import */ var src_app_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! src/app/pagination/pagination.component */ "./src/app/pagination/pagination.component.ts");
/* harmony import */ var angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! angular-font-awesome */ "./node_modules/angular-font-awesome/dist/angular-font-awesome.es5.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};











var TasksModule = /** @class */ (function () {
    function TasksModule() {
    }
    TasksModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _tasks_routing__WEBPACK_IMPORTED_MODULE_5__["TasksRouting"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"],
                angular_font_awesome__WEBPACK_IMPORTED_MODULE_10__["AngularFontAwesomeModule"]
            ],
            declarations: [
                _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["TasksListComponent"],
                _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_3__["TaskCreateComponent"],
                _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_4__["TaskUpdateComponent"],
                src_app_pagination_pagination_component__WEBPACK_IMPORTED_MODULE_9__["PaginationComponent"]
            ],
            providers: [src_app_tasks_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"], _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_8__["AppSettingsService"]]
        })
    ], TasksModule);
    return TasksModule;
}());



/***/ }),

/***/ "./src/app/tasks/tasks.routing.ts":
/*!****************************************!*\
  !*** ./src/app/tasks/tasks.routing.ts ***!
  \****************************************/
/*! exports provided: TasksRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TasksRouting", function() { return TasksRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./tasks-list/tasks-list.component */ "./src/app/tasks/tasks-list/tasks-list.component.ts");
/* harmony import */ var _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./task-create/task-create.component */ "./src/app/tasks/task-create/task-create.component.ts");
/* harmony import */ var _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./task-update/task-update.component */ "./src/app/tasks/task-update/task-update.component.ts");




var tasksRoutes = [
    { path: 'tasks',
        children: [
            { path: '', component: _tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_1__["TasksListComponent"] },
            { path: 'create', component: _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_2__["TaskCreateComponent"] },
            { path: 'update/:id', component: _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_3__["TaskUpdateComponent"] }
        ]
    }
];
var TasksRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(tasksRoutes);


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

/***/ "./src/shared/app-settings.service.ts":
/*!********************************************!*\
  !*** ./src/shared/app-settings.service.ts ***!
  \********************************************/
/*! exports provided: AppSettingsService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettingsService", function() { return AppSettingsService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_settings__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./app.settings */ "./src/shared/app.settings.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


var AppSettingsService = /** @class */ (function () {
    function AppSettingsService() {
    }
    AppSettingsService.prototype.getSettings = function () {
        return new _app_settings__WEBPACK_IMPORTED_MODULE_1__["AppSettings"]();
    };
    AppSettingsService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])()
    ], AppSettingsService);
    return AppSettingsService;
}());



/***/ }),

/***/ "./src/shared/app.settings.ts":
/*!************************************!*\
  !*** ./src/shared/app.settings.ts ***!
  \************************************/
/*! exports provided: AppSettings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppSettings", function() { return AppSettings; });
var AppSettings = /** @class */ (function () {
    function AppSettings() {
        this.API_URL = "http://localhost:51117/api";
        this.PAGE_SIZE = 3;
    }
    return AppSettings;
}());



/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\Users\pavelkoryakin\Desktop\Presentation\PowerHub.Web\ph-web\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map