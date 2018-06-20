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

module.exports = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark fixed-top\">\n  <a class=\"navbar-brand\" href=\"http://powerhub.com\">\n    <img id=\"ph-logo\" src=\"/assets/img/ph-logo.png\"/>\n  </a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarsExampleDefault\" aria-controls=\"navbarsExampleDefault\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarsExampleDefault\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/tasks\" routerLinkActive=\"active\">Tasks</a>\n      </li>\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" routerLink=\"/stakeholders\" routerLinkActive=\"active\">Stakeholders</a>\n      </li>\n    </ul>\n  </div>\n</nav>\n\n<main role=\"main\" class=\"container\">\n  <router-outlet></router-outlet>\n</main>\n\n"

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
/* harmony import */ var _stakeholders_stakeholders_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stakeholders/stakeholders.module */ "./src/app/stakeholders/stakeholders.module.ts");
/* harmony import */ var src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/home/home.component */ "./src/app/home/home.component.ts");
/* harmony import */ var src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/not-found/not-found.component */ "./src/app/not-found/not-found.component.ts");
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
                src_app_home_home_component__WEBPACK_IMPORTED_MODULE_6__["HomeComponent"],
                src_app_not_found_not_found_component__WEBPACK_IMPORTED_MODULE_7__["NotFoundComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                src_app_tasks_tasks_module__WEBPACK_IMPORTED_MODULE_4__["TasksModule"],
                _stakeholders_stakeholders_module__WEBPACK_IMPORTED_MODULE_5__["StakeholdersModule"],
                _app_routing__WEBPACK_IMPORTED_MODULE_3__["AppRouting"]
            ],
            providers: [],
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

module.exports = "<p>\n  home works!\n</p>\n"

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

module.exports = "<p>\n  not-found works!\n</p>\n"

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

/***/ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-create/stakeholder-create.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-create/stakeholder-create.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stakeholder-create works!\n</p>\n"

/***/ }),

/***/ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-create/stakeholder-create.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StakeholderCreateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholderCreateComponent", function() { return StakeholderCreateComponent; });
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

var StakeholderCreateComponent = /** @class */ (function () {
    function StakeholderCreateComponent() {
    }
    StakeholderCreateComponent.prototype.ngOnInit = function () {
    };
    StakeholderCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stakeholder-create',
            template: __webpack_require__(/*! ./stakeholder-create.component.html */ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.html"),
            styles: [__webpack_require__(/*! ./stakeholder-create.component.css */ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StakeholderCreateComponent);
    return StakeholderCreateComponent;
}());



/***/ }),

/***/ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.css":
/*!**********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-update/stakeholder-update.component.css ***!
  \**********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.html":
/*!***********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-update/stakeholder-update.component.html ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stakeholder-update works!\n</p>\n"

/***/ }),

/***/ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.ts":
/*!*********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholder-update/stakeholder-update.component.ts ***!
  \*********************************************************************************/
/*! exports provided: StakeholderUpdateComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholderUpdateComponent", function() { return StakeholderUpdateComponent; });
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

var StakeholderUpdateComponent = /** @class */ (function () {
    function StakeholderUpdateComponent() {
    }
    StakeholderUpdateComponent.prototype.ngOnInit = function () {
    };
    StakeholderUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stakeholder-update',
            template: __webpack_require__(/*! ./stakeholder-update.component.html */ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.html"),
            styles: [__webpack_require__(/*! ./stakeholder-update.component.css */ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StakeholderUpdateComponent);
    return StakeholderUpdateComponent;
}());



/***/ }),

/***/ "./src/app/stakeholders/stakeholder.routing.ts":
/*!*****************************************************!*\
  !*** ./src/app/stakeholders/stakeholder.routing.ts ***!
  \*****************************************************/
/*! exports provided: StakeholdersRouting */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholdersRouting", function() { return StakeholdersRouting; });
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _stakeholders_list_stakeholders_list_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./stakeholders-list/stakeholders-list.component */ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.ts");
/* harmony import */ var src_app_stakeholders_stakeholder_create_stakeholder_create_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/stakeholders/stakeholder-create/stakeholder-create.component */ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.ts");
/* harmony import */ var src_app_stakeholders_stakeholder_update_stakeholder_update_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/stakeholders/stakeholder-update/stakeholder-update.component */ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.ts");




var stakeholdersRoutes = [
    { path: 'stakeholders',
        children: [
            { path: '', component: _stakeholders_list_stakeholders_list_component__WEBPACK_IMPORTED_MODULE_1__["StakeholdersListComponent"] },
            { path: 'create', component: src_app_stakeholders_stakeholder_create_stakeholder_create_component__WEBPACK_IMPORTED_MODULE_2__["StakeholderCreateComponent"] },
            { path: 'update/:id', component: src_app_stakeholders_stakeholder_update_stakeholder_update_component__WEBPACK_IMPORTED_MODULE_3__["StakeholderUpdateComponent"] }
        ]
    }
];
var StakeholdersRouting = _angular_router__WEBPACK_IMPORTED_MODULE_0__["RouterModule"].forChild(stakeholdersRoutes);


/***/ }),

/***/ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.css":
/*!********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholders-list/stakeholders-list.component.css ***!
  \********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.html":
/*!*********************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholders-list/stakeholders-list.component.html ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  stakeholders-list works!\n</p>\n"

/***/ }),

/***/ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.ts":
/*!*******************************************************************************!*\
  !*** ./src/app/stakeholders/stakeholders-list/stakeholders-list.component.ts ***!
  \*******************************************************************************/
/*! exports provided: StakeholdersListComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholdersListComponent", function() { return StakeholdersListComponent; });
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

var StakeholdersListComponent = /** @class */ (function () {
    function StakeholdersListComponent() {
    }
    StakeholdersListComponent.prototype.ngOnInit = function () {
    };
    StakeholdersListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-stakeholders-list',
            template: __webpack_require__(/*! ./stakeholders-list.component.html */ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.html"),
            styles: [__webpack_require__(/*! ./stakeholders-list.component.css */ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], StakeholdersListComponent);
    return StakeholdersListComponent;
}());



/***/ }),

/***/ "./src/app/stakeholders/stakeholders.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/stakeholders/stakeholders.module.ts ***!
  \*****************************************************/
/*! exports provided: StakeholdersModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StakeholdersModule", function() { return StakeholdersModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _stakeholders_list_stakeholders_list_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./stakeholders-list/stakeholders-list.component */ "./src/app/stakeholders/stakeholders-list/stakeholders-list.component.ts");
/* harmony import */ var _stakeholder_create_stakeholder_create_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./stakeholder-create/stakeholder-create.component */ "./src/app/stakeholders/stakeholder-create/stakeholder-create.component.ts");
/* harmony import */ var _stakeholder_update_stakeholder_update_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./stakeholder-update/stakeholder-update.component */ "./src/app/stakeholders/stakeholder-update/stakeholder-update.component.ts");
/* harmony import */ var _stakeholder_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./stakeholder.routing */ "./src/app/stakeholders/stakeholder.routing.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






var StakeholdersModule = /** @class */ (function () {
    function StakeholdersModule() {
    }
    StakeholdersModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_1__["CommonModule"],
                _stakeholder_routing__WEBPACK_IMPORTED_MODULE_5__["StakeholdersRouting"]
            ],
            declarations: [_stakeholders_list_stakeholders_list_component__WEBPACK_IMPORTED_MODULE_2__["StakeholdersListComponent"], _stakeholder_create_stakeholder_create_component__WEBPACK_IMPORTED_MODULE_3__["StakeholderCreateComponent"], _stakeholder_update_stakeholder_update_component__WEBPACK_IMPORTED_MODULE_4__["StakeholderUpdateComponent"]]
        })
    ], StakeholdersModule);
    return StakeholdersModule;
}());



/***/ }),

/***/ "./src/app/tasks/models/task-dto.ts":
/*!******************************************!*\
  !*** ./src/app/tasks/models/task-dto.ts ***!
  \******************************************/
/*! exports provided: TaskDto */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TaskDto", function() { return TaskDto; });
var TaskDto = /** @class */ (function () {
    function TaskDto(init) {
        Object.assign(this, init);
    }
    return TaskDto;
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

module.exports = "<h3>Create Task</h3>\n<form (ngSubmit)=\"onSubmit()\" [formGroup]=\"form\">\n  <div class=\"form-group\">\n    <label class=\"control-label required\" for=\"task-key\">Key</label>\n    <input formControlName=\"key\"\n           type=\"text\"\n           name=\"key\" \n           class=\"form-control\" \n           id=\"task-key\" \n           placeholder=\"Enter task key\"\n           required>\n    <div class=\"alert\" *ngIf=\"!this.form.controls['key'].valid && this.form.controls['key'].touched\">{{invalidKeyMessage}}</div>\n  </div>\n  <div class=\"form-group\">\n    <label class=\"control-label required\" for=\"task-name\">Name</label>\n    <input formControlName=\"name\"\n           type=\"text\" \n           name=\"name\"\n           class=\"form-control\" \n           id=\"task-name\" \n           placeholder=\"Enter task name\"\n           required>\n    <div class=\"alert\" *ngIf=\"!this.form.controls['name'].valid && this.form.controls['name'].touched\">{{invalidNameMessage}}</div>\n  </div>\n  <div class=\"form-group\">\n      <label class=\"control-label\" for=\"task-description\">Description</label>\n      <textarea formControlName=\"description\"\n                class=\"form-control\" \n                name=\"description\"\n                id=\"task-description\" \n                rows=\"3\"></textarea>\n  </div>\n  <button [disabled]=\"form.invalid\" type=\"submit\" class=\"btn btn-primary\">Create</button>\n</form>\n"

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
    function TaskCreateComponent(fb) {
        this.fb = fb;
        this.invalidKeyMessage = 'Key is required (min 3, max 50 characters)';
        this.invalidNameMessage = 'Key is required (max 200 characters)';
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
    };
    TaskCreateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-create',
            template: __webpack_require__(/*! ./task-create.component.html */ "./src/app/tasks/task-create/task-create.component.html"),
            styles: [__webpack_require__(/*! ./task-create.component.css */ "./src/app/tasks/task-create/task-create.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_forms__WEBPACK_IMPORTED_MODULE_1__["FormBuilder"]])
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

module.exports = ""

/***/ }),

/***/ "./src/app/tasks/task-update/task-update.component.html":
/*!**************************************************************!*\
  !*** ./src/app/tasks/task-update/task-update.component.html ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  task-update works!\n</p>\n"

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
    function TaskUpdateComponent() {
    }
    TaskUpdateComponent.prototype.ngOnInit = function () {
    };
    TaskUpdateComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-task-update',
            template: __webpack_require__(/*! ./task-update.component.html */ "./src/app/tasks/task-update/task-update.component.html"),
            styles: [__webpack_require__(/*! ./task-update.component.css */ "./src/app/tasks/task-update/task-update.component.css")]
        }),
        __metadata("design:paramtypes", [])
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
/* harmony import */ var _models_task_dto__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./models/task-dto */ "./src/app/tasks/models/task-dto.ts");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/app-settings.service */ "./src/shared/app-settings.service.ts");
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
    }
    TaskService.prototype.getTasks = function () {
        return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])([
            new _models_task_dto__WEBPACK_IMPORTED_MODULE_1__["TaskDto"]({ id: '22143042-4318-49d3-aef9-09960015c637', key: 'key_one', name: 'name_one', description: 'description_one' }),
            new _models_task_dto__WEBPACK_IMPORTED_MODULE_1__["TaskDto"]({ id: '974f0104-c0cc-479a-8386-ff4c83e26e4c', key: 'key_two', name: 'name_two', description: 'description_two' }),
            new _models_task_dto__WEBPACK_IMPORTED_MODULE_1__["TaskDto"]({ id: 'ed99642b-1a56-4c35-a445-482459acd32f', key: 'key_three', name: 'name_three', description: 'description_three' })
        ]);
    };
    TaskService.prototype.addTask = function (task) {
        var url = this.config.getSettings().apiUrl;
        return this.http.post(url, task);
    };
    TaskService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"], _shared_app_settings_service__WEBPACK_IMPORTED_MODULE_4__["AppSettingsService"]])
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

module.exports = ".header-wrapper {\r\n    padding: 10px;\r\n}\r\n\r\n#create-task-button {\r\n    float:right;\r\n}\r\n\r\n#header {\r\n    float:left;\r\n}\r\n\r\n.clearfix {\r\n    float:none;\r\n}\r\n\r\n.center-cell {\r\n    text-align: center;\r\n} "

/***/ }),

/***/ "./src/app/tasks/tasks-list/tasks-list.component.html":
/*!************************************************************!*\
  !*** ./src/app/tasks/tasks-list/tasks-list.component.html ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class='header-wrapper'>\n    <h3 id=\"header\">Tasks List</h3>\n    <button routerLink=\"/tasks/create\" id=\"create-task-button\" type=\"button\" class=\"btn btn-success\">Create Task</button>\n    <div class=\"clearfix\"></div>\n</div>\n\n<table class=\"table\">\n    <colgroup>\n      <col style=\"width:40%\">\n      <col style=\"width:40%\">\n      <col style=\"width:10%\">\n      <col style=\"width:10%\">\n    </colgroup>  \n    <thead>\n      <tr>\n        <th scope=\"col\">Key</th>\n        <th scope=\"col\">Name</th>\n        <th class=\"center-cell\" scope=\"col\">Update</th>\n        <th class=\"center-cell\" scope=\"col\">Delete</th>\n      </tr>\n    </thead>\n    <tbody>\n      <tr *ngFor=\"let task of tasks\">\n        <td>{{task.key}}</td>\n        <td>{{task.name}}</td>\n        <td class=\"center-cell\">\n            <button type=\"button\" class=\"btn btn-warning\">Update</button>\n        </td>\n        <td class=\"center-cell\">\n          <button type=\"button\" class=\"btn btn-danger\">Delete</button>\n        </td>\n      </tr>\n    </tbody>\n  </table>\n"

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
    function TasksListComponent(taskService) {
        this.taskService = taskService;
    }
    TasksListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.taskService.getTasks().subscribe(function (tasks) { return _this.tasks = tasks; });
        ;
    };
    TasksListComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-tasks-list',
            template: __webpack_require__(/*! ./tasks-list.component.html */ "./src/app/tasks/tasks-list/tasks-list.component.html"),
            styles: [__webpack_require__(/*! ./tasks-list.component.css */ "./src/app/tasks/tasks-list/tasks-list.component.css")]
        }),
        __metadata("design:paramtypes", [_task_service__WEBPACK_IMPORTED_MODULE_1__["TaskService"]])
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
                _angular_forms__WEBPACK_IMPORTED_MODULE_7__["ReactiveFormsModule"]
            ],
            declarations: [_tasks_list_tasks_list_component__WEBPACK_IMPORTED_MODULE_2__["TasksListComponent"], _task_create_task_create_component__WEBPACK_IMPORTED_MODULE_3__["TaskCreateComponent"], _task_update_task_update_component__WEBPACK_IMPORTED_MODULE_4__["TaskUpdateComponent"]],
            providers: [src_app_tasks_task_service__WEBPACK_IMPORTED_MODULE_6__["TaskService"]]
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
        this.apiUrl = "http://www.fairwaytech.com";
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