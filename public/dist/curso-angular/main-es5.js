function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

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


    __webpack_exports__["default"] = "\n\n    <app-header></app-header>\n\n    <router-outlet></router-outlet>\n\n    <app-footer></app-footer>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppCarritoCarritoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"carrito\" *ngIf=\"bandera\">\n  <div class=\"card-body\">\n    <table class=\"table table-hover\">\n      <thead>\n        <tr>\n          <th scope=\"col\">Nombre</th>\n          <th scope=\"col\">Imagen</th>\n          <th scope=\"col\">Precio</th>\n          <th scope=\"col\">Quitar</th>\n        </tr>\n      </thead>\n      <tbody>\n        <tr *ngFor=\"let remera of remeras\">\n          <th scope=\"row\">{{remera.nombre}}</th>\n          <td><img src=\"assets/{{remera.imagen}}\" width=\"60px\" alt=\"...\"></td>\n          <th scope=\"row\">${{remera.precio}}</th>\n          <td scope=\"col\"><button class=\"boton\" (click)=\"eliminar(remera)\">x</button>\n          </td>\n        </tr>\n\n      </tbody>\n    </table>\n    <div class=\"pie-tabla\">\n      <p class=\"card-text\">Seguir mirando nuestro <a routerLink=\"/remeras\">Catalogo</a></p>\n    </div>\n \n\n    <div class=\"card total\">\n      <div class=\"card-body tarjeta-total\">\n          <h5 class=\"card-title\">Total a pagar</h5>\n          <h5 class=\"card-text\">${{total}}</h5>\n          <button class=\"btn btn-success btn-block btn-pagar\" (click)=\"pagar()\">Finalizar compra</button>\n      </div>\n    </div>\n\n  </div>\n</div>\n\n<div class=\"card noHay\" *ngIf=\"!bandera\">\n  <div class=\"card-body\">\n      <h5 class=\"card-title\">El carrito esta vacio</h5>\n      <p class=\"card-text\">Seguir mirando nuestro <a routerLink=\"/remeras\">Catalogo</a></p>\n      \n  </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppFooterFooterComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<footer>\n    <div class=\"redes\">\n        <h5 class=\"h5\">Redes Sociales</h5>\n    </div>\n    <a class=\"btn btn-primary\" href=\"#\" disabled=\"disabled\">f</a>\n    <a class=\"btn btn-primary\" href=\"#\">t</a>\n    <a class=\"btn btn-primary\" href=\"#\">i</a>\n</footer>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHeaderHeaderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<!-- <header>\n        <nav>\n            <div class=\"d-flex\">\n                <div class=\"mr-auto p-2\"><a class=\"\" routerLink=\"/\"><img src=\"assets\\logochc.png\"  class=\"animated infinite pulse delay-2s\" width=\"75px\" alt=\"\"></a></div>\n                <br>\n                \n                <div class=\"p-2\"><a class=\"btn m-1\" routerLink=\"remeras\">remeras</a></div>\n                \n                <div class=\"p-2\"><a class=\"btn m-1\" routerLink=\"carrito\">carrito<span class=\"badge badge-pill badge-danger\">{{servicio.contador}}</span></a></div>\n\n                <div class=\"p-2\"><a class=\"btn m-1\" routerLink=\"hola\">?</a> </div>\n            </div>\n        </nav>\n    </header> -->\n\n    <div class=\"mr-auto p-2\"><a class=\"m-2\" routerLink=\"/\"><img src=\"assets\\logochc.png\" width=\"80px\" alt=\"\"></a></div>\n\n<ul>\n    \n    <a routerLink=\"/\">Home</a>\n    <a routerLink=\"remeras\">Remeras</a>\n    <a routerLink=\"hola\">?</a>\n    <a routerLink=\"carrito\">Carrito <span class=\"badge badge-pill badge-danger\">{{servicio.contador}}</span></a>\n\n</ul>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/hola-mundo/hola-mundo.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/hola-mundo/hola-mundo.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppHolaMundoHolaMundoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"componenteLista\">\n\n  <div class=\"row\">\n    <div class=\"col-sm-6\">\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <h4 class=\"h4\">Contactate con nosotros</h4>\n        </div>\n        <div class=\"datos\">\n          <ul class=\"list-group list-group-flush\">\n            <li class=\"list-group-item\">Correo electronico: chc.remeras@gmail.com</li>\n            <li class=\"list-group-item\">Telefono: +54 9 3515065275</li>\n            <li class=\"list-group-item\">Comodoro Rivadavia</li>\n            <li class=\"list-group-item\">Chubut</li>\n            <li class=\"list-group-item\">Redes Sociales</li>\n          </ul>\n        </div>\n        <iframe\n          src=\"https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d11127.86058218838!2d-67.469847!3d-45.791926!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x4ec4fc9dd9fe1235!2sCHC%20Remeras!5e0!3m2!1ses-419!2sar!4v1570517184394!5m2!1ses-419!2sar\"\n          width=\"100%\" frameborder=\"0\" style=\"border:0;\" allowfullscreen=\"\"></iframe>\n      </div>\n\n    </div>\n\n    <div class=\"col-sm-6 formulario\">\n\n      <div class=\"card\">\n        <div class=\"card-title\">\n          <h4 class=\"h4\">Dudas y Sugerencias</h4>\n        </div>\n        <form action=\"\">\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"text\" placeholder=\"Ingresa tu nombre\">\n          </div>\n          <div class=\"form-group\">\n            <input class=\"form-control\" type=\"email\" placeholder=\"Ingresa tu correo\">\n          </div>\n          <div class=\"form-group\">\n            <textarea class=\"form-control\" rows=\"5\" placeholder=\"Ingresa tu mensaje o comentario\"></textarea>\n          </div>\n          <div class=\"botonform\">\n            <button class=\"btn btn-primary btn-block\">Enviar</button>\n          </div>\n\n        </form>\n      </div>\n    </div>\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html":
  /*!************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html ***!
    \************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppInicioInicioComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"componenteInicio\">\n\n  <!-- <div class=\"animated fadeIn delay-500ms\"> -->\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Unicas, como vos</h5>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam odit\n              exercitationem cumque quas esse, nobis ullam reprehenderit nostrum dolores quod, praesentium ab explicabo\n              reiciendis sunt aspernatur, quasi debitis fugiat!</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <img src=\"assets\\manchas.jpg\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Diseños personalizados</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n    <div class=\"row\">\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <img src=\"assets\\remeras.jpg\" class=\"card-img-top\" alt=\"...\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Diseños personalizados</h5>\n            <p class=\"card-text\">With supporting text below as a natural lead-in to additional content.</p>\n          </div>\n        </div>\n      </div>\n      <div class=\"col-sm-6\">\n        <div class=\"card\">\n          <div class=\"card-body\">\n            <h5 class=\"card-title\">Unicas, como vos</h5>\n            <p class=\"card-text\">Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque ipsam odit\n              exercitationem cumque quas esse, nobis ullam reprehenderit nostrum dolores quod, praesentium ab explicabo\n              reiciendis sunt aspernatur, quasi debitis fugiat!</p>\n          </div>\n        </div>\n      </div>\n    </div>\n\n  <!-- </div> -->\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remera/remera.component.html":
  /*!********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remera/remera.component.html ***!
    \********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRemerasRemeraRemeraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"card\">\n    <div id=\"carouselExampleControls{{remera.id}}\" class=\"carousel slide card-img-top\" data-ride=\"carousel\">\n        <div class=\"carousel-inner\">\n            <div class=\"carousel-item active\">\n                <img class=\"d-block w-100\" src=\"assets/{{remera.imagen}}\" alt=\"First slide\">\n            </div>\n            <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/{{remera.imagen}}\" alt=\"Second slide\">\n            </div>\n            <div class=\"carousel-item\">\n                <img class=\"d-block w-100\" src=\"assets/{{remera.imagen}}\" alt=\"Third slide\">\n            </div>\n        </div>\n        <a class=\"carousel-control-prev\" href=\"#carouselExampleControls{{remera.id}}\" role=\"button\" data-slide=\"prev\">\n            <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Previous</span>\n        </a>\n        <a class=\"carousel-control-next\" href=\"#carouselExampleControls{{remera.id}}\" role=\"button\" data-slide=\"next\">\n            <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n            <span class=\"sr-only\">Next</span>\n        </a>\n    </div>\n\n\n    <div class=\"card-body\">\n        <h5 class=\"card-title\">{{remera.nombre}}</h5>\n        <p class=\"card-text\">Precio: {{remera.precio}}\n            <div class=\"enlace\">\n                <button (click)=\"showSuccess()\" class=\"btn btn-success mr-1\">Comprar</button>\n                <button (click)=\"carrito(remera)\" class=\"btn btn-warning btn-carrito\">+</button>\n            </div>\n    </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remeras.component.html":
  /*!**************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remeras.component.html ***!
    \**************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppRemerasRemerasComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"componenteInicio\">\n\n    <div class=\"row animated fadeIn delay-500ms\">\n\n        <div class=\"col-sm-4 columna\" *ngFor=\"let remera of remeras\">\n\n        <app-remera [remera]=\"remera\"></app-remera>\n\n    </div>\n\n    </div>\n</div>\n";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

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
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
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
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
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

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
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
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
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

    var routes = [];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */";
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
    /* harmony import */


    var _app_controlador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../app/controlador.service */
    "./src/app/controlador.service.ts");

    var AppComponent =
    /*#__PURE__*/
    function () {
      function AppComponent(servicio) {
        _classCallCheck(this, AppComponent);

        this.servicio = servicio;
        this.title = 'curso-angular';
        this.setContador();
      }

      _createClass(AppComponent, [{
        key: "setContador",
        value: function setContador() {
          this.contador = this.servicio.getCarrito().length;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _app_controlador_service__WEBPACK_IMPORTED_MODULE_2__["ControladorService"]
      }];
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
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


    var _hola_mundo_hola_mundo_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./hola-mundo/hola-mundo.component */
    "./src/app/hola-mundo/hola-mundo.component.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./inicio/inicio.component */
    "./src/app/inicio/inicio.component.ts");
    /* harmony import */


    var _remeras_remeras_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./remeras/remeras.component */
    "./src/app/remeras/remeras.component.ts");
    /* harmony import */


    var _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./carrito/carrito.component */
    "./src/app/carrito/carrito.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _controlador_service__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./controlador.service */
    "./src/app/controlador.service.ts");
    /* harmony import */


    var _header_header_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./header/header.component */
    "./src/app/header/header.component.ts");
    /* harmony import */


    var _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./footer/footer.component */
    "./src/app/footer/footer.component.ts");
    /* harmony import */


    var _remeras_remera_remera_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./remeras/remera/remera.component */
    "./src/app/remeras/remera/remera.component.ts");

    var routes = [{
      path: '',
      component: _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"]
    }, {
      path: 'hola',
      component: _hola_mundo_hola_mundo_component__WEBPACK_IMPORTED_MODULE_5__["HolaMundoComponent"]
    }, {
      path: 'remeras',
      component: _remeras_remeras_component__WEBPACK_IMPORTED_MODULE_8__["RemerasComponent"]
    }, {
      path: 'carrito',
      component: _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__["CarritoComponent"]
    }];

    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _hola_mundo_hola_mundo_component__WEBPACK_IMPORTED_MODULE_5__["HolaMundoComponent"], _inicio_inicio_component__WEBPACK_IMPORTED_MODULE_7__["InicioComponent"], _remeras_remeras_component__WEBPACK_IMPORTED_MODULE_8__["RemerasComponent"], _carrito_carrito_component__WEBPACK_IMPORTED_MODULE_9__["CarritoComponent"], _header_header_component__WEBPACK_IMPORTED_MODULE_13__["HeaderComponent"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_14__["FooterComponent"], _remeras_remera_remera_component__WEBPACK_IMPORTED_MODULE_15__["RemeraComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_router__WEBPACK_IMPORTED_MODULE_6__["RouterModule"].forRoot(routes), _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_10__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_11__["ToastrModule"].forRoot({
        timeOut: 3000,
        positionClass: 'toast-bottom-right'
      })],
      providers: [_controlador_service__WEBPACK_IMPORTED_MODULE_12__["ControladorService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/carrito/carrito.component.css":
  /*!***********************************************!*\
    !*** ./src/app/carrito/carrito.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppCarritoCarritoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".carrito{\r\n    padding-top: 20px;\r\n    padding-right: 5px;\r\n    padding-left: 5px;\r\n}\r\n\r\n.card-body{\r\n    background-color: white;\r\n    padding: 5px;\r\n    font-size: 12px;\r\n    \r\n}\r\n\r\n.table{\r\n    text-align: left;\r\n  /*   color: #3e4493; */\r\n    width: 100%;\r\n    align-items: center;\r\n}\r\n\r\n.boton{\r\n    margin: 0;\r\n    padding: 2px;\r\n    background-color:transparent;\r\n    color: #dc3545;\r\n    border:none;\r\n\r\n}\r\n\r\n.noHay{\r\n    text-align: center;\r\n    padding: 30px;\r\n}\r\n\r\n.total h5, p{\r\n    display: inline;\r\n    padding: 10px;\r\n    \r\n}\r\n\r\n.total{\r\n    text-align: center;\r\n\r\n}\r\n\r\n.btn-pagar{\r\n    padding-right: 20px;\r\n    padding-left: 20px;\r\n    margin-top: 10px;\r\n    background-color: #07aaeb;\r\n    border: none;\r\n}\r\n\r\n.pie-tabla{\r\n    padding: 20px;\r\n    text-align: right;\r\n}\r\n\r\ntd, th{\r\n    text-align: center;\r\n}\r\n\r\n.tarjeta-total{\r\n    border: none;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY2Fycml0by9jYXJyaXRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxpQkFBaUI7SUFDakIsa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLHVCQUF1QjtJQUN2QixZQUFZO0lBQ1osZUFBZTs7QUFFbkI7O0FBQ0E7SUFDSSxnQkFBZ0I7RUFDbEIsc0JBQXNCO0lBQ3BCLFdBQVc7SUFDWCxtQkFBbUI7QUFDdkI7O0FBRUE7SUFDSSxTQUFTO0lBQ1QsWUFBWTtJQUNaLDRCQUE0QjtJQUM1QixjQUFjO0lBQ2QsV0FBVzs7QUFFZjs7QUFFQTtJQUNJLGtCQUFrQjtJQUNsQixhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGFBQWE7O0FBRWpCOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQixrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLHlCQUF5QjtJQUN6QixZQUFZO0FBQ2hCOztBQUVBO0lBQ0ksYUFBYTtJQUNiLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLGtCQUFrQjtBQUN0Qjs7QUFFQTtJQUNJLFlBQVk7QUFDaEIiLCJmaWxlIjoic3JjL2FwcC9jYXJyaXRvL2NhcnJpdG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jYXJyaXRve1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxufVxyXG5cclxuLmNhcmQtYm9keXtcclxuICAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICAgcGFkZGluZzogNXB4O1xyXG4gICAgZm9udC1zaXplOiAxMnB4O1xyXG4gICAgXHJcbn1cclxuLnRhYmxle1xyXG4gICAgdGV4dC1hbGlnbjogbGVmdDtcclxuICAvKiAgIGNvbG9yOiAjM2U0NDkzOyAqL1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG59XHJcblxyXG4uYm90b257XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAycHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOnRyYW5zcGFyZW50O1xyXG4gICAgY29sb3I6ICNkYzM1NDU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuXHJcbn1cclxuXHJcbi5ub0hheXtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDMwcHg7XHJcbn1cclxuXHJcbi50b3RhbCBoNSwgcHtcclxuICAgIGRpc3BsYXk6IGlubGluZTtcclxuICAgIHBhZGRpbmc6IDEwcHg7XHJcbiAgICBcclxufVxyXG5cclxuLnRvdGFse1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG5cclxufVxyXG5cclxuLmJ0bi1wYWdhcntcclxuICAgIHBhZGRpbmctcmlnaHQ6IDIwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YWFlYjtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufVxyXG5cclxuLnBpZS10YWJsYXtcclxuICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxufVxyXG5cclxudGQsIHRoe1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4udGFyamV0YS10b3RhbHtcclxuICAgIGJvcmRlcjogbm9uZTtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/carrito/carrito.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/carrito/carrito.component.ts ***!
    \**********************************************/

  /*! exports provided: CarritoComponent */

  /***/
  function srcAppCarritoCarritoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CarritoComponent", function () {
      return CarritoComponent;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _controlador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../controlador.service */
    "./src/app/controlador.service.ts");

    var CarritoComponent =
    /*#__PURE__*/
    function () {
      function CarritoComponent(toastr, servicio) {
        _classCallCheck(this, CarritoComponent);

        this.toastr = toastr;
        this.servicio = servicio;
        this.remeras = [];
        this.bandera = false;
        this.total = 0;
        this.remeras = servicio.getCarrito();

        if (this.remeras.length > 0) {
          this.bandera = true;
          this.total = this.servicio.getTotal();
        }
      }

      _createClass(CarritoComponent, [{
        key: "eliminar",
        value: function eliminar(remera) {
          if (confirm('Desea quitar este producto?')) {
            this.servicio.deleteCarrito(remera);
            this.total = this.servicio.getTotal();

            if (this.remeras.length > 0) {
              this.bandera = true;
            } else {
              this.bandera = false;
            }

            this.toastr.warning('Carrito', 'Se elimino articulo', {
              timeOut: 3000
            });
            this.servicio.getCount();
            console.log('remera eliminada ', remera);
          }
        }
      }, {
        key: "pagar",
        value: function pagar() {
          return false;
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CarritoComponent;
    }();

    CarritoComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }, {
        type: _controlador_service__WEBPACK_IMPORTED_MODULE_3__["ControladorService"]
      }];
    };

    CarritoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-carrito',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./carrito.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/carrito/carrito.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./carrito.component.css */
      "./src/app/carrito/carrito.component.css")).default]
    })], CarritoComponent);
    /***/
  },

  /***/
  "./src/app/controlador.service.ts":
  /*!****************************************!*\
    !*** ./src/app/controlador.service.ts ***!
    \****************************************/

  /*! exports provided: ControladorService */

  /***/
  function srcAppControladorServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ControladorService", function () {
      return ControladorService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ControladorService =
    /*#__PURE__*/
    function () {
      function ControladorService() {
        _classCallCheck(this, ControladorService);

        this.remeras = [{
          "id": 1,
          "nombre": "Cosas Imposibles",
          "descripcion": "Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
          "imagen": 'cosasimposibles.jpg',
          "precio": 300
        }, {
          "id": 2,
          "nombre": "Daft Punk",
          "descripcion": "Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
          "imagen": "daftpunk.jpg",
          "precio": 400
        }, {
          "id": 3,
          "nombre": "Hakuna Matata (bitch)",
          "descripcion": "Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
          "imagen": 'hakuna.jpg',
          "precio": 500
        }, {
          "id": 4,
          "nombre": "Ester Piscore",
          "descripcion": "Voluptatem consectetur nam, ducimus consequatur, eveniet atque ipsa repudiandae fugit quisquam placeat est dignissimos earum autem porro similique explicabo velit officia. Excepturi?",
          "imagen": "esterpiscore.jpg",
          "precio": 600
        }];
        this.prueba = 'todo funcionando';
        this.remerasCarrito = [];
        this.total = 0;
      }

      _createClass(ControladorService, [{
        key: "getCount",
        value: function getCount() {
          this.contador = this.getCarrito().length;
        }
        /*
          getTotal(){
            this.remerasCarrito.forEach(remera => {
              this.total+=remera.precio;
              console.log('obejot remera: ',remera);
            });
            console.log('El total es: ',this.total);
            return this.total;
          } */

      }, {
        key: "getTotal",
        value: function getTotal() {
          this.total = 0;

          for (var i = 0; i < this.remerasCarrito.length; i++) {
            this.total += this.remerasCarrito[i].precio;
          }

          return this.total;
        }
      }, {
        key: "getRemeras",
        value: function getRemeras() {
          return this.remeras;
        }
      }, {
        key: "getCarrito",
        value: function getCarrito() {
          return this.remerasCarrito;
        }
      }, {
        key: "setCarrito",
        value: function setCarrito(remera) {
          this.remerasCarrito.push(remera);
        }
      }, {
        key: "deleteCarrito",
        value: function deleteCarrito(remera) {
          for (var i = 0; i < this.remerasCarrito.length; i++) {
            if (this.remerasCarrito[i] == remera) {
              this.remerasCarrito.splice(i, 1); // this.total-=this.remerasCarrito[i].precio;
            }

            console.log('Este es el impoerte resultante', this.total);
          }
        }
      }]);

      return ControladorService;
    }();

    ControladorService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], ControladorService);
    /***/
  },

  /***/
  "./src/app/footer/footer.component.css":
  /*!*********************************************!*\
    !*** ./src/app/footer/footer.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppFooterFooterComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "footer{\r\n    background-color: #3e4493;\r\n    color: #fff;\r\n    font-size: 12px;\r\n    padding: 25px;\r\n    margin-top:20px;\r\n    text-align: center;\r\n}\r\n\r\nfooter a{\r\n    margin: 10px;\r\n    background-color: transparent;\r\n    padding: 8px;\r\n    font-size: 15px;\r\n    padding-left: 5px;\r\n    padding-right: 5px;\r\n    border: none;\r\n    border-radius: 50%;\r\n    color:#fff;\r\n}\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0kseUJBQXlCO0lBQ3pCLFdBQVc7SUFDWCxlQUFlO0lBQ2YsYUFBYTtJQUNiLGVBQWU7SUFDZixrQkFBa0I7QUFDdEI7O0FBRUE7SUFDSSxZQUFZO0lBQ1osNkJBQTZCO0lBQzdCLFlBQVk7SUFDWixlQUFlO0lBQ2YsaUJBQWlCO0lBQ2pCLGtCQUFrQjtJQUNsQixZQUFZO0lBQ1osa0JBQWtCO0lBQ2xCLFVBQVU7QUFDZCIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbImZvb3RlcntcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTQ0OTM7XHJcbiAgICBjb2xvcjogI2ZmZjtcclxuICAgIGZvbnQtc2l6ZTogMTJweDtcclxuICAgIHBhZGRpbmc6IDI1cHg7XHJcbiAgICBtYXJnaW4tdG9wOjIwcHg7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbmZvb3RlciBhe1xyXG4gICAgbWFyZ2luOiAxMHB4O1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgICBwYWRkaW5nOiA4cHg7XHJcbiAgICBmb250LXNpemU6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDVweDtcclxuICAgIHBhZGRpbmctcmlnaHQ6IDVweDtcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgIGNvbG9yOiNmZmY7XHJcbn1cclxuXHJcblxyXG4iXX0= */";
    /***/
  },

  /***/
  "./src/app/footer/footer.component.ts":
  /*!********************************************!*\
    !*** ./src/app/footer/footer.component.ts ***!
    \********************************************/

  /*! exports provided: FooterComponent */

  /***/
  function srcAppFooterFooterComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FooterComponent", function () {
      return FooterComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var FooterComponent =
    /*#__PURE__*/
    function () {
      function FooterComponent() {
        _classCallCheck(this, FooterComponent);
      }

      _createClass(FooterComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FooterComponent;
    }();

    FooterComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-footer',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./footer.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/footer/footer.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./footer.component.css */
      "./src/app/footer/footer.component.css")).default]
    })], FooterComponent);
    /***/
  },

  /***/
  "./src/app/header/header.component.css":
  /*!*********************************************!*\
    !*** ./src/app/header/header.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppHeaderHeaderComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\nheader{\r\n    text-align: center;\r\n    align-items: center;\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n    background: #fff;\r\n    padding-bottom: 0;\r\n    \r\n}\r\n.barrasuperior{\r\n    /* -webkit-box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9);\r\n    -moz-box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9);\r\n    box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9); */\r\n\r\n    border: none;\r\n    text-align: center;\r\n    padding: 5px\r\n}\r\nimg{\r\n    padding: 10px;\r\n}\r\nnav{\r\n\r\n    background-color: white;\r\n\r\n    width: gray;\r\n    text-align: left;\r\n    margin:auto;\r\n    text-align: center;\r\n \r\n   \r\n\r\n    border-radius: .25rem;\r\n   \r\n}\r\nnav img{\r\n    padding: 5px;\r\n}\r\nnav a.btn{\r\n\r\n    display: inline;\r\n   padding: 0px;\r\n   background-color: transparent;\r\n   color: #3e4493;\r\n   border:none;\r\n   font-size: 20px;\r\n\r\n}\r\ni{\r\n    padding: 0px;\r\n}\r\nul{\r\n    margin: 0;\r\n    padding: 0;\r\n\r\n    width: 100%;\r\n    background: #3e4493;\r\n\r\n}\r\nul a{\r\n\r\n    text-decoration: none;\r\n    color: white;\r\n    font-size: 16px;\r\n    text-align: center;\r\n    width: 25%;\r\n    display: block;\r\n    background: #3e4493;\r\n    padding: 8px 0;\r\n    float: left;\r\n    transition: 0.5s;\r\n    cursor: pointer;\r\n    padding-top: 15px;\r\n    padding-bottom: 15px;\r\n}\r\nul a:hover{\r\n    opacity: 0.8;\r\n    background: #07aaeb;\r\n}\r\nspan{\r\n    background-color:#07aaeb ;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaGVhZGVyL2hlYWRlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsbUJBQW1CO0lBQ25CLGFBQWE7SUFDYixnQkFBZ0I7SUFDaEIsZ0JBQWdCO0lBQ2hCLGlCQUFpQjs7QUFFckI7QUFDQTtJQUNJOzt3REFFb0Q7O0lBRXBELFlBQVk7SUFDWixrQkFBa0I7SUFDbEI7QUFDSjtBQUVBO0lBQ0ksYUFBYTtBQUNqQjtBQUVBOztJQUVJLHVCQUF1Qjs7SUFFdkIsV0FBVztJQUNYLGdCQUFnQjtJQUNoQixXQUFXO0lBQ1gsa0JBQWtCOzs7O0lBSWxCLHFCQUFxQjs7QUFFekI7QUFHQTtJQUNJLFlBQVk7QUFDaEI7QUFFQTs7SUFFSSxlQUFlO0dBQ2hCLFlBQVk7R0FDWiw2QkFBNkI7R0FDN0IsY0FBYztHQUNkLFdBQVc7R0FDWCxlQUFlOztBQUVsQjtBQUVBO0lBQ0ksWUFBWTtBQUNoQjtBQUVBO0lBQ0ksU0FBUztJQUNULFVBQVU7O0lBRVYsV0FBVztJQUNYLG1CQUFtQjs7QUFFdkI7QUFFQTs7SUFFSSxxQkFBcUI7SUFDckIsWUFBWTtJQUNaLGVBQWU7SUFDZixrQkFBa0I7SUFDbEIsVUFBVTtJQUNWLGNBQWM7SUFDZCxtQkFBbUI7SUFDbkIsY0FBYztJQUNkLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsZUFBZTtJQUNmLGlCQUFpQjtJQUNqQixvQkFBb0I7QUFDeEI7QUFFQTtJQUNJLFlBQVk7SUFDWixtQkFBbUI7QUFDdkI7QUFFQTtJQUNJLHlCQUF5QjtBQUM3QiIsImZpbGUiOiJzcmMvYXBwL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuaGVhZGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDE1cHg7XHJcbiAgICBwYWRkaW5nLXRvcDogMHB4O1xyXG4gICAgYmFja2dyb3VuZDogI2ZmZjtcclxuICAgIHBhZGRpbmctYm90dG9tOiAwO1xyXG4gICAgXHJcbn1cclxuLmJhcnJhc3VwZXJpb3J7XHJcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzdweCAtMXB4IHJnYmEoNjIsNjgsMTQ3LDAuOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzdweCAtMXB4IHJnYmEoNjIsNjgsMTQ3LDAuOSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM3cHggLTFweCByZ2JhKDYyLDY4LDE0NywwLjkpOyAqL1xyXG5cclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgIHBhZGRpbmc6IDVweFxyXG59XHJcblxyXG5pbWd7XHJcbiAgICBwYWRkaW5nOiAxMHB4O1xyXG59XHJcblxyXG5uYXZ7XHJcblxyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcblxyXG4gICAgd2lkdGg6IGdyYXk7XHJcbiAgICB0ZXh0LWFsaWduOiBsZWZ0O1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiBcclxuICAgXHJcblxyXG4gICAgYm9yZGVyLXJhZGl1czogLjI1cmVtO1xyXG4gICBcclxufVxyXG5cclxuXHJcbm5hdiBpbWd7XHJcbiAgICBwYWRkaW5nOiA1cHg7XHJcbn1cclxuXHJcbm5hdiBhLmJ0bntcclxuXHJcbiAgICBkaXNwbGF5OiBpbmxpbmU7XHJcbiAgIHBhZGRpbmc6IDBweDtcclxuICAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XHJcbiAgIGNvbG9yOiAjM2U0NDkzO1xyXG4gICBib3JkZXI6bm9uZTtcclxuICAgZm9udC1zaXplOiAyMHB4O1xyXG5cclxufVxyXG5cclxuaXtcclxuICAgIHBhZGRpbmc6IDBweDtcclxufVxyXG5cclxudWx7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBwYWRkaW5nOiAwO1xyXG5cclxuICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgYmFja2dyb3VuZDogIzNlNDQ5MztcclxuXHJcbn1cclxuXHJcbnVsIGF7XHJcblxyXG4gICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgd2lkdGg6IDI1JTtcclxuICAgIGRpc3BsYXk6IGJsb2NrO1xyXG4gICAgYmFja2dyb3VuZDogIzNlNDQ5MztcclxuICAgIHBhZGRpbmc6IDhweCAwO1xyXG4gICAgZmxvYXQ6IGxlZnQ7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjVzO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDE1cHg7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMTVweDtcclxufVxyXG5cclxudWwgYTpob3ZlcntcclxuICAgIG9wYWNpdHk6IDAuODtcclxuICAgIGJhY2tncm91bmQ6ICMwN2FhZWI7XHJcbn1cclxuXHJcbnNwYW57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiMwN2FhZWIgO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/header/header.component.ts":
  /*!********************************************!*\
    !*** ./src/app/header/header.component.ts ***!
    \********************************************/

  /*! exports provided: HeaderComponent */

  /***/
  function srcAppHeaderHeaderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HeaderComponent", function () {
      return HeaderComponent;
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


    var _controlador_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../controlador.service */
    "./src/app/controlador.service.ts");

    var HeaderComponent =
    /*#__PURE__*/
    function () {
      function HeaderComponent(servicio) {
        _classCallCheck(this, HeaderComponent);

        this.servicio = servicio;
        this.contador = 0;
      }

      _createClass(HeaderComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HeaderComponent;
    }();

    HeaderComponent.ctorParameters = function () {
      return [{
        type: _controlador_service__WEBPACK_IMPORTED_MODULE_2__["ControladorService"]
      }];
    };

    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-header',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./header.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/header/header.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./header.component.css */
      "./src/app/header/header.component.css")).default]
    })], HeaderComponent);
    /***/
  },

  /***/
  "./src/app/hola-mundo/hola-mundo.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/hola-mundo/hola-mundo.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppHolaMundoHolaMundoComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".componenteLista{\r\n    padding: 20px;\r\n}\r\n\r\n.card-body{\r\n    align-items: center;\r\n   \r\n}\r\n\r\n.botonform{\r\n    text-align: right;\r\n  \r\n}\r\n\r\n.btn-block{\r\n    background-color: #3e4493;\r\n    border: none;\r\n    /* -webkit-box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9);\r\n    -moz-box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9);\r\n    box-shadow: 0px 0px 37px -1px rgba(62,68,147,0.9); */\r\n}\r\n\r\nform{\r\n    padding: 15px;\r\n    padding-top: 0px;\r\n}\r\n\r\n.card-title{\r\n    text-align: center;\r\n    padding-top: 20px;\r\n}\r\n\r\n.formulario{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.list-group{\r\n    margin-bottom: 20px;\r\n}\r\n\r\n.datos{\r\n    padding: 15px;\r\n    text-align: center;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaG9sYS1tdW5kby9ob2xhLW11bmRvLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCOztBQUVBO0lBQ0ksbUJBQW1COztBQUV2Qjs7QUFFQTtJQUNJLGlCQUFpQjs7QUFFckI7O0FBRUE7SUFDSSx5QkFBeUI7SUFDekIsWUFBWTtJQUNaOzt3REFFb0Q7QUFDeEQ7O0FBRUE7SUFDSSxhQUFhO0lBQ2IsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLGlCQUFpQjtBQUNyQjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLGFBQWE7SUFDYixrQkFBa0I7QUFDdEIiLCJmaWxlIjoic3JjL2FwcC9ob2xhLW11bmRvL2hvbGEtbXVuZG8uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5jb21wb25lbnRlTGlzdGF7XHJcbiAgICBwYWRkaW5nOiAyMHB4O1xyXG59XHJcblxyXG4uY2FyZC1ib2R5e1xyXG4gICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgXHJcbn1cclxuXHJcbi5ib3RvbmZvcm17XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICBcclxufVxyXG5cclxuLmJ0bi1ibG9ja3tcclxuICAgIGJhY2tncm91bmQtY29sb3I6ICMzZTQ0OTM7XHJcbiAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAvKiAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMzdweCAtMXB4IHJnYmEoNjIsNjgsMTQ3LDAuOSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAwcHggMzdweCAtMXB4IHJnYmEoNjIsNjgsMTQ3LDAuOSk7XHJcbiAgICBib3gtc2hhZG93OiAwcHggMHB4IDM3cHggLTFweCByZ2JhKDYyLDY4LDE0NywwLjkpOyAqL1xyXG59XHJcblxyXG5mb3Jte1xyXG4gICAgcGFkZGluZzogMTVweDtcclxuICAgIHBhZGRpbmctdG9wOiAwcHg7XHJcbn1cclxuXHJcbi5jYXJkLXRpdGxle1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgcGFkZGluZy10b3A6IDIwcHg7XHJcbn1cclxuXHJcbi5mb3JtdWxhcmlve1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMjBweDtcclxufVxyXG5cclxuLmxpc3QtZ3JvdXB7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xyXG59XHJcblxyXG4uZGF0b3N7XHJcbiAgICBwYWRkaW5nOiAxNXB4O1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/hola-mundo/hola-mundo.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/hola-mundo/hola-mundo.component.ts ***!
    \****************************************************/

  /*! exports provided: HolaMundoComponent */

  /***/
  function srcAppHolaMundoHolaMundoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HolaMundoComponent", function () {
      return HolaMundoComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var HolaMundoComponent =
    /*#__PURE__*/
    function () {
      function HolaMundoComponent() {
        _classCallCheck(this, HolaMundoComponent);

        this.usuarios = ['juan', 'pedro', 'marcelo'];
      }

      _createClass(HolaMundoComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HolaMundoComponent;
    }();

    HolaMundoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hola-mundo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hola-mundo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/hola-mundo/hola-mundo.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hola-mundo.component.css */
      "./src/app/hola-mundo/hola-mundo.component.css")).default]
    })], HolaMundoComponent);
    /***/
  },

  /***/
  "./src/app/inicio/inicio.component.css":
  /*!*********************************************!*\
    !*** ./src/app/inicio/inicio.component.css ***!
    \*********************************************/

  /*! exports provided: default */

  /***/
  function srcAppInicioInicioComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".componenteInicio{\r\n    padding: 0;\r\n    margin: 0;\r\n    \r\n}\r\n\r\n.card{\r\n    margin-bottom: 10px;\r\n\r\n}\r\n\r\n.row .btn{\r\n    background-color: #3e4493;\r\n    border: none;\r\n    \r\n}\r\n\r\nh2{\r\n    text-align: center;\r\n    font-size: 24px;\r\n    margin-bottom: 10px;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvaW5pY2lvL2luaWNpby5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksVUFBVTtJQUNWLFNBQVM7O0FBRWI7O0FBRUE7SUFDSSxtQkFBbUI7O0FBRXZCOztBQUVBO0lBQ0kseUJBQXlCO0lBQ3pCLFlBQVk7O0FBRWhCOztBQUdBO0lBQ0ksa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixtQkFBbUI7RUFDckIiLCJmaWxlIjoic3JjL2FwcC9pbmljaW8vaW5pY2lvLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50ZUluaWNpb3tcclxuICAgIHBhZGRpbmc6IDA7XHJcbiAgICBtYXJnaW46IDA7XHJcbiAgICBcclxufVxyXG5cclxuLmNhcmR7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG5cclxufVxyXG5cclxuLnJvdyAuYnRue1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNDQ5MztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIFxyXG59XHJcblxyXG5cclxuaDJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBmb250LXNpemU6IDI0cHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xyXG4gIH0iXX0= */";
    /***/
  },

  /***/
  "./src/app/inicio/inicio.component.ts":
  /*!********************************************!*\
    !*** ./src/app/inicio/inicio.component.ts ***!
    \********************************************/

  /*! exports provided: InicioComponent */

  /***/
  function srcAppInicioInicioComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "InicioComponent", function () {
      return InicioComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var InicioComponent =
    /*#__PURE__*/
    function () {
      function InicioComponent() {
        _classCallCheck(this, InicioComponent);
      }

      _createClass(InicioComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return InicioComponent;
    }();

    InicioComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-inicio',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./inicio.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/inicio/inicio.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./inicio.component.css */
      "./src/app/inicio/inicio.component.css")).default]
    })], InicioComponent);
    /***/
  },

  /***/
  "./src/app/remeras/remera/remera.component.css":
  /*!*****************************************************!*\
    !*** ./src/app/remeras/remera/remera.component.css ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppRemerasRemeraRemeraComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".card{\r\n    margin-bottom: 5px;\r\n    margin-top: 10px;\r\n}\r\n\r\n.enlace{\r\n    text-align: right;\r\n    border: none; \r\n}\r\n\r\n.btn-success{\r\n    transition: 0.6s;\r\n    background-color: #3e4493;\r\n    border: none;\r\n    background-size: 200%;\r\n    /* background-image: linear-gradient(to left,#3e4493,#07aaeb,#3e4493 ); */\r\n}\r\n\r\n.btn-success:hover{\r\n    background-position: right;\r\n}\r\n\r\n.btn-carrito{\r\n    /* background-color: #007bff; */\r\n    border: none;\r\n    color: white;\r\n    background-color: #07aaeb;\r\n}\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtZXJhcy9yZW1lcmEvcmVtZXJhLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0FBQ3BCOztBQUVBO0lBQ0ksaUJBQWlCO0lBQ2pCLFlBQVk7QUFDaEI7O0FBR0E7SUFDSSxnQkFBZ0I7SUFDaEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFDWixxQkFBcUI7SUFDckIseUVBQXlFO0FBQzdFOztBQUVBO0lBQ0ksMEJBQTBCO0FBQzlCOztBQUVBO0lBQ0ksK0JBQStCO0lBQy9CLFlBQVk7SUFDWixZQUFZO0lBQ1oseUJBQXlCO0FBQzdCIiwiZmlsZSI6InNyYy9hcHAvcmVtZXJhcy9yZW1lcmEvcmVtZXJhLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY2FyZHtcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxuICAgIG1hcmdpbi10b3A6IDEwcHg7XHJcbn1cclxuXHJcbi5lbmxhY2V7XHJcbiAgICB0ZXh0LWFsaWduOiByaWdodDtcclxuICAgIGJvcmRlcjogbm9uZTsgXHJcbn1cclxuXHJcblxyXG4uYnRuLXN1Y2Nlc3N7XHJcbiAgICB0cmFuc2l0aW9uOiAwLjZzO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzNlNDQ5MztcclxuICAgIGJvcmRlcjogbm9uZTtcclxuICAgIGJhY2tncm91bmQtc2l6ZTogMjAwJTtcclxuICAgIC8qIGJhY2tncm91bmQtaW1hZ2U6IGxpbmVhci1ncmFkaWVudCh0byBsZWZ0LCMzZTQ0OTMsIzA3YWFlYiwjM2U0NDkzICk7ICovXHJcbn1cclxuXHJcbi5idG4tc3VjY2Vzczpob3ZlcntcclxuICAgIGJhY2tncm91bmQtcG9zaXRpb246IHJpZ2h0O1xyXG59XHJcblxyXG4uYnRuLWNhcnJpdG97XHJcbiAgICAvKiBiYWNrZ3JvdW5kLWNvbG9yOiAjMDA3YmZmOyAqL1xyXG4gICAgYm9yZGVyOiBub25lO1xyXG4gICAgY29sb3I6IHdoaXRlO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzA3YWFlYjtcclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/remeras/remera/remera.component.ts":
  /*!****************************************************!*\
    !*** ./src/app/remeras/remera/remera.component.ts ***!
    \****************************************************/

  /*! exports provided: RemeraComponent */

  /***/
  function srcAppRemerasRemeraRemeraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemeraComponent", function () {
      return RemeraComponent;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _controlador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../../controlador.service */
    "./src/app/controlador.service.ts");

    var RemeraComponent =
    /*#__PURE__*/
    function () {
      function RemeraComponent(toastr, controlador) {
        _classCallCheck(this, RemeraComponent);

        this.toastr = toastr;
        this.controlador = controlador;
      }

      _createClass(RemeraComponent, [{
        key: "incrementar",
        value: function incrementar() {
          this.controlador.getCount();
        }
      }, {
        key: "showSuccess",
        value: function showSuccess() {
          this.toastr.error('Utilice el carrito', 'Modulo desactivado', {
            timeOut: 3000
          });
        }
      }, {
        key: "comprar",
        value: function comprar() {
          alert('redireccion a comprar ese articulo');
          return false;
        }
      }, {
        key: "carrito",
        value: function carrito(remera) {
          this.controlador.setCarrito(remera);
          console.log(this.incrementar());
          this.toastr.success('Enhorabuena', 'Se agrego al carrito', {
            timeOut: 3000
          });
          console.log('remera agregada', this.remera);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RemeraComponent;
    }();

    RemeraComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }, {
        type: _controlador_service__WEBPACK_IMPORTED_MODULE_3__["ControladorService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], RemeraComponent.prototype, "remera", void 0);
    RemeraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-remera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./remera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remera/remera.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./remera.component.css */
      "./src/app/remeras/remera/remera.component.css")).default]
    })], RemeraComponent);
    /***/
  },

  /***/
  "./src/app/remeras/remeras.component.css":
  /*!***********************************************!*\
    !*** ./src/app/remeras/remeras.component.css ***!
    \***********************************************/

  /*! exports provided: default */

  /***/
  function srcAppRemerasRemerasComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".componenteInicio{\r\n    padding: 20px;   \r\n}\r\n\r\n\r\n\r\n  \r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcmVtZXJhcy9yZW1lcmFzLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxhQUFhO0FBQ2pCIiwiZmlsZSI6InNyYy9hcHAvcmVtZXJhcy9yZW1lcmFzLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuY29tcG9uZW50ZUluaWNpb3tcclxuICAgIHBhZGRpbmc6IDIwcHg7ICAgXHJcbn1cclxuXHJcblxyXG5cclxuICBcclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/remeras/remeras.component.ts":
  /*!**********************************************!*\
    !*** ./src/app/remeras/remeras.component.ts ***!
    \**********************************************/

  /*! exports provided: RemerasComponent */

  /***/
  function srcAppRemerasRemerasComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RemerasComponent", function () {
      return RemerasComponent;
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


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _controlador_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ../controlador.service */
    "./src/app/controlador.service.ts");

    var RemerasComponent =
    /*#__PURE__*/
    function () {
      function RemerasComponent(toastr, controlador) {
        _classCallCheck(this, RemerasComponent);

        this.toastr = toastr;
        this.controlador = controlador;
        this.remeras = controlador.getRemeras();
      }

      _createClass(RemerasComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return RemerasComponent;
    }();

    RemerasComponent.ctorParameters = function () {
      return [{
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"]
      }, {
        type: _controlador_service__WEBPACK_IMPORTED_MODULE_3__["ControladorService"]
      }];
    };

    RemerasComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-remeras',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./remeras.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/remeras/remeras.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./remeras.component.css */
      "./src/app/remeras/remeras.component.css")).default]
    })], RemerasComponent);
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


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
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
    /*! C:\Users\marx_\OneDrive\Escritorio\curso-angular\public\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]); //# sourceMappingURL=main-es2015.js.map
//# sourceMappingURL=main-es5.js.map