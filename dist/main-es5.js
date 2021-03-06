function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _createSuper(Derived) { var hasNativeReflectConstruct = _isNativeReflectConstruct(); return function _createSuperInternal() { var Super = _getPrototypeOf(Derived), result; if (hasNativeReflectConstruct) { var NewTarget = _getPrototypeOf(this).constructor; result = Reflect.construct(Super, arguments, NewTarget); } else { result = Super.apply(this, arguments); } return _possibleConstructorReturn(this, result); }; }

function _possibleConstructorReturn(self, call) { if (call && (typeof call === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _isNativeReflectConstruct() { if (typeof Reflect === "undefined" || !Reflect.construct) return false; if (Reflect.construct.sham) return false; if (typeof Proxy === "function") return true; try { Date.prototype.toString.call(Reflect.construct(Date, [], function () {})); return true; } catch (e) { return false; } }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

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


    __webpack_exports__["default"] = "<ul>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/argentina.png\"></a></li>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/espana.png\"></a></li>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/mexico.png\"></a></li>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/chile.png\"></a></li>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/peru.png\"></a></li>\r\n    <li><a href=\"#\"><img class=\"backfms\" src=\"escudos_fms/int.png\"></a></li>\r\n</ul>\r\n\r\n<div id=\"player1\" [hidden]=\"!visible\">\r\n<div id=\"player\"></div>\r\n</div>\r\n\r\n<router-outlet></router-outlet>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBaseComponentBaseComponentComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<p>base-component works!</p>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBlonBlonComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON)\"><img src=\"assets/images/batallas_esp/S2020/J1/blon_sweetpain.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.GAZIR_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_GAZIR_BLON)\"><img src=\"assets/images/batallas_esp/S2020/J2/blon_gazir.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBloodBloodComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <div class=\"thematic\">\r\n      <div id=\"sangre1Mc1\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc1.name }}\r\n          </td>\r\n\r\n          <td *ngFor=\"let patron of scoreData.Mc1.blood1.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood1.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n      <!--Respuesta Mc2-->\r\n      <div id=\"sangre1Mc2\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc2.name }}\r\n          </td>\r\n          <td *ngFor=\"let patron of scoreData.Mc2.blood1.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n            <br />\r\n            <input type=\"checkbox\" [(ngModel)]=\"patron.extra\" />\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood1.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n    </div>\r\n    <!--SECOND THEMATIC-->\r\n    <div class=\"thematic\">\r\n      <div id=\"sangre2Mc2\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc2.name }}\r\n          </td>\r\n\r\n          <td *ngFor=\"let patron of scoreData.Mc2.blood2.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc2.blood2.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n      <!--Respuesta Mc1-->\r\n      <div id=\"sangre2Mc1\">\r\n        <tr>\r\n          <td class=\"mc\">\r\n            {{ scoreData.Mc1.name }}\r\n          </td>\r\n          <td *ngFor=\"let patron of scoreData.Mc1.blood2.patrons\">\r\n            <mat-form-field class=\"scoreInput\">\r\n              <div>\r\n                <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n              </div>\r\n            </mat-form-field>\r\n            <br />\r\n            <input type=\"checkbox\" [(ngModel)]=\"patron.extra\" />\r\n          </td>\r\n\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n              <input type=\"text\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.skills\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.flow\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n          <td>\r\n            <mat-form-field class=\"scoreInput\">\r\n              <input type=\"text\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput\r\n                [(ngModel)]=\"scoreData.Mc1.blood2.extraScore.scene\" autocomplete=\"off\" />\r\n            </mat-form-field>\r\n          </td>\r\n        </tr>\r\n      </div>\r\n    </div>\r\n    <tr>\r\n      <td colspan=\"10\">\r\n        <button style=\"margin-left: 50%;\" class=\"glow-on-hover\" mat-button type=\"button\" (click)=\"navigateToDeluxe()\">Deluxe</button>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsBnetBnetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.BNET_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ERRECE_BNET)\"><img src=\"assets/images/batallas_esp/S2020/J1/bnet_errece.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.BNET_NAME, CONSTANTS.MR_EGO_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_BNET_MREGO)\"><img src=\"assets/images/batallas_esp/S2020/J2/bnet_mrego.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsCharactersCharactersComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[0].score\" tabindex=\"1\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[1].score\" tabindex=\"2\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[2].score\" tabindex=\"5\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[3].score\" tabindex=\"6\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[4].score\" tabindex=\"9\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[5].score\" tabindex=\"10\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[6].score\" tabindex=\"13\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.characters.patrons[7].score\" tabindex=\"14\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <!-- <td *ngFor=\"let patron of scoreData.Mc1.characters.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td> -->\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" placeholder=\"Sk\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.skills\" tabindex=\"17\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" placeholder=\"Fl\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.flow\" tabindex=\"18\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" placeholder=\"Es\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc1.characters.extraScore.scene\" tabindex=\"19\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[0].score\" tabindex=\"3\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[1].score\" tabindex=\"4\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[2].score\" tabindex=\"7\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[3].score\" tabindex=\"8\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[4].score\" tabindex=\"11\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[5].score\" tabindex=\"12\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[6].score\" tabindex=\"15\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.characters.patrons[7].score\" tabindex=\"16\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n\r\n\r\n      <!-- <td *ngFor=\"let patron of scoreData.Mc2.characters.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td> -->\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" placeholder=\"Sk\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.skills\" tabindex=\"20\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" placeholder=\"Fl\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.flow\" tabindex=\"21\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" placeholder=\"Es\" extraScoreNumber matInput maxlength=\"1\" [(ngModel)]=\"scoreData.Mc2.characters.extraScore.scene\" tabindex=\"22\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToBlood()\">Sangre</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsDeluxeDeluxeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc1.deluxe.patrons\" style=\"margin-left: 5px;\">\r\n        <mat-form-field class=\"scoreInput\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.skills\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.flow\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.deluxe.extraScore.scene\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc2.deluxe.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.skills\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.flow\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.deluxe.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover deluxe\" type=\"button\" (click)=\"navigateToResults()\">Resultados</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsEasyEasyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc1.easyMode.patrons; let i = index\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.skills\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.flow\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc1.easyMode.extraScore.scene\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc2.easyMode.patrons; let i = index\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber matInput [(ngModel)]=\"scoreData.Mc2.easyMode.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToHardMode()\">HardMode</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html":
  /*!***********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html ***!
    \***********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsErreceErreceComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.BNET_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ERRECE_BNET)\"><img src=\"assets/images/batallas_esp/S2020/J1/bnet_errece.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_ERRECE_KHAN)\"><img src=\"assets/images/batallas_esp/S2020/J2/errece_khan.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/cacha/cacha.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/cacha/cacha.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgCachaCachaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MKS_NAME, CONSTANTS.CACHA_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_MKS_CACHA)\"><img src=\"assets/images/batallas_arg/S2020/J1/cacha_mks.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/dtoke/dtoke.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/dtoke/dtoke.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgDtokeDtokeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.DTOKE_NAME, CONSTANTS.WOLF_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_DTOKE_WOLF)\"><img src=\"assets/images/batallas_arg/S2020/J1/dtoke_wolf.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/fms-arg.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/fms-arg.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgFmsArgComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"goToMc('cacha',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_cacha.png\"></a>\r\n        <a (click)=\"goToMc('klan',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_klan.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('dtoke',2, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_dtoke.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('mecha',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_mecha.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('papo',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_papo.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('mks',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_mks.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('stuart',2, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_stuart.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('sub',3, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_sub.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('nacho',2, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_nacho.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('wolf',1, 'argentina')\"><img src=\"assets/images/marcos_mc/arg/tarj_wolf.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/klan/klan.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/klan/klan.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgKlanKlanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.KLAN_NAME, CONSTANTS.MECHA_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_KLAN_MECHA)\"><img src=\"assets/images/batallas_arg/S2020/J1/mecha_klan.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mecha/mecha.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mecha/mecha.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgMechaMechaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.KLAN_NAME, CONSTANTS.MECHA_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_KLAN_MECHA)\"><img src=\"assets/images/batallas_arg/S2020/J1/mecha_klan.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mks/mks.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mks/mks.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgMksMksComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MKS_NAME, CONSTANTS.CACHA_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_MKS_CACHA)\"><img src=\"assets/images/batallas_arg/S2020/J1/cacha_mks.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/nacho/nacho.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/nacho/nacho.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgNachoNachoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NACHO_NAME, CONSTANTS.STUART_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_NACHO_STUART)\"><img src=\"assets/images/batallas_arg/S2020/J1/stuart_nacho.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/papo/papo.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/papo/papo.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgPapoPapoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PAPO_NAME, CONSTANTS.SUB_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_PAPO_SUB)\"><img src=\"assets/images/batallas_arg/S2020/J1/sub_papo.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/stuart/stuart.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/stuart/stuart.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgStuartStuartComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NACHO_NAME, CONSTANTS.STUART_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_NACHO_STUART)\"><img src=\"assets/images/batallas_arg/S2020/J1/stuart_nacho.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/sub/sub.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/sub/sub.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgSubSubComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PAPO_NAME, CONSTANTS.SUB_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_PAPO_SUB)\"><img src=\"assets/images/batallas_arg/S2020/J1/sub_papo.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/wolf/wolf.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/wolf/wolf.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsArgWolfWolfComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.DTOKE_NAME, CONSTANTS.WOLF_NAME, CONSTANTS.S2020_BATTLE_ARG_J1_DTOKE_WOLF)\"><img src=\"assets/images/batallas_arg/S2020/J1/dtoke_wolf.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j2.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_arg/Proximamente/jornada_final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/acertijo/acertijo.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/acertijo/acertijo.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiAcertijoAcertijoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ACERTIJO_NAME, CONSTANTS.RICTO_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_ACERTIJO_RICTO)\"><img src=\"assets/images/batallas_chi/S2020/J1/ricto_acertijo.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOKKER_NAME, CONSTANTS.ACERTIJO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO)\"><img src=\"assets/images/batallas_chi/S2020/J2/acertijo_jokker.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/elmenor/elmenor.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/elmenor/elmenor.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiElmenorElmenorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PEPE_GRILLO_NAME, CONSTANTS.EL_MENOR_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR)\"><img src=\"assets/images/batallas_chi/S2020/J1/pepegrillo_elmenor.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ESEZETA_NAME, CONSTANTS.EL_MENOR_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR)\"><img src=\"assets/images/batallas_chi/S2020/J2/esezeta_elmenor.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/esezeta/esezeta.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/esezeta/esezeta.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiEsezetaEsezetaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ESEZETA_NAME, CONSTANTS.NITRO_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_ESEZETA_NITRO)\"><img src=\"assets/images/batallas_chi/S2020/J1/nitro_esezeta.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ESEZETA_NAME, CONSTANTS.EL_MENOR_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR)\"><img src=\"assets/images/batallas_chi/S2020/J2/esezeta_elmenor.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/fms-chi.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/fms-chi.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiFmsChiComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"goToMc('teorema',6, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_teorema.png\"></a>\r\n        <a (click)=\"goToMc('esezeta',3, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_esezeta.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('elmenor',4, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_elmenor.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('jokker',2, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_jokker.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('acertijo',3, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_acertijo.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('nitro',1, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_nitro.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('joqerr',1, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_joqerr.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('pepegrillo',2, 'chile')\"><img src=\"assets/images/marcos_mc/chi/mvp/tarj_mvp_pepegrillo.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('ricto',2, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_ricto.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('tomcrowley',2, 'chile')\"><img src=\"assets/images/marcos_mc/chi/tarj_tomcrowley.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/jokker/jokker.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/jokker/jokker.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiJokkerJokkerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOKKER_NAME, CONSTANTS.TOM_CROWLEY_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY)\"><img src=\"assets/images/batallas_chi/S2020/J1/jokker_tomcrowley.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOKKER_NAME, CONSTANTS.ACERTIJO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO)\"><img src=\"assets/images/batallas_chi/S2020/J2/acertijo_jokker.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/joqerr/joqerr.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/joqerr/joqerr.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiJoqerrJoqerrComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TEOREMA_NAME, CONSTANTS.JOQERR_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_TEOREMA_JOQERR)\"><img src=\"assets/images/batallas_chi/S2020/J1/teorema_joqerr.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOQERR_NAME, CONSTANTS.NITRO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_JOQERR_NITRO)\"><img src=\"assets/images/batallas_chi/S2020/J2/nitro_joqerr.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/nitro/nitro.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/nitro/nitro.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiNitroNitroComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ESEZETA_NAME, CONSTANTS.NITRO_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_ESEZETA_NITRO)\"><img src=\"assets/images/batallas_chi/S2020/J1/nitro_esezeta.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOQERR_NAME, CONSTANTS.NITRO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_JOQERR_NITRO)\"><img src=\"assets/images/batallas_chi/S2020/J2/nitro_joqerr.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/pepegrillo/pepegrillo.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/pepegrillo/pepegrillo.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiPepegrilloPepegrilloComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PEPE_GRILLO_NAME, CONSTANTS.EL_MENOR_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR)\"><img src=\"assets/images/batallas_chi/S2020/J1/pepegrillo_elmenor.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PEPE_GRILLO_NAME, CONSTANTS.TOM_CROWLEY_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY)\"><img src=\"assets/images/batallas_chi/S2020/J2/pepegrillo_tomcrowley.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/ricto/ricto.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/ricto/ricto.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiRictoRictoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ACERTIJO_NAME, CONSTANTS.RICTO_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_ACERTIJO_RICTO)\"><img src=\"assets/images/batallas_chi/S2020/J1/ricto_acertijo.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TEOREMA_NAME, CONSTANTS.RICTO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_TEOREMA_RICTO)\"><img src=\"assets/images/batallas_chi/S2020/J2/ricto_teorema.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/teorema/teorema.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/teorema/teorema.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiTeoremaTeoremaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TEOREMA_NAME, CONSTANTS.JOQERR_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_TEOREMA_JOQERR)\"><img src=\"assets/images/batallas_chi/S2020/J1/teorema_joqerr.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TEOREMA_NAME, CONSTANTS.RICTO_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_TEOREMA_RICTO)\"><img src=\"assets/images/batallas_chi/S2020/J2/ricto_teorema.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/tomcrowley/tomcrowley.component.html":
  /*!***************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/tomcrowley/tomcrowley.component.html ***!
    \***************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsChiTomcrowleyTomcrowleyComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOKKER_NAME, CONSTANTS.TOM_CROWLEY_NAME, CONSTANTS.S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY)\"><img src=\"assets/images/batallas_chi/S2020/J1/jokker_tomcrowley.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.PEPE_GRILLO_NAME, CONSTANTS.TOM_CROWLEY_NAME, CONSTANTS.S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY)\"><img src=\"assets/images/batallas_chi/S2020/J2/pepegrillo_tomcrowley.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_chi/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsEspFmsEspComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"goToMc('blon', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_blon1.png\"></a>\r\n        <a (click)=\"goToMc('gazir', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/mvp/tarj_mvp_gazir.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('khan', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_khan.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('mnak', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_mnak.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('mrego', 1, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_mrego.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('errece', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_errece.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('tirpa', 1, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_tirpa.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('bnet', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_bnet.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('zasko', 3, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_zasko1.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('sweetpain', 2, 'spain')\"><img src=\"assets/images/marcos_mc/esp/tarj_sweetpain.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexFmsMexComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"goToMc('lobo',2, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/mvp/tarj_mvp_lobo.png\"></a>\r\n        <a (click)=\"goToMc('bone',0, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_bone.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('jonyb',5, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_jonyb.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('garza',3, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_garza.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('rc',2, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_rc.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('potencia',1, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_potencia.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('yoiker',1, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_yoiker.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('zticma',1, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_zticma.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('rapder',3, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_rapder.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('skiper',1, 'mexico')\"><img src=\"assets/images/marcos_mc/mex/tarj_skiper.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosBoneBoneComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.BONE_NAME, CONSTANTS.JONY_BELTRAN_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN)\"><img src=\"assets/images/batallas_mex/S2020/J1/bone_jonyb.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RC_NAME, CONSTANTS.BONE_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_RC_BONE)\"><img src=\"assets/images/batallas_mex/S2020/J2/rc_bone.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosGarzaGarzaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.LOBO_ESTEPARIO_NAME, CONSTANTS.GARZA_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA)\"><img src=\"assets/images/batallas_mex/S2020/J1/garza_lobo.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.POTENCIA_NAME, CONSTANTS.GARZA_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_POTENCIA_GARZA)\"><img src=\"assets/images/batallas_mex/S2020/J2/potencia_garza.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosJonybJonybComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.BONE_NAME, CONSTANTS.JONY_BELTRAN_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN)\"><img src=\"assets/images/batallas_mex/S2020/J1/bone_jonyb.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JONY_BELTRAN_NAME, CONSTANTS.ZTICMA_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA)\"><img src=\"assets/images/batallas_mex/S2020/J2/jonyb_zticma.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosLoboLoboComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.LOBO_ESTEPARIO_NAME, CONSTANTS.GARZA_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA)\"><img src=\"assets/images/batallas_mex/S2020/J1/garza_lobo.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SKIPER_NAME, CONSTANTS.LOBO_ESTEPARIO_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO)\"><img src=\"assets/images/batallas_mex/S2020/J2/lobo_skiper.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html":
  /*!******************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html ***!
    \******************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosPotenciaPotenciaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.POTENCIA_NAME, CONSTANTS.RC_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_POTENCIA_RC)\"><img src=\"assets/images/batallas_mex/S2020/J1/potencia_rc.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.POTENCIA_NAME, CONSTANTS.GARZA_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_POTENCIA_GARZA)\"><img src=\"assets/images/batallas_mex/S2020/J2/potencia_garza.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosRapderRapderComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAPDER_NAME, CONSTANTS.SKIPER_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_RAPDER_SKIPER)\"><img src=\"assets/images/batallas_mex/S2020/J1/rapder_skiper.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAPDER_NAME, CONSTANTS.YOIKER_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_RAPDER_YOIKER)\"><img src=\"assets/images/batallas_mex/S2020/J2/rapder_yoiker.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html":
  /*!******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html ***!
    \******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosRcRcComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.POTENCIA_NAME, CONSTANTS.RC_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_POTENCIA_RC)\"><img src=\"assets/images/batallas_mex/S2020/J1/potencia_rc.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RC_NAME, CONSTANTS.BONE_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_RC_BONE)\"><img src=\"assets/images/batallas_mex/S2020/J2/rc_bone.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosSkiperSkiperComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAPDER_NAME, CONSTANTS.SKIPER_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_RAPDER_SKIPER)\"><img src=\"assets/images/batallas_mex/S2020/J1/rapder_skiper.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SKIPER_NAME, CONSTANTS.LOBO_ESTEPARIO_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO)\"><img src=\"assets/images/batallas_mex/S2020/J2/lobo_skiper.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosYoikerYoikerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.YOIKER_NAME, CONSTANTS.ZTICMA_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_YOIKER_ZTICMA)\"><img src=\"assets/images/batallas_mex/S2020/J1/zticma_yoiker.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAPDER_NAME, CONSTANTS.YOIKER_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_RAPDER_YOIKER)\"><img src=\"assets/images/batallas_mex/S2020/J2/rapder_yoiker.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsMexGallosZticmaZticmaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.YOIKER_NAME, CONSTANTS.ZTICMA_NAME, CONSTANTS.S2020_BATTLE_MEX_J1_YOIKER_ZTICMA)\"><img src=\"assets/images/batallas_mex/S2020/J1/zticma_yoiker.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JONY_BELTRAN_NAME, CONSTANTS.ZTICMA_NAME, CONSTANTS.S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA)\"><img src=\"assets/images/batallas_mex/S2020/J2/jonyb_zticma.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_mex/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerFmsPerComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"goToMc('jota',1, 'peru')\"><img src=\"assets/images/marcos_mc/per/mvp/tarj_mvp_jota.png\"></a>\r\n        <a (click)=\"goToMc('skill',4, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_skill.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('jaze',2, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_jaze.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('litzen',1, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_litzen.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('nekroos',2, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_nekroos.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('newera',3, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_newera.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('ramset',3, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_ramset.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('stick',2, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_stick.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('choque',3, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_choque.png\" alt=\"\"></a>\r\n        <a (click)=\"goToMc('strike',1, 'peru')\"><img src=\"assets/images/marcos_mc/per/tarj_strike.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosChoqueChoqueComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.CHOQUE_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_CHOQUE_SKILL)\"><img src=\"assets/images/batallas_per/S2020/J1/choque_skill.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEW_ERA_NAME, CONSTANTS.CHOQUE_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE)\"><img src=\"assets/images/batallas_per/S2020/J2/newera_choque.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.CHOQUE_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_JAZE_CHOQUE)\"><img src=\"assets/images/batallas_per/S2020/J3/jaze_choque.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosJazeJazeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_JAZE_JOTA)\"><img src=\"assets/images/batallas_per/S2020/J1/jota_jaze.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.STRIKE_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_JAZE_STRIKE)\"><img src=\"assets/images/batallas_per/S2020/J2/jaze_strike.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.CHOQUE_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_JAZE_CHOQUE)\"><img src=\"assets/images/batallas_per/S2020/J3/jaze_choque.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html":
  /*!**********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html ***!
    \**********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosJotaJotaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_JAZE_JOTA)\"><img src=\"assets/images/batallas_per/S2020/J1/jota_jaze.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.LITZEN_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_LITZEN_JOTA)\"><img src=\"assets/images/batallas_per/S2020/J2/jota_litzen.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOTA_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_JOTA_SKILL)\"><img src=\"assets/images/batallas_per/S2020/J3/jota_skill.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosLitzenLitzenComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_STRIKE_LITZEN)\"><img src=\"assets/images/batallas_per/S2020/J1/strike_litzen.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.LITZEN_NAME, CONSTANTS.JOTA_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_LITZEN_JOTA)\"><img src=\"assets/images/batallas_per/S2020/J2/jota_litzen.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STICK_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_STICK_LITZEN)\"><img src=\"assets/images/batallas_per/S2020/J3/stick_litzen.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html":
  /*!****************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html ***!
    \****************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosNekroosNekroosComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA)\"><img src=\"assets/images/batallas_per/S2020/J1/newera_nekroos.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j2.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.RAMSET_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_NEKROOS_RAMSET)\"><img src=\"assets/images/batallas_per/S2020/J3/nekroos_ramset\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosNeweraNeweraComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA)\"><img src=\"assets/images/batallas_per/S2020/J1/newera_nekroos.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEW_ERA_NAME, CONSTANTS.CHOQUE_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE)\"><img src=\"assets/images/batallas_per/S2020/J2/newera_choque.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA)\"><img src=\"assets/images/batallas_per/S2020/J3/strike_newera.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosRamsetRamsetComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAMSET_NAME, CONSTANTS.STICK_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_RAMSET_STICK)\"><img src=\"assets/images/batallas_per/S2020/J1/stick_ramset.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SKILL_NAME, CONSTANTS.RAMSET_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_SKILL_RAMSET)\"><img src=\"assets/images/batallas_per/S2020/J2/skill_ramset.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.NEKROOS_NAME, CONSTANTS.RAMSET_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_NEKROOS_RAMSET)\"><img src=\"assets/images/batallas_per/S2020/J3/nekroos_ramset.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosSkillSkillComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.CHOQUE_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_CHOQUE_SKILL)\"><img src=\"assets/images/batallas_per/S2020/J1/choque_skill.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SKILL_NAME, CONSTANTS.RAMSET_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_SKILL_RAMSET)\"><img src=\"assets/images/batallas_per/S2020/J2/skill_ramset.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JOTA_NAME, CONSTANTS.SKILL_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_JOTA_SKILL)\"><img src=\"assets/images/batallas_per/S2020/J3/jota_skill.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html":
  /*!************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html ***!
    \************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosStickStickComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.RAMSET_NAME, CONSTANTS.STICK_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_RAMSET_STICK)\"><img src=\"assets/images/batallas_per/S2020/J1/stick_ramset.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/Batalla aplazada.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STICK_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_STICK_LITZEN)\"><img src=\"assets/images/batallas_per/S2020/J3/stick_litzen.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html":
  /*!**************************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html ***!
    \**************************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsPerGallosStrikeStrikeComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.LITZEN_NAME, CONSTANTS.S2020_BATTLE_PERU_J1_STRIKE_LITZEN)\"><img src=\"assets/images/batallas_per/S2020/J1/strike_litzen.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.JAZE_NAME, CONSTANTS.STRIKE_NAME, CONSTANTS.S2020_BATTLE_PERU_J2_JAZE_STRIKE)\"><img src=\"assets/images/batallas_per/S2020/J2/jaze_strike.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.STRIKE_NAME, CONSTANTS.NEW_ERA_NAME, CONSTANTS.S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA)\"><img src=\"assets/images/batallas_per/S2020/J3/strike_newera.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_per/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsFmsSelectorFmsSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"irfmsarg()\"><img src=\"assets/images/escudos_fms/argentina.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmschi()\"><img src=\"assets/images/escudos_fms/chile.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmsesp()\"><img src=\"assets/images/escudos_fms/espana.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmsper()\"><img src=\"assets/images/escudos_fms/peru.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a (click)=\"irfmsmex()\"><img src=\"assets/images/escudos_fms/mexico.png\" alt=\"\"></a>\r\n    </div>\r\n    <div>\r\n        <a href=\"#\"><img src=\"assets/images/escudos_fms/int.png\" alt=\"\"></a>\r\n    </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsGazirGazirComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ZASKO_NAME, CONSTANTS.GAZIR_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ZASKO_GAZIR)\"><img src=\"assets/images/batallas_esp/S2020/J1/gazir_zasko.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.GAZIR_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_GAZIR_BLON)\"><img src=\"assets/images/batallas_esp/S2020/J2/blon_gazir.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsHardHardComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n\r\n  <tbody>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc2.name }}\r\n      </td>\r\n\r\n      <td *ngFor=\"let patron of scoreData.Mc2.hardMode.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.skills\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.flow\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n      <td>\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc2.hardMode.extraScore.scene\" autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n    </tr>\r\n    <tr>\r\n      <td class=\"mc\">\r\n        {{ scoreData.Mc1.name }}\r\n      </td>\r\n      <td *ngFor=\"let patron of scoreData.Mc1.hardMode.patrons\">\r\n        <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n          <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"  autocomplete=\"off\"/>\r\n        </mat-form-field>\r\n      </td>\r\n\r\n      <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput [(ngModel)]=\"scoreData.Mc1.hardMode.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n    </tr>\r\n    <tr>\r\n        <td colspan=\"10\">\r\n          <div>\r\n            <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToThematic()\">Temáticas</button>\r\n          </div>\r\n        </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsKhanKhanComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MNAK_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MNAK_KHAN)\"><img src=\"assets/images/batallas_esp/S2020/J1/khan_mnak.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ERRECE_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_ERRECE_KHAN)\"><img src=\"assets/images/batallas_esp/S2020/J2/errece_khan.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html":
  /*!*********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html ***!
    \*********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMcSelectorMcSelectorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"mcNameInput\">\r\n  <div class=\"mc1\">\r\n    <mat-form-field class=\"mcselection\">\r\n      <input type=\"text\" matInput style=\"text-transform: uppercase;\" placeholder=\"MC 1\" class=\"inputTextCenter\"\r\n        [(ngModel)]=\"scoreData.Mc1.name\" (keyup.enter)=\"acceptNames()\" autocomplete=\"off\"/>\r\n    </mat-form-field>\r\n  </div>\r\n\r\n  <div class=\"mc2\">\r\n    <mat-form-field class=\"mcselection\">\r\n      <input type=\"text\" matInput style=\"text-transform: uppercase;\" placeholder=\"MC 2\" class=\"inputTextCenter\"\r\n        [(ngModel)]=\"scoreData.Mc2.name\" (keyup.enter)=\"acceptNames()\" autocomplete=\"off\"/>\r\n    </mat-form-field>\r\n  </div>\r\n  <div class=\"boton\">\r\n    <button class=\"glow-on-hover\" type=\"button\" (click)=\"acceptNames()\">Continuar</button>\r\n  </div>\r\n</div>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMnakMnakComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MNAK_NAME, CONSTANTS.KHAN_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MNAK_KHAN)\"><img src=\"assets/images/batallas_esp/S2020/J1/khan_mnak.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TIRPA_NAME, CONSTANTS.MNAK_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_TIRPA_MNAK)\"><img src=\"assets/images/batallas_esp/S2020/J2/tirpa_mnak.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsMregoMregoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MR_EGO_NAME, CONSTANTS.TIRPA_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MR_EGO_TIRPA)\"><img src=\"assets/images/batallas_esp/S2020/J1/tirpa_mrego.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.BNET_NAME, CONSTANTS.MR_EGO_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_BNET_MREGO)\"><img src=\"assets/images/batallas_esp/S2020/J2/bnet_mrego.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html":
  /*!*************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html ***!
    \*************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsResultsResultsComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"mc1\">\r\n  <span id=\"result\">{{ scoreData.Mc1.name }}</span>\r\n  {{scoreData.Mc1.result}}\r\n</div>\r\n\r\n<div class=\"mc2\">\r\n  <span id=\"result\">{{ scoreData.Mc2.name }}</span>\r\n  {{scoreData.Mc2.result}}\r\n</div>\r\n\r\n<div class=\"btnTwitter\">\r\n  <a twitterButton (click)=\"getTwitterUrl()\" class=\"twitter-share-button\" data-show-count=\"false\"><img id=\"twitter\" src=\"assets/images/twitter/Btn_twitter.png\"></a><script async src=\"https://platform.twitter.com/widgets.js\" charset=\"utf-8\"></script>\r\n</div>\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsSweetpainSweetpainComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.BLON_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON)\"><img src=\"assets/images/batallas_esp/S2020/J1/blon_sweetpain.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.ZASKO_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO)\"><img src=\"assets/images/batallas_esp/S2020/J2/zasko_sweetpain.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html":
  /*!***************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html ***!
    \***************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsThematicThematicComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<table class=\"scoreTable\">\r\n  <tbody>\r\n    <div class=\"thematic\">\r\n      <tr class=\"firstThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc1.name }}\r\n        </td>\r\n\r\n        <td *ngFor=\"let patron of scoreData.Mc1.thematic1.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\"\r\n              autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.skills\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.flow\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic1.extraScore.scene\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"secondThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc2.name }}\r\n        </td>\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic1.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" autocomplete=\"off\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.skills\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.flow\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic1.extraScore.scene\" autocomplete=\"off\"/>\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n    </div>\r\n    <!--SECOND THEMATIC-->\r\n    <div class=\"thematic\">\r\n      <tr class=\"firstThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc2.name }}\r\n        </td>\r\n\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic2.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.skills\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.flow\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc2.thematic2.extraScore.scene\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n      <tr class=\"secondThematic\">\r\n        <td class=\"mc\">\r\n          {{ scoreData.Mc1.name }}\r\n        </td>\r\n        <td *ngFor=\"let patron of scoreData.Mc2.thematic2.patrons\">\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" patronNumber maxlength=\"1\" matInput [(ngModel)]=\"patron.score\" />\r\n          </mat-form-field>\r\n        </td>\r\n\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 20px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Sk\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.skills\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Fl\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.flow\" />\r\n          </mat-form-field>\r\n        </td>\r\n        <td>\r\n          <mat-form-field class=\"scoreInput\" style=\"margin-left: 5px;\">\r\n            <input type=\"text\" class=\"inputTextCenter\" placeholder=\"Es\" maxlength=\"1\" extraScoreNumber maxlength=\"1\" matInput\r\n              [(ngModel)]=\"scoreData.Mc1.thematic2.extraScore.scene\" />\r\n          </mat-form-field>\r\n        </td>\r\n      </tr>\r\n    </div>\r\n    <tr>\r\n      <td colspan=\"10\">\r\n        <div>\r\n          <button class=\"glow-on-hover\" type=\"button\" (click)=\"navigateToCharacters()\">Random</button>\r\n        </div>\r\n      </td>\r\n    </tr>\r\n  </tbody>\r\n</table>\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsTirpaTirpaComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.MR_EGO_NAME, CONSTANTS.TIRPA_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_MR_EGO_TIRPA)\"><img src=\"assets/images/batallas_esp/S2020/J1/tirpa_mrego.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.TIRPA_NAME, CONSTANTS.MNAK_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_TIRPA_MNAK)\"><img src=\"assets/images/batallas_esp/S2020/J2/tirpa_mnak.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppComponentsZaskoZaskoComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n<div class=\"contenedor\">\r\n    <div>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.ZASKO_NAME, CONSTANTS.GAZIR_NAME, CONSTANTS.S2020_BATTLE_ESP_J1_ZASKO_GAZIR)\"><img src=\"assets/images/batallas_esp/S2020/J1/gazir_zasko.png\"></a>\r\n        <a (click)=\"this.goToBattle(CONSTANTS.SWEET_PAIN_NAME, CONSTANTS.ZASKO_NAME, CONSTANTS.S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO)\"><img src=\"assets/images/batallas_esp/S2020/J2/zasko_sweetpain.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j3.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j4.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j5.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j6.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j7.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/j8.png\"></a>\r\n        <a><img src=\"assets/images/batallas_esp/Proximamente/jornada final.png\"></a>\r\n    </div>\r\n</div>\r\n\r\n\r\n";
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
      result["default"] = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        "default": mod
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
    /* harmony import */


    var _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./components/mc-selector/mc-selector.component */
    "./src/app/components/mc-selector/mc-selector.component.ts");
    /* harmony import */


    var _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./components/easy/easy.component */
    "./src/app/components/easy/easy.component.ts");
    /* harmony import */


    var _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/hard/hard.component */
    "./src/app/components/hard/hard.component.ts");
    /* harmony import */


    var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./components/thematic/thematic.component */
    "./src/app/components/thematic/thematic.component.ts");
    /* harmony import */


    var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./components/characters/characters.component */
    "./src/app/components/characters/characters.component.ts");
    /* harmony import */


    var _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./components/blood/blood.component */
    "./src/app/components/blood/blood.component.ts");
    /* harmony import */


    var _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./components/deluxe/deluxe.component */
    "./src/app/components/deluxe/deluxe.component.ts");
    /* harmony import */


    var _components_results_results_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./components/results/results.component */
    "./src/app/components/results/results.component.ts");
    /* harmony import */


    var _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/fms-selector/fms-selector.component */
    "./src/app/components/fms-selector/fms-selector.component.ts");
    /* harmony import */


    var _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/fms-esp/fms-esp.component */
    "./src/app/components/fms-esp/fms-esp.component.ts");
    /* harmony import */


    var _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/blon/blon.component */
    "./src/app/components/blon/blon.component.ts");
    /* harmony import */


    var _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/bnet/bnet.component */
    "./src/app/components/bnet/bnet.component.ts");
    /* harmony import */


    var _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/errece/errece.component */
    "./src/app/components/errece/errece.component.ts");
    /* harmony import */


    var _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/gazir/gazir.component */
    "./src/app/components/gazir/gazir.component.ts");
    /* harmony import */


    var _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/khan/khan.component */
    "./src/app/components/khan/khan.component.ts");
    /* harmony import */


    var _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/mnak/mnak.component */
    "./src/app/components/mnak/mnak.component.ts");
    /* harmony import */


    var _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/mrego/mrego.component */
    "./src/app/components/mrego/mrego.component.ts");
    /* harmony import */


    var _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/sweetpain/sweetpain.component */
    "./src/app/components/sweetpain/sweetpain.component.ts");
    /* harmony import */


    var _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/tirpa/tirpa.component */
    "./src/app/components/tirpa/tirpa.component.ts");
    /* harmony import */


    var _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/zasko/zasko.component */
    "./src/app/components/zasko/zasko.component.ts");
    /* harmony import */


    var _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/fms-mex/fms-mex.component */
    "./src/app/components/fms-mex/fms-mex.component.ts");
    /* harmony import */


    var _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/fms-per/fms-per.component */
    "./src/app/components/fms-per/fms-per.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/bone/bone.component */
    "./src/app/components/fms-mex/gallos/bone/bone.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/garza/garza.component */
    "./src/app/components/fms-mex/gallos/garza/garza.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/jonyb/jonyb.component */
    "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/lobo/lobo.component */
    "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/potencia/potencia.component */
    "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rapder/rapder.component */
    "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rc/rc.component */
    "./src/app/components/fms-mex/gallos/rc/rc.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/skiper/skiper.component */
    "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/yoiker/yoiker.component */
    "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/zticma/zticma.component */
    "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/fms-per/gallos/choque/choque.component */
    "./src/app/components/fms-per/gallos/choque/choque.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jaze/jaze.component */
    "./src/app/components/fms-per/gallos/jaze/jaze.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jota/jota.component */
    "./src/app/components/fms-per/gallos/jota/jota.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/fms-per/gallos/litzen/litzen.component */
    "./src/app/components/fms-per/gallos/litzen/litzen.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/fms-per/gallos/nekroos/nekroos.component */
    "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/fms-per/gallos/newera/newera.component */
    "./src/app/components/fms-per/gallos/newera/newera.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/fms-per/gallos/ramset/ramset.component */
    "./src/app/components/fms-per/gallos/ramset/ramset.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/fms-per/gallos/skill/skill.component */
    "./src/app/components/fms-per/gallos/skill/skill.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/fms-per/gallos/stick/stick.component */
    "./src/app/components/fms-per/gallos/stick/stick.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/fms-per/gallos/strike/strike.component */
    "./src/app/components/fms-per/gallos/strike/strike.component.ts");
    /* harmony import */


    var _components_fms_arg_cacha_cacha_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/fms-arg/cacha/cacha.component */
    "./src/app/components/fms-arg/cacha/cacha.component.ts");
    /* harmony import */


    var _components_fms_arg_dtoke_dtoke_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/fms-arg/dtoke/dtoke.component */
    "./src/app/components/fms-arg/dtoke/dtoke.component.ts");
    /* harmony import */


    var _components_fms_arg_klan_klan_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/fms-arg/klan/klan.component */
    "./src/app/components/fms-arg/klan/klan.component.ts");
    /* harmony import */


    var _components_fms_arg_mecha_mecha_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/fms-arg/mecha/mecha.component */
    "./src/app/components/fms-arg/mecha/mecha.component.ts");
    /* harmony import */


    var _components_fms_arg_mks_mks_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/fms-arg/mks/mks.component */
    "./src/app/components/fms-arg/mks/mks.component.ts");
    /* harmony import */


    var _components_fms_arg_nacho_nacho_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/fms-arg/nacho/nacho.component */
    "./src/app/components/fms-arg/nacho/nacho.component.ts");
    /* harmony import */


    var _components_fms_arg_papo_papo_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/fms-arg/papo/papo.component */
    "./src/app/components/fms-arg/papo/papo.component.ts");
    /* harmony import */


    var _components_fms_arg_stuart_stuart_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/fms-arg/stuart/stuart.component */
    "./src/app/components/fms-arg/stuart/stuart.component.ts");
    /* harmony import */


    var _components_fms_arg_sub_sub_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/fms-arg/sub/sub.component */
    "./src/app/components/fms-arg/sub/sub.component.ts");
    /* harmony import */


    var _components_fms_arg_wolf_wolf_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/fms-arg/wolf/wolf.component */
    "./src/app/components/fms-arg/wolf/wolf.component.ts");
    /* harmony import */


    var _components_fms_arg_fms_arg_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./components/fms-arg/fms-arg.component */
    "./src/app/components/fms-arg/fms-arg.component.ts");
    /* harmony import */


    var _components_fms_chi_fms_chi_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/fms-chi/fms-chi.component */
    "./src/app/components/fms-chi/fms-chi.component.ts");
    /* harmony import */


    var _components_fms_chi_acertijo_acertijo_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./components/fms-chi/acertijo/acertijo.component */
    "./src/app/components/fms-chi/acertijo/acertijo.component.ts");
    /* harmony import */


    var _components_fms_chi_elmenor_elmenor_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./components/fms-chi/elmenor/elmenor.component */
    "./src/app/components/fms-chi/elmenor/elmenor.component.ts");
    /* harmony import */


    var _components_fms_chi_esezeta_esezeta_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./components/fms-chi/esezeta/esezeta.component */
    "./src/app/components/fms-chi/esezeta/esezeta.component.ts");
    /* harmony import */


    var _components_fms_chi_jokker_jokker_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./components/fms-chi/jokker/jokker.component */
    "./src/app/components/fms-chi/jokker/jokker.component.ts");
    /* harmony import */


    var _components_fms_chi_joqerr_joqerr_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./components/fms-chi/joqerr/joqerr.component */
    "./src/app/components/fms-chi/joqerr/joqerr.component.ts");
    /* harmony import */


    var _components_fms_chi_nitro_nitro_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./components/fms-chi/nitro/nitro.component */
    "./src/app/components/fms-chi/nitro/nitro.component.ts");
    /* harmony import */


    var _components_fms_chi_pepegrillo_pepegrillo_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./components/fms-chi/pepegrillo/pepegrillo.component */
    "./src/app/components/fms-chi/pepegrillo/pepegrillo.component.ts");
    /* harmony import */


    var _components_fms_chi_ricto_ricto_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./components/fms-chi/ricto/ricto.component */
    "./src/app/components/fms-chi/ricto/ricto.component.ts");
    /* harmony import */


    var _components_fms_chi_teorema_teorema_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./components/fms-chi/teorema/teorema.component */
    "./src/app/components/fms-chi/teorema/teorema.component.ts");
    /* harmony import */


    var _components_fms_chi_tomcrowley_tomcrowley_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./components/fms-chi/tomcrowley/tomcrowley.component */
    "./src/app/components/fms-chi/tomcrowley/tomcrowley.component.ts");

    var routes = [{
      path: 'FmsSelector',
      component: _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__["FmsSelectorComponent"]
    }, {
      path: 'fmsArg',
      component: _components_fms_arg_fms_arg_component__WEBPACK_IMPORTED_MODULE_55__["FmsArgComponent"]
    }, {
      path: 'cacha',
      component: _components_fms_arg_cacha_cacha_component__WEBPACK_IMPORTED_MODULE_45__["CachaComponent"]
    }, {
      path: 'dtoke',
      component: _components_fms_arg_dtoke_dtoke_component__WEBPACK_IMPORTED_MODULE_46__["DtokeComponent"]
    }, {
      path: 'klan',
      component: _components_fms_arg_klan_klan_component__WEBPACK_IMPORTED_MODULE_47__["KlanComponent"]
    }, {
      path: 'mecha',
      component: _components_fms_arg_mecha_mecha_component__WEBPACK_IMPORTED_MODULE_48__["MechaComponent"]
    }, {
      path: 'mks',
      component: _components_fms_arg_mks_mks_component__WEBPACK_IMPORTED_MODULE_49__["MksComponent"]
    }, {
      path: 'nacho',
      component: _components_fms_arg_nacho_nacho_component__WEBPACK_IMPORTED_MODULE_50__["NachoComponent"]
    }, {
      path: 'papo',
      component: _components_fms_arg_papo_papo_component__WEBPACK_IMPORTED_MODULE_51__["PapoComponent"]
    }, {
      path: 'stuart',
      component: _components_fms_arg_stuart_stuart_component__WEBPACK_IMPORTED_MODULE_52__["StuartComponent"]
    }, {
      path: 'sub',
      component: _components_fms_arg_sub_sub_component__WEBPACK_IMPORTED_MODULE_53__["SubComponent"]
    }, {
      path: 'wolf',
      component: _components_fms_arg_wolf_wolf_component__WEBPACK_IMPORTED_MODULE_54__["WolfComponent"]
    }, {
      path: 'fmsEsp',
      component: _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_12__["FmsEspComponent"]
    }, {
      path: 'blon',
      component: _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_13__["BlonComponent"]
    }, {
      path: 'bnet',
      component: _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_14__["BnetComponent"]
    }, {
      path: 'errece',
      component: _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_15__["ErreceComponent"]
    }, {
      path: 'gazir',
      component: _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_16__["GazirComponent"]
    }, {
      path: 'khan',
      component: _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_17__["KhanComponent"]
    }, {
      path: 'mnak',
      component: _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_18__["MnakComponent"]
    }, {
      path: 'mrego',
      component: _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_19__["MregoComponent"]
    }, {
      path: 'sweetpain',
      component: _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_20__["SweetpainComponent"]
    }, {
      path: 'tirpa',
      component: _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_21__["TirpaComponent"]
    }, {
      path: 'zasko',
      component: _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_22__["ZaskoComponent"]
    }, {
      path: 'fmsMex',
      component: _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_23__["FmsMexComponent"]
    }, {
      path: 'bone',
      component: _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_25__["BoneComponent"]
    }, {
      path: 'garza',
      component: _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_26__["GarzaComponent"]
    }, {
      path: 'jonyb',
      component: _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_27__["JonybComponent"]
    }, {
      path: 'lobo',
      component: _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_28__["LoboComponent"]
    }, {
      path: 'potencia',
      component: _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_29__["PotenciaComponent"]
    }, {
      path: 'rapder',
      component: _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_30__["RapderComponent"]
    }, {
      path: 'rc',
      component: _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_31__["RcComponent"]
    }, {
      path: 'skiper',
      component: _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_32__["SkiperComponent"]
    }, {
      path: 'yoiker',
      component: _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_33__["YoikerComponent"]
    }, {
      path: 'zticma',
      component: _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_34__["ZticmaComponent"]
    }, {
      path: 'fmsChi',
      component: _components_fms_chi_fms_chi_component__WEBPACK_IMPORTED_MODULE_56__["FmsChiComponent"]
    }, {
      path: 'acertijo',
      component: _components_fms_chi_acertijo_acertijo_component__WEBPACK_IMPORTED_MODULE_57__["AcertijoComponent"]
    }, {
      path: 'elmenor',
      component: _components_fms_chi_elmenor_elmenor_component__WEBPACK_IMPORTED_MODULE_58__["ElmenorComponent"]
    }, {
      path: 'esezeta',
      component: _components_fms_chi_esezeta_esezeta_component__WEBPACK_IMPORTED_MODULE_59__["EsezetaComponent"]
    }, {
      path: 'jokker',
      component: _components_fms_chi_jokker_jokker_component__WEBPACK_IMPORTED_MODULE_60__["JokkerComponent"]
    }, {
      path: 'joqerr',
      component: _components_fms_chi_joqerr_joqerr_component__WEBPACK_IMPORTED_MODULE_61__["JoqerrComponent"]
    }, {
      path: 'nitro',
      component: _components_fms_chi_nitro_nitro_component__WEBPACK_IMPORTED_MODULE_62__["NitroComponent"]
    }, {
      path: 'pepegrillo',
      component: _components_fms_chi_pepegrillo_pepegrillo_component__WEBPACK_IMPORTED_MODULE_63__["PepegrilloComponent"]
    }, {
      path: 'ricto',
      component: _components_fms_chi_ricto_ricto_component__WEBPACK_IMPORTED_MODULE_64__["RictoComponent"]
    }, {
      path: 'teorema',
      component: _components_fms_chi_teorema_teorema_component__WEBPACK_IMPORTED_MODULE_65__["TeoremaComponent"]
    }, {
      path: 'tomcrowley',
      component: _components_fms_chi_tomcrowley_tomcrowley_component__WEBPACK_IMPORTED_MODULE_66__["TomcrowleyComponent"]
    }, {
      path: 'fmsPer',
      component: _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_24__["FmsPerComponent"]
    }, {
      path: 'choque',
      component: _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_35__["ChoqueComponent"]
    }, {
      path: 'jaze',
      component: _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_36__["JazeComponent"]
    }, {
      path: 'jota',
      component: _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_37__["JotaComponent"]
    }, {
      path: 'litzen',
      component: _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_38__["LitzenComponent"]
    }, {
      path: 'nekroos',
      component: _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_39__["NekroosComponent"]
    }, {
      path: 'newera',
      component: _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_40__["NeweraComponent"]
    }, {
      path: 'ramset',
      component: _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_41__["RamsetComponent"]
    }, {
      path: 'skill',
      component: _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_42__["SkillComponent"]
    }, {
      path: 'stick',
      component: _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_43__["StickComponent"]
    }, {
      path: 'strike',
      component: _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_44__["StrikeComponent"]
    }, {
      path: 'McSelector',
      component: _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_3__["McSelectorComponent"]
    }, {
      path: 'Easy',
      component: _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_4__["EasyComponent"]
    }, {
      path: 'Hard',
      component: _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_5__["HardComponent"]
    }, {
      path: 'Thematic',
      component: _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_6__["ThematicComponent"]
    }, {
      path: 'Characters',
      component: _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_7__["CharactersComponent"]
    }, {
      path: 'Blood',
      component: _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_8__["BloodComponent"]
    }, {
      path: 'Deluxe',
      component: _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_9__["DeluxeComponent"]
    }, {
      path: 'Results',
      component: _components_results_results_component__WEBPACK_IMPORTED_MODULE_10__["ResultsComponent"]
    }, {
      path: '',
      component: _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_11__["FmsSelectorComponent"]
    }];

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


    __webpack_exports__["default"] = "#player1 {\n  width: 100%;\n  height: auto;\n  text-align: center;\n  margin-top: 10rem;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcYXBwLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9hcHAuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxXQUFBO0VBQ0EsWUFBQTtFQUNBLGtCQUFBO0VBQ0EsaUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIiNwbGF5ZXIxIHtcclxuICB3aWR0aDogMTAwJTtcclxuICBoZWlnaHQ6IGF1dG87XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gIG1hcmdpbi10b3A6IDEwcmVtO1xyXG59XHJcbiIsIiNwbGF5ZXIxIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGhlaWdodDogYXV0bztcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xuICBtYXJnaW4tdG9wOiAxMHJlbTtcbn0iXX0= */";
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


    var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./services/event-emmiter.service */
    "./src/app/services/event-emmiter.service.ts");

    var AppComponent = /*#__PURE__*/function () {
      function AppComponent(eventEmitterService) {
        _classCallCheck(this, AppComponent);

        this.eventEmitterService = eventEmitterService;
        this.reframed = false;
        this.visible = false;
        this.isRestricted = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
        this.title = 'FMS-Votes';
      }
      /* 2. Initialize method for YT IFrame API */


      _createClass(AppComponent, [{
        key: "init",
        value: function init() {
          var _this = this;

          // Return if Player is already created
          if (window['YT']) {
            this.startVideo();
            return;
          }

          var tag = document.createElement('script');
          tag.src = 'https://www.youtube.com/iframe_api';
          var firstScriptTag = document.getElementsByTagName('script')[0];
          firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
          /* 3. startVideo() will create an <iframe> (and YouTube player) after the API code downloads. */

          window['onYouTubeIframeAPIReady'] = function () {
            return _this.startVideo();
          };
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          var _this2 = this;

          this.audio = new Audio();
          this.audio.addEventListener('ended', function (event) {
            if (_this2.player !== undefined) {
              _this2.player.unMute();
            }
          });

          if (this.eventEmitterService.loadVideoSubscription == undefined) {
            this.eventEmitterService.loadVideoSubscription = this.eventEmitterService.loadYTvideo.subscribe(function (videoId) {
              if (!_this2.visible) {
                _this2.video = videoId;
                _this2.visible = true;

                _this2.init();
              }
            });
          }

          if (this.eventEmitterService.stopVideoSubscription == undefined) {
            this.eventEmitterService.stopVideoSubscription = this.eventEmitterService.stopYTvideo.subscribe(function () {
              _this2.stopYTVideo();

              _this2.visible = false;
            });
          }

          if (this.eventEmitterService.stopIntroAudioSubscription == undefined) {
            this.eventEmitterService.stopIntroAudioSubscription = this.eventEmitterService.stopIntroAudio.subscribe(function () {
              _this2.audio.pause();
            });
          }

          if (this.eventEmitterService.startIntroAudioSubscription == undefined) {
            this.eventEmitterService.startIntroAudioSubscription = this.eventEmitterService.startIntroAudio.subscribe(function (path) {
              _this2.audio.src = path;

              _this2.audio.load();

              _this2.audio.play();
            });
          }
        }
      }, {
        key: "stopYTVideo",
        value: function stopYTVideo() {
          if (this.player !== undefined) {
            this.player.stopVideo();
          }
        }
      }, {
        key: "startVideo",
        value: function startVideo() {
          this.reframed = false;

          if (this.player === undefined) {
            this.player = new window['YT'].Player('player', {
              start: 0,
              playerVars: {
                autoplay: 1,
                modestbranding: 1,
                controls: 1,
                disablekb: 1,
                rel: 0,
                showinfo: 0,
                fs: 0,
                playsinline: 1
              },
              events: {
                'onStateChange': this.onPlayerStateChange.bind(this),
                'onError': this.onPlayerError.bind(this),
                'onReady': this.onPlayerReady.bind(this)
              }
            });
          } else {
            this.player.loadVideoById(this.video, 1);

            if (!this.audio.ended) {
              console.log("YES");
              this.player.mute();
            } else {
              console.log("NO");
            }
          }
        }
        /* 4. It will be called when the Video Player is ready */

      }, {
        key: "onPlayerReady",
        value: function onPlayerReady(event) {
          document.getElementById("player").setAttribute("style", "border: 3px solid #1F5A2E; width: 800px; height:400px; border-radius: 20px; box-shadow: 0px 0px 10px 3px #1F5A2E;");
          event.target.loadVideoById(this.video, 1);

          if (this.isRestricted) {
            event.target.mute();
            event.target.playVideo();
          } else {
            event.target.playVideo();
          }

          if (!this.audio.ended) {
            this.player.mute();
          }
        }
        /* 5. API will call this function when Player State changes like PLAYING, PAUSED, ENDED */

      }, {
        key: "onPlayerStateChange",
        value: function onPlayerStateChange(event) {
          console.log(event);

          switch (event.data) {
            case window['YT'].PlayerState.PLAYING:
              if (this.cleanTime() == 0) {
                console.log('started ' + this.cleanTime());
              } else {
                console.log('playing ' + this.cleanTime());
              }

              ;
              break;

            case window['YT'].PlayerState.PAUSED:
              if (this.player.getDuration() - this.player.getCurrentTime() != 0) {
                console.log('paused' + ' @ ' + this.cleanTime());
              }

              ;
              break;

            case window['YT'].PlayerState.ENDED:
              console.log('ended ');
              break;
          }

          ;
        }
      }, {
        key: "cleanTime",
        value: function cleanTime() {
          return Math.round(this.player.getCurrentTime());
        }
      }, {
        key: "onPlayerError",
        value: function onPlayerError(event) {
          switch (event.data) {
            case 2:
              console.log('' + this.video);
              break;

            case 100:
              break;

            case 101 || false:
              break;
          }

          ;
        }
      }]);

      return AppComponent;
    }();

    AppComponent.ctorParameters = function () {
      return [{
        type: _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_2__["EventEmitterService"]
      }];
    };

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


    var _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./components/mc-selector/mc-selector.component */
    "./src/app/components/mc-selector/mc-selector.component.ts");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/material/input */
    "./node_modules/@angular/material/esm2015/input.js");
    /* harmony import */


    var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/material/button */
    "./node_modules/@angular/material/esm2015/button.js");
    /* harmony import */


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./components/easy/easy.component */
    "./src/app/components/easy/easy.component.ts");
    /* harmony import */


    var _components_base_patron_number_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./components/base/patron-number-directive */
    "./src/app/components/base/patron-number-directive.ts");
    /* harmony import */


    var _components_base_extra_score_directive__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./components/base/extra-score-directive */
    "./src/app/components/base/extra-score-directive.ts");
    /* harmony import */


    var _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
    /*! ./components/hard/hard.component */
    "./src/app/components/hard/hard.component.ts");
    /* harmony import */


    var _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
    /*! ./components/thematic/thematic.component */
    "./src/app/components/thematic/thematic.component.ts");
    /* harmony import */


    var _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
    /*! ./components/blood/blood.component */
    "./src/app/components/blood/blood.component.ts");
    /* harmony import */


    var _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
    /*! ./components/characters/characters.component */
    "./src/app/components/characters/characters.component.ts");
    /* harmony import */


    var _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
    /*! ./components/deluxe/deluxe.component */
    "./src/app/components/deluxe/deluxe.component.ts");
    /* harmony import */


    var _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
    /*! ./components/results/results.component */
    "./src/app/components/results/results.component.ts");
    /* harmony import */


    var _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
    /*! ./components/fms-selector/fms-selector.component */
    "./src/app/components/fms-selector/fms-selector.component.ts");
    /* harmony import */


    var _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
    /*! ./components/fms-esp/fms-esp.component */
    "./src/app/components/fms-esp/fms-esp.component.ts");
    /* harmony import */


    var _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
    /*! ./components/blon/blon.component */
    "./src/app/components/blon/blon.component.ts");
    /* harmony import */


    var _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
    /*! ./components/khan/khan.component */
    "./src/app/components/khan/khan.component.ts");
    /* harmony import */


    var _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
    /*! ./components/mrego/mrego.component */
    "./src/app/components/mrego/mrego.component.ts");
    /* harmony import */


    var _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
    /*! ./components/tirpa/tirpa.component */
    "./src/app/components/tirpa/tirpa.component.ts");
    /* harmony import */


    var _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
    /*! ./components/zasko/zasko.component */
    "./src/app/components/zasko/zasko.component.ts");
    /* harmony import */


    var _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(
    /*! ./components/gazir/gazir.component */
    "./src/app/components/gazir/gazir.component.ts");
    /* harmony import */


    var _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(
    /*! ./components/mnak/mnak.component */
    "./src/app/components/mnak/mnak.component.ts");
    /* harmony import */


    var _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(
    /*! ./components/errece/errece.component */
    "./src/app/components/errece/errece.component.ts");
    /* harmony import */


    var _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(
    /*! ./components/bnet/bnet.component */
    "./src/app/components/bnet/bnet.component.ts");
    /* harmony import */


    var _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(
    /*! ./components/sweetpain/sweetpain.component */
    "./src/app/components/sweetpain/sweetpain.component.ts");
    /* harmony import */


    var _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(
    /*! ./components/fms-mex/fms-mex.component */
    "./src/app/components/fms-mex/fms-mex.component.ts");
    /* harmony import */


    var _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_33__ = __webpack_require__(
    /*! ./components/fms-per/fms-per.component */
    "./src/app/components/fms-per/fms-per.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_34__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/lobo/lobo.component */
    "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_35__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/bone/bone.component */
    "./src/app/components/fms-mex/gallos/bone/bone.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_36__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/jonyb/jonyb.component */
    "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_37__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/garza/garza.component */
    "./src/app/components/fms-mex/gallos/garza/garza.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_38__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rc/rc.component */
    "./src/app/components/fms-mex/gallos/rc/rc.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_39__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/potencia/potencia.component */
    "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_40__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/yoiker/yoiker.component */
    "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_41__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/zticma/zticma.component */
    "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_42__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/rapder/rapder.component */
    "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts");
    /* harmony import */


    var _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_43__ = __webpack_require__(
    /*! ./components/fms-mex/gallos/skiper/skiper.component */
    "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_44__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jota/jota.component */
    "./src/app/components/fms-per/gallos/jota/jota.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_45__ = __webpack_require__(
    /*! ./components/fms-per/gallos/skill/skill.component */
    "./src/app/components/fms-per/gallos/skill/skill.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_46__ = __webpack_require__(
    /*! ./components/fms-per/gallos/jaze/jaze.component */
    "./src/app/components/fms-per/gallos/jaze/jaze.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_47__ = __webpack_require__(
    /*! ./components/fms-per/gallos/litzen/litzen.component */
    "./src/app/components/fms-per/gallos/litzen/litzen.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_48__ = __webpack_require__(
    /*! ./components/fms-per/gallos/nekroos/nekroos.component */
    "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_49__ = __webpack_require__(
    /*! ./components/fms-per/gallos/newera/newera.component */
    "./src/app/components/fms-per/gallos/newera/newera.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_50__ = __webpack_require__(
    /*! ./components/fms-per/gallos/ramset/ramset.component */
    "./src/app/components/fms-per/gallos/ramset/ramset.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_51__ = __webpack_require__(
    /*! ./components/fms-per/gallos/stick/stick.component */
    "./src/app/components/fms-per/gallos/stick/stick.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_52__ = __webpack_require__(
    /*! ./components/fms-per/gallos/choque/choque.component */
    "./src/app/components/fms-per/gallos/choque/choque.component.ts");
    /* harmony import */


    var _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_53__ = __webpack_require__(
    /*! ./components/fms-per/gallos/strike/strike.component */
    "./src/app/components/fms-per/gallos/strike/strike.component.ts");
    /* harmony import */


    var _components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_54__ = __webpack_require__(
    /*! ./components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");
    /* harmony import */


    var _components_fms_arg_fms_arg_component__WEBPACK_IMPORTED_MODULE_55__ = __webpack_require__(
    /*! ./components/fms-arg/fms-arg.component */
    "./src/app/components/fms-arg/fms-arg.component.ts");
    /* harmony import */


    var _components_fms_arg_cacha_cacha_component__WEBPACK_IMPORTED_MODULE_56__ = __webpack_require__(
    /*! ./components/fms-arg/cacha/cacha.component */
    "./src/app/components/fms-arg/cacha/cacha.component.ts");
    /* harmony import */


    var _components_fms_arg_dtoke_dtoke_component__WEBPACK_IMPORTED_MODULE_57__ = __webpack_require__(
    /*! ./components/fms-arg/dtoke/dtoke.component */
    "./src/app/components/fms-arg/dtoke/dtoke.component.ts");
    /* harmony import */


    var _components_fms_arg_klan_klan_component__WEBPACK_IMPORTED_MODULE_58__ = __webpack_require__(
    /*! ./components/fms-arg/klan/klan.component */
    "./src/app/components/fms-arg/klan/klan.component.ts");
    /* harmony import */


    var _components_fms_arg_mecha_mecha_component__WEBPACK_IMPORTED_MODULE_59__ = __webpack_require__(
    /*! ./components/fms-arg/mecha/mecha.component */
    "./src/app/components/fms-arg/mecha/mecha.component.ts");
    /* harmony import */


    var _components_fms_arg_mks_mks_component__WEBPACK_IMPORTED_MODULE_60__ = __webpack_require__(
    /*! ./components/fms-arg/mks/mks.component */
    "./src/app/components/fms-arg/mks/mks.component.ts");
    /* harmony import */


    var _components_fms_arg_nacho_nacho_component__WEBPACK_IMPORTED_MODULE_61__ = __webpack_require__(
    /*! ./components/fms-arg/nacho/nacho.component */
    "./src/app/components/fms-arg/nacho/nacho.component.ts");
    /* harmony import */


    var _components_fms_arg_papo_papo_component__WEBPACK_IMPORTED_MODULE_62__ = __webpack_require__(
    /*! ./components/fms-arg/papo/papo.component */
    "./src/app/components/fms-arg/papo/papo.component.ts");
    /* harmony import */


    var _components_fms_arg_stuart_stuart_component__WEBPACK_IMPORTED_MODULE_63__ = __webpack_require__(
    /*! ./components/fms-arg/stuart/stuart.component */
    "./src/app/components/fms-arg/stuart/stuart.component.ts");
    /* harmony import */


    var _components_fms_arg_sub_sub_component__WEBPACK_IMPORTED_MODULE_64__ = __webpack_require__(
    /*! ./components/fms-arg/sub/sub.component */
    "./src/app/components/fms-arg/sub/sub.component.ts");
    /* harmony import */


    var _components_fms_arg_wolf_wolf_component__WEBPACK_IMPORTED_MODULE_65__ = __webpack_require__(
    /*! ./components/fms-arg/wolf/wolf.component */
    "./src/app/components/fms-arg/wolf/wolf.component.ts");
    /* harmony import */


    var _components_fms_chi_fms_chi_component__WEBPACK_IMPORTED_MODULE_66__ = __webpack_require__(
    /*! ./components/fms-chi/fms-chi.component */
    "./src/app/components/fms-chi/fms-chi.component.ts");
    /* harmony import */


    var _components_fms_chi_jokker_jokker_component__WEBPACK_IMPORTED_MODULE_67__ = __webpack_require__(
    /*! ./components/fms-chi/jokker/jokker.component */
    "./src/app/components/fms-chi/jokker/jokker.component.ts");
    /* harmony import */


    var _components_fms_chi_tomcrowley_tomcrowley_component__WEBPACK_IMPORTED_MODULE_68__ = __webpack_require__(
    /*! ./components/fms-chi/tomcrowley/tomcrowley.component */
    "./src/app/components/fms-chi/tomcrowley/tomcrowley.component.ts");
    /* harmony import */


    var _components_fms_chi_nitro_nitro_component__WEBPACK_IMPORTED_MODULE_69__ = __webpack_require__(
    /*! ./components/fms-chi/nitro/nitro.component */
    "./src/app/components/fms-chi/nitro/nitro.component.ts");
    /* harmony import */


    var _components_fms_chi_esezeta_esezeta_component__WEBPACK_IMPORTED_MODULE_70__ = __webpack_require__(
    /*! ./components/fms-chi/esezeta/esezeta.component */
    "./src/app/components/fms-chi/esezeta/esezeta.component.ts");
    /* harmony import */


    var _components_fms_chi_pepegrillo_pepegrillo_component__WEBPACK_IMPORTED_MODULE_71__ = __webpack_require__(
    /*! ./components/fms-chi/pepegrillo/pepegrillo.component */
    "./src/app/components/fms-chi/pepegrillo/pepegrillo.component.ts");
    /* harmony import */


    var _components_fms_chi_elmenor_elmenor_component__WEBPACK_IMPORTED_MODULE_72__ = __webpack_require__(
    /*! ./components/fms-chi/elmenor/elmenor.component */
    "./src/app/components/fms-chi/elmenor/elmenor.component.ts");
    /* harmony import */


    var _components_fms_chi_ricto_ricto_component__WEBPACK_IMPORTED_MODULE_73__ = __webpack_require__(
    /*! ./components/fms-chi/ricto/ricto.component */
    "./src/app/components/fms-chi/ricto/ricto.component.ts");
    /* harmony import */


    var _components_fms_chi_acertijo_acertijo_component__WEBPACK_IMPORTED_MODULE_74__ = __webpack_require__(
    /*! ./components/fms-chi/acertijo/acertijo.component */
    "./src/app/components/fms-chi/acertijo/acertijo.component.ts");
    /* harmony import */


    var _components_fms_chi_teorema_teorema_component__WEBPACK_IMPORTED_MODULE_75__ = __webpack_require__(
    /*! ./components/fms-chi/teorema/teorema.component */
    "./src/app/components/fms-chi/teorema/teorema.component.ts");
    /* harmony import */


    var _components_fms_chi_joqerr_joqerr_component__WEBPACK_IMPORTED_MODULE_76__ = __webpack_require__(
    /*! ./components/fms-chi/joqerr/joqerr.component */
    "./src/app/components/fms-chi/joqerr/joqerr.component.ts");
    /* harmony import */


    var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_77__ = __webpack_require__(
    /*! ./services/event-emmiter.service */
    "./src/app/services/event-emmiter.service.ts"); //import { HashLocationStrategy, LocationStrategy  } from '@angular/common';


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"], _components_mc_selector_mc_selector_component__WEBPACK_IMPORTED_MODULE_5__["McSelectorComponent"], _components_easy_easy_component__WEBPACK_IMPORTED_MODULE_11__["EasyComponent"], _components_base_patron_number_directive__WEBPACK_IMPORTED_MODULE_12__["PatronNumberDirective"], _components_base_extra_score_directive__WEBPACK_IMPORTED_MODULE_13__["ExtraScoreNumberDirective"], _components_hard_hard_component__WEBPACK_IMPORTED_MODULE_14__["HardComponent"], _components_thematic_thematic_component__WEBPACK_IMPORTED_MODULE_15__["ThematicComponent"], _components_blood_blood_component__WEBPACK_IMPORTED_MODULE_16__["BloodComponent"], _components_characters_characters_component__WEBPACK_IMPORTED_MODULE_17__["CharactersComponent"], _components_deluxe_deluxe_component__WEBPACK_IMPORTED_MODULE_18__["DeluxeComponent"], _components_results_results_component__WEBPACK_IMPORTED_MODULE_19__["ResultsComponent"], _components_fms_selector_fms_selector_component__WEBPACK_IMPORTED_MODULE_20__["FmsSelectorComponent"], _components_fms_esp_fms_esp_component__WEBPACK_IMPORTED_MODULE_21__["FmsEspComponent"], _components_blon_blon_component__WEBPACK_IMPORTED_MODULE_22__["BlonComponent"], _components_khan_khan_component__WEBPACK_IMPORTED_MODULE_23__["KhanComponent"], _components_mrego_mrego_component__WEBPACK_IMPORTED_MODULE_24__["MregoComponent"], _components_tirpa_tirpa_component__WEBPACK_IMPORTED_MODULE_25__["TirpaComponent"], _components_zasko_zasko_component__WEBPACK_IMPORTED_MODULE_26__["ZaskoComponent"], _components_gazir_gazir_component__WEBPACK_IMPORTED_MODULE_27__["GazirComponent"], _components_mnak_mnak_component__WEBPACK_IMPORTED_MODULE_28__["MnakComponent"], _components_errece_errece_component__WEBPACK_IMPORTED_MODULE_29__["ErreceComponent"], _components_bnet_bnet_component__WEBPACK_IMPORTED_MODULE_30__["BnetComponent"], _components_sweetpain_sweetpain_component__WEBPACK_IMPORTED_MODULE_31__["SweetpainComponent"], _components_fms_mex_fms_mex_component__WEBPACK_IMPORTED_MODULE_32__["FmsMexComponent"], _components_fms_per_fms_per_component__WEBPACK_IMPORTED_MODULE_33__["FmsPerComponent"], _components_fms_mex_gallos_lobo_lobo_component__WEBPACK_IMPORTED_MODULE_34__["LoboComponent"], _components_fms_mex_gallos_bone_bone_component__WEBPACK_IMPORTED_MODULE_35__["BoneComponent"], _components_fms_mex_gallos_jonyb_jonyb_component__WEBPACK_IMPORTED_MODULE_36__["JonybComponent"], _components_fms_mex_gallos_garza_garza_component__WEBPACK_IMPORTED_MODULE_37__["GarzaComponent"], _components_fms_mex_gallos_rc_rc_component__WEBPACK_IMPORTED_MODULE_38__["RcComponent"], _components_fms_mex_gallos_potencia_potencia_component__WEBPACK_IMPORTED_MODULE_39__["PotenciaComponent"], _components_fms_mex_gallos_yoiker_yoiker_component__WEBPACK_IMPORTED_MODULE_40__["YoikerComponent"], _components_fms_mex_gallos_zticma_zticma_component__WEBPACK_IMPORTED_MODULE_41__["ZticmaComponent"], _components_fms_mex_gallos_rapder_rapder_component__WEBPACK_IMPORTED_MODULE_42__["RapderComponent"], _components_fms_mex_gallos_skiper_skiper_component__WEBPACK_IMPORTED_MODULE_43__["SkiperComponent"], _components_fms_per_gallos_jota_jota_component__WEBPACK_IMPORTED_MODULE_44__["JotaComponent"], _components_fms_per_gallos_skill_skill_component__WEBPACK_IMPORTED_MODULE_45__["SkillComponent"], _components_fms_per_gallos_jaze_jaze_component__WEBPACK_IMPORTED_MODULE_46__["JazeComponent"], _components_fms_per_gallos_litzen_litzen_component__WEBPACK_IMPORTED_MODULE_47__["LitzenComponent"], _components_fms_per_gallos_nekroos_nekroos_component__WEBPACK_IMPORTED_MODULE_48__["NekroosComponent"], _components_fms_per_gallos_newera_newera_component__WEBPACK_IMPORTED_MODULE_49__["NeweraComponent"], _components_fms_per_gallos_ramset_ramset_component__WEBPACK_IMPORTED_MODULE_50__["RamsetComponent"], _components_fms_per_gallos_stick_stick_component__WEBPACK_IMPORTED_MODULE_51__["StickComponent"], _components_fms_per_gallos_choque_choque_component__WEBPACK_IMPORTED_MODULE_52__["ChoqueComponent"], _components_fms_per_gallos_strike_strike_component__WEBPACK_IMPORTED_MODULE_53__["StrikeComponent"], _components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_54__["BaseComponentComponent"], _components_fms_arg_fms_arg_component__WEBPACK_IMPORTED_MODULE_55__["FmsArgComponent"], _components_fms_arg_cacha_cacha_component__WEBPACK_IMPORTED_MODULE_56__["CachaComponent"], _components_fms_arg_dtoke_dtoke_component__WEBPACK_IMPORTED_MODULE_57__["DtokeComponent"], _components_fms_arg_klan_klan_component__WEBPACK_IMPORTED_MODULE_58__["KlanComponent"], _components_fms_arg_mecha_mecha_component__WEBPACK_IMPORTED_MODULE_59__["MechaComponent"], _components_fms_arg_mks_mks_component__WEBPACK_IMPORTED_MODULE_60__["MksComponent"], _components_fms_arg_nacho_nacho_component__WEBPACK_IMPORTED_MODULE_61__["NachoComponent"], _components_fms_arg_papo_papo_component__WEBPACK_IMPORTED_MODULE_62__["PapoComponent"], _components_fms_arg_stuart_stuart_component__WEBPACK_IMPORTED_MODULE_63__["StuartComponent"], _components_fms_arg_sub_sub_component__WEBPACK_IMPORTED_MODULE_64__["SubComponent"], _components_fms_arg_wolf_wolf_component__WEBPACK_IMPORTED_MODULE_65__["WolfComponent"], _components_fms_chi_fms_chi_component__WEBPACK_IMPORTED_MODULE_66__["FmsChiComponent"], _components_fms_chi_jokker_jokker_component__WEBPACK_IMPORTED_MODULE_67__["JokkerComponent"], _components_fms_chi_tomcrowley_tomcrowley_component__WEBPACK_IMPORTED_MODULE_68__["TomcrowleyComponent"], _components_fms_chi_nitro_nitro_component__WEBPACK_IMPORTED_MODULE_69__["NitroComponent"], _components_fms_chi_esezeta_esezeta_component__WEBPACK_IMPORTED_MODULE_70__["EsezetaComponent"], _components_fms_chi_pepegrillo_pepegrillo_component__WEBPACK_IMPORTED_MODULE_71__["PepegrilloComponent"], _components_fms_chi_elmenor_elmenor_component__WEBPACK_IMPORTED_MODULE_72__["ElmenorComponent"], _components_fms_chi_ricto_ricto_component__WEBPACK_IMPORTED_MODULE_73__["RictoComponent"], _components_fms_chi_acertijo_acertijo_component__WEBPACK_IMPORTED_MODULE_74__["AcertijoComponent"], _components_fms_chi_teorema_teorema_component__WEBPACK_IMPORTED_MODULE_75__["TeoremaComponent"], _components_fms_chi_joqerr_joqerr_component__WEBPACK_IMPORTED_MODULE_76__["JoqerrComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _app_routing_module__WEBPACK_IMPORTED_MODULE_3__["AppRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInputModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButtonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_10__["FormsModule"]],
      providers: [//{provide : LocationStrategy , useClass: HashLocationStrategy},
      _services_SharingService__WEBPACK_IMPORTED_MODULE_9__["SharingService"], _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_77__["EventEmitterService"]],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/components/base-component/base-component.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/base-component/base-component.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBaseComponentBaseComponentComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmFzZS1jb21wb25lbnQvYmFzZS1jb21wb25lbnQuY29tcG9uZW50LnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/components/base-component/base-component.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/base-component/base-component.component.ts ***!
    \***********************************************************************/

  /*! exports provided: BaseComponentComponent */

  /***/
  function srcAppComponentsBaseComponentBaseComponentComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BaseComponentComponent", function () {
      return BaseComponentComponent;
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


    var src_app_models_score_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/models/score-model */
    "./src/app/models/score-model.ts");
    /* harmony import */


    var src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! src/app/services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! src/app/models/mc-model */
    "./src/app/models/mc-model.ts");
    /* harmony import */


    var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ../../services/event-emmiter.service */
    "./src/app/services/event-emmiter.service.ts");
    /* harmony import */


    var _constants__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ../../constants */
    "./src/app/constants.ts");

    var BaseComponentComponent = /*#__PURE__*/function () {
      function BaseComponentComponent(sharingService, router, eventEmitterservice) {
        _classCallCheck(this, BaseComponentComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmitterservice = eventEmitterservice;
        this.CONSTANTS = _constants__WEBPACK_IMPORTED_MODULE_7__;
        this.scoreData = new src_app_models_score_model__WEBPACK_IMPORTED_MODULE_2__["ScoreModel"]();
        this.audio = new Audio();
      }

      _createClass(BaseComponentComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.eventEmitterservice.stopVideo();
        }
      }, {
        key: "goToBattle",
        value: function goToBattle(mc1, mc2, videoId) {
          this.scoreData.Mc1 = new src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__["McModel"]();
          this.scoreData.Mc2 = new src_app_models_mc_model__WEBPACK_IMPORTED_MODULE_5__["McModel"]();
          this.scoreData.videoURL = videoId;
          this.scoreData.Mc1.name = mc1;
          this.scoreData.Mc2.name = mc2;
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Easy']);
        }
      }, {
        key: "goToMc",
        value: function goToMc(mc, introsCount, folder) {
          this.playAudio(mc, introsCount, folder);
          this.router.navigate(['/' + mc]);
        }
      }, {
        key: "playAudio",
        value: function playAudio(mcName, introsCount, folder) {
          this.eventEmitterservice.startIntro("assets/sounds/" + folder + "/" + mcName + "/" + mcName + "_intro" + this.getRandom(introsCount) + ".mp3");
        }
      }, {
        key: "getRandom",
        value: function getRandom(max) {
          var value = parseInt((Math.random() * 100 % max).toString());
          return value + 1;
        }
      }]);

      return BaseComponentComponent;
    }();

    BaseComponentComponent.ctorParameters = function () {
      return [{
        type: src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_3__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"]
      }, {
        type: _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_6__["EventEmitterService"]
      }];
    };

    BaseComponentComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-base-component',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./base-component.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/base-component/base-component.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./base-component.component.scss */
      "./src/app/components/base-component/base-component.component.scss"))["default"]]
    })], BaseComponentComponent);
    /***/
  },

  /***/
  "./src/app/components/base/extra-score-directive.ts":
  /*!**********************************************************!*\
    !*** ./src/app/components/base/extra-score-directive.ts ***!
    \**********************************************************/

  /*! exports provided: ExtraScoreNumberDirective */

  /***/
  function srcAppComponentsBaseExtraScoreDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ExtraScoreNumberDirective", function () {
      return ExtraScoreNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ExtraScoreNumberDirective = /*#__PURE__*/function () {
      function ExtraScoreNumberDirective(el) {
        _classCallCheck(this, ExtraScoreNumberDirective);

        this.el = el;
      }

      _createClass(ExtraScoreNumberDirective, [{
        key: "onInputChange",
        value: function onInputChange(event) {
          var initalValue = this.el.nativeElement.value;
          this.el.nativeElement.value = initalValue.replace(/[^0-2]/g, '');

          if (initalValue !== this.el.nativeElement.value) {
            event.stopPropagation();
          }
        }
      }]);

      return ExtraScoreNumberDirective;
    }();

    ExtraScoreNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('input', ['$event'])], ExtraScoreNumberDirective.prototype, "onInputChange", null);
    ExtraScoreNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[extraScoreNumber]'
    })], ExtraScoreNumberDirective);
    /***/
  },

  /***/
  "./src/app/components/base/patron-number-directive.ts":
  /*!************************************************************!*\
    !*** ./src/app/components/base/patron-number-directive.ts ***!
    \************************************************************/

  /*! exports provided: PatronNumberDirective */

  /***/
  function srcAppComponentsBasePatronNumberDirectiveTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatronNumberDirective", function () {
      return PatronNumberDirective;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var PatronNumberDirective = /*#__PURE__*/function () {
      function PatronNumberDirective(el) {
        _classCallCheck(this, PatronNumberDirective);

        this.el = el;
      }

      _createClass(PatronNumberDirective, [{
        key: "handleKeyboardEvent",
        value: function handleKeyboardEvent(event) {
          //arrowUp
          if (event.keyCode == 38) {
            var htmlElement = document.getElementById(document.activeElement.id);

            if (htmlElement != undefined) {
              if (htmlElement.value.length == 0) {
                htmlElement.value = "0.5";
              } else if (!htmlElement.value.endsWith(".5") && htmlElement.value != "4") {
                htmlElement.value = htmlElement.value + ".5";
              }

              htmlElement.dispatchEvent(new Event("input"));
            }
          } //delete o backspace o tab


          if (event.keyCode == 46 || event.keyCode == 8 || event.keyCode == 9) {
            var htmlElement = document.getElementById(document.activeElement.id);

            if (htmlElement != undefined && htmlElement.value.endsWith(",5")) {
              htmlElement.dispatchEvent(new Event("input"));
            }
          } else if (event.keyCode < 48 || event.keyCode > 52) {
            // Si no esta entre 0 o 4
            return false;
          }
        }
      }]);

      return PatronNumberDirective;
    }();

    PatronNumberDirective.ctorParameters = function () {
      return [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["ElementRef"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown', ['$event'])], PatronNumberDirective.prototype, "handleKeyboardEvent", null);
    PatronNumberDirective = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Directive"])({
      // tslint:disable-next-line: directive-selector
      selector: '[patronNumber]'
    })], PatronNumberDirective);
    /***/
  },

  /***/
  "./src/app/components/blon/blon.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/blon/blon.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBlonBlonComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9uL2Jsb24uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibG9uXFxibG9uLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Jsb24vYmxvbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/blon/blon.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/blon/blon.component.ts ***!
    \***************************************************/

  /*! exports provided: BlonComponent */

  /***/
  function srcAppComponentsBlonBlonComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BlonComponent", function () {
      return BlonComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var BlonComponent = /*#__PURE__*/function (_base_component_base_) {
      _inherits(BlonComponent, _base_component_base_);

      var _super = _createSuper(BlonComponent);

      function BlonComponent() {
        _classCallCheck(this, BlonComponent);

        return _super.apply(this, arguments);
      }

      return BlonComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    BlonComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blon',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blon.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blon/blon.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blon.component.scss */
      "./src/app/components/blon/blon.component.scss"))["default"]]
    })], BlonComponent);
    /***/
  },

  /***/
  "./src/app/components/blood/blood.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/blood/blood.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBloodBloodComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thematic {\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n}\n\n/*.firstThematic {\n  margin-left: -20px;\n\n}\n*/\n\n.secondThematic {\n  margin-left: 150px;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibG9vZC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibG9vZFxcYmxvb2QuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYmxvb2QvYmxvb2QuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTs7OztDQUFBOztBQUtBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvYmxvb2QvYmxvb2QuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmVUYWJsZXtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKi5maXJzdFRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG59XHJcbiovXHJcbi5zZWNvbmRUaGVtYXRpYyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWMge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRoZW1hdGljIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLmZpcnN0VGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG5cbn1cbiovXG4uc2Vjb25kVGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5zY29yZUlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWMge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/blood/blood.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/blood/blood.component.ts ***!
    \*****************************************************/

  /*! exports provided: BloodComponent */

  /***/
  function srcAppComponentsBloodBloodComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BloodComponent", function () {
      return BloodComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var BloodComponent = /*#__PURE__*/function () {
      function BloodComponent(sharingService, router) {
        _classCallCheck(this, BloodComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(BloodComponent, [{
        key: "navigateToDeluxe",
        value: function navigateToDeluxe() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Deluxe']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return BloodComponent;
    }();

    BloodComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    BloodComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-blood',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./blood.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/blood/blood.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./blood.component.scss */
      "./src/app/components/blood/blood.component.scss"))["default"]]
    })], BloodComponent);
    /***/
  },

  /***/
  "./src/app/components/bnet/bnet.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/bnet/bnet.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsBnetBnetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9ibmV0L2JuZXQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvYm5ldC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxibmV0XFxibmV0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2JuZXQvYm5ldC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/bnet/bnet.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/bnet/bnet.component.ts ***!
    \***************************************************/

  /*! exports provided: BnetComponent */

  /***/
  function srcAppComponentsBnetBnetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BnetComponent", function () {
      return BnetComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var BnetComponent = /*#__PURE__*/function (_base_component_base_2) {
      _inherits(BnetComponent, _base_component_base_2);

      var _super2 = _createSuper(BnetComponent);

      function BnetComponent() {
        _classCallCheck(this, BnetComponent);

        return _super2.apply(this, arguments);
      }

      return BnetComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    BnetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bnet',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bnet.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/bnet/bnet.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bnet.component.scss */
      "./src/app/components/bnet/bnet.component.scss"))["default"]]
    })], BnetComponent);
    /***/
  },

  /***/
  "./src/app/components/characters/characters.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/characters/characters.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsCharactersCharactersComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9jaGFyYWN0ZXJzL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGNoYXJhY3RlcnNcXGNoYXJhY3RlcnMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvY2hhcmFjdGVycy9jaGFyYWN0ZXJzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2NoYXJhY3RlcnMvY2hhcmFjdGVycy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/characters/characters.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/characters/characters.component.ts ***!
    \***************************************************************/

  /*! exports provided: CharactersComponent */

  /***/
  function srcAppComponentsCharactersCharactersComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CharactersComponent", function () {
      return CharactersComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var CharactersComponent = /*#__PURE__*/function () {
      function CharactersComponent(sharingService, router) {
        _classCallCheck(this, CharactersComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(CharactersComponent, [{
        key: "navigateToBlood",
        value: function navigateToBlood() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Blood']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return CharactersComponent;
    }();

    CharactersComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    CharactersComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-characters',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./characters.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/characters/characters.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./characters.component.scss */
      "./src/app/components/characters/characters.component.scss"))["default"]]
    })], CharactersComponent);
    /***/
  },

  /***/
  "./src/app/components/deluxe/deluxe.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/deluxe/deluxe.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsDeluxeDeluxeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n\n.deluxe {\n  margin-left: 75%;\n  margin-right: 35%;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9kZWx1eGUvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZGVsdXhlXFxkZWx1eGUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZGVsdXhlL2RlbHV4ZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNJLGdCQUFBO0VBQ0EsaUJBQUE7RUFDQSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksa0JBQUE7QUNDSjs7QURFQTtFQUNJLFlBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtBQ0NKIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9kZWx1eGUvZGVsdXhlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLnNjb3JlVGFibGV7XHJcbiAgICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gICAgbWFyZ2luLWxlZnQ6IGF1dG87XHJcbiAgICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbn1cclxuXHJcbi5zY29yZUlucHV0IHtcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuLm1jIHtcclxuICAgIHdpZHRoOiAxMDBweDtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5kZWx1eGUge1xyXG4gICAgbWFyZ2luLWxlZnQ6IDc1JTtcclxuICAgIG1hcmdpbi1yaWdodDogMzUlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmRlbHV4ZSB7XG4gIG1hcmdpbi1sZWZ0OiA3NSU7XG4gIG1hcmdpbi1yaWdodDogMzUlO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/deluxe/deluxe.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/deluxe/deluxe.component.ts ***!
    \*******************************************************/

  /*! exports provided: DeluxeComponent */

  /***/
  function srcAppComponentsDeluxeDeluxeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DeluxeComponent", function () {
      return DeluxeComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var DeluxeComponent = /*#__PURE__*/function () {
      function DeluxeComponent(sharingService, router) {
        _classCallCheck(this, DeluxeComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(DeluxeComponent, [{
        key: "navigateToResults",
        value: function navigateToResults() {
          this.scoreData.Mc1.calculateTotal();
          this.scoreData.Mc2.calculateTotal();
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Results']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return DeluxeComponent;
    }();

    DeluxeComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    DeluxeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-deluxe',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./deluxe.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/deluxe/deluxe.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./deluxe.component.scss */
      "./src/app/components/deluxe/deluxe.component.scss"))["default"]]
    })], DeluxeComponent);
    /***/
  },

  /***/
  "./src/app/components/easy/easy.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/easy/easy.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsEasyEasyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  text-transform: uppercase;\n}\n\n.mc1 {\n  width: 50%;\n}\n\n.mc2 {\n  width: 50%;\n}\n\n.mcselection {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  /*change color of label*/\n  color: #eee !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label when focused*/\n  color: #1F5A2E !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #eee !important;\n}\n\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #1F5A2E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lYXN5L0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGVhc3lcXGVhc3kuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZWFzeS9lYXN5LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQUo7O0FER0E7RUFDSSxrQkFBQTtBQ0FKOztBREdBO0VBQ0kseUJBQUE7QUNBSjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNFLFVBQUE7QUNBRjs7QURHQTtFQUNJLFdBQUE7QUNBSjs7QURHRTtFQUNFLHdCQUFBO0VBQ0Esc0JBQUE7QUNBSjs7QURHRTtFQUNFLHFDQUFBO0VBQ0EseUJBQUE7QUNBSjs7QURHRztFQUNDLDRCQUFBO0VBQ0EsaUNBQUE7QUNBSjs7QURHRTtFQUNDLHlDQUFBO0VBQ0Esb0NBQUE7QUNBSCIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZWFzeS9lYXN5LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiXHJcbi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcblxyXG4ubWMxIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWMyIHtcclxuICB3aWR0aDogNTAlO1xyXG59XHJcblxyXG4ubWNzZWxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgIGNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG4gICB9XHJcblxyXG4gICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXVuZGVybGluZSB7XHJcbiAgICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjojZWVlICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLXJpcHBsZSB7XHJcbiAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSB3aGVuIGZvY3VzZWQqL1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG5cclxuICB9XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59XG5cbi5tYzEge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWMyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1jc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cbiAgY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/easy/easy.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/easy/easy.component.ts ***!
    \***************************************************/

  /*! exports provided: EasyComponent */

  /***/
  function srcAppComponentsEasyEasyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EasyComponent", function () {
      return EasyComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/event-emmiter.service */
    "./src/app/services/event-emmiter.service.ts");

    var EasyComponent = /*#__PURE__*/function () {
      function EasyComponent(sharingService, router, eventEmitter) {
        _classCallCheck(this, EasyComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmitter = eventEmitter;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        } else {
          console.log("GOOO");
          this.eventEmitter.loadVideo(this.scoreData.videoURL);
        }
      }

      _createClass(EasyComponent, [{
        key: "navigateToHardMode",
        value: function navigateToHardMode() {
          console.log(this.scoreData);
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Hard']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return EasyComponent;
    }();

    EasyComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]
      }];
    };

    EasyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-easy',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./easy.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/easy/easy.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./easy.component.scss */
      "./src/app/components/easy/easy.component.scss"))["default"]]
    })], EasyComponent);
    /***/
  },

  /***/
  "./src/app/components/errece/errece.component.scss":
  /*!*********************************************************!*\
    !*** ./src/app/components/errece/errece.component.scss ***!
    \*********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsErreceErreceComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9lcnJlY2UvZXJyZWNlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2VycmVjZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxlcnJlY2VcXGVycmVjZS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9lcnJlY2UvZXJyZWNlLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/errece/errece.component.ts":
  /*!*******************************************************!*\
    !*** ./src/app/components/errece/errece.component.ts ***!
    \*******************************************************/

  /*! exports provided: ErreceComponent */

  /***/
  function srcAppComponentsErreceErreceComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErreceComponent", function () {
      return ErreceComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ErreceComponent = /*#__PURE__*/function (_base_component_base_3) {
      _inherits(ErreceComponent, _base_component_base_3);

      var _super3 = _createSuper(ErreceComponent);

      function ErreceComponent() {
        _classCallCheck(this, ErreceComponent);

        return _super3.apply(this, arguments);
      }

      return ErreceComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ErreceComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-errece',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./errece.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/errece/errece.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./errece.component.scss */
      "./src/app/components/errece/errece.component.scss"))["default"]]
    })], ErreceComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/cacha/cacha.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-arg/cacha/cacha.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgCachaCachaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2NhY2hhL2NhY2hhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvY2FjaGEvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcY2FjaGFcXGNhY2hhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvY2FjaGEvY2FjaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/cacha/cacha.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/cacha/cacha.component.ts ***!
    \*************************************************************/

  /*! exports provided: CachaComponent */

  /***/
  function srcAppComponentsFmsArgCachaCachaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CachaComponent", function () {
      return CachaComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var CachaComponent = /*#__PURE__*/function (_base_component_base_4) {
      _inherits(CachaComponent, _base_component_base_4);

      var _super4 = _createSuper(CachaComponent);

      function CachaComponent() {
        _classCallCheck(this, CachaComponent);

        return _super4.apply(this, arguments);
      }

      return CachaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    CachaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-cacha',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./cacha.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/cacha/cacha.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./cacha.component.scss */
      "./src/app/components/fms-arg/cacha/cacha.component.scss"))["default"]]
    })], CachaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/dtoke/dtoke.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-arg/dtoke/dtoke.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgDtokeDtokeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2R0b2tlL2R0b2tlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvZHRva2UvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcZHRva2VcXGR0b2tlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvZHRva2UvZHRva2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/dtoke/dtoke.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/dtoke/dtoke.component.ts ***!
    \*************************************************************/

  /*! exports provided: DtokeComponent */

  /***/
  function srcAppComponentsFmsArgDtokeDtokeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DtokeComponent", function () {
      return DtokeComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var DtokeComponent = /*#__PURE__*/function (_base_component_base_5) {
      _inherits(DtokeComponent, _base_component_base_5);

      var _super5 = _createSuper(DtokeComponent);

      function DtokeComponent() {
        _classCallCheck(this, DtokeComponent);

        return _super5.apply(this, arguments);
      }

      return DtokeComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    DtokeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-dtoke',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./dtoke.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/dtoke/dtoke.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./dtoke.component.scss */
      "./src/app/components/fms-arg/dtoke/dtoke.component.scss"))["default"]]
    })], DtokeComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/fms-arg.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/fms-arg.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgFmsArgComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2Ztcy1hcmcuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtYXJnXFxmbXMtYXJnLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvZm1zLWFyZy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/fms-arg.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-arg/fms-arg.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsArgComponent */

  /***/
  function srcAppComponentsFmsArgFmsArgComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsArgComponent", function () {
      return FmsArgComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var FmsArgComponent = /*#__PURE__*/function (_base_component_base_6) {
      _inherits(FmsArgComponent, _base_component_base_6);

      var _super6 = _createSuper(FmsArgComponent);

      function FmsArgComponent() {
        _classCallCheck(this, FmsArgComponent);

        return _super6.apply(this, arguments);
      }

      return FmsArgComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    FmsArgComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-arg',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-arg.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/fms-arg.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-arg.component.scss */
      "./src/app/components/fms-arg/fms-arg.component.scss"))["default"]]
    })], FmsArgComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/klan/klan.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/klan/klan.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgKlanKlanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2tsYW4va2xhbi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2tsYW4vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xca2xhblxca2xhbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL2tsYW4va2xhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/klan/klan.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/klan/klan.component.ts ***!
    \***********************************************************/

  /*! exports provided: KlanComponent */

  /***/
  function srcAppComponentsFmsArgKlanKlanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KlanComponent", function () {
      return KlanComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var KlanComponent = /*#__PURE__*/function (_base_component_base_7) {
      _inherits(KlanComponent, _base_component_base_7);

      var _super7 = _createSuper(KlanComponent);

      function KlanComponent() {
        _classCallCheck(this, KlanComponent);

        return _super7.apply(this, arguments);
      }

      return KlanComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    KlanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-klan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./klan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/klan/klan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./klan.component.scss */
      "./src/app/components/fms-arg/klan/klan.component.scss"))["default"]]
    })], KlanComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/mecha/mecha.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-arg/mecha/mecha.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgMechaMechaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL21lY2hhL21lY2hhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvbWVjaGEvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcbWVjaGFcXG1lY2hhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvbWVjaGEvbWVjaGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/mecha/mecha.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/mecha/mecha.component.ts ***!
    \*************************************************************/

  /*! exports provided: MechaComponent */

  /***/
  function srcAppComponentsFmsArgMechaMechaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MechaComponent", function () {
      return MechaComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MechaComponent = /*#__PURE__*/function (_base_component_base_8) {
      _inherits(MechaComponent, _base_component_base_8);

      var _super8 = _createSuper(MechaComponent);

      function MechaComponent() {
        _classCallCheck(this, MechaComponent);

        return _super8.apply(this, arguments);
      }

      return MechaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MechaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mecha',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mecha.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mecha/mecha.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mecha.component.scss */
      "./src/app/components/fms-arg/mecha/mecha.component.scss"))["default"]]
    })], MechaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/mks/mks.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/mks/mks.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgMksMksComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL21rcy9ta3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9ta3MvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcbWtzXFxta3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9ta3MvbWtzLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/mks/mks.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-arg/mks/mks.component.ts ***!
    \*********************************************************/

  /*! exports provided: MksComponent */

  /***/
  function srcAppComponentsFmsArgMksMksComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MksComponent", function () {
      return MksComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MksComponent = /*#__PURE__*/function (_base_component_base_9) {
      _inherits(MksComponent, _base_component_base_9);

      var _super9 = _createSuper(MksComponent);

      function MksComponent() {
        _classCallCheck(this, MksComponent);

        return _super9.apply(this, arguments);
      }

      return MksComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MksComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mks',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mks.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/mks/mks.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mks.component.scss */
      "./src/app/components/fms-arg/mks/mks.component.scss"))["default"]]
    })], MksComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/nacho/nacho.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-arg/nacho/nacho.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgNachoNachoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL25hY2hvL25hY2hvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvbmFjaG8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcbmFjaG9cXG5hY2hvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1hcmcvbmFjaG8vbmFjaG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/nacho/nacho.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/nacho/nacho.component.ts ***!
    \*************************************************************/

  /*! exports provided: NachoComponent */

  /***/
  function srcAppComponentsFmsArgNachoNachoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NachoComponent", function () {
      return NachoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NachoComponent = /*#__PURE__*/function (_base_component_base_10) {
      _inherits(NachoComponent, _base_component_base_10);

      var _super10 = _createSuper(NachoComponent);

      function NachoComponent() {
        _classCallCheck(this, NachoComponent);

        return _super10.apply(this, arguments);
      }

      return NachoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NachoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nacho',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nacho.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/nacho/nacho.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nacho.component.scss */
      "./src/app/components/fms-arg/nacho/nacho.component.scss"))["default"]]
    })], NachoComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/papo/papo.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/papo/papo.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgPapoPapoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3BhcG8vcGFwby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3BhcG8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xccGFwb1xccGFwby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3BhcG8vcGFwby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/papo/papo.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/papo/papo.component.ts ***!
    \***********************************************************/

  /*! exports provided: PapoComponent */

  /***/
  function srcAppComponentsFmsArgPapoPapoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PapoComponent", function () {
      return PapoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var PapoComponent = /*#__PURE__*/function (_base_component_base_11) {
      _inherits(PapoComponent, _base_component_base_11);

      var _super11 = _createSuper(PapoComponent);

      function PapoComponent() {
        _classCallCheck(this, PapoComponent);

        return _super11.apply(this, arguments);
      }

      return PapoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    PapoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-papo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./papo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/papo/papo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./papo.component.scss */
      "./src/app/components/fms-arg/papo/papo.component.scss"))["default"]]
    })], PapoComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/stuart/stuart.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-arg/stuart/stuart.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgStuartStuartComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3N0dWFydC9zdHVhcnQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9zdHVhcnQvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcc3R1YXJ0XFxzdHVhcnQuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9zdHVhcnQvc3R1YXJ0LmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/stuart/stuart.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-arg/stuart/stuart.component.ts ***!
    \***************************************************************/

  /*! exports provided: StuartComponent */

  /***/
  function srcAppComponentsFmsArgStuartStuartComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StuartComponent", function () {
      return StuartComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var StuartComponent = /*#__PURE__*/function (_base_component_base_12) {
      _inherits(StuartComponent, _base_component_base_12);

      var _super12 = _createSuper(StuartComponent);

      function StuartComponent() {
        _classCallCheck(this, StuartComponent);

        return _super12.apply(this, arguments);
      }

      return StuartComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    StuartComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stuart',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stuart.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/stuart/stuart.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stuart.component.scss */
      "./src/app/components/fms-arg/stuart/stuart.component.scss"))["default"]]
    })], StuartComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/sub/sub.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/sub/sub.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgSubSubComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3N1Yi9zdWIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9zdWIvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcc3ViXFxzdWIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWFyZy9zdWIvc3ViLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/sub/sub.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-arg/sub/sub.component.ts ***!
    \*********************************************************/

  /*! exports provided: SubComponent */

  /***/
  function srcAppComponentsFmsArgSubSubComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SubComponent", function () {
      return SubComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SubComponent = /*#__PURE__*/function (_base_component_base_13) {
      _inherits(SubComponent, _base_component_base_13);

      var _super13 = _createSuper(SubComponent);

      function SubComponent() {
        _classCallCheck(this, SubComponent);

        return _super13.apply(this, arguments);
      }

      return SubComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SubComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sub',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sub.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/sub/sub.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sub.component.scss */
      "./src/app/components/fms-arg/sub/sub.component.scss"))["default"]]
    })], SubComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-arg/wolf/wolf.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-arg/wolf/wolf.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsArgWolfWolfComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3dvbGYvd29sZi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3dvbGYvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWFyZ1xcd29sZlxcd29sZi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtYXJnL3dvbGYvd29sZi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-arg/wolf/wolf.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-arg/wolf/wolf.component.ts ***!
    \***********************************************************/

  /*! exports provided: WolfComponent */

  /***/
  function srcAppComponentsFmsArgWolfWolfComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WolfComponent", function () {
      return WolfComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var WolfComponent = /*#__PURE__*/function (_base_component_base_14) {
      _inherits(WolfComponent, _base_component_base_14);

      var _super14 = _createSuper(WolfComponent);

      function WolfComponent() {
        _classCallCheck(this, WolfComponent);

        return _super14.apply(this, arguments);
      }

      return WolfComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    WolfComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-wolf',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./wolf.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-arg/wolf/wolf.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./wolf.component.scss */
      "./src/app/components/fms-arg/wolf/wolf.component.scss"))["default"]]
    })], WolfComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/acertijo/acertijo.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/fms-chi/acertijo/acertijo.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiAcertijoAcertijoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2FjZXJ0aWpvL2FjZXJ0aWpvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvYWNlcnRpam8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcYWNlcnRpam9cXGFjZXJ0aWpvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBREFKO0FDR0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURBSjtBQ0dBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURBSjtBQ0dBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREFOO0FBQ0Y7QUNJQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvYWNlcnRpam8vYWNlcnRpam8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/acertijo/acertijo.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-chi/acertijo/acertijo.component.ts ***!
    \*******************************************************************/

  /*! exports provided: AcertijoComponent */

  /***/
  function srcAppComponentsFmsChiAcertijoAcertijoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AcertijoComponent", function () {
      return AcertijoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var AcertijoComponent = /*#__PURE__*/function (_base_component_base_15) {
      _inherits(AcertijoComponent, _base_component_base_15);

      var _super15 = _createSuper(AcertijoComponent);

      function AcertijoComponent() {
        _classCallCheck(this, AcertijoComponent);

        return _super15.apply(this, arguments);
      }

      return AcertijoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    AcertijoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-acertijo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./acertijo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/acertijo/acertijo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./acertijo.component.scss */
      "./src/app/components/fms-chi/acertijo/acertijo.component.scss"))["default"]]
    })], AcertijoComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/elmenor/elmenor.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-chi/elmenor/elmenor.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiElmenorElmenorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VsbWVub3IvZWxtZW5vci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VsbWVub3IvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcZWxtZW5vclxcZWxtZW5vci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQUo7QUNHQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURBTjtBQUNGO0FDSUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VsbWVub3IvZWxtZW5vci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/elmenor/elmenor.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-chi/elmenor/elmenor.component.ts ***!
    \*****************************************************************/

  /*! exports provided: ElmenorComponent */

  /***/
  function srcAppComponentsFmsChiElmenorElmenorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ElmenorComponent", function () {
      return ElmenorComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ElmenorComponent = /*#__PURE__*/function (_base_component_base_16) {
      _inherits(ElmenorComponent, _base_component_base_16);

      var _super16 = _createSuper(ElmenorComponent);

      function ElmenorComponent() {
        _classCallCheck(this, ElmenorComponent);

        return _super16.apply(this, arguments);
      }

      return ElmenorComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ElmenorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-elmenor',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./elmenor.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/elmenor/elmenor.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./elmenor.component.scss */
      "./src/app/components/fms-chi/elmenor/elmenor.component.scss"))["default"]]
    })], ElmenorComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/esezeta/esezeta.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-chi/esezeta/esezeta.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiEsezetaEsezetaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VzZXpldGEvZXNlemV0YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VzZXpldGEvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcZXNlemV0YVxcZXNlemV0YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQUo7QUNHQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURBTjtBQUNGO0FDSUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2VzZXpldGEvZXNlemV0YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/esezeta/esezeta.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-chi/esezeta/esezeta.component.ts ***!
    \*****************************************************************/

  /*! exports provided: EsezetaComponent */

  /***/
  function srcAppComponentsFmsChiEsezetaEsezetaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EsezetaComponent", function () {
      return EsezetaComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var EsezetaComponent = /*#__PURE__*/function (_base_component_base_17) {
      _inherits(EsezetaComponent, _base_component_base_17);

      var _super17 = _createSuper(EsezetaComponent);

      function EsezetaComponent() {
        _classCallCheck(this, EsezetaComponent);

        return _super17.apply(this, arguments);
      }

      return EsezetaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    EsezetaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-esezeta',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./esezeta.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/esezeta/esezeta.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./esezeta.component.scss */
      "./src/app/components/fms-chi/esezeta/esezeta.component.scss"))["default"]]
    })], EsezetaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/fms-chi.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-chi/fms-chi.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiFmsChiComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2Ztcy1jaGkuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWNoaS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtY2hpXFxmbXMtY2hpLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0FoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURFSjtBQ0NBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURFSjtBQ0NBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREVOO0FBQ0Y7QUNFQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREROO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvZm1zLWNoaS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCIuY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogN3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiAyNXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMTVweDtcclxuICAgIHdpZHRoOiA2MCU7XHJcbiAgICBoZWlnaHQ6IDYwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/fms-chi.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-chi/fms-chi.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsChiComponent */

  /***/
  function srcAppComponentsFmsChiFmsChiComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsChiComponent", function () {
      return FmsChiComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var FmsChiComponent = /*#__PURE__*/function (_base_component_base_18) {
      _inherits(FmsChiComponent, _base_component_base_18);

      var _super18 = _createSuper(FmsChiComponent);

      function FmsChiComponent() {
        _classCallCheck(this, FmsChiComponent);

        return _super18.apply(this, arguments);
      }

      return FmsChiComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    FmsChiComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-chi',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-chi.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/fms-chi.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-chi.component.scss */
      "./src/app/components/fms-chi/fms-chi.component.scss"))["default"]]
    })], FmsChiComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/jokker/jokker.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-chi/jokker/jokker.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiJokkerJokkerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2pva2tlci9qb2trZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWNoaS9qb2trZXIvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcam9ra2VyXFxqb2trZXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQUo7QUNHQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBREFKO0FDR0E7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBREFKO0FDR0E7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQU47QUFDRjtBQ0lBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VESE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWNoaS9qb2trZXIvam9ra2VyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/jokker/jokker.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-chi/jokker/jokker.component.ts ***!
    \***************************************************************/

  /*! exports provided: JokkerComponent */

  /***/
  function srcAppComponentsFmsChiJokkerJokkerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JokkerComponent", function () {
      return JokkerComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JokkerComponent = /*#__PURE__*/function (_base_component_base_19) {
      _inherits(JokkerComponent, _base_component_base_19);

      var _super19 = _createSuper(JokkerComponent);

      function JokkerComponent() {
        _classCallCheck(this, JokkerComponent);

        return _super19.apply(this, arguments);
      }

      return JokkerComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JokkerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jokker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jokker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/jokker/jokker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jokker.component.scss */
      "./src/app/components/fms-chi/jokker/jokker.component.scss"))["default"]]
    })], JokkerComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/joqerr/joqerr.component.scss":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-chi/joqerr/joqerr.component.scss ***!
    \*****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiJoqerrJoqerrComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL2pvcWVyci9qb3FlcnIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWNoaS9qb3FlcnIvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcam9xZXJyXFxqb3FlcnIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDRWhCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQUo7QUNHQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBREFKO0FDR0E7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBREFKO0FDR0E7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQU47QUFDRjtBQ0lBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VESE47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWNoaS9qb3FlcnIvam9xZXJyLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/joqerr/joqerr.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-chi/joqerr/joqerr.component.ts ***!
    \***************************************************************/

  /*! exports provided: JoqerrComponent */

  /***/
  function srcAppComponentsFmsChiJoqerrJoqerrComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JoqerrComponent", function () {
      return JoqerrComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JoqerrComponent = /*#__PURE__*/function (_base_component_base_20) {
      _inherits(JoqerrComponent, _base_component_base_20);

      var _super20 = _createSuper(JoqerrComponent);

      function JoqerrComponent() {
        _classCallCheck(this, JoqerrComponent);

        return _super20.apply(this, arguments);
      }

      return JoqerrComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JoqerrComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-joqerr',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./joqerr.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/joqerr/joqerr.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./joqerr.component.scss */
      "./src/app/components/fms-chi/joqerr/joqerr.component.scss"))["default"]]
    })], JoqerrComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/nitro/nitro.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-chi/nitro/nitro.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiNitroNitroComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL25pdHJvL25pdHJvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvbml0cm8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcbml0cm9cXG5pdHJvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBREFKO0FDR0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURBSjtBQ0dBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURBSjtBQ0dBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREFOO0FBQ0Y7QUNJQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvbml0cm8vbml0cm8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/nitro/nitro.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-chi/nitro/nitro.component.ts ***!
    \*************************************************************/

  /*! exports provided: NitroComponent */

  /***/
  function srcAppComponentsFmsChiNitroNitroComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NitroComponent", function () {
      return NitroComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NitroComponent = /*#__PURE__*/function (_base_component_base_21) {
      _inherits(NitroComponent, _base_component_base_21);

      var _super21 = _createSuper(NitroComponent);

      function NitroComponent() {
        _classCallCheck(this, NitroComponent);

        return _super21.apply(this, arguments);
      }

      return NitroComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NitroComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nitro',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nitro.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/nitro/nitro.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nitro.component.scss */
      "./src/app/components/fms-chi/nitro/nitro.component.scss"))["default"]]
    })], NitroComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/pepegrillo/pepegrillo.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/fms-chi/pepegrillo/pepegrillo.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiPepegrilloPepegrilloComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3BlcGVncmlsbG8vcGVwZWdyaWxsby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3BlcGVncmlsbG8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxccGVwZWdyaWxsb1xccGVwZWdyaWxsby5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQUo7QUNHQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURBTjtBQUNGO0FDSUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3BlcGVncmlsbG8vcGVwZWdyaWxsby5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/pepegrillo/pepegrillo.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/fms-chi/pepegrillo/pepegrillo.component.ts ***!
    \***********************************************************************/

  /*! exports provided: PepegrilloComponent */

  /***/
  function srcAppComponentsFmsChiPepegrilloPepegrilloComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PepegrilloComponent", function () {
      return PepegrilloComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var PepegrilloComponent = /*#__PURE__*/function (_base_component_base_22) {
      _inherits(PepegrilloComponent, _base_component_base_22);

      var _super22 = _createSuper(PepegrilloComponent);

      function PepegrilloComponent() {
        _classCallCheck(this, PepegrilloComponent);

        return _super22.apply(this, arguments);
      }

      return PepegrilloComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    PepegrilloComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-pepegrillo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./pepegrillo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/pepegrillo/pepegrillo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./pepegrillo.component.scss */
      "./src/app/components/fms-chi/pepegrillo/pepegrillo.component.scss"))["default"]]
    })], PepegrilloComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/ricto/ricto.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/fms-chi/ricto/ricto.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiRictoRictoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3JpY3RvL3JpY3RvLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvcmljdG8vQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxccmljdG9cXHJpY3RvLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0VoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBREFKO0FDR0E7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURBSjtBQ0dBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURBSjtBQ0dBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREFOO0FBQ0Y7QUNJQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREhOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1jaGkvcmljdG8vcmljdG8uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG5cclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/ricto/ricto.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/fms-chi/ricto/ricto.component.ts ***!
    \*************************************************************/

  /*! exports provided: RictoComponent */

  /***/
  function srcAppComponentsFmsChiRictoRictoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RictoComponent", function () {
      return RictoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var RictoComponent = /*#__PURE__*/function (_base_component_base_23) {
      _inherits(RictoComponent, _base_component_base_23);

      var _super23 = _createSuper(RictoComponent);

      function RictoComponent() {
        _classCallCheck(this, RictoComponent);

        return _super23.apply(this, arguments);
      }

      return RictoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    RictoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ricto',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ricto.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/ricto/ricto.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ricto.component.scss */
      "./src/app/components/fms-chi/ricto/ricto.component.scss"))["default"]]
    })], RictoComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/teorema/teorema.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-chi/teorema/teorema.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiTeoremaTeoremaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3Rlb3JlbWEvdGVvcmVtYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3Rlb3JlbWEvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcdGVvcmVtYVxcdGVvcmVtYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQUo7QUNHQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURBTjtBQUNGO0FDSUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3Rlb3JlbWEvdGVvcmVtYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/teorema/teorema.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/fms-chi/teorema/teorema.component.ts ***!
    \*****************************************************************/

  /*! exports provided: TeoremaComponent */

  /***/
  function srcAppComponentsFmsChiTeoremaTeoremaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TeoremaComponent", function () {
      return TeoremaComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var TeoremaComponent = /*#__PURE__*/function (_base_component_base_24) {
      _inherits(TeoremaComponent, _base_component_base_24);

      var _super24 = _createSuper(TeoremaComponent);

      function TeoremaComponent() {
        _classCallCheck(this, TeoremaComponent);

        return _super24.apply(this, arguments);
      }

      return TeoremaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    TeoremaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-teorema',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./teorema.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/teorema/teorema.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./teorema.component.scss */
      "./src/app/components/fms-chi/teorema/teorema.component.scss"))["default"]]
    })], TeoremaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-chi/tomcrowley/tomcrowley.component.scss":
  /*!*************************************************************************!*\
    !*** ./src/app/components/fms-chi/tomcrowley/tomcrowley.component.scss ***!
    \*************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsChiTomcrowleyTomcrowleyComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3RvbWNyb3dsZXkvdG9tY3Jvd2xleS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3RvbWNyb3dsZXkvQzpcXFVzZXJzXFxJYWdvXFxEb2N1bWVudHNcXGZtcy12b3Rlcy9zcmNcXGFwcFxcY29tcG9uZW50c1xcZm1zLWNoaVxcdG9tY3Jvd2xleVxcdG9tY3Jvd2xleS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNFaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURBSjtBQ0dBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQUo7QUNHQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQUo7QUNHQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURBTjtBQUNGO0FDSUEsd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURITjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtY2hpL3RvbWNyb3dsZXkvdG9tY3Jvd2xleS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcblxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-chi/tomcrowley/tomcrowley.component.ts":
  /*!***********************************************************************!*\
    !*** ./src/app/components/fms-chi/tomcrowley/tomcrowley.component.ts ***!
    \***********************************************************************/

  /*! exports provided: TomcrowleyComponent */

  /***/
  function srcAppComponentsFmsChiTomcrowleyTomcrowleyComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TomcrowleyComponent", function () {
      return TomcrowleyComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var TomcrowleyComponent = /*#__PURE__*/function (_base_component_base_25) {
      _inherits(TomcrowleyComponent, _base_component_base_25);

      var _super25 = _createSuper(TomcrowleyComponent);

      function TomcrowleyComponent() {
        _classCallCheck(this, TomcrowleyComponent);

        return _super25.apply(this, arguments);
      }

      return TomcrowleyComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    TomcrowleyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tomcrowley',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tomcrowley.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-chi/tomcrowley/tomcrowley.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tomcrowley.component.scss */
      "./src/app/components/fms-chi/tomcrowley/tomcrowley.component.scss"))["default"]]
    })], TomcrowleyComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-esp/fms-esp.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-esp/fms-esp.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsEspFmsEspComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtZXNwL2Ztcy1lc3AuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLWVzcC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtZXNwXFxmbXMtZXNwLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1lc3AvZm1zLWVzcC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-esp/fms-esp.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-esp/fms-esp.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsEspComponent */

  /***/
  function srcAppComponentsFmsEspFmsEspComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsEspComponent", function () {
      return FmsEspComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var FmsEspComponent = /*#__PURE__*/function (_base_component_base_26) {
      _inherits(FmsEspComponent, _base_component_base_26);

      var _super26 = _createSuper(FmsEspComponent);

      function FmsEspComponent() {
        _classCallCheck(this, FmsEspComponent);

        return _super26.apply(this, arguments);
      }

      _createClass(FmsEspComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return FmsEspComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    FmsEspComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-esp',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-esp.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-esp/fms-esp.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-esp.component.scss */
      "./src/app/components/fms-esp/fms-esp.component.scss"))["default"]]
    })], FmsEspComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/fms-mex.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-mex/fms-mex.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexFmsMexComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2Ztcy1tZXguY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxmbXMtbWV4LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZm1zLW1leC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/fms-mex.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-mex/fms-mex.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsMexComponent */

  /***/
  function srcAppComponentsFmsMexFmsMexComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsMexComponent", function () {
      return FmsMexComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var FmsMexComponent = /*#__PURE__*/function (_base_component_base_27) {
      _inherits(FmsMexComponent, _base_component_base_27);

      var _super27 = _createSuper(FmsMexComponent);

      function FmsMexComponent() {
        _classCallCheck(this, FmsMexComponent);

        return _super27.apply(this, arguments);
      }

      return FmsMexComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    FmsMexComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-mex',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-mex.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/fms-mex.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-mex.component.scss */
      "./src/app/components/fms-mex/fms-mex.component.scss"))["default"]]
    })], FmsMexComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/bone/bone.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/bone/bone.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosBoneBoneComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9ib25lL2JvbmUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvYm9uZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGJvbmVcXGJvbmUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvYm9uZS9ib25lLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/bone/bone.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/bone/bone.component.ts ***!
    \******************************************************************/

  /*! exports provided: BoneComponent */

  /***/
  function srcAppComponentsFmsMexGallosBoneBoneComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BoneComponent", function () {
      return BoneComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var BoneComponent = /*#__PURE__*/function (_src_app_components_b) {
      _inherits(BoneComponent, _src_app_components_b);

      var _super28 = _createSuper(BoneComponent);

      function BoneComponent() {
        _classCallCheck(this, BoneComponent);

        return _super28.apply(this, arguments);
      }

      return BoneComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    BoneComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-bone',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./bone.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/bone/bone.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./bone.component.scss */
      "./src/app/components/fms-mex/gallos/bone/bone.component.scss"))["default"]]
    })], BoneComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/garza/garza.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/garza/garza.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosGarzaGarzaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9nYXJ6YS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGdhcnphXFxnYXJ6YS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9nYXJ6YS9nYXJ6YS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/garza/garza.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/garza/garza.component.ts ***!
    \********************************************************************/

  /*! exports provided: GarzaComponent */

  /***/
  function srcAppComponentsFmsMexGallosGarzaGarzaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GarzaComponent", function () {
      return GarzaComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var GarzaComponent = /*#__PURE__*/function (_src_app_components_b2) {
      _inherits(GarzaComponent, _src_app_components_b2);

      var _super29 = _createSuper(GarzaComponent);

      function GarzaComponent() {
        _classCallCheck(this, GarzaComponent);

        return _super29.apply(this, arguments);
      }

      return GarzaComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    GarzaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-garza',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./garza.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/garza/garza.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./garza.component.scss */
      "./src/app/components/fms-mex/gallos/garza/garza.component.scss"))["default"]]
    })], GarzaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosJonybJonybComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9qb255Yi5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGpvbnliXFxqb255Yi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9qb255Yi9qb255Yi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/jonyb/jonyb.component.ts ***!
    \********************************************************************/

  /*! exports provided: JonybComponent */

  /***/
  function srcAppComponentsFmsMexGallosJonybJonybComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JonybComponent", function () {
      return JonybComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JonybComponent = /*#__PURE__*/function (_src_app_components_b3) {
      _inherits(JonybComponent, _src_app_components_b3);

      var _super30 = _createSuper(JonybComponent);

      function JonybComponent() {
        _classCallCheck(this, JonybComponent);

        return _super30.apply(this, arguments);
      }

      return JonybComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JonybComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jonyb',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jonyb.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/jonyb/jonyb.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jonyb.component.scss */
      "./src/app/components/fms-mex/gallos/jonyb/jonyb.component.scss"))["default"]]
    })], JonybComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/lobo/lobo.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/lobo/lobo.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosLoboLoboComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9sb2JvL2xvYm8uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvbG9iby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXGxvYm9cXGxvYm8uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLW1leC9nYWxsb3MvbG9iby9sb2JvLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/lobo/lobo.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/lobo/lobo.component.ts ***!
    \******************************************************************/

  /*! exports provided: LoboComponent */

  /***/
  function srcAppComponentsFmsMexGallosLoboLoboComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoboComponent", function () {
      return LoboComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var LoboComponent = /*#__PURE__*/function (_src_app_components_b4) {
      _inherits(LoboComponent, _src_app_components_b4);

      var _super31 = _createSuper(LoboComponent);

      function LoboComponent() {
        _classCallCheck(this, LoboComponent);

        return _super31.apply(this, arguments);
      }

      return LoboComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    LoboComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-lobo',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./lobo.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/lobo/lobo.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./lobo.component.scss */
      "./src/app/components/fms-mex/gallos/lobo/lobo.component.scss"))["default"]]
    })], LoboComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/potencia/potencia.component.scss":
  /*!****************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/potencia/potencia.component.scss ***!
    \****************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosPotenciaPotenciaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9wb3RlbmNpYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHBvdGVuY2lhXFxwb3RlbmNpYS5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9wb3RlbmNpYS9wb3RlbmNpYS5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/potencia/potencia.component.ts":
  /*!**************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/potencia/potencia.component.ts ***!
    \**************************************************************************/

  /*! exports provided: PotenciaComponent */

  /***/
  function srcAppComponentsFmsMexGallosPotenciaPotenciaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PotenciaComponent", function () {
      return PotenciaComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var PotenciaComponent = /*#__PURE__*/function (_src_app_components_b5) {
      _inherits(PotenciaComponent, _src_app_components_b5);

      var _super32 = _createSuper(PotenciaComponent);

      function PotenciaComponent() {
        _classCallCheck(this, PotenciaComponent);

        return _super32.apply(this, arguments);
      }

      return PotenciaComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    PotenciaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-potencia',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./potencia.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/potencia/potencia.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./potencia.component.scss */
      "./src/app/components/fms-mex/gallos/potencia/potencia.component.scss"))["default"]]
    })], PotenciaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rapder/rapder.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rapder/rapder.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosRapderRapderComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYXBkZXIvcmFwZGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3JhcGRlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHJhcGRlclxccmFwZGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3JhcGRlci9yYXBkZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rapder/rapder.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rapder/rapder.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RapderComponent */

  /***/
  function srcAppComponentsFmsMexGallosRapderRapderComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RapderComponent", function () {
      return RapderComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var RapderComponent = /*#__PURE__*/function (_src_app_components_b6) {
      _inherits(RapderComponent, _src_app_components_b6);

      var _super33 = _createSuper(RapderComponent);

      function RapderComponent() {
        _classCallCheck(this, RapderComponent);

        return _super33.apply(this, arguments);
      }

      return RapderComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    RapderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rapder',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rapder.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rapder/rapder.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rapder.component.scss */
      "./src/app/components/fms-mex/gallos/rapder/rapder.component.scss"))["default"]]
    })], RapderComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rc/rc.component.scss":
  /*!****************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rc/rc.component.scss ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosRcRcComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9yYy5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHJjXFxyYy5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9yYy9yYy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/rc/rc.component.ts":
  /*!**************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/rc/rc.component.ts ***!
    \**************************************************************/

  /*! exports provided: RcComponent */

  /***/
  function srcAppComponentsFmsMexGallosRcRcComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RcComponent", function () {
      return RcComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var RcComponent = /*#__PURE__*/function (_src_app_components_b7) {
      _inherits(RcComponent, _src_app_components_b7);

      var _super34 = _createSuper(RcComponent);

      function RcComponent() {
        _classCallCheck(this, RcComponent);

        return _super34.apply(this, arguments);
      }

      return RcComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    RcComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-rc',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./rc.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/rc/rc.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./rc.component.scss */
      "./src/app/components/fms-mex/gallos/rc/rc.component.scss"))["default"]]
    })], RcComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/skiper/skiper.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/skiper/skiper.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosSkiperSkiperComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy9za2lwZXIvc2tpcGVyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3NraXBlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHNraXBlclxcc2tpcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3NraXBlci9za2lwZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/skiper/skiper.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/skiper/skiper.component.ts ***!
    \**********************************************************************/

  /*! exports provided: SkiperComponent */

  /***/
  function srcAppComponentsFmsMexGallosSkiperSkiperComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkiperComponent", function () {
      return SkiperComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SkiperComponent = /*#__PURE__*/function (_src_app_components_b8) {
      _inherits(SkiperComponent, _src_app_components_b8);

      var _super35 = _createSuper(SkiperComponent);

      function SkiperComponent() {
        _classCallCheck(this, SkiperComponent);

        return _super35.apply(this, arguments);
      }

      return SkiperComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SkiperComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skiper',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skiper.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/skiper/skiper.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skiper.component.scss */
      "./src/app/components/fms-mex/gallos/skiper/skiper.component.scss"))["default"]]
    })], SkiperComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosYoikerYoikerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy95b2lrZXIveW9pa2VyLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3lvaWtlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHlvaWtlclxceW9pa2VyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3lvaWtlci95b2lrZXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/yoiker/yoiker.component.ts ***!
    \**********************************************************************/

  /*! exports provided: YoikerComponent */

  /***/
  function srcAppComponentsFmsMexGallosYoikerYoikerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YoikerComponent", function () {
      return YoikerComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var YoikerComponent = /*#__PURE__*/function (_src_app_components_b9) {
      _inherits(YoikerComponent, _src_app_components_b9);

      var _super36 = _createSuper(YoikerComponent);

      function YoikerComponent() {
        _classCallCheck(this, YoikerComponent);

        return _super36.apply(this, arguments);
      }

      return YoikerComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    YoikerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-yoiker',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./yoiker.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/yoiker/yoiker.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./yoiker.component.scss */
      "./src/app/components/fms-mex/gallos/yoiker/yoiker.component.scss"))["default"]]
    })], YoikerComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/zticma/zticma.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/zticma/zticma.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsMexGallosZticmaZticmaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtbWV4L2dhbGxvcy96dGljbWEvenRpY21hLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3p0aWNtYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtbWV4XFxnYWxsb3NcXHp0aWNtYVxcenRpY21hLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1tZXgvZ2FsbG9zL3p0aWNtYS96dGljbWEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-mex/gallos/zticma/zticma.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-mex/gallos/zticma/zticma.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ZticmaComponent */

  /***/
  function srcAppComponentsFmsMexGallosZticmaZticmaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZticmaComponent", function () {
      return ZticmaComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ZticmaComponent = /*#__PURE__*/function (_src_app_components_b10) {
      _inherits(ZticmaComponent, _src_app_components_b10);

      var _super37 = _createSuper(ZticmaComponent);

      function ZticmaComponent() {
        _classCallCheck(this, ZticmaComponent);

        return _super37.apply(this, arguments);
      }

      return ZticmaComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ZticmaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zticma',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zticma.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-mex/gallos/zticma/zticma.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./zticma.component.scss */
      "./src/app/components/fms-mex/gallos/zticma/zticma.component.scss"))["default"]]
    })], ZticmaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/fms-per.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/fms-per/fms-per.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerFmsPerComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 7rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 15px;\n  width: 60%;\n  height: 60%;\n  transition: all 300ms;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2Ztcy1wZXIuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxmbXMtcGVyLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZm1zLXBlci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogN3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiAyNXB4O1xuICBtYXJnaW4tYm90dG9tOiAxNXB4O1xuICB3aWR0aDogNjAlO1xuICBoZWlnaHQ6IDYwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDdyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XHJcbiAgICB3aWR0aDogNjAlO1xyXG4gICAgaGVpZ2h0OiA2MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/fms-per.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/fms-per/fms-per.component.ts ***!
    \*********************************************************/

  /*! exports provided: FmsPerComponent */

  /***/
  function srcAppComponentsFmsPerFmsPerComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsPerComponent", function () {
      return FmsPerComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var FmsPerComponent = /*#__PURE__*/function (_base_component_base_28) {
      _inherits(FmsPerComponent, _base_component_base_28);

      var _super38 = _createSuper(FmsPerComponent);

      function FmsPerComponent() {
        _classCallCheck(this, FmsPerComponent);

        return _super38.apply(this, arguments);
      }

      return FmsPerComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    FmsPerComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-per',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-per.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/fms-per.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-per.component.scss */
      "./src/app/components/fms-per/fms-per.component.scss"))["default"]]
    })], FmsPerComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/choque/choque.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/choque/choque.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosChoqueChoqueComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9jaG9xdWUvY2hvcXVlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2Nob3F1ZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGNob3F1ZVxcY2hvcXVlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2Nob3F1ZS9jaG9xdWUuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/choque/choque.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/choque/choque.component.ts ***!
    \**********************************************************************/

  /*! exports provided: ChoqueComponent */

  /***/
  function srcAppComponentsFmsPerGallosChoqueChoqueComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ChoqueComponent", function () {
      return ChoqueComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ChoqueComponent = /*#__PURE__*/function (_src_app_components_b11) {
      _inherits(ChoqueComponent, _src_app_components_b11);

      var _super39 = _createSuper(ChoqueComponent);

      function ChoqueComponent() {
        _classCallCheck(this, ChoqueComponent);

        return _super39.apply(this, arguments);
      }

      return ChoqueComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ChoqueComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-choque',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./choque.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/choque/choque.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./choque.component.scss */
      "./src/app/components/fms-per/gallos/choque/choque.component.scss"))["default"]]
    })], ChoqueComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jaze/jaze.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jaze/jaze.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosJazeJazeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9qYXplL2phemUuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvamF6ZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGphemVcXGphemUuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvamF6ZS9qYXplLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jaze/jaze.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jaze/jaze.component.ts ***!
    \******************************************************************/

  /*! exports provided: JazeComponent */

  /***/
  function srcAppComponentsFmsPerGallosJazeJazeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JazeComponent", function () {
      return JazeComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JazeComponent = /*#__PURE__*/function (_src_app_components_b12) {
      _inherits(JazeComponent, _src_app_components_b12);

      var _super40 = _createSuper(JazeComponent);

      function JazeComponent() {
        _classCallCheck(this, JazeComponent);

        return _super40.apply(this, arguments);
      }

      return JazeComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JazeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jaze',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jaze.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jaze/jaze.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jaze.component.scss */
      "./src/app/components/fms-per/gallos/jaze/jaze.component.scss"))["default"]]
    })], JazeComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jota/jota.component.scss":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jota/jota.component.scss ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosJotaJotaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9qb3RhL2pvdGEuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3Mvam90YS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGpvdGFcXGpvdGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3Mvam90YS9qb3RhLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/jota/jota.component.ts":
  /*!******************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/jota/jota.component.ts ***!
    \******************************************************************/

  /*! exports provided: JotaComponent */

  /***/
  function srcAppComponentsFmsPerGallosJotaJotaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JotaComponent", function () {
      return JotaComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var JotaComponent = /*#__PURE__*/function (_src_app_components_b13) {
      _inherits(JotaComponent, _src_app_components_b13);

      var _super41 = _createSuper(JotaComponent);

      function JotaComponent() {
        _classCallCheck(this, JotaComponent);

        return _super41.apply(this, arguments);
      }

      return JotaComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    JotaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-jota',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./jota.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/jota/jota.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./jota.component.scss */
      "./src/app/components/fms-per/gallos/jota/jota.component.scss"))["default"]]
    })], JotaComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/litzen/litzen.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/litzen/litzen.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosLitzenLitzenComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9saXR6ZW4vbGl0emVuLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2xpdHplbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXGxpdHplblxcbGl0emVuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL2xpdHplbi9saXR6ZW4uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/litzen/litzen.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/litzen/litzen.component.ts ***!
    \**********************************************************************/

  /*! exports provided: LitzenComponent */

  /***/
  function srcAppComponentsFmsPerGallosLitzenLitzenComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LitzenComponent", function () {
      return LitzenComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var LitzenComponent = /*#__PURE__*/function (_src_app_components_b14) {
      _inherits(LitzenComponent, _src_app_components_b14);

      var _super42 = _createSuper(LitzenComponent);

      function LitzenComponent() {
        _classCallCheck(this, LitzenComponent);

        return _super42.apply(this, arguments);
      }

      return LitzenComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    LitzenComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-litzen',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./litzen.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/litzen/litzen.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./litzen.component.scss */
      "./src/app/components/fms-per/gallos/litzen/litzen.component.scss"))["default"]]
    })], LitzenComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss":
  /*!**************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosNekroosNekroosComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9uZWtyb29zL25la3Jvb3MuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvbmVrcm9vcy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXG5la3Jvb3NcXG5la3Jvb3MuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZm1zLXBlci9nYWxsb3MvbmVrcm9vcy9uZWtyb29zLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/nekroos/nekroos.component.ts ***!
    \************************************************************************/

  /*! exports provided: NekroosComponent */

  /***/
  function srcAppComponentsFmsPerGallosNekroosNekroosComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NekroosComponent", function () {
      return NekroosComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NekroosComponent = /*#__PURE__*/function (_src_app_components_b15) {
      _inherits(NekroosComponent, _src_app_components_b15);

      var _super43 = _createSuper(NekroosComponent);

      function NekroosComponent() {
        _classCallCheck(this, NekroosComponent);

        return _super43.apply(this, arguments);
      }

      return NekroosComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NekroosComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-nekroos',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./nekroos.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/nekroos/nekroos.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./nekroos.component.scss */
      "./src/app/components/fms-per/gallos/nekroos/nekroos.component.scss"))["default"]]
    })], NekroosComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/newera/newera.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/newera/newera.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosNeweraNeweraComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9uZXdlcmEvbmV3ZXJhLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL25ld2VyYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXG5ld2VyYVxcbmV3ZXJhLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL25ld2VyYS9uZXdlcmEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/newera/newera.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/newera/newera.component.ts ***!
    \**********************************************************************/

  /*! exports provided: NeweraComponent */

  /***/
  function srcAppComponentsFmsPerGallosNeweraNeweraComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NeweraComponent", function () {
      return NeweraComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var NeweraComponent = /*#__PURE__*/function (_src_app_components_b16) {
      _inherits(NeweraComponent, _src_app_components_b16);

      var _super44 = _createSuper(NeweraComponent);

      function NeweraComponent() {
        _classCallCheck(this, NeweraComponent);

        return _super44.apply(this, arguments);
      }

      return NeweraComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    NeweraComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-newera',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./newera.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/newera/newera.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./newera.component.scss */
      "./src/app/components/fms-per/gallos/newera/newera.component.scss"))["default"]]
    })], NeweraComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/ramset/ramset.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/ramset/ramset.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosRamsetRamsetComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9yYW1zZXQvcmFtc2V0LmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3JhbXNldC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHJhbXNldFxccmFtc2V0LmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3JhbXNldC9yYW1zZXQuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/ramset/ramset.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/ramset/ramset.component.ts ***!
    \**********************************************************************/

  /*! exports provided: RamsetComponent */

  /***/
  function srcAppComponentsFmsPerGallosRamsetRamsetComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RamsetComponent", function () {
      return RamsetComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var RamsetComponent = /*#__PURE__*/function (_src_app_components_b17) {
      _inherits(RamsetComponent, _src_app_components_b17);

      var _super45 = _createSuper(RamsetComponent);

      function RamsetComponent() {
        _classCallCheck(this, RamsetComponent);

        return _super45.apply(this, arguments);
      }

      return RamsetComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    RamsetComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-ramset',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./ramset.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/ramset/ramset.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./ramset.component.scss */
      "./src/app/components/fms-per/gallos/ramset/ramset.component.scss"))["default"]]
    })], RamsetComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/skill/skill.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/skill/skill.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosSkillSkillComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHNraWxsXFxza2lsbC5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9za2lsbC9za2lsbC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/skill/skill.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/skill/skill.component.ts ***!
    \********************************************************************/

  /*! exports provided: SkillComponent */

  /***/
  function srcAppComponentsFmsPerGallosSkillSkillComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SkillComponent", function () {
      return SkillComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SkillComponent = /*#__PURE__*/function (_src_app_components_b18) {
      _inherits(SkillComponent, _src_app_components_b18);

      var _super46 = _createSuper(SkillComponent);

      function SkillComponent() {
        _classCallCheck(this, SkillComponent);

        return _super46.apply(this, arguments);
      }

      return SkillComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SkillComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-skill',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./skill.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/skill/skill.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./skill.component.scss */
      "./src/app/components/fms-per/gallos/skill/skill.component.scss"))["default"]]
    })], SkillComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/stick/stick.component.scss":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/stick/stick.component.scss ***!
    \**********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosStickStickComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9zdGljay5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHN0aWNrXFxzdGljay5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdGljay9zdGljay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/stick/stick.component.ts":
  /*!********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/stick/stick.component.ts ***!
    \********************************************************************/

  /*! exports provided: StickComponent */

  /***/
  function srcAppComponentsFmsPerGallosStickStickComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StickComponent", function () {
      return StickComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var StickComponent = /*#__PURE__*/function (_src_app_components_b19) {
      _inherits(StickComponent, _src_app_components_b19);

      var _super47 = _createSuper(StickComponent);

      function StickComponent() {
        _classCallCheck(this, StickComponent);

        return _super47.apply(this, arguments);
      }

      return StickComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    StickComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-stick',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./stick.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/stick/stick.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./stick.component.scss */
      "./src/app/components/fms-per/gallos/stick/stick.component.scss"))["default"]]
    })], StickComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/strike/strike.component.scss":
  /*!************************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/strike/strike.component.scss ***!
    \************************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsPerGallosStrikeStrikeComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtcGVyL2dhbGxvcy9zdHJpa2Uvc3RyaWtlLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3N0cmlrZS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtcGVyXFxnYWxsb3NcXHN0cmlrZVxcc3RyaWtlLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1wZXIvZ2FsbG9zL3N0cmlrZS9zdHJpa2UuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-per/gallos/strike/strike.component.ts":
  /*!**********************************************************************!*\
    !*** ./src/app/components/fms-per/gallos/strike/strike.component.ts ***!
    \**********************************************************************/

  /*! exports provided: StrikeComponent */

  /***/
  function srcAppComponentsFmsPerGallosStrikeStrikeComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "StrikeComponent", function () {
      return StrikeComponent;
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


    var src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/components/base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var StrikeComponent = /*#__PURE__*/function (_src_app_components_b20) {
      _inherits(StrikeComponent, _src_app_components_b20);

      var _super48 = _createSuper(StrikeComponent);

      function StrikeComponent() {
        _classCallCheck(this, StrikeComponent);

        return _super48.apply(this, arguments);
      }

      return StrikeComponent;
    }(src_app_components_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    StrikeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-strike',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./strike.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-per/gallos/strike/strike.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./strike.component.scss */
      "./src/app/components/fms-per/gallos/strike/strike.component.scss"))["default"]]
    })], StrikeComponent);
    /***/
  },

  /***/
  "./src/app/components/fms-selector/fms-selector.component.scss":
  /*!*********************************************************************!*\
    !*** ./src/app/components/fms-selector/fms-selector.component.scss ***!
    \*********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsFmsSelectorFmsSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 4rem;\n  margin-bottom: 10rem;\n  padding-top: 4rem;\n  max-width: 1920px;\n  max-height: 1080px;\n  -moz-column-count: 3;\n       column-count: 3;\n  text-align: center;\n}\na img {\n  margin-top: 25px;\n  margin-bottom: 25px;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n\n  img {\n    width: 70%;\n    height: 70%;\n  }\n}\n.mcNameInput {\n  margin-left: 30%;\n  margin-top: 500px;\n  color: #eee;\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n\n  img {\n    width: 70%;\n    height: 70%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9mbXMtc2VsZWN0b3IvZm1zLXNlbGVjdG9yLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1zZWxlY3Rvci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxmbXMtc2VsZWN0b3JcXGZtcy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNBaEI7RUFDSSxnQkFBQTtFQUNBLG9CQUFBO0VBQ0EsaUJBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esa0JBQUE7QURFSjtBQ0NBO0VBQ0ksZ0JBQUE7RUFDQSxtQkFBQTtFQUNBLHFCQUFBO0FERUo7QUNDQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FERUo7QUNDQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURFTjs7RUNBRTtJQUNJLFVBQUE7SUFDQSxXQUFBO0VER047QUFDRjtBQ0NBO0VBQ0UsZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLFdBQUE7QURDRjtBQ0VBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQU47O0VDRUU7SUFDSSxVQUFBO0lBQ0EsV0FBQTtFRENOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2Ztcy1zZWxlY3Rvci9mbXMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDRyZW07XG4gIG1hcmdpbi1ib3R0b206IDEwcmVtO1xuICBwYWRkaW5nLXRvcDogNHJlbTtcbiAgbWF4LXdpZHRoOiAxOTIwcHg7XG4gIG1heC1oZWlnaHQ6IDEwODBweDtcbiAgY29sdW1uLWNvdW50OiAzO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogMjVweDtcbiAgbWFyZ2luLWJvdHRvbTogMjVweDtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxuXG4gIGltZyB7XG4gICAgd2lkdGg6IDcwJTtcbiAgICBoZWlnaHQ6IDcwJTtcbiAgfVxufVxuLm1jTmFtZUlucHV0IHtcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcbiAgbWFyZ2luLXRvcDogNTAwcHg7XG4gIGNvbG9yOiAjZWVlO1xufVxuXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG5cbiAgaW1nIHtcbiAgICB3aWR0aDogNzAlO1xuICAgIGhlaWdodDogNzAlO1xuICB9XG59IiwiLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogNHJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcmVtO1xyXG4gICAgcGFkZGluZy10b3A6IDRyZW07XHJcbiAgICBtYXgtd2lkdGg6IDE5MjBweDtcclxuICAgIG1heC1oZWlnaHQ6IDEwODBweDtcclxuICAgIGNvbHVtbi1jb3VudDogMztcclxuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxufVxyXG5cclxuYSBpbWcge1xyXG4gICAgbWFyZ2luLXRvcDogMjVweDtcclxuICAgIG1hcmdpbi1ib3R0b206IDI1cHg7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuICAgIGltZyB7XHJcbiAgICAgICAgd2lkdGg6IDcwJTtcclxuICAgICAgICBoZWlnaHQ6IDcwJTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbi5tY05hbWVJbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbiAgICBpbWcge1xyXG4gICAgICAgIHdpZHRoOiA3MCU7XHJcbiAgICAgICAgaGVpZ2h0OiA3MCU7XHJcbiAgICB9XHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/components/fms-selector/fms-selector.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/components/fms-selector/fms-selector.component.ts ***!
    \*******************************************************************/

  /*! exports provided: FmsSelectorComponent */

  /***/
  function srcAppComponentsFmsSelectorFmsSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FmsSelectorComponent", function () {
      return FmsSelectorComponent;
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

    var FmsSelectorComponent = /*#__PURE__*/function () {
      function FmsSelectorComponent(router) {
        _classCallCheck(this, FmsSelectorComponent);

        this.router = router;
      }

      _createClass(FmsSelectorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "irfmsarg",
        value: function irfmsarg() {
          this.router.navigate(['/fmsArg']);
        }
      }, {
        key: "irfmsesp",
        value: function irfmsesp() {
          this.router.navigate(['/fmsEsp']);
        }
      }, {
        key: "irfmsmex",
        value: function irfmsmex() {
          this.router.navigate(['/fmsMex']);
        }
      }, {
        key: "irfmschi",
        value: function irfmschi() {
          this.router.navigate(['/fmsChi']);
        }
      }, {
        key: "irfmsper",
        value: function irfmsper() {
          this.router.navigate(['/fmsPer']);
        }
      }]);

      return FmsSelectorComponent;
    }();

    FmsSelectorComponent.ctorParameters = function () {
      return [{
        type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"]
      }];
    };

    FmsSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-fms-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./fms-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/fms-selector/fms-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./fms-selector.component.scss */
      "./src/app/components/fms-selector/fms-selector.component.scss"))["default"]]
    })], FmsSelectorComponent);
    /***/
  },

  /***/
  "./src/app/components/gazir/gazir.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/gazir/gazir.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsGazirGazirComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9nYXppci9nYXppci5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9nYXppci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxnYXppclxcZ2F6aXIuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvZ2F6aXIvZ2F6aXIuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/gazir/gazir.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/gazir/gazir.component.ts ***!
    \*****************************************************/

  /*! exports provided: GazirComponent */

  /***/
  function srcAppComponentsGazirGazirComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GazirComponent", function () {
      return GazirComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var GazirComponent = /*#__PURE__*/function (_base_component_base_29) {
      _inherits(GazirComponent, _base_component_base_29);

      var _super49 = _createSuper(GazirComponent);

      function GazirComponent() {
        _classCallCheck(this, GazirComponent);

        return _super49.apply(this, arguments);
      }

      return GazirComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    GazirComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-gazir',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./gazir.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/gazir/gazir.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./gazir.component.scss */
      "./src/app/components/gazir/gazir.component.scss"))["default"]]
    })], GazirComponent);
    /***/
  },

  /***/
  "./src/app/components/hard/hard.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/hard/hard.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsHardHardComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9oYXJkL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXGhhcmRcXGhhcmQuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvaGFyZC9oYXJkLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0ksZ0JBQUE7RUFDQSxpQkFBQTtFQUNBLGtCQUFBO0FDQ0o7O0FERUE7RUFDSSxrQkFBQTtBQ0NKOztBREVBO0VBQ0ksWUFBQTtFQUNBLHlCQUFBO0FDQ0oiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2hhcmQvaGFyZC5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5zY29yZVRhYmxle1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbn1cclxuXHJcbi5tYyB7XHJcbiAgICB3aWR0aDogMTAwcHg7XHJcbiAgICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnNjb3JlSW5wdXQge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi5tYyB7XG4gIHdpZHRoOiAxMDBweDtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/hard/hard.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/hard/hard.component.ts ***!
    \***************************************************/

  /*! exports provided: HardComponent */

  /***/
  function srcAppComponentsHardHardComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "HardComponent", function () {
      return HardComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var HardComponent = /*#__PURE__*/function () {
      function HardComponent(sharingService, router) {
        _classCallCheck(this, HardComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(HardComponent, [{
        key: "navigateToThematic",
        value: function navigateToThematic() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Thematic']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return HardComponent;
    }();

    HardComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    HardComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-hard',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./hard.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/hard/hard.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./hard.component.scss */
      "./src/app/components/hard/hard.component.scss"))["default"]]
    })], HardComponent);
    /***/
  },

  /***/
  "./src/app/components/khan/khan.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/khan/khan.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsKhanKhanComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9raGFuL2toYW4uY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMva2hhbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxraGFuXFxraGFuLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL2toYW4va2hhbi5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/khan/khan.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/khan/khan.component.ts ***!
    \***************************************************/

  /*! exports provided: KhanComponent */

  /***/
  function srcAppComponentsKhanKhanComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KhanComponent", function () {
      return KhanComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var KhanComponent = /*#__PURE__*/function (_base_component_base_30) {
      _inherits(KhanComponent, _base_component_base_30);

      var _super50 = _createSuper(KhanComponent);

      function KhanComponent() {
        _classCallCheck(this, KhanComponent);

        return _super50.apply(this, arguments);
      }

      return KhanComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    KhanComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-khan',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./khan.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/khan/khan.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./khan.component.scss */
      "./src/app/components/khan/khan.component.scss"))["default"]]
    })], KhanComponent);
    /***/
  },

  /***/
  "./src/app/components/mc-selector/mc-selector.component.scss":
  /*!*******************************************************************!*\
    !*** ./src/app/components/mc-selector/mc-selector.component.scss ***!
    \*******************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMcSelectorMcSelectorComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mcNameInput {\n  margin-left: 30%;\n  margin-top: 500px;\n  color: #eee;\n}\n\n.mc1 {\n  width: 50%;\n}\n\n.mc2 {\n  width: 50%;\n}\n\n.mcselection {\n  width: 100%;\n}\n\n::ng-deep .mat-form-field-label {\n  /*change color of label*/\n  color: #eee !important;\n}\n\n::ng-deep .mat-focused .mat-form-field-label {\n  /*change color of label when focused*/\n  color: #1F5A2E !important;\n}\n\n::ng-deep .mat-form-field-underline {\n  /*change color of underline*/\n  background-color: #eee !important;\n}\n\n::ng-deep .mat-form-field-ripple {\n  /*change color of underline when focused*/\n  background-color: #1F5A2E !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tYy1zZWxlY3Rvci9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtYy1zZWxlY3RvclxcbWMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbWMtc2VsZWN0b3IvbWMtc2VsZWN0b3IuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0EsV0FBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0UsVUFBQTtBQ0NGOztBREVBO0VBQ0ksV0FBQTtBQ0NKOztBREVFO0VBQ0Usd0JBQUE7RUFDQSxzQkFBQTtBQ0NKOztBREVFO0VBQ0UscUNBQUE7RUFDQSx5QkFBQTtBQ0NKOztBREVHO0VBQ0MsNEJBQUE7RUFDQSxpQ0FBQTtBQ0NKOztBREVFO0VBQ0MseUNBQUE7RUFDQSxvQ0FBQTtBQ0NIIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9tYy1zZWxlY3Rvci9tYy1zZWxlY3Rvci5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tY05hbWVJbnB1dCB7XHJcbiAgbWFyZ2luLWxlZnQ6IDMwJTtcclxuICBtYXJnaW4tdG9wOiA1MDBweDtcclxuICBjb2xvcjogI2VlZTtcclxufVxyXG5cclxuLm1jMSB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG5cclxuLm1jMiB7XHJcbiAgd2lkdGg6IDUwJTtcclxufVxyXG4gIFxyXG4ubWNzZWxlY3Rpb24ge1xyXG4gICAgd2lkdGg6IDEwMCU7XHJcbiAgfVxyXG5cclxuICA6Om5nLWRlZXAgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIGxhYmVsKi9cclxuICAgIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XHJcbiAgIH1cclxuXHJcbiAgOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xyXG4gICAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cclxuICAgIGNvbG9yOiAgIzFGNUEyRSAhaW1wb3J0YW50O1xyXG4gICB9XHJcbiAgXHJcbiAgIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtdW5kZXJsaW5lIHtcclxuICAgIC8qY2hhbmdlIGNvbG9yIG9mIHVuZGVybGluZSovXHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiNlZWUgIWltcG9ydGFudDtcclxuICB9IFxyXG4gIFxyXG4gIDo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcclxuICAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXHJcbiAgIGJhY2tncm91bmQtY29sb3I6ICAjMUY1QTJFICFpbXBvcnRhbnQ7XHJcblxyXG4gIH0iLCIubWNOYW1lSW5wdXQge1xuICBtYXJnaW4tbGVmdDogMzAlO1xuICBtYXJnaW4tdG9wOiA1MDBweDtcbiAgY29sb3I6ICNlZWU7XG59XG5cbi5tYzEge1xuICB3aWR0aDogNTAlO1xufVxuXG4ubWMyIHtcbiAgd2lkdGg6IDUwJTtcbn1cblxuLm1jc2VsZWN0aW9uIHtcbiAgd2lkdGg6IDEwMCU7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtbGFiZWwge1xuICAvKmNoYW5nZSBjb2xvciBvZiBsYWJlbCovXG4gIGNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgLm1hdC1mb3JtLWZpZWxkLWxhYmVsIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgbGFiZWwgd2hlbiBmb2N1c2VkKi9cbiAgY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9ybS1maWVsZC11bmRlcmxpbmUge1xuICAvKmNoYW5nZSBjb2xvciBvZiB1bmRlcmxpbmUqL1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZWVlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgLypjaGFuZ2UgY29sb3Igb2YgdW5kZXJsaW5lIHdoZW4gZm9jdXNlZCovXG4gIGJhY2tncm91bmQtY29sb3I6ICMxRjVBMkUgIWltcG9ydGFudDtcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/mc-selector/mc-selector.component.ts":
  /*!*****************************************************************!*\
    !*** ./src/app/components/mc-selector/mc-selector.component.ts ***!
    \*****************************************************************/

  /*! exports provided: McSelectorComponent */

  /***/
  function srcAppComponentsMcSelectorMcSelectorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McSelectorComponent", function () {
      return McSelectorComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var McSelectorComponent = /*#__PURE__*/function () {
      function McSelectorComponent(sharingService, router) {
        _classCallCheck(this, McSelectorComponent);

        this.sharingService = sharingService;
        this.router = router;
      }

      _createClass(McSelectorComponent, [{
        key: "acceptNames",
        value: function acceptNames() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Easy']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.scoreData = this.sharingService.getData();
        }
      }]);

      return McSelectorComponent;
    }();

    McSelectorComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    McSelectorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mc-selector',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mc-selector.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mc-selector/mc-selector.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mc-selector.component.scss */
      "./src/app/components/mc-selector/mc-selector.component.scss"))["default"]]
    })], McSelectorComponent);
    /***/
  },

  /***/
  "./src/app/components/mnak/mnak.component.scss":
  /*!*****************************************************!*\
    !*** ./src/app/components/mnak/mnak.component.scss ***!
    \*****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMnakMnakComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tbmFrL21uYWsuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvbW5hay9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtbmFrXFxtbmFrLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGdCQUFnQjtBQ0NoQjtFQUNJLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxXQUFBO0VBQ0EsdUJBQUE7RUFDQSxvQkFBQTtPQUFBLGVBQUE7RUFDQSxvQkFBQTtBRENKO0FDRUE7RUFDSSxnQkFBQTtFQUNBLFVBQUE7RUFDQSxXQUFBO0VBQ0EscUJBQUE7QURDSjtBQ0VBO0VBS0ksc0JBQUE7RUFDQSxxQkFBQTtFQUNBLGVBQUE7QURDSjtBQ0VBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFRENOO0FBQ0Y7QUNHQSx3QkFBQTtBQUVBO0VBQ0k7SUFDSSxlQUFBO1NBQUEsVUFBQTtFREZOO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL21uYWsvbW5hay5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIkBjaGFyc2V0IFwiVVRGLThcIjtcbi5jb250ZW5lZG9yIHtcbiAgbWFyZ2luLXRvcDogMTAwcHg7XG4gIHBhZGRpbmctbGVmdDogM3JlbTtcbiAgd2lkdGg6IDEwMCU7XG4gIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xuICBjb2x1bW4tY291bnQ6IDU7XG4gIG1hcmdpbi1ib3R0b206IDM1cmVtO1xufVxuXG5hIGltZyB7XG4gIG1hcmdpbi10b3A6IDUwcHg7XG4gIHdpZHRoOiA5MCU7XG4gIGhlaWdodDogOTAlO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG59XG5cbmEgaW1nOmhvdmVyIHtcbiAgLXdlYmtpdC10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbW96LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tcy10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtby10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cblxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAyO1xuICB9XG59XG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XG4gIC5jb250ZW5lZG9yIHtcbiAgICBjb2x1bW5zOiAxO1xuICB9XG59IiwiXHJcbi5jb250ZW5lZG9yIHtcclxuICAgIG1hcmdpbi10b3A6IDEwMHB4O1xyXG4gICAgcGFkZGluZy1sZWZ0OiAzcmVtO1xyXG4gICAgd2lkdGg6MTAwJTtcclxuICAgIG1heC13aWR0aDogd2lkdGggMTkyMHB4O1xyXG4gICAgY29sdW1uLWNvdW50OiA1O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogMzVyZW07XHJcbn1cclxuXHJcbmEgaW1ne1xyXG4gICAgbWFyZ2luLXRvcDogNTBweDtcclxuICAgIHdpZHRoOiA5MCU7XHJcbiAgICBoZWlnaHQ6IDkwJTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxufVxyXG5cclxuYSBpbWc6aG92ZXJ7XHJcbiAgICAtd2Via2l0LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tb3otdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1zLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1vLXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIHRyYW5zaXRpb246IGFsbCAzMDBtcztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDc2N3B4KSB7IFxyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6MjtcclxuICAgIH1cclxuXHJcbn1cclxuICAgICAgICBcclxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xyXG4gICAgLmNvbnRlbmVkb3Ige1xyXG4gICAgICAgIGNvbHVtbnM6IDE7XHJcbiAgICB9XHJcbn0iXX0= */";
    /***/
  },

  /***/
  "./src/app/components/mnak/mnak.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/components/mnak/mnak.component.ts ***!
    \***************************************************/

  /*! exports provided: MnakComponent */

  /***/
  function srcAppComponentsMnakMnakComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MnakComponent", function () {
      return MnakComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MnakComponent = /*#__PURE__*/function (_base_component_base_31) {
      _inherits(MnakComponent, _base_component_base_31);

      var _super51 = _createSuper(MnakComponent);

      function MnakComponent() {
        _classCallCheck(this, MnakComponent);

        return _super51.apply(this, arguments);
      }

      return MnakComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MnakComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mnak',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mnak.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mnak/mnak.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mnak.component.scss */
      "./src/app/components/mnak/mnak.component.scss"))["default"]]
    })], MnakComponent);
    /***/
  },

  /***/
  "./src/app/components/mrego/mrego.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/mrego/mrego.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsMregoMregoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9tcmVnby9tcmVnby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy9tcmVnby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxtcmVnb1xcbXJlZ28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvbXJlZ28vbXJlZ28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/mrego/mrego.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/mrego/mrego.component.ts ***!
    \*****************************************************/

  /*! exports provided: MregoComponent */

  /***/
  function srcAppComponentsMregoMregoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MregoComponent", function () {
      return MregoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var MregoComponent = /*#__PURE__*/function (_base_component_base_32) {
      _inherits(MregoComponent, _base_component_base_32);

      var _super52 = _createSuper(MregoComponent);

      function MregoComponent() {
        _classCallCheck(this, MregoComponent);

        return _super52.apply(this, arguments);
      }

      return MregoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    MregoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-mrego',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./mrego.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/mrego/mrego.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./mrego.component.scss */
      "./src/app/components/mrego/mrego.component.scss"))["default"]]
    })], MregoComponent);
    /***/
  },

  /***/
  "./src/app/components/results/results.component.scss":
  /*!***********************************************************!*\
    !*** ./src/app/components/results/results.component.scss ***!
    \***********************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsResultsResultsComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".mc1 {\n  margin-top: 5rem;\n  margin-bottom: 2.5rem;\n  padding-right: 50px;\n  width: 50%;\n  float: left;\n  display: inlane;\n  text-align: right;\n  font-size: 20px;\n}\n\n.mc2 {\n  margin-top: 5rem;\n  margin-bottom: 2.5rem;\n  padding-left: 50px;\n  width: 50%;\n  float: left;\n  display: inlane;\n  text-align: left;\n  font-size: 20px;\n}\n\n#result {\n  text-transform: uppercase;\n}\n\n.btnTwitter {\n  text-align: center;\n}\n\n#twitter {\n  width: 50px;\n  height: auto;\n  cursor: pointer;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9yZXN1bHRzL0M6XFxVc2Vyc1xcSWFnb1xcRG9jdW1lbnRzXFxmbXMtdm90ZXMvc3JjXFxhcHBcXGNvbXBvbmVudHNcXHJlc3VsdHNcXHJlc3VsdHMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvcmVzdWx0cy9yZXN1bHRzLmNvbXBvbmVudC5zY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUNBO0VBQ0ksZ0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxlQUFBO0VBQ0EsaUJBQUE7RUFDQSxlQUFBO0FDQUo7O0FER0E7RUFDSSxnQkFBQTtFQUNBLHFCQUFBO0VBQ0Esa0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLGVBQUE7RUFDQSxnQkFBQTtFQUNBLGVBQUE7QUNBSjs7QURLQTtFQUNJLHlCQUFBO0FDRko7O0FES0E7RUFDSSxrQkFBQTtBQ0ZKOztBREtBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSxlQUFBO0FDRkoiLCJmaWxlIjoic3JjL2FwcC9jb21wb25lbnRzL3Jlc3VsdHMvcmVzdWx0cy5jb21wb25lbnQuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG4ubWMxIHtcclxuICAgIG1hcmdpbi10b3A6IDVyZW07XHJcbiAgICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XHJcbiAgICBwYWRkaW5nLXJpZ2h0OiA1MHB4O1xyXG4gICAgd2lkdGg6IDUwJTtcclxuICAgIGZsb2F0OiBsZWZ0O1xyXG4gICAgZGlzcGxheTogaW5sYW5lO1xyXG4gICAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbn1cclxuXHJcbi5tYzIge1xyXG4gICAgbWFyZ2luLXRvcDogNXJlbTtcclxuICAgIG1hcmdpbi1ib3R0b206IDIuNXJlbTtcclxuICAgIHBhZGRpbmctbGVmdDogNTBweDtcclxuICAgIHdpZHRoOiA1MCU7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIGRpc3BsYXk6IGlubGFuZTtcclxuICAgIHRleHQtYWxpZ246IGxlZnQ7XHJcbiAgICBmb250LXNpemU6IDIwcHg7XHJcbiAgICBcclxuICAgIFxyXG59XHJcblxyXG4jcmVzdWx0IHtcclxuICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XHJcbn1cclxuXHJcbi5idG5Ud2l0dGVye1xyXG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4jdHdpdHRlciB7XHJcbiAgICB3aWR0aDogNTBweDtcclxuICAgIGhlaWdodDogYXV0bztcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxufSIsIi5tYzEge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIHBhZGRpbmctcmlnaHQ6IDUwcHg7XG4gIHdpZHRoOiA1MCU7XG4gIGZsb2F0OiBsZWZ0O1xuICBkaXNwbGF5OiBpbmxhbmU7XG4gIHRleHQtYWxpZ246IHJpZ2h0O1xuICBmb250LXNpemU6IDIwcHg7XG59XG5cbi5tYzIge1xuICBtYXJnaW4tdG9wOiA1cmVtO1xuICBtYXJnaW4tYm90dG9tOiAyLjVyZW07XG4gIHBhZGRpbmctbGVmdDogNTBweDtcbiAgd2lkdGg6IDUwJTtcbiAgZmxvYXQ6IGxlZnQ7XG4gIGRpc3BsYXk6IGlubGFuZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgZm9udC1zaXplOiAyMHB4O1xufVxuXG4jcmVzdWx0IHtcbiAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbn1cblxuLmJ0blR3aXR0ZXIge1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbiN0d2l0dGVyIHtcbiAgd2lkdGg6IDUwcHg7XG4gIGhlaWdodDogYXV0bztcbiAgY3Vyc29yOiBwb2ludGVyO1xufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/results/results.component.ts":
  /*!*********************************************************!*\
    !*** ./src/app/components/results/results.component.ts ***!
    \*********************************************************/

  /*! exports provided: ResultsComponent */

  /***/
  function srcAppComponentsResultsResultsComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ResultsComponent", function () {
      return ResultsComponent;
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


    var _services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../../services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ../../services/event-emmiter.service */
    "./src/app/services/event-emmiter.service.ts");

    var ResultsComponent = /*#__PURE__*/function () {
      function ResultsComponent(sharingService, router, eventEmiiter) {
        _classCallCheck(this, ResultsComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.eventEmiiter = eventEmiiter;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }

        this.scoreData.Mc1.calculateTotal();
        this.scoreData.Mc2.calculateTotal();
      }

      _createClass(ResultsComponent, [{
        key: "getTwitterUrl",
        value: function getTwitterUrl() {
          var scoreMc1 = parseFloat(this.scoreData.Mc1.result.toString());
          var scoreMc2 = parseFloat(this.scoreData.Mc2.result.toString());
          var winnerMc = Math.abs(scoreMc1 - scoreMc2) <= 5 ? null : scoreMc1 > scoreMc2 ? this.scoreData.Mc1 : this.scoreData.Mc2;
          var loserMc = winnerMc != null ? winnerMc === this.scoreData.Mc1 ? this.scoreData.Mc2 : this.scoreData.Mc1 : null;
          var concatToUrl = "";

          if (winnerMc === null && loserMc === null) {
            concatToUrl = "REPLICA! " + this.scoreData.Mc1.name + " " + scoreMc1 + " puntos frente a " + this.scoreData.Mc2.name + " con " + scoreMc2 + " puntos. %0D%0D%23VotosFMS";
          } else {
            concatToUrl = "Ganador: " + winnerMc.name.toUpperCase() + " con " + winnerMc.result + " puntos frente a " + loserMc.name.toUpperCase() + " con " + loserMc.result + " puntos. %0D%0D%23VotosFMS";
          }

          concatToUrl = concatToUrl.replace(" ", "%20");
          window.open("https://twitter.com/intent/tweet?text=" + concatToUrl, "_blank");
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ResultsComponent;
    }();

    ResultsComponent.ctorParameters = function () {
      return [{
        type: _services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: _services_event_emmiter_service__WEBPACK_IMPORTED_MODULE_4__["EventEmitterService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Input"])()], ResultsComponent.prototype, "twitterButton", void 0);
    ResultsComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-results',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./results.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/results/results.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./results.component.scss */
      "./src/app/components/results/results.component.scss"))["default"]]
    })], ResultsComponent);
    /***/
  },

  /***/
  "./src/app/components/sweetpain/sweetpain.component.scss":
  /*!***************************************************************!*\
    !*** ./src/app/components/sweetpain/sweetpain.component.scss ***!
    \***************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsSweetpainSweetpainComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy9zd2VldHBhaW4vc3dlZXRwYWluLmNvbXBvbmVudC5zY3NzIiwic3JjL2FwcC9jb21wb25lbnRzL3N3ZWV0cGFpbi9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFxzd2VldHBhaW5cXHN3ZWV0cGFpbi5jb21wb25lbnQuc2NzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxnQkFBZ0I7QUNDaEI7RUFDSSxpQkFBQTtFQUNBLGtCQUFBO0VBQ0EsV0FBQTtFQUNBLHVCQUFBO0VBQ0Esb0JBQUE7T0FBQSxlQUFBO0VBQ0Esb0JBQUE7QURDSjtBQ0VBO0VBQ0ksZ0JBQUE7RUFDQSxVQUFBO0VBQ0EsV0FBQTtFQUNBLHFCQUFBO0FEQ0o7QUNFQTtFQUtJLHNCQUFBO0VBQ0EscUJBQUE7RUFDQSxlQUFBO0FEQ0o7QUNFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURDTjtBQUNGO0FDR0Esd0JBQUE7QUFFQTtFQUNJO0lBQ0ksZUFBQTtTQUFBLFVBQUE7RURGTjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvY29tcG9uZW50cy9zd2VldHBhaW4vc3dlZXRwYWluLmNvbXBvbmVudC5zY3NzIiwic291cmNlc0NvbnRlbnQiOlsiQGNoYXJzZXQgXCJVVEYtOFwiO1xuLmNvbnRlbmVkb3Ige1xuICBtYXJnaW4tdG9wOiAxMDBweDtcbiAgcGFkZGluZy1sZWZ0OiAzcmVtO1xuICB3aWR0aDogMTAwJTtcbiAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XG4gIGNvbHVtbi1jb3VudDogNTtcbiAgbWFyZ2luLWJvdHRvbTogMzVyZW07XG59XG5cbmEgaW1nIHtcbiAgbWFyZ2luLXRvcDogNTBweDtcbiAgd2lkdGg6IDkwJTtcbiAgaGVpZ2h0OiA5MCU7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbn1cblxuYSBpbWc6aG92ZXIge1xuICAtd2Via2l0LXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1tb3otdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1zLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIC1vLXRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zZm9ybTogc2NhbGUoMS4xNSk7XG4gIHRyYW5zaXRpb246IGFsbCAzMDBtcztcbiAgY3Vyc29yOiBwb2ludGVyO1xufVxuXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDI7XG4gIH1cbn1cbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcbiAgLmNvbnRlbmVkb3Ige1xuICAgIGNvbHVtbnM6IDE7XG4gIH1cbn0iLCJcclxuLmNvbnRlbmVkb3Ige1xyXG4gICAgbWFyZ2luLXRvcDogMTAwcHg7XHJcbiAgICBwYWRkaW5nLWxlZnQ6IDNyZW07XHJcbiAgICB3aWR0aDoxMDAlO1xyXG4gICAgbWF4LXdpZHRoOiB3aWR0aCAxOTIwcHg7XHJcbiAgICBjb2x1bW4tY291bnQ6IDU7XHJcbiAgICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcclxufVxyXG5cclxuYSBpbWd7XHJcbiAgICBtYXJnaW4tdG9wOiA1MHB4O1xyXG4gICAgd2lkdGg6IDkwJTtcclxuICAgIGhlaWdodDogOTAlO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG59XHJcblxyXG5hIGltZzpob3ZlcntcclxuICAgIC13ZWJraXQtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW1vei10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbXMtdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgLW8tdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNmb3JtOnNjYWxlKDEuMTUpO1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNzY3cHgpIHsgXHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczoyO1xyXG4gICAgfVxyXG5cclxufVxyXG4gICAgICAgIFxyXG4vKiBNw7N2aWxlcyBlbiB2ZXJ0aWNhbCAqL1xyXG5cclxuQG1lZGlhIChtYXgtd2lkdGg6IDQ4MHB4KSB7XHJcbiAgICAuY29udGVuZWRvciB7XHJcbiAgICAgICAgY29sdW1uczogMTtcclxuICAgIH1cclxufSJdfQ== */";
    /***/
  },

  /***/
  "./src/app/components/sweetpain/sweetpain.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/components/sweetpain/sweetpain.component.ts ***!
    \*************************************************************/

  /*! exports provided: SweetpainComponent */

  /***/
  function srcAppComponentsSweetpainSweetpainComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SweetpainComponent", function () {
      return SweetpainComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var SweetpainComponent = /*#__PURE__*/function (_base_component_base_33) {
      _inherits(SweetpainComponent, _base_component_base_33);

      var _super53 = _createSuper(SweetpainComponent);

      function SweetpainComponent() {
        _classCallCheck(this, SweetpainComponent);

        return _super53.apply(this, arguments);
      }

      return SweetpainComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    SweetpainComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-sweetpain',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./sweetpain.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/sweetpain/sweetpain.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./sweetpain.component.scss */
      "./src/app/components/sweetpain/sweetpain.component.scss"))["default"]]
    })], SweetpainComponent);
    /***/
  },

  /***/
  "./src/app/components/thematic/thematic.component.scss":
  /*!*************************************************************!*\
    !*** ./src/app/components/thematic/thematic.component.scss ***!
    \*************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsThematicThematicComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".scoreTable {\n  margin-top: 5rem;\n  margin-left: auto;\n  margin-right: auto;\n}\n\n.thematic {\n  margin-left: auto;\n  margin-right: auto;\n  display: inline-block;\n  align-items: center;\n  text-align: center;\n}\n\n/*.firstThematic {\n  margin-left: -20px;\n\n}\n*/\n\n.secondThematic {\n  margin-left: 150px;\n}\n\n.scoreInput {\n  text-align: center;\n}\n\n.mc {\n  width: 100px;\n  text-transform: uppercase;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aGVtYXRpYy9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aGVtYXRpY1xcdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWF0aWMvdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxnQkFBQTtFQUNBLGlCQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTtFQUNFLGlCQUFBO0VBQ0Esa0JBQUE7RUFDQSxxQkFBQTtFQUNBLG1CQUFBO0VBQ0Esa0JBQUE7QUNDRjs7QURFQTs7OztDQUFBOztBQUtBO0VBQ0Usa0JBQUE7QUNDRjs7QURFQTtFQUNFLGtCQUFBO0FDQ0Y7O0FERUE7RUFDRSxZQUFBO0VBQ0EseUJBQUE7QUNDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGhlbWF0aWMvdGhlbWF0aWMuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyIuc2NvcmVUYWJsZXtcclxuICBtYXJnaW4tdG9wOiA1cmVtO1xyXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xyXG4gIG1hcmdpbi1yaWdodDogYXV0bztcclxufVxyXG5cclxuLnRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogYXV0bztcclxuICBtYXJnaW4tcmlnaHQ6IGF1dG87XHJcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xyXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4vKi5maXJzdFRoZW1hdGljIHtcclxuICBtYXJnaW4tbGVmdDogLTIwcHg7XHJcblxyXG59XHJcbiovXHJcbi5zZWNvbmRUaGVtYXRpYyB7XHJcbiAgbWFyZ2luLWxlZnQ6IDE1MHB4O1xyXG59XHJcblxyXG4uc2NvcmVJbnB1dCB7XHJcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG59XHJcblxyXG4ubWMge1xyXG4gIHdpZHRoOiAxMDBweDtcclxuICB0ZXh0LXRyYW5zZm9ybTogdXBwZXJjYXNlO1xyXG59XHJcbiIsIi5zY29yZVRhYmxlIHtcbiAgbWFyZ2luLXRvcDogNXJlbTtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbn1cblxuLnRoZW1hdGljIHtcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1hcmdpbi1yaWdodDogYXV0bztcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG5cbi8qLmZpcnN0VGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogLTIwcHg7XG5cbn1cbiovXG4uc2Vjb25kVGhlbWF0aWMge1xuICBtYXJnaW4tbGVmdDogMTUwcHg7XG59XG5cbi5zY29yZUlucHV0IHtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuXG4ubWMge1xuICB3aWR0aDogMTAwcHg7XG4gIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/thematic/thematic.component.ts":
  /*!***********************************************************!*\
    !*** ./src/app/components/thematic/thematic.component.ts ***!
    \***********************************************************/

  /*! exports provided: ThematicComponent */

  /***/
  function srcAppComponentsThematicThematicComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ThematicComponent", function () {
      return ThematicComponent;
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


    var src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/services/SharingService */
    "./src/app/services/SharingService.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");

    var ThematicComponent = /*#__PURE__*/function () {
      function ThematicComponent(sharingService, router) {
        _classCallCheck(this, ThematicComponent);

        this.sharingService = sharingService;
        this.router = router;
        this.scoreData = sharingService.getData();

        if (this.scoreData.Mc1.name === undefined || this.scoreData.Mc2.name === undefined) {
          this.router.navigate(['/McSelector']);
        }
      }

      _createClass(ThematicComponent, [{
        key: "navigateToCharacters",
        value: function navigateToCharacters() {
          this.sharingService.setData(this.scoreData);
          this.router.navigate(['/Characters']);
        }
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ThematicComponent;
    }();

    ThematicComponent.ctorParameters = function () {
      return [{
        type: src_app_services_SharingService__WEBPACK_IMPORTED_MODULE_2__["SharingService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ThematicComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-thematic',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./thematic.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/thematic/thematic.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./thematic.component.scss */
      "./src/app/components/thematic/thematic.component.scss"))["default"]]
    })], ThematicComponent);
    /***/
  },

  /***/
  "./src/app/components/tirpa/tirpa.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/tirpa/tirpa.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsTirpaTirpaComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy90aXJwYS90aXJwYS5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy90aXJwYS9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx0aXJwYVxcdGlycGEuY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvdGlycGEvdGlycGEuY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/tirpa/tirpa.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/tirpa/tirpa.component.ts ***!
    \*****************************************************/

  /*! exports provided: TirpaComponent */

  /***/
  function srcAppComponentsTirpaTirpaComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TirpaComponent", function () {
      return TirpaComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var TirpaComponent = /*#__PURE__*/function (_base_component_base_34) {
      _inherits(TirpaComponent, _base_component_base_34);

      var _super54 = _createSuper(TirpaComponent);

      function TirpaComponent() {
        _classCallCheck(this, TirpaComponent);

        return _super54.apply(this, arguments);
      }

      return TirpaComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    TirpaComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-tirpa',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./tirpa.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/tirpa/tirpa.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./tirpa.component.scss */
      "./src/app/components/tirpa/tirpa.component.scss"))["default"]]
    })], TirpaComponent);
    /***/
  },

  /***/
  "./src/app/components/zasko/zasko.component.scss":
  /*!*******************************************************!*\
    !*** ./src/app/components/zasko/zasko.component.scss ***!
    \*******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppComponentsZaskoZaskoComponentScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@charset \"UTF-8\";\n.contenedor {\n  margin-top: 100px;\n  padding-left: 3rem;\n  width: 100%;\n  max-width: width 1920px;\n  -moz-column-count: 5;\n       column-count: 5;\n  margin-bottom: 35rem;\n}\na img {\n  margin-top: 50px;\n  width: 90%;\n  height: 90%;\n  transition: all 300ms;\n}\na img:hover {\n  transform: scale(1.15);\n  transition: all 300ms;\n  cursor: pointer;\n}\n@media (max-width: 767px) {\n  .contenedor {\n    -moz-columns: 2;\n         columns: 2;\n  }\n}\n/* Móviles en vertical */\n@media (max-width: 480px) {\n  .contenedor {\n    -moz-columns: 1;\n         columns: 1;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvY29tcG9uZW50cy96YXNrby96YXNrby5jb21wb25lbnQuc2NzcyIsInNyYy9hcHAvY29tcG9uZW50cy96YXNrby9DOlxcVXNlcnNcXElhZ29cXERvY3VtZW50c1xcZm1zLXZvdGVzL3NyY1xcYXBwXFxjb21wb25lbnRzXFx6YXNrb1xcemFza28uY29tcG9uZW50LnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsZ0JBQWdCO0FDQ2hCO0VBQ0ksaUJBQUE7RUFDQSxrQkFBQTtFQUNBLFdBQUE7RUFDQSx1QkFBQTtFQUNBLG9CQUFBO09BQUEsZUFBQTtFQUNBLG9CQUFBO0FEQ0o7QUNFQTtFQUNJLGdCQUFBO0VBQ0EsVUFBQTtFQUNBLFdBQUE7RUFDQSxxQkFBQTtBRENKO0FDRUE7RUFLSSxzQkFBQTtFQUNBLHFCQUFBO0VBQ0EsZUFBQTtBRENKO0FDRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VEQ047QUFDRjtBQ0dBLHdCQUFBO0FBRUE7RUFDSTtJQUNJLGVBQUE7U0FBQSxVQUFBO0VERk47QUFDRiIsImZpbGUiOiJzcmMvYXBwL2NvbXBvbmVudHMvemFza28vemFza28uY29tcG9uZW50LnNjc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAY2hhcnNldCBcIlVURi04XCI7XG4uY29udGVuZWRvciB7XG4gIG1hcmdpbi10b3A6IDEwMHB4O1xuICBwYWRkaW5nLWxlZnQ6IDNyZW07XG4gIHdpZHRoOiAxMDAlO1xuICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcbiAgY29sdW1uLWNvdW50OiA1O1xuICBtYXJnaW4tYm90dG9tOiAzNXJlbTtcbn1cblxuYSBpbWcge1xuICBtYXJnaW4tdG9wOiA1MHB4O1xuICB3aWR0aDogOTAlO1xuICBoZWlnaHQ6IDkwJTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xufVxuXG5hIGltZzpob3ZlciB7XG4gIC13ZWJraXQtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW1vei10cmFuc2Zvcm06IHNjYWxlKDEuMTUpO1xuICAtbXMtdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgLW8tdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNmb3JtOiBzY2FsZSgxLjE1KTtcbiAgdHJhbnNpdGlvbjogYWxsIDMwMG1zO1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMjtcbiAgfVxufVxuLyogTcOzdmlsZXMgZW4gdmVydGljYWwgKi9cbkBtZWRpYSAobWF4LXdpZHRoOiA0ODBweCkge1xuICAuY29udGVuZWRvciB7XG4gICAgY29sdW1uczogMTtcbiAgfVxufSIsIlxyXG4uY29udGVuZWRvciB7XHJcbiAgICBtYXJnaW4tdG9wOiAxMDBweDtcclxuICAgIHBhZGRpbmctbGVmdDogM3JlbTtcclxuICAgIHdpZHRoOjEwMCU7XHJcbiAgICBtYXgtd2lkdGg6IHdpZHRoIDE5MjBweDtcclxuICAgIGNvbHVtbi1jb3VudDogNTtcclxuICAgIG1hcmdpbi1ib3R0b206IDM1cmVtO1xyXG59XHJcblxyXG5hIGltZ3tcclxuICAgIG1hcmdpbi10b3A6IDUwcHg7XHJcbiAgICB3aWR0aDogOTAlO1xyXG4gICAgaGVpZ2h0OiA5MCU7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbn1cclxuXHJcbmEgaW1nOmhvdmVye1xyXG4gICAgLXdlYmtpdC10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtbW96LXRyYW5zZm9ybTpzY2FsZSgxLjE1KTtcclxuICAgIC1tcy10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICAtby10cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2Zvcm06c2NhbGUoMS4xNSk7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMzAwbXM7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjdweCkgeyBcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOjI7XHJcbiAgICB9XHJcblxyXG59XHJcbiAgICAgICAgXHJcbi8qIE3Ds3ZpbGVzIGVuIHZlcnRpY2FsICovXHJcblxyXG5AbWVkaWEgKG1heC13aWR0aDogNDgwcHgpIHtcclxuICAgIC5jb250ZW5lZG9yIHtcclxuICAgICAgICBjb2x1bW5zOiAxO1xyXG4gICAgfVxyXG59Il19 */";
    /***/
  },

  /***/
  "./src/app/components/zasko/zasko.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/components/zasko/zasko.component.ts ***!
    \*****************************************************/

  /*! exports provided: ZaskoComponent */

  /***/
  function srcAppComponentsZaskoZaskoComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZaskoComponent", function () {
      return ZaskoComponent;
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


    var _base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../base-component/base-component.component */
    "./src/app/components/base-component/base-component.component.ts");

    var ZaskoComponent = /*#__PURE__*/function (_base_component_base_35) {
      _inherits(ZaskoComponent, _base_component_base_35);

      var _super55 = _createSuper(ZaskoComponent);

      function ZaskoComponent() {
        _classCallCheck(this, ZaskoComponent);

        return _super55.apply(this, arguments);
      }

      return ZaskoComponent;
    }(_base_component_base_component_component__WEBPACK_IMPORTED_MODULE_2__["BaseComponentComponent"]);

    ZaskoComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-zasko',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./zasko.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/components/zasko/zasko.component.html"))["default"],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./zasko.component.scss */
      "./src/app/components/zasko/zasko.component.scss"))["default"]]
    })], ZaskoComponent);
    /***/
  },

  /***/
  "./src/app/constants.ts":
  /*!******************************!*\
    !*** ./src/app/constants.ts ***!
    \******************************/

  /*! exports provided: CACHA_NAME, DTOKE_NAME, KLAN_NAME, MECHA_NAME, MKS_NAME, NACHO_NAME, PAPO_NAME, STUART_NAME, SUB_NAME, WOLF_NAME, ZASKO_NAME, MR_EGO_NAME, BLON_NAME, ERRECE_NAME, KHAN_NAME, SWEET_PAIN_NAME, GAZIR_NAME, BNET_NAME, TIRPA_NAME, MNAK_NAME, JAZE_NAME, JOTA_NAME, NEW_ERA_NAME, ZIKA_NAME, NEKROOS_NAME, RAMSET_NAME, CHOQUE_NAME, SKILL_NAME, LITZEN_NAME, STICK_NAME, STRIKE_NAME, LOBO_ESTEPARIO_NAME, POTENCIA_NAME, BONE_NAME, YOIKER_NAME, JONY_BELTRAN_NAME, ZTICMA_NAME, GARZA_NAME, RAPDER_NAME, RC_NAME, SKIPER_NAME, ACERTIJO_NAME, EL_MENOR_NAME, ESEZETA_NAME, JOKKER_NAME, JOQERR_NAME, NITRO_NAME, PEPE_GRILLO_NAME, RICTO_NAME, TEOREMA_NAME, TOM_CROWLEY_NAME, S2020_BATTLE_ARG_J1_DTOKE_WOLF, S2020_BATTLE_ARG_J1_KLAN_MECHA, S2020_BATTLE_ARG_J1_NACHO_STUART, S2020_BATTLE_ARG_J1_PAPO_SUB, S2020_BATTLE_ARG_J1_MKS_CACHA, S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON, S2020_BATTLE_ESP_J1_ZASKO_GAZIR, S2020_BATTLE_ESP_J1_ERRECE_BNET, S2020_BATTLE_ESP_J1_MNAK_KHAN, S2020_BATTLE_ESP_J1_MR_EGO_TIRPA, S2020_BATTLE_ESP_J2_GAZIR_BLON, S2020_BATTLE_ESP_J2_ERRECE_KHAN, S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO, S2020_BATTLE_ESP_J2_TIRPA_MNAK, S2020_BATTLE_ESP_J2_BNET_MREGO, S2020_BATTLE_PERU_J1_JAZE_JOTA, S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA, S2020_BATTLE_PERU_J1_RAMSET_STICK, S2020_BATTLE_PERU_J1_STRIKE_LITZEN, S2020_BATTLE_PERU_J1_CHOQUE_SKILL, S2020_BATTLE_PERU_J2_LITZEN_JOTA, S2020_BATTLE_PERU_J2_JAZE_STRIKE, S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE, S2020_BATTLE_PERU_J2_SKILL_RAMSET, S2020_BATTLE_PERU_J3_JAZE_CHOQUE, S2020_BATTLE_PERU_J3_NEKROOS_RAMSET, S2020_BATTLE_PERU_J3_STICK_LITZEN, S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA, S2020_BATTLE_PERU_J3_JOTA_SKILL, S2020_BATTLE_MEX_J1_RAPDER_SKIPER, S2020_BATTLE_MEX_J1_POTENCIA_RC, S2020_BATTLE_MEX_J1_YOIKER_ZTICMA, S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA, S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN, S2020_BATTLE_MEX_J2_POTENCIA_GARZA, S2020_BATTLE_MEX_J2_RAPDER_YOIKER, S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA, S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO, S2020_BATTLE_MEX_J2_RC_BONE, S2020_BATTLE_CHI_J1_TEOREMA_JOQERR, S2020_BATTLE_CHI_J1_ESEZETA_NITRO, S2020_BATTLE_CHI_J1_ACERTIJO_RICTO, S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR, S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY, S2020_BATTLE_CHI_J2_JOQERR_NITRO, S2020_BATTLE_CHI_J2_TEOREMA_RICTO, S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY, S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO, S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR */

  /***/
  function srcAppConstantsTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CACHA_NAME", function () {
      return CACHA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "DTOKE_NAME", function () {
      return DTOKE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KLAN_NAME", function () {
      return KLAN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MECHA_NAME", function () {
      return MECHA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MKS_NAME", function () {
      return MKS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NACHO_NAME", function () {
      return NACHO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PAPO_NAME", function () {
      return PAPO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STUART_NAME", function () {
      return STUART_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SUB_NAME", function () {
      return SUB_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "WOLF_NAME", function () {
      return WOLF_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZASKO_NAME", function () {
      return ZASKO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MR_EGO_NAME", function () {
      return MR_EGO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BLON_NAME", function () {
      return BLON_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ERRECE_NAME", function () {
      return ERRECE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "KHAN_NAME", function () {
      return KHAN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SWEET_PAIN_NAME", function () {
      return SWEET_PAIN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GAZIR_NAME", function () {
      return GAZIR_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BNET_NAME", function () {
      return BNET_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TIRPA_NAME", function () {
      return TIRPA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MNAK_NAME", function () {
      return MNAK_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JAZE_NAME", function () {
      return JAZE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JOTA_NAME", function () {
      return JOTA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEW_ERA_NAME", function () {
      return NEW_ERA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZIKA_NAME", function () {
      return ZIKA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NEKROOS_NAME", function () {
      return NEKROOS_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RAMSET_NAME", function () {
      return RAMSET_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "CHOQUE_NAME", function () {
      return CHOQUE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SKILL_NAME", function () {
      return SKILL_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LITZEN_NAME", function () {
      return LITZEN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STICK_NAME", function () {
      return STICK_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "STRIKE_NAME", function () {
      return STRIKE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LOBO_ESTEPARIO_NAME", function () {
      return LOBO_ESTEPARIO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "POTENCIA_NAME", function () {
      return POTENCIA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "BONE_NAME", function () {
      return BONE_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "YOIKER_NAME", function () {
      return YOIKER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JONY_BELTRAN_NAME", function () {
      return JONY_BELTRAN_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ZTICMA_NAME", function () {
      return ZTICMA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "GARZA_NAME", function () {
      return GARZA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RAPDER_NAME", function () {
      return RAPDER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RC_NAME", function () {
      return RC_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SKIPER_NAME", function () {
      return SKIPER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ACERTIJO_NAME", function () {
      return ACERTIJO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EL_MENOR_NAME", function () {
      return EL_MENOR_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ESEZETA_NAME", function () {
      return ESEZETA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JOKKER_NAME", function () {
      return JOKKER_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "JOQERR_NAME", function () {
      return JOQERR_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "NITRO_NAME", function () {
      return NITRO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PEPE_GRILLO_NAME", function () {
      return PEPE_GRILLO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RICTO_NAME", function () {
      return RICTO_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TEOREMA_NAME", function () {
      return TEOREMA_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TOM_CROWLEY_NAME", function () {
      return TOM_CROWLEY_NAME;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ARG_J1_DTOKE_WOLF", function () {
      return S2020_BATTLE_ARG_J1_DTOKE_WOLF;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ARG_J1_KLAN_MECHA", function () {
      return S2020_BATTLE_ARG_J1_KLAN_MECHA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ARG_J1_NACHO_STUART", function () {
      return S2020_BATTLE_ARG_J1_NACHO_STUART;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ARG_J1_PAPO_SUB", function () {
      return S2020_BATTLE_ARG_J1_PAPO_SUB;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ARG_J1_MKS_CACHA", function () {
      return S2020_BATTLE_ARG_J1_MKS_CACHA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON", function () {
      return S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_ZASKO_GAZIR", function () {
      return S2020_BATTLE_ESP_J1_ZASKO_GAZIR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_ERRECE_BNET", function () {
      return S2020_BATTLE_ESP_J1_ERRECE_BNET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_MNAK_KHAN", function () {
      return S2020_BATTLE_ESP_J1_MNAK_KHAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J1_MR_EGO_TIRPA", function () {
      return S2020_BATTLE_ESP_J1_MR_EGO_TIRPA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J2_GAZIR_BLON", function () {
      return S2020_BATTLE_ESP_J2_GAZIR_BLON;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J2_ERRECE_KHAN", function () {
      return S2020_BATTLE_ESP_J2_ERRECE_KHAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO", function () {
      return S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J2_TIRPA_MNAK", function () {
      return S2020_BATTLE_ESP_J2_TIRPA_MNAK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_ESP_J2_BNET_MREGO", function () {
      return S2020_BATTLE_ESP_J2_BNET_MREGO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_JAZE_JOTA", function () {
      return S2020_BATTLE_PERU_J1_JAZE_JOTA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA", function () {
      return S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_RAMSET_STICK", function () {
      return S2020_BATTLE_PERU_J1_RAMSET_STICK;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_STRIKE_LITZEN", function () {
      return S2020_BATTLE_PERU_J1_STRIKE_LITZEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J1_CHOQUE_SKILL", function () {
      return S2020_BATTLE_PERU_J1_CHOQUE_SKILL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J2_LITZEN_JOTA", function () {
      return S2020_BATTLE_PERU_J2_LITZEN_JOTA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J2_JAZE_STRIKE", function () {
      return S2020_BATTLE_PERU_J2_JAZE_STRIKE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE", function () {
      return S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J2_SKILL_RAMSET", function () {
      return S2020_BATTLE_PERU_J2_SKILL_RAMSET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J3_JAZE_CHOQUE", function () {
      return S2020_BATTLE_PERU_J3_JAZE_CHOQUE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J3_NEKROOS_RAMSET", function () {
      return S2020_BATTLE_PERU_J3_NEKROOS_RAMSET;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J3_STICK_LITZEN", function () {
      return S2020_BATTLE_PERU_J3_STICK_LITZEN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA", function () {
      return S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_PERU_J3_JOTA_SKILL", function () {
      return S2020_BATTLE_PERU_J3_JOTA_SKILL;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_RAPDER_SKIPER", function () {
      return S2020_BATTLE_MEX_J1_RAPDER_SKIPER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_POTENCIA_RC", function () {
      return S2020_BATTLE_MEX_J1_POTENCIA_RC;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_YOIKER_ZTICMA", function () {
      return S2020_BATTLE_MEX_J1_YOIKER_ZTICMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA", function () {
      return S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN", function () {
      return S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J2_POTENCIA_GARZA", function () {
      return S2020_BATTLE_MEX_J2_POTENCIA_GARZA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J2_RAPDER_YOIKER", function () {
      return S2020_BATTLE_MEX_J2_RAPDER_YOIKER;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA", function () {
      return S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO", function () {
      return S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_MEX_J2_RC_BONE", function () {
      return S2020_BATTLE_MEX_J2_RC_BONE;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J1_TEOREMA_JOQERR", function () {
      return S2020_BATTLE_CHI_J1_TEOREMA_JOQERR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J1_ESEZETA_NITRO", function () {
      return S2020_BATTLE_CHI_J1_ESEZETA_NITRO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J1_ACERTIJO_RICTO", function () {
      return S2020_BATTLE_CHI_J1_ACERTIJO_RICTO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR", function () {
      return S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY", function () {
      return S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J2_JOQERR_NITRO", function () {
      return S2020_BATTLE_CHI_J2_JOQERR_NITRO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J2_TEOREMA_RICTO", function () {
      return S2020_BATTLE_CHI_J2_TEOREMA_RICTO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY", function () {
      return S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO", function () {
      return S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR", function () {
      return S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); //Nombre FMSArg


    var CACHA_NAME = "Cacha";
    var DTOKE_NAME = "Dtoke";
    var KLAN_NAME = "Klan";
    var MECHA_NAME = "Mecha";
    var MKS_NAME = "Mks";
    var NACHO_NAME = "Nacho";
    var PAPO_NAME = "Papo";
    var STUART_NAME = "Stuart";
    var SUB_NAME = "Sub";
    var WOLF_NAME = "Wolf"; //Nombres FMSEsp

    var ZASKO_NAME = "Zasko";
    var MR_EGO_NAME = "Mr. Ego";
    var BLON_NAME = "Blon";
    var ERRECE_NAME = "Errece";
    var KHAN_NAME = "Khan";
    var SWEET_PAIN_NAME = "Sweet pain";
    var GAZIR_NAME = "Gazir";
    var BNET_NAME = "Bnet";
    var TIRPA_NAME = "Tirpa";
    var MNAK_NAME = "Mnak"; //Nombres FMSPeru

    var JAZE_NAME = "Jaze";
    var JOTA_NAME = "Jota";
    var NEW_ERA_NAME = "New era";
    var ZIKA_NAME = "Zika";
    var NEKROOS_NAME = "Nekroos";
    var RAMSET_NAME = "Ramset";
    var CHOQUE_NAME = "Choque";
    var SKILL_NAME = "Skill";
    var LITZEN_NAME = "Litzen";
    var STICK_NAME = "Stick";
    var STRIKE_NAME = "Strike"; //Nombres FMSMex

    var LOBO_ESTEPARIO_NAME = "Lobo estepario";
    var POTENCIA_NAME = "Potencia";
    var BONE_NAME = "B. One";
    var YOIKER_NAME = "Yoiker";
    var JONY_BELTRAN_NAME = "Jony";
    var ZTICMA_NAME = "Zticma";
    var GARZA_NAME = "Garza";
    var RAPDER_NAME = "Rapder";
    var RC_NAME = "RC";
    var SKIPER_NAME = "Skiper"; //Nombres FMSChi

    var ACERTIJO_NAME = "Acertijo";
    var EL_MENOR_NAME = "El menor";
    var ESEZETA_NAME = "Esezeta";
    var JOKKER_NAME = "Jokker";
    var JOQERR_NAME = "Joqerr";
    var NITRO_NAME = "Nitro";
    var PEPE_GRILLO_NAME = "Pepe grillo";
    var RICTO_NAME = "Ricto";
    var TEOREMA_NAME = "Teorema";
    var TOM_CROWLEY_NAME = "Tom crowley"; //Batallas FMSArg T2020 Jornada1

    var S2020_BATTLE_ARG_J1_DTOKE_WOLF = "unHYEBUUhTA";
    var S2020_BATTLE_ARG_J1_KLAN_MECHA = "CITYxc8d1s4";
    var S2020_BATTLE_ARG_J1_NACHO_STUART = "MEGpuTZcWs0";
    var S2020_BATTLE_ARG_J1_PAPO_SUB = "Cej2qbUa90E";
    var S2020_BATTLE_ARG_J1_MKS_CACHA = "b_jGUNwZWkU"; //Batallas FMSEsp T2020 Jornada1

    var S2020_BATTLE_ESP_J1_SWEET_PAIN_BLON = "lc5-dUqm7j4";
    var S2020_BATTLE_ESP_J1_ZASKO_GAZIR = "DrT-exaAbEk";
    var S2020_BATTLE_ESP_J1_ERRECE_BNET = "PtMQbN9x8I8";
    var S2020_BATTLE_ESP_J1_MNAK_KHAN = "IkJmWaNTMgI";
    var S2020_BATTLE_ESP_J1_MR_EGO_TIRPA = "yNbtrwnNH-g"; //Batallas FMSEsp T2020 Jornada2

    var S2020_BATTLE_ESP_J2_GAZIR_BLON = "VWCoBAR43Mw";
    var S2020_BATTLE_ESP_J2_ERRECE_KHAN = "3ncbGT25ZBY";
    var S2020_BATTLE_ESP_J2_SWEET_PAIN_ZASKO = "RWBu-ocdRHI";
    var S2020_BATTLE_ESP_J2_TIRPA_MNAK = "_fdT4oLoKA8";
    var S2020_BATTLE_ESP_J2_BNET_MREGO = "R25_FzPrlkU"; //Batallas FMSPeru T2020 Jornada1

    var S2020_BATTLE_PERU_J1_JAZE_JOTA = "BI-GRSXLg1M";
    var S2020_BATTLE_PERU_J1_NEKROOS_NEW_ERA = "t3QIr-A2rlA";
    var S2020_BATTLE_PERU_J1_RAMSET_STICK = "hoWQZG6Cnb4";
    var S2020_BATTLE_PERU_J1_STRIKE_LITZEN = "xDXnifts8JM";
    var S2020_BATTLE_PERU_J1_CHOQUE_SKILL = "5oETXuzmnME"; //Batallas FMSPeru T2020 Jornada2

    var S2020_BATTLE_PERU_J2_LITZEN_JOTA = "SRerWQGQq_Q";
    var S2020_BATTLE_PERU_J2_JAZE_STRIKE = "iwdEQY80y6s";
    var S2020_BATTLE_PERU_J2_NEW_ERA_CHOQUE = "zsrNsoa3BBI";
    var S2020_BATTLE_PERU_J2_SKILL_RAMSET = "toFaJg0xRV4"; //Batallas FMSPeru T2020 Jornada3

    var S2020_BATTLE_PERU_J3_JAZE_CHOQUE = "jz6J6U9FrUg";
    var S2020_BATTLE_PERU_J3_NEKROOS_RAMSET = "KJqMg4l39Vw";
    var S2020_BATTLE_PERU_J3_STICK_LITZEN = "MQoE_TaM1LE";
    var S2020_BATTLE_PERU_J3_STRIKE_NEW_ERA = "a9ZewINsmxE";
    var S2020_BATTLE_PERU_J3_JOTA_SKILL = "N2eHuB1kB1s"; //Batallas FMSMex T2020 Jornada1

    var S2020_BATTLE_MEX_J1_RAPDER_SKIPER = "wOoE8Y5drsU";
    var S2020_BATTLE_MEX_J1_POTENCIA_RC = "EFzDoKBGuhA";
    var S2020_BATTLE_MEX_J1_YOIKER_ZTICMA = "O8KU941R3Eo";
    var S2020_BATTLE_MEX_J1_LOBO_ESTEPARIO_GARZA = "0kkgfJQRCII";
    var S2020_BATTLE_MEX_J1_BONE_JONY_BELTRAN = "iNq-SKcYppI"; //Batallas FMSMex T2020 Jornada2

    var S2020_BATTLE_MEX_J2_POTENCIA_GARZA = "fTeKIwtS1N0";
    var S2020_BATTLE_MEX_J2_RAPDER_YOIKER = "xCub5PbulVQ";
    var S2020_BATTLE_MEX_J2_JONY_BELTRAN_ZTICMA = "0D6pyQ4A_acE8Y5drsU";
    var S2020_BATTLE_MEX_J2_SKIPER_LOBO_ESTEPARIO = "Us-0pgY49LQ";
    var S2020_BATTLE_MEX_J2_RC_BONE = "PcIqTvchtUU"; //Batallas FMSChi T2020 Jornada1

    var S2020_BATTLE_CHI_J1_TEOREMA_JOQERR = "x4GUvZFUM7c";
    var S2020_BATTLE_CHI_J1_ESEZETA_NITRO = "0F7TZyIYNZo";
    var S2020_BATTLE_CHI_J1_ACERTIJO_RICTO = "24a023t7RyI";
    var S2020_BATTLE_CHI_J1_PEPE_GRILLO_EL_MENOR = "Ie5MxYLb7v8";
    var S2020_BATTLE_CHI_J1_JOKKER_TOM_CROWLEY = "WX4a7xlYkHQ"; //Batallas FMSChi T2020 Jornada2

    var S2020_BATTLE_CHI_J2_JOQERR_NITRO = "JXN7zJfSPE0";
    var S2020_BATTLE_CHI_J2_TEOREMA_RICTO = "pugYFvVRcAs";
    var S2020_BATTLE_CHI_J2_PEPE_GRILLO_TOM_CROWLEY = "Fn-Z_yRAKrE";
    var S2020_BATTLE_CHI_J2_JOKKER_ACERTIJO = "nkuxArh1G2M";
    var S2020_BATTLE_CHI_J2_ESEZETA_EL_MENOR = "nY2d9eTgwkg";
    /***/
  },

  /***/
  "./src/app/models/additional-score-model.ts":
  /*!**************************************************!*\
    !*** ./src/app/models/additional-score-model.ts ***!
    \**************************************************/

  /*! exports provided: AdditionalScoreModel */

  /***/
  function srcAppModelsAdditionalScoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AdditionalScoreModel", function () {
      return AdditionalScoreModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var AdditionalScoreModel = /*#__PURE__*/function () {
      function AdditionalScoreModel() {
        _classCallCheck(this, AdditionalScoreModel);
      }

      _createClass(AdditionalScoreModel, [{
        key: "getTotal",
        value: function getTotal() {
          var result = parseFloat(this.getFlow().toString()) + parseFloat(this.getSkills().toString()) + parseFloat(this.getScene().toString());
          console.log(result !== undefined ? result : 0);
          return result !== undefined ? result : 0;
        }
      }, {
        key: "getFlow",
        value: function getFlow() {
          return this.flow === undefined ? 0 : this.flow;
        }
      }, {
        key: "getSkills",
        value: function getSkills() {
          return this.skills === undefined ? 0 : this.skills;
        }
      }, {
        key: "getScene",
        value: function getScene() {
          return this.scene === undefined ? 0 : this.scene;
        }
      }]);

      return AdditionalScoreModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/mc-model.ts":
  /*!************************************!*\
    !*** ./src/app/models/mc-model.ts ***!
    \************************************/

  /*! exports provided: McModel */

  /***/
  function srcAppModelsMcModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "McModel", function () {
      return McModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _round_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./round-model */
    "./src/app/models/round-model.ts");

    var McModel = /*#__PURE__*/function () {
      function McModel() {
        _classCallCheck(this, McModel);

        this.easyMode = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.hardMode = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.thematic1 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](4);
        this.thematic2 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](4);
        this.characters = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](8);
        this.blood1 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.blood2 = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](6);
        this.deluxe = new _round_model__WEBPACK_IMPORTED_MODULE_1__["RoundModel"](11);
      }

      _createClass(McModel, [{
        key: "calculateTotal",
        value: function calculateTotal() {
          this.result = +(parseFloat(this.easyMode.getRoundScore().toString()) + parseFloat(this.hardMode.getRoundScore().toString()) + parseFloat(this.thematic1.getRoundScore().toString()) + parseFloat(this.thematic2.getRoundScore().toString()) + parseFloat(this.characters.getRoundScore().toString()) + parseFloat(this.blood1.getRoundScore().toString()) + parseFloat(this.blood2.getRoundScore().toString()) + parseFloat(this.deluxe.getRoundScore().toString()));
        }
      }]);

      return McModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/patron-model.ts":
  /*!****************************************!*\
    !*** ./src/app/models/patron-model.ts ***!
    \****************************************/

  /*! exports provided: PatronModel */

  /***/
  function srcAppModelsPatronModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "PatronModel", function () {
      return PatronModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");

    var PatronModel = /*#__PURE__*/function () {
      function PatronModel() {
        _classCallCheck(this, PatronModel);

        this.score = undefined;
        this.extra = false;
      }

      _createClass(PatronModel, [{
        key: "getTotalScore",
        value: function getTotalScore() {
          return +(this.extra ? parseFloat(this.score.toString()) + 1 : this.score);
        }
      }]);

      return PatronModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/round-model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/round-model.ts ***!
    \***************************************/

  /*! exports provided: RoundModel */

  /***/
  function srcAppModelsRoundModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "RoundModel", function () {
      return RoundModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _additional_score_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./additional-score-model */
    "./src/app/models/additional-score-model.ts");
    /* harmony import */


    var _patron_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ./patron-model */
    "./src/app/models/patron-model.ts");

    var RoundModel = /*#__PURE__*/function () {
      function RoundModel(patronNumber) {
        _classCallCheck(this, RoundModel);

        this.patrons = new Array(patronNumber);

        for (var i = 0; i < patronNumber; i++) {
          this.patrons[i] = new _patron_model__WEBPACK_IMPORTED_MODULE_2__["PatronModel"]();
        }

        this.extraScore = new _additional_score_model__WEBPACK_IMPORTED_MODULE_1__["AdditionalScoreModel"]();
      }

      _createClass(RoundModel, [{
        key: "getRoundScore",
        value: function getRoundScore() {
          var result = 0;
          this.patrons.forEach(function (patron) {
            if (patron.score !== undefined && patron.getTotalScore !== undefined) {
              result += parseFloat(patron.getTotalScore().toString());
            }
          });
          if (this.extraScore !== undefined && this.extraScore.getTotal !== undefined) result += +this.extraScore.getTotal();
          return result;
        }
      }]);

      return RoundModel;
    }();
    /***/

  },

  /***/
  "./src/app/models/score-model.ts":
  /*!***************************************!*\
    !*** ./src/app/models/score-model.ts ***!
    \***************************************/

  /*! exports provided: ScoreModel */

  /***/
  function srcAppModelsScoreModelTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ScoreModel", function () {
      return ScoreModel;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _mc_model__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! ./mc-model */
    "./src/app/models/mc-model.ts");

    var ScoreModel = function ScoreModel() {
      _classCallCheck(this, ScoreModel);

      this.Mc1 = new _mc_model__WEBPACK_IMPORTED_MODULE_1__["McModel"]();
      this.Mc2 = new _mc_model__WEBPACK_IMPORTED_MODULE_1__["McModel"]();
    };
    /***/

  },

  /***/
  "./src/app/services/SharingService.ts":
  /*!********************************************!*\
    !*** ./src/app/services/SharingService.ts ***!
    \********************************************/

  /*! exports provided: SharingService */

  /***/
  function srcAppServicesSharingServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SharingService", function () {
      return SharingService;
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


    var _models_score_model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! ../models/score-model */
    "./src/app/models/score-model.ts");

    var SharingService = /*#__PURE__*/function () {
      function SharingService() {
        _classCallCheck(this, SharingService);

        this.data = undefined;
      }

      _createClass(SharingService, [{
        key: "setData",
        value: function setData(data) {
          this.data = data;
        }
      }, {
        key: "getData",
        value: function getData() {
          if (this.data === undefined) {
            this.data = new _models_score_model__WEBPACK_IMPORTED_MODULE_2__["ScoreModel"]();
          }

          return this.data;
        }
      }]);

      return SharingService;
    }();

    SharingService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])()], SharingService);
    /***/
  },

  /***/
  "./src/app/services/event-emmiter.service.ts":
  /*!***************************************************!*\
    !*** ./src/app/services/event-emmiter.service.ts ***!
    \***************************************************/

  /*! exports provided: EventEmitterService */

  /***/
  function srcAppServicesEventEmmiterServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EventEmitterService", function () {
      return EventEmitterService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var EventEmitterService = /*#__PURE__*/function () {
      function EventEmitterService() {
        _classCallCheck(this, EventEmitterService);

        this.loadYTvideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopYTvideo = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.stopIntroAudio = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
        this.startIntroAudio = new _angular_core__WEBPACK_IMPORTED_MODULE_1__["EventEmitter"]();
      }

      _createClass(EventEmitterService, [{
        key: "loadVideo",
        value: function loadVideo(videoId) {
          this.loadYTvideo.emit(videoId);
        }
      }, {
        key: "stopVideo",
        value: function stopVideo() {
          this.stopYTvideo.emit();
        }
      }, {
        key: "stopAudio",
        value: function stopAudio() {
          this.stopIntroAudio.emit();
        }
      }, {
        key: "startIntro",
        value: function startIntro(path) {
          this.startIntroAudio.emit(path);
        }
      }]);

      return EventEmitterService;
    }();
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

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"])["catch"](function (err) {
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
    /*! C:\Users\Iago\Documents\fms-votes\src\main.ts */
    "./src/main.ts");
    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map