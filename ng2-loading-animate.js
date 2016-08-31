(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("@angular/core"), require("@angular/common"));
	else if(typeof define === 'function' && define.amd)
		define(["@angular/core", "@angular/common"], factory);
	else if(typeof exports === 'object')
		exports["LoadingAnimate"] = factory(require("@angular/core"), require("@angular/common"));
	else
		root["LoadingAnimate"] = factory(root["ng"]["core"], root["ng"]["common"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_3__) {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	__export(__webpack_require__(1));


/***/ },
/* 1 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	function __export(m) {
	    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
	}
	var core_1 = __webpack_require__(2);
	var common_1 = __webpack_require__(3);
	var ng2_loading_animate_component_1 = __webpack_require__(4);
	var ng2_loading_animate_service_1 = __webpack_require__(5);
	__export(__webpack_require__(5));
	var LoadingAnimateModule = (function () {
	    function LoadingAnimateModule() {
	    }
	    LoadingAnimateModule.forRoot = function () {
	        return {
	            ngModule: LoadingAnimateModule,
	            providers: [ng2_loading_animate_service_1.LoadingAnimateService]
	        };
	    };
	    LoadingAnimateModule = __decorate([
	        core_1.NgModule({
	            declarations: [
	                ng2_loading_animate_component_1.LoadingAnimateComponent
	            ],
	            imports: [common_1.CommonModule],
	            exports: [ng2_loading_animate_component_1.LoadingAnimateComponent],
	            providers: [ng2_loading_animate_service_1.LoadingAnimateService]
	        }), 
	        __metadata('design:paramtypes', [])
	    ], LoadingAnimateModule);
	    return LoadingAnimateModule;
	}());
	exports.LoadingAnimateModule = LoadingAnimateModule;


/***/ },
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var __param = (this && this.__param) || function (paramIndex, decorator) {
	    return function (target, key) { decorator(target, key, paramIndex); }
	};
	var core_1 = __webpack_require__(2);
	var ng2_loading_animate_service_1 = __webpack_require__(5);
	var LoadingAnimateComponent = (function () {
	    function LoadingAnimateComponent(_loadingSvc) {
	        this._loadingSvc = _loadingSvc;
	        this.isLoading = false;
	    }
	    LoadingAnimateComponent.prototype.ngOnInit = function () {
	        var _this = this;
	        this._loadingSvc.getValue().subscribe(function (status) {
	            _this.isLoading = status;
	        });
	    };
	    __decorate([
	        core_1.Input(), 
	        __metadata('design:type', Boolean)
	    ], LoadingAnimateComponent.prototype, "isLoading", void 0);
	    LoadingAnimateComponent = __decorate([
	        core_1.Component({
	            selector: 'loading-animate',
	            template: "\n        <div class=\"loader\" [ngClass]=\"{ hidden: !isLoading }\">\n            <div class=\"loading\">\n                <div class=\"loading-inner\">\n                    <div class=\"sk-cube-grid\">\n                        <div class=\"sk-cube sk-cube1\"></div>\n                        <div class=\"sk-cube sk-cube2\"></div>\n                        <div class=\"sk-cube sk-cube3\"></div>\n                        <div class=\"sk-cube sk-cube4\"></div>\n                        <div class=\"sk-cube sk-cube5\"></div>\n                        <div class=\"sk-cube sk-cube6\"></div>\n                        <div class=\"sk-cube sk-cube7\"></div>\n                        <div class=\"sk-cube sk-cube8\"></div>\n                        <div class=\"sk-cube sk-cube9\"></div>\n                    </div>\n                    <small>LOADING</small>\n                </div>\n            </div>\n        </div>\n    ",
	            styles: ["\n        .loader {\n            display: block;\n            position: fixed;\n            top: 0;\n            bottom: 0;\n            left: 0;\n            right: 0;\n            background: #000;\n            color: #fff;\n            text-align: center;\n            z-index: 10;\n        }\n        .loader .loading {\n            position: relative;\n            height: 100%;\n        }\n        .loader .loading-inner {\n            position: relative;\n            top: 50%;\n            margin-top: -40px;\n        }\n        .loader .loading small {\n            font-size: 10px;\n            font-weight: bold;\n        }\n        .sk-cube-grid {\n            width: 50px;\n            height: 50px;\n            margin: 0 auto 10px;\n        }\n        .sk-cube-grid .sk-cube {\n            width: 33%;\n            height: 33%;\n            background-color: #fff;\n            float: left;\n            -webkit-animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n            animation: sk-cubeGridScaleDelay 1.3s infinite ease-in-out;\n        }\n        .sk-cube-grid .sk-cube1 {\n            -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n        }\n        .sk-cube-grid .sk-cube2 {\n            -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n        }\n        .sk-cube-grid .sk-cube3 {\n            -webkit-animation-delay: 0.4s;\n            animation-delay: 0.4s;\n        }\n        .sk-cube-grid .sk-cube4 {\n            -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n        }\n        .sk-cube-grid .sk-cube5 {\n            -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n        }\n        .sk-cube-grid .sk-cube6 {\n            -webkit-animation-delay: 0.3s;\n            animation-delay: 0.3s;\n        }\n        .sk-cube-grid .sk-cube7 {\n            -webkit-animation-delay: 0s;\n            animation-delay: 0s;\n        }\n        .sk-cube-grid .sk-cube8 {\n            -webkit-animation-delay: 0.1s;\n            animation-delay: 0.1s;\n        }\n        .sk-cube-grid .sk-cube9 {\n            -webkit-animation-delay: 0.2s;\n            animation-delay: 0.2s;\n        }\n        @-webkit-keyframes sk-cubeGridScaleDelay {\n            0%, 70%, 100% {\n                -webkit-transform: scale3D(1, 1, 1);\n                transform: scale3D(1, 1, 1);\n            }\n            35% {\n                -webkit-transform: scale3D(0, 0, 1);\n                transform: scale3D(0, 0, 1);\n            }\n        }\n        @keyframes sk-cubeGridScaleDelay {\n            0%, 70%, 100% {\n                -webkit-transform: scale3D(1, 1, 1);\n                transform: scale3D(1, 1, 1);\n            }\n            35% {\n                -webkit-transform: scale3D(0, 0, 1);\n                transform: scale3D(0, 0, 1);\n            }\n        }\n    "]
	        }),
	        __param(0, core_1.Optional()), 
	        __metadata('design:paramtypes', [ng2_loading_animate_service_1.LoadingAnimateService])
	    ], LoadingAnimateComponent);
	    return LoadingAnimateComponent;
	}());
	exports.LoadingAnimateComponent = LoadingAnimateComponent;


/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";
	var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
	    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
	    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
	    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
	    return c > 3 && r && Object.defineProperty(target, key, r), r;
	};
	var __metadata = (this && this.__metadata) || function (k, v) {
	    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
	};
	var core_1 = __webpack_require__(2);
	var LoadingAnimateService = (function () {
	    function LoadingAnimateService() {
	        this.gLoading = new core_1.EventEmitter();
	    }
	    LoadingAnimateService.prototype.setValue = function (isLoading) {
	        this.gLoading.emit(isLoading);
	    };
	    LoadingAnimateService.prototype.getValue = function () {
	        return this.gLoading;
	    };
	    __decorate([
	        core_1.Output(), 
	        __metadata('design:type', core_1.EventEmitter)
	    ], LoadingAnimateService.prototype, "gLoading", void 0);
	    LoadingAnimateService = __decorate([
	        core_1.Injectable(), 
	        __metadata('design:paramtypes', [])
	    ], LoadingAnimateService);
	    return LoadingAnimateService;
	}());
	exports.LoadingAnimateService = LoadingAnimateService;


/***/ }
/******/ ])
});
;
//# sourceMappingURL=ng2-loading-animate.js.map