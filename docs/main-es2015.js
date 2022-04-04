(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/home/home/home.component.html":
/*!**********************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/home/home/home.component.html ***!
  \**********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-side-nav> -->\r\n\r\n<!-- <router-outlet></router-outlet>  -->\r\n<p>Home Works</p>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html":
/*!*******************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html ***!
  \*******************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<div class=\"image\">\r\n\r\n  <img class=\"img\" alt=\"logo\" src=\"../../../assets/img/logo.png\" />\r\n\r\n</div>\r\n\r\n<div class=\"form\">\r\n\r\n  <form [formGroup]=\"form\" (ngSubmit)=\"onSubmit()\">\r\n\r\n    <div class=\"userid\">\r\n\r\n      <mat-form-field class=\"f1\">\r\n\r\n        <input matInput formControlName=\"userName\" placeholder=\"User ID\">\r\n\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div>\r\n\r\n      <mat-form-field class=\"p1\">\r\n\r\n        <mat-label>Enter your Password</mat-label>\r\n\r\n        <input matInput formControlName=\"password\" [type]=\"hide ? 'password' : 'text'\">\r\n\r\n        <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\"\r\n          [attr.aria-pressed]=\"hide\">\r\n\r\n          <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\r\n\r\n        </button>\r\n\r\n      </mat-form-field>\r\n\r\n    </div>\r\n\r\n    <div class=\"button\">\r\n\r\n      <button class=\"b1\" mat-raised-button color=\"primary\" type=\"submit\">Sign In</button>\r\n\r\n    </div>\r\n\r\n  </form>\r\n\r\n\r\n  <div class=\"para\">\r\n\r\n    <p class=\"sentence\">\r\n\r\n      By continuing, you agree to ICICI Lombard\r\n\r\n    </p>\r\n\r\n    <a href=\"\">Privacy Policy</a>\r\n\r\n\r\n  </div>\r\n\r\n</div>");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html":
/*!*************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html ***!
  \*************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (" <mat-sidenav-container *ngIf=\"isLoggedIn$ | async\"> \r\n    <mat-sidenav mode=\"side\" opened>  \r\n        <ul class=\"navList\">\r\n            <li> \r\n                <a mat-list-item class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"active\">\r\n                    <img class=\"img\" src=\"../../../assets/img/square-logo.png\" />\r\n                </a>\r\n            </li> \r\n\r\n            <li class=\"stationery\" routerLink=\"/super-admin\">Stationery\r\n            </li>\r\n\r\n            <li class=\"stReq\" routerLink=\"/staionery-request\">Stationery Request\r\n            </li>\r\n\r\n            <li class=\"logout\" (click)=\"onLogout()\">Log Out</li>\r\n        </ul>\r\n\r\n     </mat-sidenav>\r\n\r\n     <mat-sidenav-content>\r\n        <div class=\"container\">\r\n            <!-- <app-super-admin></app-super-admin> -->\r\n            <router-outlet></router-outlet>\r\n        </div>\r\n    </mat-sidenav-content> \r\n</mat-sidenav-container> ");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/stationery-request/stationery-request.component.html":
/*!*********************************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/stationery-request/stationery-request.component.html ***!
  \*********************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-side-nav></app-side-nav> -->\r\n\r\n<p>stationery-request works!</p>\r\n");

/***/ }),

/***/ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html":
/*!*******************************************************************************************************!*\
  !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html ***!
  \*******************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("<!-- <app-side-nav></app-side-nav> -->\r\n\r\n<div class=\"container\">\r\n\r\n    <h2 style=\"margin-top: 30px;\r\n                text-align: center; \r\n                background: linear-gradient(to right, #ffa355 300px, #f86779);\r\n                text-transform: uppercase;\r\n                background-clip: text;\r\n                -webkit-background-clip: text;\r\n                -webkit-text-fill-color: transparent;\">Super Admin Panel</h2>\r\n\r\n    <form [formGroup]=\"userForm\">\r\n        <!-- <div class=\"c1\">\r\n            \r\n            <mat-form-field appearance=\"outline\" class=\"f\">\r\n                <mat-label>Outline form </mat-label>\r\n                <input matInput formControlName=\"stationeryId\" placeholder=\"Stationery Id\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"q\">\r\n                <input matInput formControlName=\"stationeryName\" placeholder=\"Stationery Name\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"q1\">\r\n                <input matInput formControlName=\"stationeryQty\" placeholder=\"Stationery Quantity\">\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"q2\">\r\n                <input matInput formControlName=\"stationeryRemark\" placeholder=\"Stationery Remark\">\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field class=\"q3\">\r\n                <input matInput formControlName=\"stationeryDesc\" placeholder=\"Stationery Description\">\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field class=\"q4\">\r\n                <mat-select formControlName=\"stationeryStatus\" placeholder=\"Stationery Status\">\r\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\r\n                        {{food.viewValue}}\r\n                    </mat-option>\r\n                </mat-select>\r\n            </mat-form-field>\r\n            \r\n            <mat-form-field class=\"q5\">\r\n                <input matInput formControlName=\"stationeryOrderStatus\" placeholder=\"Stationery Order Status\">\r\n            </mat-form-field>\r\n            \r\n        </div> -->\r\n\r\n        <div class=\"c2\">\r\n\r\n            <mat-form-field class=\"q\" >\r\n                <input matInput formControlName=\"stationeryName\" placeholder=\"Stationery Name\" >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"q1\">\r\n                <input matInput formControlName=\"stationeryQty\" placeholder=\"Stationery Quantity\" >\r\n            </mat-form-field>\r\n\r\n            <mat-form-field class=\"q2\">\r\n                <input matInput name=\"fname\" formControlName=\"stationeryDesc\" placeholder=\"Stationery Description\">\r\n            </mat-form-field>\r\n\r\n            <button class=\"add\" mat-raised-button color=\"warn\" (click)=\"addRow()\">Add Item</button>\r\n            <!-- <button class=\"add\" mat-raised-button color=\"warn\" (click)=\"updateData()\">Update Item</button> -->\r\n\r\n        </div>\r\n\r\n    </form>\r\n\r\n    <div class=\"tab\">\r\n        <table>\r\n            <th>Stationery Id</th>\r\n            <th>Stationery Name</th>\r\n            <th>Stationery Quantity</th>\r\n            <th>Stationery Description</th>\r\n            <th>Stationery Action</th>\r\n\r\n\r\n            <tr *ngFor=\"let item of listData; let i = index\">\r\n                <td><span>{{i+1}}</span></td>\r\n                <td><span>{{item.stationeryName}}</span></td>\r\n                <td><span>{{item.stationeryQty}}</span></td>\r\n                <td><span>{{item.stationeryDesc}}</span></td>\r\n                <td>\r\n                    <mat-icon (click)=\"editDialog(item)\" class=\"edit1\" >edit</mat-icon>\r\n                    <span class=\"vertical-line\"></span>\r\n                    <mat-icon (click)=\"remove(item)\" class=\"del1\">delete</mat-icon>\r\n                </td>\r\n            </tr>\r\n        </table>\r\n    </div>\r\n</div>\r\n\r\n<!-- </mat-sidenav-content> -->\r\n<!-- <app-stationery-request> </app-stationery-request>  -->");

/***/ }),

/***/ "./node_modules/tslib/tslib.es6.js":
/*!*****************************************!*\
  !*** ./node_modules/tslib/tslib.es6.js ***!
  \*****************************************/
/*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__extends", function() { return __extends; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__assign", function() { return __assign; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__rest", function() { return __rest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__decorate", function() { return __decorate; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__param", function() { return __param; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__metadata", function() { return __metadata; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__awaiter", function() { return __awaiter; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__generator", function() { return __generator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__createBinding", function() { return __createBinding; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__exportStar", function() { return __exportStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__values", function() { return __values; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__read", function() { return __read; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spread", function() { return __spread; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__spreadArrays", function() { return __spreadArrays; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__await", function() { return __await; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function() { return __asyncGenerator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function() { return __asyncDelegator; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__asyncValues", function() { return __asyncValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function() { return __makeTemplateObject; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importStar", function() { return __importStar; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__importDefault", function() { return __importDefault; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function() { return __classPrivateFieldGet; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function() { return __classPrivateFieldSet; });
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise */

var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return extendStatics(d, b);
};

function __extends(d, b) {
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
}

var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    }
    return __assign.apply(this, arguments);
}

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __param(paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
}

function __metadata(metadataKey, metadataValue) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
}

function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
}

function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
}

function __createBinding(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}

function __exportStar(m, exports) {
    for (var p in m) if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
}

function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = void 0;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
}

function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
}

function __spread() {
    for (var ar = [], i = 0; i < arguments.length; i++)
        ar = ar.concat(__read(arguments[i]));
    return ar;
}

function __spreadArrays() {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};

function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
}

function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i;
    function verb(n) { if (g[n]) i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
}

function __asyncDelegator(o) {
    var i, p;
    return i = {}, verb("next"), verb("throw", function (e) { throw e; }), verb("return"), i[Symbol.iterator] = function () { return this; }, i;
    function verb(n, f) { i[n] = o[n] ? function (v) { return (p = !p) ? { value: __await(o[n](v)), done: n === "return" } : f ? f(v) : v; } : f; }
}

function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
}

function __makeTemplateObject(cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};

function __importStar(mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result.default = mod;
    return result;
}

function __importDefault(mod) {
    return (mod && mod.__esModule) ? mod : { default: mod };
}

function __classPrivateFieldGet(receiver, privateMap) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to get private field on non-instance");
    }
    return privateMap.get(receiver);
}

function __classPrivateFieldSet(receiver, privateMap, value) {
    if (!privateMap.has(receiver)) {
        throw new TypeError("attempted to set private field on non-instance");
    }
    privateMap.set(receiver, value);
    return value;
}


/***/ }),

/***/ "./src/app/Frontend/home/home/home.component.scss":
/*!********************************************************!*\
  !*** ./src/app/Frontend/home/home/home.component.scss ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL2hvbWUvaG9tZS9ob21lLmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Frontend/home/home/home.component.ts":
/*!******************************************************!*\
  !*** ./src/app/Frontend/home/home/home.component.ts ***!
  \******************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeComponent = class HomeComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./home.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/home/home/home.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home.component.scss */ "./src/app/Frontend/home/home/home.component.scss")).default]
    })
], HomeComponent);



/***/ }),

/***/ "./src/app/Frontend/layout/home-layout/home-layout.component.scss":
/*!************************************************************************!*\
  !*** ./src/app/Frontend/layout/home-layout/home-layout.component.scss ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL2xheW91dC9ob21lLWxheW91dC9ob21lLWxheW91dC5jb21wb25lbnQuc2NzcyJ9 */");

/***/ }),

/***/ "./src/app/Frontend/layout/home-layout/home-layout.component.ts":
/*!**********************************************************************!*\
  !*** ./src/app/Frontend/layout/home-layout/home-layout.component.ts ***!
  \**********************************************************************/
/*! exports provided: HomeLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeLayoutComponent", function() { return HomeLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let HomeLayoutComponent = class HomeLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
HomeLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-home-layout',
        template: `<app-side-nav></app-side-nav>
            <router-outlet></router-outlet>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./home-layout.component.scss */ "./src/app/Frontend/layout/home-layout/home-layout.component.scss")).default]
    })
], HomeLayoutComponent);



/***/ }),

/***/ "./src/app/Frontend/layout/login-layout/login-layout.component.scss":
/*!**************************************************************************!*\
  !*** ./src/app/Frontend/layout/login-layout/login-layout.component.scss ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL2xheW91dC9sb2dpbi1sYXlvdXQvbG9naW4tbGF5b3V0LmNvbXBvbmVudC5zY3NzIn0= */");

/***/ }),

/***/ "./src/app/Frontend/layout/login-layout/login-layout.component.ts":
/*!************************************************************************!*\
  !*** ./src/app/Frontend/layout/login-layout/login-layout.component.ts ***!
  \************************************************************************/
/*! exports provided: LoginLayoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginLayoutComponent", function() { return LoginLayoutComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let LoginLayoutComponent = class LoginLayoutComponent {
    constructor() { }
    ngOnInit() {
    }
};
LoginLayoutComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login-layout',
        template: ``,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login-layout.component.scss */ "./src/app/Frontend/layout/login-layout/login-layout.component.scss")).default]
    })
], LoginLayoutComponent);



/***/ }),

/***/ "./src/app/Frontend/login/login.component.scss":
/*!*****************************************************!*\
  !*** ./src/app/Frontend/login/login.component.scss ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".image {\n  margin: auto;\n  text-align: center;\n}\n\n.img {\n  margin-top: 30px;\n  height: 50%;\n  width: 20%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.form {\n  margin: auto;\n  text-align: center;\n}\n\n.userid {\n  text-align: center;\n}\n\n.f1 {\n  width: 400px;\n  margin-top: 30px;\n}\n\n.p1 {\n  width: 400px;\n  margin-top: 20px;\n}\n\n.button {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.b1 {\n  margin-top: 30px;\n  width: 100px;\n}\n\n.sentence {\n  margin-top: 60px;\n}\n\n.hide {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvbG9naW4vRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNJLGtCQUFBO0FDRU47O0FEWUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNUTjs7QUR1QkU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQk47O0FEdUJFO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ3BCTjs7QUR1QkU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNwQk47O0FEdUJFO0VBQ0ksZ0JBQUE7QUNwQk47O0FEd0JFO0VBQ0ksWUFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudXNlcmlke1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5mbmFtZSB7XHJcbiAgLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAvLyAgIHdpZHRoOiA0MDBweDtcclxuICAvLyAgIGJveC1zaXppbmc6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IDA7XHJcbiAgLy8gICBvdXRsaW5lOiAwO1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIH1cclxuICBcclxuICAuZjF7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLnBhc3N3b3Jke1xyXG4gIC8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIC8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLy8gICB3aWR0aDogNDAwcHg7XHJcbiAgLy8gICBib3gtc2l6aW5nOiBub25lO1xyXG4gIC8vICAgYm9yZGVyOiAwO1xyXG4gIC8vICAgb3V0bGluZTogMDtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAvLyB9XHJcbiAgXHJcbiAgLnAxe1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b257XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmIxe1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZW50ZW5jZXtcclxuICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGlkZXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuXHJcbiAgXHJcbiAgIiwiLmltYWdlIHtcbiAgbWFyZ2luOiBhdXRvO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5pbWcge1xuICBtYXJnaW4tdG9wOiAzMHB4O1xuICBoZWlnaHQ6IDUwJTtcbiAgd2lkdGg6IDIwJTtcbiAgb2JqZWN0LWZpdDogY29udGFpbjtcbn1cblxuLmZvcm0ge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLnVzZXJpZCB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmYxIHtcbiAgd2lkdGg6IDQwMHB4O1xuICBtYXJnaW4tdG9wOiAzMHB4O1xufVxuXG4ucDEge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG59XG5cbi5idXR0b24ge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG59XG5cbi5iMSB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnNlbnRlbmNlIHtcbiAgbWFyZ2luLXRvcDogNjBweDtcbn1cblxuLmhpZGUge1xuICBoZWlnaHQ6IDUwcHg7XG59Il19 */");

/***/ }),

/***/ "./src/app/Frontend/login/login.component.ts":
/*!***************************************************!*\
  !*** ./src/app/Frontend/login/login.component.ts ***!
  \***************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../app/service/auth-service */ "./src/app/service/auth-service.ts");




let LoginComponent = class LoginComponent {
    constructor(fb, authService) {
        this.fb = fb;
        this.authService = authService;
        this.hide = true;
    }
    ngOnInit() {
        this.form = this.fb.group({
            userName: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required],
            password: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__["Validators"].required]
        });
    }
    onSubmit() {
        if (this.form.valid) {
            this.authService.login(this.form.value);
        }
        this.formSubmitAttempt = true;
    }
};
LoginComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _app_service_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }
];
LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-login',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./login.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./login.component.scss */ "./src/app/Frontend/login/login.component.scss")).default]
    })
], LoginComponent);



/***/ }),

/***/ "./src/app/Frontend/side-nav/side-nav.component.scss":
/*!***********************************************************!*\
  !*** ./src/app/Frontend/side-nav/side-nav.component.scss ***!
  \***********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-sidenav {\n  background-image: linear-gradient(#ffa355, #f86779);\n  width: 250px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.mat-sidenav-container {\n  height: 100%;\n}\n\n.img {\n  margin-top: 18px;\n  margin-right: 20px;\n  height: 90px;\n  width: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.supAdmin {\n  margin-top: 20px;\n  border: none;\n  background: #635a5a;\n  color: whitesmoke;\n}\n\n.navList {\n  list-style: none;\n  line-height: 50px;\n}\n\n.navList li {\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.logout {\n  margin-top: 380px;\n  margin-right: 30px;\n  color: white;\n}\n\n.stationery {\n  margin-top: 20px;\n  color: white;\n  margin-right: 40px;\n}\n\n.stReq {\n  color: white;\n  margin-right: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvc2lkZS1uYXYvRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDRSxtREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEY7O0FEZ0JBO0VBRUUsWUFBQTtBQ2RGOztBRHFCQTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNsQkY7O0FEcUJBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2xCRjs7QURxQkE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDbEJGOztBRHdCQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUN0QkY7O0FEOENBO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUMzQ0Y7O0FEOENBO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMzQ0Y7O0FEOENBO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDNUNGIiwiZmlsZSI6InNyYy9hcHAvRnJvbnRlbmQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAubWF0LXRvb2xiYXIge1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6IGRvZGdlcmJsdWU7XHJcbi8vICAgLy8gYmFja2dyb3VuZDogI2ZmYTM1NTtcclxuLy8gICAvLyBjb2xvcjogb3JhbmdlO1xyXG4vLyB9XHJcblxyXG4ubWF0LXNpZGVuYXYge1xyXG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZhMzU1LCAjZjg2Nzc5KTtcclxuICB3aWR0aDogMjUwcHg7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIGJvcmRlci1yYWRpdXM6IDVweDtcclxufVxyXG5cclxuLy8gLm1hdC1zaWRlbmF2OmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjODA4MDgwMWY7XHJcbi8vICAgLy8gd2lkdGg6IDI1MHB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICB3aWR0aDogMjUwcHg7XHJcbi8vICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gfVxyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzlweCk7XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4vLyAubG9nbyB7XHJcbi8vICAgbWFyZ2luLWxlZnQ6IDIwcHg7XHJcbi8vIH1cclxuXHJcbi5pbWcge1xyXG4gIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xyXG4gIGhlaWdodDogOTBweDtcclxuICB3aWR0aDogOTBweDtcclxuICBvYmplY3QtZml0OiBjb250YWluO1xyXG59XHJcblxyXG4uc3VwQWRtaW4ge1xyXG4gIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgYm9yZGVyOiBub25lO1xyXG4gIGJhY2tncm91bmQ6IHJnYig5OSwgOTAsIDkwKTtcclxuICBjb2xvcjogd2hpdGVzbW9rZTtcclxufVxyXG5cclxuLm5hdkxpc3Qge1xyXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxcHg7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgLy8gaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4ubmF2TGlzdCBsaSB7XHJcbiAgZm9udC1zaXplOiAxOHB4O1xyXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgLy8gcGFkZGluZy1sZWZ0OiAxNXB4O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbn1cclxuXHJcbi8vIC5uYXZMaXN0IGxpOmhvdmVyIHtcclxuLy8gLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICBjb2xvcjogIzdkN2Q3ZDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC42Myk7XHJcbi8vICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuLy8gICBib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuLy8gfVxyXG5cclxuLy8gLnMxIHtcclxuLy8gICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbi8vICAgY29sb3I6IGJsYWNrO1xyXG4vLyB9XHJcblxyXG4vLyAubmF2IHtcclxuLy8gICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbi8vICAgaGVpZ2h0OiAzOHB4O1xyXG4vLyB9XHJcblxyXG4ubG9nb3V0IHtcclxuICBtYXJnaW4tdG9wOiAzODBweDtcclxuICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uc3RhdGlvbmVyeXtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XHJcbn1cclxuXHJcbi5zdFJlcXtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIGNvbG9yOiB3aGl0ZTtcclxuICBtYXJnaW4tcmlnaHQ6IDM2cHg7XHJcbn0iLCIubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmYTM1NSwgI2Y4Njc3OSk7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWcge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdXBBZG1pbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzYzNWE1YTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5uYXZMaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXZMaXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvdXQge1xuICBtYXJnaW4tdG9wOiAzODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0aW9uZXJ5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5zdFJlcSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufSJdfQ== */");

/***/ }),

/***/ "./src/app/Frontend/side-nav/side-nav.component.ts":
/*!*********************************************************!*\
  !*** ./src/app/Frontend/side-nav/side-nav.component.ts ***!
  \*********************************************************/
/*! exports provided: SideNavComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SideNavComponent", function() { return SideNavComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/app/service/auth-service */ "./src/app/service/auth-service.ts");



let SideNavComponent = class SideNavComponent {
    constructor(authService) {
        this.authService = authService;
    }
    ngOnInit() {
        this.isLoggedIn$ = this.authService.isLoggedIn;
    }
    onLogout() {
        this.authService.logout();
    }
};
SideNavComponent.ctorParameters = () => [
    { type: src_app_service_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }
];
SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-side-nav',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./side-nav.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./side-nav.component.scss */ "./src/app/Frontend/side-nav/side-nav.component.scss")).default]
    })
], SideNavComponent);



/***/ }),

/***/ "./src/app/Frontend/stationery-request/stationery-request.component.scss":
/*!*******************************************************************************!*\
  !*** ./src/app/Frontend/stationery-request/stationery-request.component.scss ***!
  \*******************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL3N0YXRpb25lcnktcmVxdWVzdC9zdGF0aW9uZXJ5LXJlcXVlc3QuY29tcG9uZW50LnNjc3MifQ== */");

/***/ }),

/***/ "./src/app/Frontend/stationery-request/stationery-request.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/Frontend/stationery-request/stationery-request.component.ts ***!
  \*****************************************************************************/
/*! exports provided: StationeryRequestComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "StationeryRequestComponent", function() { return StationeryRequestComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");


let StationeryRequestComponent = class StationeryRequestComponent {
    constructor() { }
    ngOnInit() {
    }
};
StationeryRequestComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-stationery-request',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./stationery-request.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/stationery-request/stationery-request.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./stationery-request.component.scss */ "./src/app/Frontend/stationery-request/stationery-request.component.scss")).default]
    })
], StationeryRequestComponent);



/***/ }),

/***/ "./src/app/Frontend/super-admin/super-admin.component.scss":
/*!*****************************************************************!*\
  !*** ./src/app/Frontend/super-admin/super-admin.component.scss ***!
  \*****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".q {\n  margin-top: 40px;\n  margin-left: 7%;\n  width: 20%;\n}\n\n.q1 {\n  margin-top: 5px;\n  margin-left: 5%;\n  width: 20%;\n}\n\n.q2 {\n  margin-top: 5px;\n  margin-left: 5%;\n  width: 20%;\n}\n\n.add {\n  margin-left: 70px;\n  width: 120px;\n}\n\n.tab {\n  width: 10%;\n  margin-top: 30px;\n  margin-left: 20px;\n}\n\n.table, th {\n  background-image: linear-gradient(#ffa355, #f86779);\n  justify-content: space-between;\n  text-align: center;\n  margin: 100px 100px 100px 100px;\n  padding: 10px 70px 10px 100px;\n  border-bottom: 2px solid #f86779;\n  color: white;\n  font-weight: 500;\n}\n\n.th {\n  background-image: linear-gradient(#ffa355, #f86779);\n  justify-content: space-between;\n  text-align: center;\n  margin: 100px 100px 100px 100px;\n  padding: 10px 70px 10px 100px;\n  border-bottom: 2px solid #f86779;\n}\n\n.table, td {\n  justify-content: space-between;\n  text-align: center;\n  margin: 100px 100px 100px 100px;\n  padding: 10px 70px 10px 100px;\n  border-bottom: 2px solid #f86779;\n}\n\n.sidenav {\n  width: 20%;\n  background-color: grey;\n}\n\ninput[type=text]:focus {\n  border-color: dodgerblue;\n  box-shadow: 0 0 8px 0 dodgerblue;\n}\n\n.vertical-line {\n  display: inline-block;\n  border-left: 1px solid #ccc;\n  margin: 0 10px;\n  height: px;\n}\n\n.t1 {\n  margin-top: 40px;\n  margin-left: 100px;\n  width: 20%;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  outline: none;\n  padding: 7px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\n.t2 {\n  margin-top: 20px;\n  margin-left: 90px;\n  width: 20%;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  outline: none;\n  padding: 7px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n\n.t3 {\n  margin-top: 20px;\n  margin-left: 90px;\n  width: 20%;\n  border: 2px solid #aaa;\n  border-radius: 4px;\n  outline: none;\n  padding: 7px;\n  box-sizing: border-box;\n  transition: 0.3s;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXHN1cGVyLWFkbWluXFxzdXBlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBU0E7RUFDSSxnQkFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDUko7O0FEV0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNSSjs7QURXQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ1JKOztBRDZCQTtFQUVJLGlCQUFBO0VBQ0EsWUFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxVQUFBO0VBQ0EsZ0JBQUE7RUFDQSxpQkFBQTtBQzNCSjs7QUQ4QkE7RUFDSSxtREFBQTtFQUNBLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBRUEsZ0NBQUE7RUFDQSxZQUFBO0VBQ0EsZ0JBQUE7QUM1Qko7O0FEK0JBO0VBQ0ksbURBQUE7RUFDQSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw2QkFBQTtFQUVBLGdDQUFBO0FDN0JKOztBRGdDQTtFQUNJLDhCQUFBO0VBQ0Esa0JBQUE7RUFDQSwrQkFBQTtFQUNBLDZCQUFBO0VBRUEsZ0NBQUE7QUM5Qko7O0FEa0NBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0FDL0JKOztBRGtDQTtFQUNJLHdCQUFBO0VBQ0EsZ0NBQUE7QUMvQko7O0FEK0NBO0VBQ0kscUJBQUE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDNUNSOztBRCtDQTtFQUNJLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0Esc0JBQUE7RUFDQSxrQkFBQTtFQUNBLGFBQUE7RUFDQSxZQUFBO0VBQ0Esc0JBQUE7RUFDQSxnQkFBQTtBQzVDSjs7QURnREE7RUFDSSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsVUFBQTtFQUNBLHNCQUFBO0VBQ0Esa0JBQUE7RUFDQSxhQUFBO0VBQ0EsWUFBQTtFQUNBLHNCQUFBO0VBQ0EsZ0JBQUE7QUM3Q0o7O0FEaURBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtFQUNBLGtCQUFBO0VBQ0EsYUFBQTtFQUNBLFlBQUE7RUFDQSxzQkFBQTtFQUNBLGdCQUFBO0FDOUNKIiwiZmlsZSI6InNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIvLyAuZntcclxuLy8gICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4vLyAgICAgd2lkdGg6IDIwJTtcclxuLy8gICAgIGhlaWdodDogMjAlO1xyXG4vLyAgICAgZm9udC1zaXplOiAxM3B4O1xyXG4vLyAgICAgYm9yZGVyOiAycHg7XHJcbi8vIH1cclxuXHJcbi5xe1xyXG4gICAgbWFyZ2luLXRvcDogNDBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5xMXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA1JTsgXHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucTJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNSU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4vLyAucTN7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbi8vICAgICB3aWR0aDogMjAlO1xyXG4vLyB9XHJcblxyXG4vLyAucTR7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNyU7XHJcbi8vICAgICB3aWR0aDogMjAlO1xyXG4vLyB9XHJcblxyXG4vLyAucTV7XHJcbi8vICAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbi8vICAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4vLyAgICAgd2lkdGg6IDIwJTtcclxuLy8gfVxyXG5cclxuLmFkZHtcclxuICAgIC8vIG1hcmdpbi10b3A6IDMlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDcwcHg7XHJcbiAgICB3aWR0aDogMTIwcHg7XHJcbn1cclxuXHJcbi50YWJ7XHJcbiAgICB3aWR0aDogMTAlO1xyXG4gICAgbWFyZ2luLXRvcDogMzBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG59XHJcblxyXG4udGFibGUsdGgge1xyXG4gICAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmEzNTUsICNmODY3NzkpO1xyXG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcclxuICAgIHBhZGRpbmc6IDEwcHggNzBweCAxMHB4IDEwMHB4O1xyXG4gICAgLy8gYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICM7XHJcbiAgICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4Njc3OTtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbn1cclxuXHJcbi50aHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZhMzU1LCAjZjg2Nzc5KTtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDcwcHggMTBweCAxMDBweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmODY3Nzk7XHJcbn1cclxuXHJcbi50YWJsZSx0ZHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XHJcbiAgICBwYWRkaW5nOiAxMHB4IDcwcHggMTBweCAxMDBweDtcclxuICAgIC8vIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjO1xyXG4gICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmODY3Nzk7XHJcbn1cclxuXHJcblxyXG4uc2lkZW5hdntcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiBncmV5O1xyXG59XHJcblxyXG5pbnB1dFt0eXBlPXRleHRdOmZvY3Vze1xyXG4gICAgYm9yZGVyLWNvbG9yOiBkb2RnZXJibHVlO1xyXG4gICAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XHJcbn1cclxuXHJcbi8vIC5TUntcclxuLy8gICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbi8vICAgICBtYXJnaW4tcmlnaHQ6IDVweDtcclxuLy8gICAgIHdpZHRoOiA1MCU7XHJcbi8vICAgICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xyXG4vLyAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4vLyAgICAgLy8gbWFyZ2luOiA4cHggMDtcclxuLy8gICAgIG91dGxpbmU6IG5vbmU7XHJcbi8vICAgICBwYWRkaW5nOiA3cHg7XHJcbi8vICAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4vLyAgICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gfVxyXG5cclxuLnZlcnRpY2FsLWxpbmV7XHJcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XHJcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDFweCBzb2xpZCAjY2NjO1xyXG4gICAgICAgIG1hcmdpbjogMCAxMHB4O1xyXG4gICAgICAgIGhlaWdodDogcHg7XHJcbn1cclxuXHJcbi50MXtcclxuICAgIG1hcmdpbi10b3A6IDQwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTAwcHg7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgYm9yZGVyOiAycHggc29saWQgI2FhYTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbiAgICBwYWRkaW5nOiA3cHg7XHJcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xyXG4gICAgdHJhbnNpdGlvbjogMC4zcztcclxuXHJcbn1cclxuXHJcbi50MntcclxuICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgICBtYXJnaW4tbGVmdDogOTBweDtcclxuICAgIHdpZHRoOiAyMCU7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xyXG4gICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgb3V0bGluZTogbm9uZTtcclxuICAgIHBhZGRpbmc6IDdweDtcclxuICAgIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjNzO1xyXG5cclxufVxyXG5cclxuLnQze1xyXG4gICAgbWFyZ2luLXRvcDogMjBweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA5MHB4O1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XHJcbiAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgcGFkZGluZzogN3B4O1xyXG4gICAgYm94LXNpemluZzogYm9yZGVyLWJveDtcclxuICAgIHRyYW5zaXRpb246IDAuM3M7XHJcblxyXG59XHJcblxyXG4iLCIucSB7XG4gIG1hcmdpbi10b3A6IDQwcHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnExIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNSU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5xMiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDUlO1xuICB3aWR0aDogMjAlO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLWxlZnQ6IDcwcHg7XG4gIHdpZHRoOiAxMjBweDtcbn1cblxuLnRhYiB7XG4gIHdpZHRoOiAxMCU7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xufVxuXG4udGFibGUsIHRoIHtcbiAgYmFja2dyb3VuZC1pbWFnZTogbGluZWFyLWdyYWRpZW50KCNmZmEzNTUsICNmODY3NzkpO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luOiAxMDBweCAxMDBweCAxMDBweCAxMDBweDtcbiAgcGFkZGluZzogMTBweCA3MHB4IDEwcHggMTAwcHg7XG4gIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCAjZjg2Nzc5O1xuICBjb2xvcjogd2hpdGU7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG59XG5cbi50aCB7XG4gIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZhMzU1LCAjZjg2Nzc5KTtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggNzBweCAxMHB4IDEwMHB4O1xuICBib3JkZXItYm90dG9tOiAycHggc29saWQgI2Y4Njc3OTtcbn1cblxuLnRhYmxlLCB0ZCB7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xuICBwYWRkaW5nOiAxMHB4IDcwcHggMTBweCAxMDBweDtcbiAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkICNmODY3Nzk7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuaW5wdXRbdHlwZT10ZXh0XTpmb2N1cyB7XG4gIGJvcmRlci1jb2xvcjogZG9kZ2VyYmx1ZTtcbiAgYm94LXNoYWRvdzogMCAwIDhweCAwIGRvZGdlcmJsdWU7XG59XG5cbi52ZXJ0aWNhbC1saW5lIHtcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkICNjY2M7XG4gIG1hcmdpbjogMCAxMHB4O1xuICBoZWlnaHQ6IHB4O1xufVxuXG4udDEge1xuICBtYXJnaW4tdG9wOiA0MHB4O1xuICBtYXJnaW4tbGVmdDogMTAwcHg7XG4gIHdpZHRoOiAyMCU7XG4gIGJvcmRlcjogMnB4IHNvbGlkICNhYWE7XG4gIGJvcmRlci1yYWRpdXM6IDRweDtcbiAgb3V0bGluZTogbm9uZTtcbiAgcGFkZGluZzogN3B4O1xuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICB0cmFuc2l0aW9uOiAwLjNzO1xufVxuXG4udDIge1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXJnaW4tbGVmdDogOTBweDtcbiAgd2lkdGg6IDIwJTtcbiAgYm9yZGVyOiAycHggc29saWQgI2FhYTtcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xuICBvdXRsaW5lOiBub25lO1xuICBwYWRkaW5nOiA3cHg7XG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XG4gIHRyYW5zaXRpb246IDAuM3M7XG59XG5cbi50MyB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIG1hcmdpbi1sZWZ0OiA5MHB4O1xuICB3aWR0aDogMjAlO1xuICBib3JkZXI6IDJweCBzb2xpZCAjYWFhO1xuICBib3JkZXItcmFkaXVzOiA0cHg7XG4gIG91dGxpbmU6IG5vbmU7XG4gIHBhZGRpbmc6IDdweDtcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcbiAgdHJhbnNpdGlvbjogMC4zcztcbn0iXX0= */");

/***/ }),

/***/ "./src/app/Frontend/super-admin/super-admin.component.ts":
/*!***************************************************************!*\
  !*** ./src/app/Frontend/super-admin/super-admin.component.ts ***!
  \***************************************************************/
/*! exports provided: SuperAdminComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function() { return SuperAdminComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");




let SuperAdminComponent = class SuperAdminComponent {
    constructor(fb, dialog) {
        this.fb = fb;
        this.dialog = dialog;
        this.foods = [
            // {value: '', viewValue: ''},
            { value: 'Available', viewValue: 'Available' },
            { value: 'Out of Stock', viewValue: 'Out Of Stock' }
        ];
        this.listData = [];
        this.arr = [];
        this.userForm = this.fb.group({
            stationeryId: [''],
            stationeryName: [''],
            stationeryQty: [''],
            // stationeryRemark: [''],
            stationeryDesc: [''],
        });
        this.options = fb.group({
            fixed: false
        });
    }
    ngOnInit() {
    }
    addRow() {
        this.listData.push(this.userForm.value);
        this.userForm.reset();
        // this.reset();
    }
    // reset() {
    //   this.userForm.reset;
    // }
    remove(element) {
        this.listData.forEach((value, index) => {
            if (value == element)
                this.listData.splice(index, 1);
        });
    }
    editDialog(element) {
        this.listData.forEach((value, index) => {
            if (value == element) {
                this.userForm = this.fb.group({
                    stationeryId: (element['stationeryId']),
                    stationeryName: (element['stationeryName']),
                    stationeryQty: (element['stationeryQty']),
                    stationeryDesc: (element['stationeryDesc']),
                });
            }
        });
        this.remove(element);
    }
};
SuperAdminComponent.ctorParameters = () => [
    { type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"] },
    { type: _angular_material__WEBPACK_IMPORTED_MODULE_3__["MatDialog"] }
];
SuperAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-super-admin',
        template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! raw-loader!./super-admin.component.html */ "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html")).default,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./super-admin.component.scss */ "./src/app/Frontend/super-admin/super-admin.component.scss")).default]
    })
], SuperAdminComponent);



/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Frontend/login/login.component */ "./src/app/Frontend/login/login.component.ts");
/* harmony import */ var _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Frontend/super-admin/super-admin.component */ "./src/app/Frontend/super-admin/super-admin.component.ts");
/* harmony import */ var _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Frontend/side-nav/side-nav.component */ "./src/app/Frontend/side-nav/side-nav.component.ts");
/* harmony import */ var _Frontend_stationery_request_stationery_request_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Frontend/stationery-request/stationery-request.component */ "./src/app/Frontend/stationery-request/stationery-request.component.ts");







const routes = [
    // { path: "", component: LoginComponent, canActivate: [AuthGuardGuard]},
    // {
    //   path: '',
    //   component: HomeLayoutComponent,
    //   canActivate: [AuthGuardGuard],
    //   children: [
    //     {
    //       path: '',
    //       component: HomeComponent
    //     }
    //   ]
    // },
    // {
    //   path: '',
    //   component: LoginLayoutComponent,
    //   children: [
    //     {
    //       path: 'login',
    //       component: LoginComponent
    //     }
    //   ]
    // },
    { path: "login", component: _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"] },
    { path: "side-nav", component: _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"] },
    { path: "super-admin", component: _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_4__["SuperAdminComponent"] },
    { path: "staionery-request", component: _Frontend_stationery_request_stationery_request_component__WEBPACK_IMPORTED_MODULE_6__["StationeryRequestComponent"] }
];
let AppRoutingModule = class AppRoutingModule {
};
AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })
], AppRoutingModule);



/***/ }),

/***/ "./src/app/app.component.scss":
/*!************************************!*\
  !*** ./src/app/app.component.scss ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (".mat-sidenav {\n  background-image: linear-gradient(#ffa355, #f86779);\n  width: 250px;\n  text-align: center;\n  border-radius: 5px;\n}\n\n.mat-sidenav-container {\n  height: 100%;\n}\n\n.img {\n  margin-top: 18px;\n  margin-right: 20px;\n  height: 90px;\n  width: 90px;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.supAdmin {\n  margin-top: 20px;\n  border: none;\n  background: #635a5a;\n  color: whitesmoke;\n}\n\n.navList {\n  list-style: none;\n  line-height: 50px;\n}\n\n.navList li {\n  font-size: 18px;\n  font-weight: 500;\n  cursor: pointer;\n}\n\n.logout {\n  margin-top: 380px;\n  margin-right: 30px;\n  color: white;\n}\n\n.stationery {\n  margin-top: 20px;\n  color: white;\n  margin-right: 40px;\n}\n\n.stReq {\n  color: white;\n  margin-right: 36px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBTUE7RUFDSSxtREFBQTtFQUNBLFlBQUE7RUFDQSxrQkFBQTtFQUNBLGtCQUFBO0FDTEo7O0FEZ0JFO0VBRUUsWUFBQTtBQ2RKOztBRHFCRTtFQUNFLGdCQUFBO0VBQ0Esa0JBQUE7RUFDQSxZQUFBO0VBQ0EsV0FBQTtFQUNBLHNCQUFBO0tBQUEsbUJBQUE7QUNsQko7O0FEcUJFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0EsbUJBQUE7RUFDQSxpQkFBQTtBQ2xCSjs7QURxQkU7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0FDbEJKOztBRHdCRTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUVBLGVBQUE7QUN0Qko7O0FEOENFO0VBQ0UsaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFlBQUE7QUMzQ0o7O0FEOENFO0VBQ0UsZ0JBQUE7RUFDQSxZQUFBO0VBQ0Esa0JBQUE7QUMzQ0o7O0FEOENFO0VBRUUsWUFBQTtFQUNBLGtCQUFBO0FDNUNKIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gLm1hdC10b29sYmFyIHtcclxuLy8gICAvLyBiYWNrZ3JvdW5kOiBkb2RnZXJibHVlO1xyXG4vLyAgIC8vIGJhY2tncm91bmQ6ICNmZmEzNTU7XHJcbi8vICAgLy8gY29sb3I6IG9yYW5nZTtcclxuLy8gfVxyXG5cclxuLm1hdC1zaWRlbmF2IHtcclxuICAgIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCgjZmZhMzU1LCAjZjg2Nzc5KTtcclxuICAgIHdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIGJvcmRlci1yYWRpdXM6IDVweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLm1hdC1zaWRlbmF2OmhvdmVyIHtcclxuICAvLyAgIGJhY2tncm91bmQ6ICM4MDgwODAxZjtcclxuICAvLyAgIC8vIHdpZHRoOiAyNTBweDtcclxuICAvLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAvLyAgIHdpZHRoOiAyNTBweDtcclxuICAvLyAgIHRyYW5zaXRpb246IDAuM3M7XHJcbiAgLy8gfVxyXG4gIFxyXG4gIC5tYXQtc2lkZW5hdi1jb250YWluZXIge1xyXG4gICAgLy8gaGVpZ2h0OiBjYWxjKDEwMHZoIC0gMzlweCk7XHJcbiAgICBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5sb2dvIHtcclxuICAvLyAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xyXG4gIC8vIH1cclxuICBcclxuICAuaW1nIHtcclxuICAgIG1hcmdpbi10b3A6IDE4cHg7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XHJcbiAgICBoZWlnaHQ6IDkwcHg7XHJcbiAgICB3aWR0aDogOTBweDtcclxuICAgIG9iamVjdC1maXQ6IGNvbnRhaW47XHJcbiAgfVxyXG4gIFxyXG4gIC5zdXBBZG1pbiB7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgYmFja2dyb3VuZDogcmdiKDk5LCA5MCwgOTApO1xyXG4gICAgY29sb3I6IHdoaXRlc21va2U7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZMaXN0IHtcclxuICAgIGxpc3Qtc3R5bGU6IG5vbmU7XHJcbiAgICBsaW5lLWhlaWdodDogNTBweDtcclxuICAgIC8vIHBhZGRpbmctbGVmdDogMXB4O1xyXG4gICAgLy8ganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICAvLyBoZWlnaHQ6IDEwMCU7XHJcbiAgfVxyXG4gIFxyXG4gIC5uYXZMaXN0IGxpIHtcclxuICAgIGZvbnQtc2l6ZTogMThweDtcclxuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XHJcbiAgICAvLyBwYWRkaW5nLWxlZnQ6IDE1cHg7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICAvLyB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAvLyBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLy8gLm5hdkxpc3QgbGk6aG92ZXIge1xyXG4gIC8vIC8vICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiAgLy8gICBjb2xvcjogIzdkN2Q3ZDtcclxuICAvLyAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgLy8gICAtd2Via2l0LWJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xyXG4gIC8vICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuICAvLyAgIGJveC1zaGFkb3c6IDEwcHggMTBweCA5cHggLTdweCByZ2JhKDAsIDAsIDAsIDAuNjMpO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAuczEge1xyXG4gIC8vICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gIC8vICAgY29sb3I6IGJsYWNrO1xyXG4gIC8vIH1cclxuICBcclxuICAvLyAubmF2IHtcclxuICAvLyAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxuICAvLyAgIGhlaWdodDogMzhweDtcclxuICAvLyB9XHJcbiAgXHJcbiAgLmxvZ291dCB7XHJcbiAgICBtYXJnaW4tdG9wOiAzODBweDtcclxuICAgIG1hcmdpbi1yaWdodDogMzBweDtcclxuICAgIGNvbG9yOiB3aGl0ZTtcclxuICB9XHJcbiAgXHJcbiAgLnN0YXRpb25lcnl7XHJcbiAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiA0MHB4O1xyXG4gIH1cclxuICBcclxuICAuc3RSZXF7XHJcbiAgICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xyXG4gIH0iLCIubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kLWltYWdlOiBsaW5lYXItZ3JhZGllbnQoI2ZmYTM1NSwgI2Y4Njc3OSk7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBib3JkZXItcmFkaXVzOiA1cHg7XG59XG5cbi5tYXQtc2lkZW5hdi1jb250YWluZXIge1xuICBoZWlnaHQ6IDEwMCU7XG59XG5cbi5pbWcge1xuICBtYXJnaW4tdG9wOiAxOHB4O1xuICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gIGhlaWdodDogOTBweDtcbiAgd2lkdGg6IDkwcHg7XG4gIG9iamVjdC1maXQ6IGNvbnRhaW47XG59XG5cbi5zdXBBZG1pbiB7XG4gIG1hcmdpbi10b3A6IDIwcHg7XG4gIGJvcmRlcjogbm9uZTtcbiAgYmFja2dyb3VuZDogIzYzNWE1YTtcbiAgY29sb3I6IHdoaXRlc21va2U7XG59XG5cbi5uYXZMaXN0IHtcbiAgbGlzdC1zdHlsZTogbm9uZTtcbiAgbGluZS1oZWlnaHQ6IDUwcHg7XG59XG5cbi5uYXZMaXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi5sb2dvdXQge1xuICBtYXJnaW4tdG9wOiAzODBweDtcbiAgbWFyZ2luLXJpZ2h0OiAzMHB4O1xuICBjb2xvcjogd2hpdGU7XG59XG5cbi5zdGF0aW9uZXJ5IHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgY29sb3I6IHdoaXRlO1xuICBtYXJnaW4tcmlnaHQ6IDQwcHg7XG59XG5cbi5zdFJlcSB7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgbWFyZ2luLXJpZ2h0OiAzNnB4O1xufSJdfQ== */");

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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");



let AppComponent = class AppComponent {
    constructor(router) {
        this.router = router;
        this.title = 'icici';
        this.showSideBar = true;
    }
    ngOnInit() {
        this.router.events.subscribe(e => {
            if (e instanceof _angular_router__WEBPACK_IMPORTED_MODULE_2__["NavigationEnd"]) {
                let urlSlice = e.url.toString().substr(0, 10);
                if (urlSlice.indexOf("login") !== -1) {
                    console.log(urlSlice);
                    this.isLoggedIn = false;
                }
                else {
                    this.isLoggedIn = true;
                }
            }
        });
    }
};
AppComponent.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
        selector: 'app-root',
        template: `
  <app-side-nav></app-side-nav>
  <router-outlet></router-outlet>`,
        styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(/*! ./app.component.scss */ "./src/app/app.component.scss")).default]
    })
], AppComponent);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Frontend/login/login.component */ "./src/app/Frontend/login/login.component.ts");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm2015/animations.js");
/* harmony import */ var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material */ "./node_modules/@angular/material/esm2015/material.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/esm2015/input.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/esm2015/icon.js");
/* harmony import */ var _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./Frontend/super-admin/super-admin.component */ "./src/app/Frontend/super-admin/super-admin.component.ts");
/* harmony import */ var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/material/table */ "./node_modules/@angular/material/esm2015/table.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm2015/forms.js");
/* harmony import */ var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @angular/material/sidenav */ "./node_modules/@angular/material/esm2015/sidenav.js");
/* harmony import */ var _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./Frontend/side-nav/side-nav.component */ "./src/app/Frontend/side-nav/side-nav.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm2015/http.js");
/* harmony import */ var _Frontend_stationery_request_stationery_request_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./Frontend/stationery-request/stationery-request.component */ "./src/app/Frontend/stationery-request/stationery-request.component.ts");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./service/auth-service */ "./src/app/service/auth-service.ts");
/* harmony import */ var _Frontend_home_home_home_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./Frontend/home/home/home.component */ "./src/app/Frontend/home/home/home.component.ts");
/* harmony import */ var _Frontend_layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./Frontend/layout/home-layout/home-layout.component */ "./src/app/Frontend/layout/home-layout/home-layout.component.ts");
/* harmony import */ var _Frontend_layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Frontend/layout/login-layout/login-layout.component */ "./src/app/Frontend/layout/login-layout/login-layout.component.ts");
/* harmony import */ var _service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./service/auth-guard.guard */ "./src/app/service/auth-guard.guard.ts");

























// import { ModalModule } from "ngb-modal";
// import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
let AppModule = class AppModule {
};
AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
        declarations: [
            _app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
            _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"],
            _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__["SuperAdminComponent"],
            _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__["SideNavComponent"],
            _Frontend_stationery_request_stationery_request_component__WEBPACK_IMPORTED_MODULE_16__["StationeryRequestComponent"],
            _Frontend_home_home_home_component__WEBPACK_IMPORTED_MODULE_18__["HomeComponent"],
            _Frontend_layout_home_layout_home_layout_component__WEBPACK_IMPORTED_MODULE_19__["HomeLayoutComponent"],
            _Frontend_layout_login_layout_login_layout_component__WEBPACK_IMPORTED_MODULE_20__["LoginLayoutComponent"],
        ],
        imports: [
            _angular_common_http__WEBPACK_IMPORTED_MODULE_15__["HttpClientModule"],
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"],
            _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"],
            _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"],
            _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDialogModule"],
        ],
        providers: [_service_auth_service__WEBPACK_IMPORTED_MODULE_17__["AuthService"], _service_auth_guard_guard__WEBPACK_IMPORTED_MODULE_21__["AuthGuardGuard"]],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })
], AppModule);



/***/ }),

/***/ "./src/app/service/auth-guard.guard.ts":
/*!*********************************************!*\
  !*** ./src/app/service/auth-guard.guard.ts ***!
  \*********************************************/
/*! exports provided: AuthGuardGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuardGuard", function() { return AuthGuardGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _service_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../service/auth-service */ "./src/app/service/auth-service.ts");





let AuthGuardGuard = class AuthGuardGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(next, state) {
        return this.authService.isLoggedIn.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["map"])((isLoggedIn) => {
            if (!isLoggedIn) {
                this.router.navigate(['/login']);
                return false;
            }
            return true;
        }));
    }
};
AuthGuardGuard.ctorParameters = () => [
    { type: _service_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] },
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthGuardGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthGuardGuard);



/***/ }),

/***/ "./src/app/service/auth-service.ts":
/*!*****************************************!*\
  !*** ./src/app/service/auth-service.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm2015/router.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");




let AuthService = class AuthService {
    constructor(router) {
        this.router = router;
        this.loggedIn = new rxjs__WEBPACK_IMPORTED_MODULE_3__["BehaviorSubject"](false);
    }
    get isLoggedIn() {
        return this.loggedIn.asObservable();
    }
    login(user) {
        if (user.userName !== '' && user.password !== '') {
            this.loggedIn.next(true);
            this.router.navigate(['/side-nav']);
        }
    }
    logout() {
        this.loggedIn.next(false);
        this.router.navigate(['/login']);
    }
};
AuthService.ctorParameters = () => [
    { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }
];
AuthService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()
], AuthService);



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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

const environment = {
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
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! hammerjs */ "./node_modules/hammerjs/hammer.js");
/* harmony import */ var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");






if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\ICICI\icici\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main-es2015.js.map