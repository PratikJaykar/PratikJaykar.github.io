function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFrontendLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"image\">\n\n    <img class=\"img\" alt=\"logo\" src=\"../../../assets/img/logo.png\" />\n  \n  </div>\n  \n  <div class=\"form\">\n  \n  <div class=\"userid\">\n  \n    <!-- <input type=\"text\" class=\"fname\" name=\"fname\" placeholder=\"User ID\"> -->\n  \n    <mat-form-field class=\"f1\">\n  \n      <!-- <mat-label>Enter some input</mat-label> -->\n  \n      <input matInput placeholder=\"User ID\">\n  \n      <!-- <mat-hint align=\"end\">{{input.value?.length || 0}}/10</mat-hint> -->\n  \n    </mat-form-field>\n  \n  </div>\n  \n  <div>\n  \n    <!-- <input matInput class=\"password\" placeholder=\"Password\" [type]=\"hide ? 'password' : 'text'\">\n    <button class=\"hide\" mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n      <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n    </button> -->\n  \n    <mat-form-field class=\"p1\">\n  \n      <mat-label>Enter your Password</mat-label>\n  \n      <input matInput [type]=\"hide ? 'password' : 'text'\">\n  \n      <button mat-icon-button matSuffix (click)=\"hide = !hide\" [attr.aria-label]=\"'Hide password'\" [attr.aria-pressed]=\"hide\">\n  \n        <mat-icon>{{hide ? 'visibility_off' : 'visibility'}}</mat-icon>\n      \n      </button>\n  \n    </mat-form-field>\n  \n  </div>\n  \n  \n  <div class=\"button\">\n  \n    <button class=\"b1\" mat-raised-button color=\"primary\" routerLink=\"/side-nav\">Sign In</button>\n  \n    <!-- <button type=\"button\" routerLink=\"/super-admin\">SuperAdmin</button> -->\n  </div>\n  \n  \n  <div class=\"para\">\n  \n    <p class=\"sentence\">\n  \n      By continuing, you agree to ICICI Lombard\n  \n    </p>\n  \n    <a href=\"\">Privacy Policy</a>\n\n  \n  </div>\n  ";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFrontendSideNavSideNavComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<mat-toolbar class=\"nav\">\n    <div>\n        <a class=\"navbar-brand\" routerLink=\"\" routerLinkActive=\"active\">\n            <img class=\"img\" src=\"../../../assets/img/logo.png\" />\n        </a>\n    </div>\n    <div class=\"s1\">\n        <a mat-button>Home</a>\n        <a mat-button>Home</a>\n        <a mat-button>Home</a>\n    </div>\n</mat-toolbar>\n\n<mat-sidenav-container>\n    <mat-sidenav mode=\"side\" opened>\n        <ul class=\"navList\">\n            <!-- <li (click)=\"goto(home)\"><i class=\"\"></i>Home</li>\n            <li (click)=\"goto(home)\"><i class=\"\"></i>Home</li>\n            <li (click)=\"goto(home)\"><i class=\"\"></i>Home</li>\n            <li (click)=\"goto(home)\"><i class=\"\"></i>Home</li>\n            <li (click)=\"goto(home)\"><i class=\"\"></i>Home</li> -->\n            <!-- <button mat-icon-button color=\"warn\" aria-label=\"Example icon button with a home icon\">\n                <mat-icon>home</mat-icon> \n            </button> -->\n        </ul>\n    </mat-sidenav>\n\n    <mat-sidenav-content>\n        <div class=\"container\">\n            <app-super-admin></app-super-admin>\n        </div>\n    </mat-sidenav-content>\n</mat-sidenav-container>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFrontendSuperAdminSuperAdminComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <form [formGroup]=\"userForm\">\n        <div class=\"c1\">\n\n            <mat-form-field class=\"f\">\n                <input matInput formControlName=\"stationeryId\" placeholder=\"Stationery Id\">\n            </mat-form-field>\n\n            <mat-form-field class=\"q\">\n                <input matInput formControlName=\"stationeryName\" placeholder=\"Stationery Name\">\n            </mat-form-field>\n\n            <mat-form-field class=\"q1\">\n                <input matInput formControlName=\"stationeryQty\" placeholder=\"Stationery Quantity\">\n            </mat-form-field>\n\n            <mat-form-field class=\"q2\">\n                <input matInput formControlName=\"stationeryRemark\" placeholder=\"Stationery Remark\">\n            </mat-form-field>\n\n            <mat-form-field class=\"q3\">\n                <input matInput formControlName=\"stationeryDesc\" placeholder=\"Stationery Description\">\n            </mat-form-field>\n\n            <mat-form-field class=\"q4\">\n                <!-- <mat-label>Favorite food</mat-label> -->\n                <mat-select formControlName=\"stationeryStatus\" placeholder=\"Stationery Status\">\n                    <mat-option *ngFor=\"let food of foods\" [value]=\"food.value\">\n                        {{food.viewValue}}\n                    </mat-option>\n                </mat-select>\n            </mat-form-field>\n\n            <mat-form-field class=\"q5\">\n                <input matInput formControlName=\"stationeryOrderStatus\" placeholder=\"Stationery Order Status\">\n            </mat-form-field>\n\n        </div>\n\n        <!-- <div class=\"c2\"> -->\n        <!-- <div class=\"container1\">\n\n            <label class=\"LID\" for=\"Stationery Item\">Stationery Id</label><br>\n            <input type=\"text\" class=\"SID\" name=\"fname\"><br>\n\n            <label class=\"LName\" for=\"Stationery Item\">Stationery Name</label><br>\n            <input type=\"text\" class=\"SName\" name=\"fname\"><br>\n\n            <label class=\"LQty\" for=\"Stationery Item\">Stationery Quantity</label><br>\n            <input type=\"text\" class=\"SQty\" name=\"fname\"><br>\n\n        </div>\n\n        <div class=\"subContainer\">\n\n            <label for=\"Stationery Item\">Stationery Remark</label><br>\n            <input type=\"text\" class=\"SRemark\" name=\"fname\"><br>\n\n            <label for=\"Stationery Item\">Stationery Description</label><br>\n            <input type=\"text\" class=\"SDes\" name=\"fname\"><br>\n\n            <label for=\"Stationery Item\">Stationery Status</label><br>\n            <input type=\"text\" class=\"SStatus\" name=\"fname\"><br>\n\n        </div> -->\n        <!-- </div> -->\n\n        <div>\n            <button class=\"add\" mat-raised-button color=\"warn\" (click)=\"addRow()\">Add</button>\n            <!-- <button class=\"submit\" mat-raised-button color=\"warn\" (click)=\"reset()\">Reset</button> -->\n        </div>\n\n    </form>\n\n    <div class=\"tab\">\n        <table>\n            <th>Stationery Id</th>\n            <th>Stationery Name</th>\n            <th>Stationery Quantity</th>\n            <th>Stationery Remark</th>\n            <th>Stationery Description</th>\n            <th>Stationery Status</th>\n            <th>Stationery Order Status</th>\n\n\n            <tr *ngFor=\"let item of listData\">\n                <td><span>{{item.stationeryId}}</span></td>\n                <td><span>{{item.stationeryName}}</span></td>\n                <!-- <td><button type=\"button\" class=\"btn1\" mat-raised-button color=\"warn\"\n                        (click)=\"remove(item)\">Remove</button></td> -->\n                <td><span>{{item.stationeryQty}}</span></td>\n                <td><span>{{item.stationeryRemark}}</span></td>\n                <td><span>{{item.stationeryDesc}}</span></td>\n                <td><span>{{item.stationeryStatus}}</span></td>\n                <td><span>{{item.stationeryOrderStatus}}</span></td>\n                    <!-- <mat-icon class=\"del1\">delete</mat-icon>\n                    <span class=\"vertical-line\"></span>\n                    <mat-icon class=\"edit1\">edit</mat-icon> -->\n                    <!-- <button class=\"del\">\n                            <mat-icon class=\"del1\">delete</mat-icon>\n                        </button>\n                        <button class=\"edit\">\n                            <mat-icon class=\"edit1\">edit</mat-icon>\n                        </button> -->\n                \n            </tr>\n\n        </table>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet> </router-outlet>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __createBinding, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault, __classPrivateFieldGet, __classPrivateFieldSet */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__createBinding", function () {
      return __createBinding;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldGet", function () {
      return __classPrivateFieldGet;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__classPrivateFieldSet", function () {
      return __classPrivateFieldSet;
    });
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


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      function adopt(value) {
        return value instanceof P ? value : new P(function (resolve) {
          resolve(value);
        });
      }

      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __createBinding(o, m, k, k2) {
      if (k2 === undefined) k2 = k;
      o[k2] = m[k];
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (p !== "default" && !exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var s = typeof Symbol === "function" && Symbol.iterator,
          m = s && o[s],
          i = 0;
      if (m) return m.call(o);
      if (o && typeof o.length === "number") return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
      throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
      };
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
    /***/

  },

  /***/
  "./src/app/Frontend/login/login.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/Frontend/login/login.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFrontendLoginLoginComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".image {\n  margin: auto;\n  text-align: center;\n}\n\n.img {\n  margin-top: 30px;\n  height: 50%;\n  width: 20%;\n  -o-object-fit: contain;\n     object-fit: contain;\n}\n\n.form {\n  margin: auto;\n  text-align: center;\n}\n\n.userid {\n  text-align: center;\n}\n\n.f1 {\n  width: 400px;\n  margin-top: 30px;\n}\n\n.p1 {\n  width: 400px;\n  margin-top: 20px;\n}\n\n.button {\n  text-align: center;\n  margin-top: 10px;\n}\n\n.b1 {\n  margin-top: 30px;\n  width: 100px;\n}\n\n.sentence {\n  margin-top: 60px;\n}\n\n.hide {\n  height: 50px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvbG9naW4vRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXGxvZ2luXFxsb2dpbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvbG9naW4vbG9naW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURFRTtFQUNFLGdCQUFBO0VBQ0EsV0FBQTtFQUNBLFVBQUE7RUFDQSxzQkFBQTtLQUFBLG1CQUFBO0FDQ0o7O0FERUU7RUFDRSxZQUFBO0VBQ0Esa0JBQUE7QUNDSjs7QURDRTtFQUNJLGtCQUFBO0FDRU47O0FEWUU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNUTjs7QUR1QkU7RUFDSSxZQUFBO0VBQ0EsZ0JBQUE7QUNwQk47O0FEdUJFO0VBQ0ksa0JBQUE7RUFDQSxnQkFBQTtBQ3BCTjs7QUR1QkU7RUFDSSxnQkFBQTtFQUNBLFlBQUE7QUNwQk47O0FEdUJFO0VBQ0ksZ0JBQUE7QUNwQk47O0FEd0JFO0VBQ0ksWUFBQTtBQ3JCTiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL2xvZ2luL2xvZ2luLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmltYWdlIHtcclxuICAgIG1hcmdpbjogYXV0bztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICB9XHJcbiAgXHJcbiAgLmltZyB7XHJcbiAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgaGVpZ2h0OiA1MCU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG4gICAgb2JqZWN0LWZpdDogY29udGFpbjtcclxuICB9XHJcbiAgXHJcbiAgLmZvcm0ge1xyXG4gICAgbWFyZ2luOiBhdXRvO1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIH1cclxuICAudXNlcmlke1xyXG4gICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgfVxyXG4gIFxyXG4gIC8vIC5mbmFtZSB7XHJcbiAgLy8gICAgIGZvbnQtd2VpZ2h0OiA0MDA7XHJcbiAgLy8gICAgIGZvbnQtc2l6ZTogMjBweDtcclxuICAvLyAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAvLyAgIHdpZHRoOiA0MDBweDtcclxuICAvLyAgIGJveC1zaXppbmc6IG5vbmU7XHJcbiAgLy8gICBib3JkZXI6IDA7XHJcbiAgLy8gICBvdXRsaW5lOiAwO1xyXG4gIC8vICAgYm9yZGVyLWJvdHRvbTogMnB4IHNvbGlkIGJsYWNrO1xyXG4gIC8vIH1cclxuICBcclxuICAuZjF7XHJcbiAgICAgIHdpZHRoOiA0MDBweDtcclxuICAgICAgbWFyZ2luLXRvcDogMzBweDtcclxuICB9XHJcbiAgXHJcbiAgLy8gLnBhc3N3b3Jke1xyXG4gIC8vICAgICBmb250LXdlaWdodDogNDAwO1xyXG4gIC8vICAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgLy8gICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgLy8gICB3aWR0aDogNDAwcHg7XHJcbiAgLy8gICBib3gtc2l6aW5nOiBub25lO1xyXG4gIC8vICAgYm9yZGVyOiAwO1xyXG4gIC8vICAgb3V0bGluZTogMDtcclxuICAvLyAgIGJvcmRlci1ib3R0b206IDJweCBzb2xpZCBibGFjaztcclxuICAvLyB9XHJcbiAgXHJcbiAgLnAxe1xyXG4gICAgICB3aWR0aDogNDAwcHg7XHJcbiAgICAgIG1hcmdpbi10b3A6IDIwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5idXR0b257XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luLXRvcDogMTBweDtcclxuICB9XHJcbiAgXHJcbiAgLmIxe1xyXG4gICAgICBtYXJnaW4tdG9wOiAzMHB4O1xyXG4gICAgICB3aWR0aDogMTAwcHg7XHJcbiAgfVxyXG4gIFxyXG4gIC5zZW50ZW5jZXtcclxuICAgICAgbWFyZ2luLXRvcDogNjBweDtcclxuICAgICAgLy8gd2lkdGg6IDEwMHB4O1xyXG4gIH1cclxuICBcclxuICAuaGlkZXtcclxuICAgICAgaGVpZ2h0OiA1MHB4O1xyXG4gIH1cclxuICAiLCIuaW1hZ2Uge1xuICBtYXJnaW46IGF1dG87XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbn1cblxuLmltZyB7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG4gIGhlaWdodDogNTAlO1xuICB3aWR0aDogMjAlO1xuICBvYmplY3QtZml0OiBjb250YWluO1xufVxuXG4uZm9ybSB7XG4gIG1hcmdpbjogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4udXNlcmlkIHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4uZjEge1xuICB3aWR0aDogNDAwcHg7XG4gIG1hcmdpbi10b3A6IDMwcHg7XG59XG5cbi5wMSB7XG4gIHdpZHRoOiA0MDBweDtcbiAgbWFyZ2luLXRvcDogMjBweDtcbn1cblxuLmJ1dHRvbiB7XG4gIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgbWFyZ2luLXRvcDogMTBweDtcbn1cblxuLmIxIHtcbiAgbWFyZ2luLXRvcDogMzBweDtcbiAgd2lkdGg6IDEwMHB4O1xufVxuXG4uc2VudGVuY2Uge1xuICBtYXJnaW4tdG9wOiA2MHB4O1xufVxuXG4uaGlkZSB7XG4gIGhlaWdodDogNTBweDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/Frontend/login/login.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/Frontend/login/login.component.ts ***!
    \***************************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppFrontendLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var LoginComponent = /*#__PURE__*/function () {
      function LoginComponent() {
        _classCallCheck(this, LoginComponent);

        this.hide = true;
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return LoginComponent;
    }();

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/login/login.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.scss */
      "./src/app/Frontend/login/login.component.scss"))["default"]]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/Frontend/side-nav/side-nav.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/Frontend/side-nav/side-nav.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFrontendSideNavSideNavComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mat-toolbar {\n  background: #8585805f;\n  color: whitesmoke;\n}\n\n.mat-sidenav {\n  background: #8080801f;\n  width: 250px;\n  text-align: center;\n}\n\n.mat-sidenav-container {\n  height: calc(100vh - 65px);\n}\n\n.logo {\n  margin-left: 5px;\n}\n\n.img {\n  margin-left: 50px;\n  height: 50px;\n  width: 100px;\n}\n\n.supAdmin {\n  margin-top: 20px;\n  border: none;\n  background: #635a5a;\n  color: whitesmoke;\n}\n\n.navList {\n  list-style: none;\n  line-height: 60px;\n  padding-left: 0px;\n}\n\n.navList li {\n  font-size: 18px;\n  font-weight: 600;\n  padding-left: 15px;\n  cursor: pointer;\n}\n\n.s1 {\n  padding-right: 5px;\n  color: black;\n}\n\n.nav {\n  justify-content: space-between;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvc2lkZS1uYXYvRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXHNpZGUtbmF2XFxzaWRlLW5hdi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvc2lkZS1uYXYvc2lkZS1uYXYuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxxQkFBQTtFQUNBLGlCQUFBO0FDQ0Y7O0FERUE7RUFDRSxxQkFBQTtFQUNBLFlBQUE7RUFDRSxrQkFBQTtBQ0NKOztBRFVBO0VBQ0UsMEJBQUE7QUNQRjs7QURVQTtFQUNFLGdCQUFBO0FDUEY7O0FEVUE7RUFFRSxpQkFBQTtFQUNBLFlBQUE7RUFDQSxZQUFBO0FDUkY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLFlBQUE7RUFDQSxtQkFBQTtFQUNBLGlCQUFBO0FDVEY7O0FEWUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsaUJBQUE7QUNURjs7QURhQTtFQUNFLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGtCQUFBO0VBQ0EsZUFBQTtBQ1ZGOztBRHNCQTtFQUNJLGtCQUFBO0VBQ0EsWUFBQTtBQ25CSjs7QURzQkE7RUFDSSw4QkFBQTtBQ25CSiIsImZpbGUiOiJzcmMvYXBwL0Zyb250ZW5kL3NpZGUtbmF2L3NpZGUtbmF2LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLm1hdC10b29sYmFyIHtcclxuICBiYWNrZ3JvdW5kOiAjODU4NTgwNWY7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5tYXQtc2lkZW5hdiB7XHJcbiAgYmFja2dyb3VuZDogIzgwODA4MDFmO1xyXG4gIHdpZHRoOiAyNTBweDtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLy8gLm1hdC1zaWRlbmF2OmhvdmVyIHtcclxuLy8gICBiYWNrZ3JvdW5kOiAjODA4MDgwMWY7XHJcbi8vICAgLy8gd2lkdGg6IDI1MHB4O1xyXG4vLyAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuLy8gICB3aWR0aDogMjUwcHg7XHJcbi8vICAgdHJhbnNpdGlvbjogMC4zcztcclxuLy8gfVxyXG5cclxuLm1hdC1zaWRlbmF2LWNvbnRhaW5lciB7XHJcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XHJcbn1cclxuXHJcbi5sb2dvIHtcclxuICBtYXJnaW4tbGVmdDogNXB4O1xyXG59XHJcblxyXG4uaW1nIHtcclxuICAvLyBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xyXG4gIGhlaWdodDogNTBweDtcclxuICB3aWR0aDogMTAwcHg7XHJcbiAgLy8gb2JqZWN0LWZpdDogY29udGFpbjtcclxufVxyXG5cclxuLnN1cEFkbWluIHtcclxuICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4gIGJvcmRlcjogbm9uZTtcclxuICBiYWNrZ3JvdW5kOiByZ2IoOTksIDkwLCA5MCk7XHJcbiAgY29sb3I6IHdoaXRlc21va2U7XHJcbn1cclxuXHJcbi5uYXZMaXN0IHtcclxuICBsaXN0LXN0eWxlOiBub25lO1xyXG4gIGxpbmUtaGVpZ2h0OiA2MHB4O1xyXG4gIHBhZGRpbmctbGVmdDogMHB4O1xyXG4gIC8vIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLm5hdkxpc3QgbGkge1xyXG4gIGZvbnQtc2l6ZTogMThweDtcclxuICBmb250LXdlaWdodDogNjAwO1xyXG4gIHBhZGRpbmctbGVmdDogMTVweDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi8vIC5uYXZMaXN0IGxpOmhvdmVyIHtcclxuLy8gLy8gICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxuLy8gICBjb2xvcjogIzdkN2Q3ZDtcclxuLy8gICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4vLyAgIC13ZWJraXQtYm94LXNoYWRvdzogMTBweCAxMHB4IDlweCAtN3B4IHJnYmEoMCwgMCwgMCwgMC42Myk7XHJcbi8vICAgLW1vei1ib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuLy8gICBib3gtc2hhZG93OiAxMHB4IDEwcHggOXB4IC03cHggcmdiYSgwLCAwLCAwLCAwLjYzKTtcclxuLy8gfVxyXG5cclxuLnMxe1xyXG4gICAgcGFkZGluZy1yaWdodDogNXB4O1xyXG4gICAgY29sb3I6IGJsYWNrO1xyXG59XHJcblxyXG4ubmF2IHtcclxuICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcclxufVxyXG4iLCIubWF0LXRvb2xiYXIge1xuICBiYWNrZ3JvdW5kOiAjODU4NTgwNWY7XG4gIGNvbG9yOiB3aGl0ZXNtb2tlO1xufVxuXG4ubWF0LXNpZGVuYXYge1xuICBiYWNrZ3JvdW5kOiAjODA4MDgwMWY7XG4gIHdpZHRoOiAyNTBweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWF0LXNpZGVuYXYtY29udGFpbmVyIHtcbiAgaGVpZ2h0OiBjYWxjKDEwMHZoIC0gNjVweCk7XG59XG5cbi5sb2dvIHtcbiAgbWFyZ2luLWxlZnQ6IDVweDtcbn1cblxuLmltZyB7XG4gIG1hcmdpbi1sZWZ0OiA1MHB4O1xuICBoZWlnaHQ6IDUwcHg7XG4gIHdpZHRoOiAxMDBweDtcbn1cblxuLnN1cEFkbWluIHtcbiAgbWFyZ2luLXRvcDogMjBweDtcbiAgYm9yZGVyOiBub25lO1xuICBiYWNrZ3JvdW5kOiAjNjM1YTVhO1xuICBjb2xvcjogd2hpdGVzbW9rZTtcbn1cblxuLm5hdkxpc3Qge1xuICBsaXN0LXN0eWxlOiBub25lO1xuICBsaW5lLWhlaWdodDogNjBweDtcbiAgcGFkZGluZy1sZWZ0OiAwcHg7XG59XG5cbi5uYXZMaXN0IGxpIHtcbiAgZm9udC1zaXplOiAxOHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBwYWRkaW5nLWxlZnQ6IDE1cHg7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuLnMxIHtcbiAgcGFkZGluZy1yaWdodDogNXB4O1xuICBjb2xvcjogYmxhY2s7XG59XG5cbi5uYXYge1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Frontend/side-nav/side-nav.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/Frontend/side-nav/side-nav.component.ts ***!
    \*********************************************************/

  /*! exports provided: SideNavComponent */

  /***/
  function srcAppFrontendSideNavSideNavComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SideNavComponent", function () {
      return SideNavComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var SideNavComponent = /*#__PURE__*/function () {
      function SideNavComponent() {
        _classCallCheck(this, SideNavComponent);
      }

      _createClass(SideNavComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return SideNavComponent;
    }();

    SideNavComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-side-nav',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./side-nav.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/side-nav/side-nav.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./side-nav.component.scss */
      "./src/app/Frontend/side-nav/side-nav.component.scss"))["default"]]
    })], SideNavComponent);
    /***/
  },

  /***/
  "./src/app/Frontend/super-admin/super-admin.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/Frontend/super-admin/super-admin.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppFrontendSuperAdminSuperAdminComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".f {\n  margin-top: 25px;\n  margin-left: 13%;\n  width: 20%;\n  height: 20%;\n}\n\n.q {\n  margin-top: 5px;\n  margin-left: 7%;\n  width: 20%;\n}\n\n.q1 {\n  margin-top: 5px;\n  margin-left: 7%;\n  width: 20%;\n}\n\n.q2 {\n  margin-top: 5px;\n  margin-left: 13%;\n  width: 20%;\n  height: 20%;\n}\n\n.q3 {\n  margin-top: 5px;\n  margin-left: 7%;\n  width: 20%;\n}\n\n.q4 {\n  margin-top: 5px;\n  margin-left: 7%;\n  width: 20%;\n}\n\n.q5 {\n  margin-top: 5px;\n  margin-left: 40%;\n  width: 20%;\n}\n\n.add {\n  margin-top: 1%;\n  margin-left: 46%;\n}\n\n.submit {\n  margin-top: 2%;\n  margin-left: 2%;\n}\n\n.tab {\n  width: 10%;\n  margin-top: 2%;\n}\n\n.table, th, td {\n  justify-content: space-between;\n  text-align: center;\n  margin: 100px 100px 100px 100px;\n  padding: 10px 50px 10px 55px;\n}\n\n.sidenav {\n  width: 20%;\n  background-color: grey;\n}\n\n.vertical-line {\n  display: inline-block;\n  border-left: 1px solid #ccc;\n  margin: 0 10px;\n  height: px;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vRDpcXElDSUNJXFxpY2ljaS9zcmNcXGFwcFxcRnJvbnRlbmRcXHN1cGVyLWFkbWluXFxzdXBlci1hZG1pbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxnQkFBQTtFQUNBLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7QUNDSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxlQUFBO0VBQ0EsVUFBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtBQ0FKOztBREdBO0VBQ0ksZUFBQTtFQUNBLGVBQUE7RUFDQSxVQUFBO0FDQUo7O0FER0E7RUFDSSxlQUFBO0VBQ0EsZUFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLGVBQUE7RUFDQSxnQkFBQTtFQUNBLFVBQUE7QUNBSjs7QURHQTtFQUNJLGNBQUE7RUFDQSxnQkFBQTtBQ0FKOztBRElBO0VBQ0ksY0FBQTtFQUNBLGVBQUE7QUNESjs7QURLQTtFQUdJLFVBQUE7RUFFQSxjQUFBO0FDTEo7O0FEUUE7RUFDSSw4QkFBQTtFQUNBLGtCQUFBO0VBQ0EsK0JBQUE7RUFDQSw0QkFBQTtBQ0xKOztBRFNBO0VBQ0ksVUFBQTtFQUNBLHNCQUFBO0FDTko7O0FEbUJBO0VBQ0kscUJBQUE7RUFDSSwyQkFBQTtFQUNBLGNBQUE7RUFDQSxVQUFBO0FDaEJSIiwiZmlsZSI6InNyYy9hcHAvRnJvbnRlbmQvc3VwZXItYWRtaW4vc3VwZXItYWRtaW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuZntcclxuICAgIG1hcmdpbi10b3A6IDI1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG4gICAgLy8gZm9udC1zaXplOiAxNHB4O1xyXG59XHJcblxyXG4ucXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTtcclxuICAgIHdpZHRoOiAyMCU7XHJcbn1cclxuXHJcbi5xMXtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxuICAgIG1hcmdpbi1sZWZ0OiA3JTsgXHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucTJ7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogMTMlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGhlaWdodDogMjAlO1xyXG59XHJcblxyXG4ucTN7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucTR7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNyU7XHJcbiAgICB3aWR0aDogMjAlO1xyXG59XHJcblxyXG4ucTV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbiAgICBtYXJnaW4tbGVmdDogNDAlO1xyXG4gICAgd2lkdGg6IDIwJTtcclxufVxyXG5cclxuLmFkZHtcclxuICAgIG1hcmdpbi10b3A6IDElO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDQ2JTtcclxuICAgIC8vIGJhY2tncm91bmQ6IG9yYW5nZTtcclxufVxyXG5cclxuLnN1Ym1pdHtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG4gICAgbWFyZ2luLWxlZnQ6IDIlO1xyXG4gICAgLy8gYmFja2dyb3VuZDogb3JhbmdlO1xyXG59XHJcblxyXG4udGFie1xyXG4gICAgLy8gYm9yZGVyOiAxcHggc29saWQgYmxhY2s7XHJcbiAgICAvLyBib3JkZXItcmFkaXVzOiAyMHB4O1xyXG4gICAgd2lkdGg6IDEwJTtcclxuICAgIC8vIG1hcmdpbi1sZWZ0OiA1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4udGFibGUsIHRoLCB0ZCB7XHJcbiAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBtYXJnaW46IDEwMHB4IDEwMHB4IDEwMHB4IDEwMHB4O1xyXG4gICAgcGFkZGluZzogMTBweCA1MHB4IDEwcHggNTVweDtcclxufVxyXG5cclxuXHJcbi5zaWRlbmF2e1xyXG4gICAgd2lkdGg6IDIwJTtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IGdyZXk7XHJcbn1cclxuXHJcbi8vIC5MSUR7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbi8vIH1cclxuXHJcbi8vIC5TSUR7XHJcbi8vICAgICBtYXJnaW4tdG9wOiAyMHB4O1xyXG4vLyAgICAgbWFyZ2luLWxlZnQ6IDUwcHg7XHJcbi8vIH1cclxuXHJcbi52ZXJ0aWNhbC1saW5le1xyXG4gICAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gICAgICAgIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcclxuICAgICAgICBtYXJnaW46IDAgMTBweDtcclxuICAgICAgICBoZWlnaHQ6IHB4O1xyXG59IiwiLmYge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tbGVmdDogMTMlO1xuICB3aWR0aDogMjAlO1xuICBoZWlnaHQ6IDIwJTtcbn1cblxuLnEge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnExIHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNyU7XG4gIHdpZHRoOiAyMCU7XG59XG5cbi5xMiB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDEzJTtcbiAgd2lkdGg6IDIwJTtcbiAgaGVpZ2h0OiAyMCU7XG59XG5cbi5xMyB7XG4gIG1hcmdpbi10b3A6IDVweDtcbiAgbWFyZ2luLWxlZnQ6IDclO1xuICB3aWR0aDogMjAlO1xufVxuXG4ucTQge1xuICBtYXJnaW4tdG9wOiA1cHg7XG4gIG1hcmdpbi1sZWZ0OiA3JTtcbiAgd2lkdGg6IDIwJTtcbn1cblxuLnE1IHtcbiAgbWFyZ2luLXRvcDogNXB4O1xuICBtYXJnaW4tbGVmdDogNDAlO1xuICB3aWR0aDogMjAlO1xufVxuXG4uYWRkIHtcbiAgbWFyZ2luLXRvcDogMSU7XG4gIG1hcmdpbi1sZWZ0OiA0NiU7XG59XG5cbi5zdWJtaXQge1xuICBtYXJnaW4tdG9wOiAyJTtcbiAgbWFyZ2luLWxlZnQ6IDIlO1xufVxuXG4udGFiIHtcbiAgd2lkdGg6IDEwJTtcbiAgbWFyZ2luLXRvcDogMiU7XG59XG5cbi50YWJsZSwgdGgsIHRkIHtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIG1hcmdpbjogMTAwcHggMTAwcHggMTAwcHggMTAwcHg7XG4gIHBhZGRpbmc6IDEwcHggNTBweCAxMHB4IDU1cHg7XG59XG5cbi5zaWRlbmF2IHtcbiAgd2lkdGg6IDIwJTtcbiAgYmFja2dyb3VuZC1jb2xvcjogZ3JleTtcbn1cblxuLnZlcnRpY2FsLWxpbmUge1xuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgI2NjYztcbiAgbWFyZ2luOiAwIDEwcHg7XG4gIGhlaWdodDogcHg7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/Frontend/super-admin/super-admin.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/Frontend/super-admin/super-admin.component.ts ***!
    \***************************************************************/

  /*! exports provided: SuperAdminComponent */

  /***/
  function srcAppFrontendSuperAdminSuperAdminComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SuperAdminComponent", function () {
      return SuperAdminComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");

    var SuperAdminComponent = /*#__PURE__*/function () {
      function SuperAdminComponent(fb) {
        _classCallCheck(this, SuperAdminComponent);

        this.fb = fb;
        this.foods = [{
          value: 'Available',
          viewValue: 'Available'
        }, {
          value: 'Out of Stock',
          viewValue: 'Out Of Stock'
        }];
        this.listData = [];
        this.userForm = this.fb.group({
          stationeryId: [''],
          stationeryName: [''],
          stationeryQty: [''],
          stationeryRemark: [''],
          stationeryDesc: [''],
          stationeryStatus: [''],
          stationeryOrderStatus: ['']
        });
        this.options = fb.group({
          fixed: false
        });
      }

      _createClass(SuperAdminComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "addRow",
        value: function addRow() {
          this.listData.push(this.userForm.value);
          this.userForm.reset();
        }
      }, {
        key: "reset",
        value: function reset() {
          this.userForm.reset();
        }
      }, {
        key: "remove",
        value: function remove(element) {
          var _this = this;

          this.listData.forEach(function (value, index) {
            if (value == element) _this.listData.splice(index, 1);
          });
        }
      }]);

      return SuperAdminComponent;
    }();

    SuperAdminComponent.ctorParameters = function () {
      return [{
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__["FormBuilder"]
      }];
    };

    SuperAdminComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-super-admin',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./super-admin.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/Frontend/super-admin/super-admin.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./super-admin.component.scss */
      "./src/app/Frontend/super-admin/super-admin.component.scss"))["default"]]
    })], SuperAdminComponent);
    /***/
  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./Frontend/login/login.component */
    "./src/app/Frontend/login/login.component.ts");
    /* harmony import */


    var _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./Frontend/super-admin/super-admin.component */
    "./src/app/Frontend/super-admin/super-admin.component.ts");
    /* harmony import */


    var _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Frontend/side-nav/side-nav.component */
    "./src/app/Frontend/side-nav/side-nav.component.ts");

    var routes = [{
      path: "",
      component: _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]
    }, {
      path: "side-nav",
      component: _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_5__["SideNavComponent"]
    }, {
      path: "super-admin",
      component: _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_4__["SuperAdminComponent"]
    }];

    var AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    });

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.scss":
  /*!************************************!*\
    !*** ./src/app/app.component.scss ***!
    \************************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = /*#__PURE__*/_createClass(function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'icici';
    });

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.scss */
      "./src/app/app.component.scss"))["default"]]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./Frontend/login/login.component */
    "./src/app/Frontend/login/login.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material */
    "./node_modules/@angular/material/esm2015/material.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! @angular/material/icon */
    "./node_modules/@angular/material/esm2015/icon.js");
    /* harmony import */


    var _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./Frontend/super-admin/super-admin.component */
    "./src/app/Frontend/super-admin/super-admin.component.ts");
    /* harmony import */


    var _angular_material_table__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/material/table */
    "./node_modules/@angular/material/esm2015/table.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! @angular/material/sidenav */
    "./node_modules/@angular/material/esm2015/sidenav.js");
    /* harmony import */


    var _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./Frontend/side-nav/side-nav.component */
    "./src/app/Frontend/side-nav/side-nav.component.ts");

    var AppModule = /*#__PURE__*/_createClass(function AppModule() {
      _classCallCheck(this, AppModule);
    });

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _Frontend_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], _Frontend_super_admin_super_admin_component__WEBPACK_IMPORTED_MODULE_10__["SuperAdminComponent"], _Frontend_side_nav_side_nav_component__WEBPACK_IMPORTED_MODULE_14__["SideNavComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatFormFieldModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInputModule"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIconModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatButtonModule"], _angular_material_table__WEBPACK_IMPORTED_MODULE_11__["MatTableModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["ReactiveFormsModule"], _angular_material_sidenav__WEBPACK_IMPORTED_MODULE_13__["MatSidenavModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatToolbarModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatMenuModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatDividerModule"], _angular_material__WEBPACK_IMPORTED_MODULE_7__["MatSelectModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
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

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! hammerjs */
    "./node_modules/hammerjs/hammer.js");
    /* harmony import */


    var hammerjs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(hammerjs__WEBPACK_IMPORTED_MODULE_1__);
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_5__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_4__["AppModule"])["catch"](function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\ICICI\icici\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map