(global["webpackJsonp"] = global["webpackJsonp"] || []).push([["pages/index/index"],{

/***/ 146:
/*!*************************************************************************!*\
  !*** D:/code/uniapp/nx-coupon/main.js?{"page":"pages%2Findex%2Findex"} ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(createPage) {__webpack_require__(/*! uni-pages */ 8);
var _vue = _interopRequireDefault(__webpack_require__(/*! vue */ 3));
var _index = _interopRequireDefault(__webpack_require__(/*! ./pages/index/index.vue */ 147));function _interopRequireDefault(obj) {return obj && obj.__esModule ? obj : { default: obj };}wx.__webpack_require_UNI_MP_PLUGIN__ = __webpack_require__;
createPage(_index.default);
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["createPage"]))

/***/ }),

/***/ 147:
/*!******************************************************!*\
  !*** D:/code/uniapp/nx-coupon/pages/index/index.vue ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./index.vue?vue&type=template&id=57280228&scoped=true& */ 148);
/* harmony import */ var _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index.vue?vue&type=script&lang=js& */ 150);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/runtime/componentNormalizer.js */ 24);

var renderjs




/* normalize component */

var component = Object(_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "57280228",
  null,
  false,
  _index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"],
  renderjs
)

component.options.__file = "pages/index/index.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 148:
/*!*************************************************************************************************!*\
  !*** D:/code/uniapp/nx-coupon/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \*************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=template&id=57280228&scoped=true& */ 149);
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["recyclableRender"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "components", function() { return _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_16_0_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_template_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_uni_app_loader_page_meta_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_template_id_57280228_scoped_true___WEBPACK_IMPORTED_MODULE_0__["components"]; });



/***/ }),

/***/ 149:
/*!*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--16-0!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/template.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-uni-app-loader/page-meta.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/uniapp/nx-coupon/pages/index/index.vue?vue&type=template&id=57280228&scoped=true& ***!
  \*************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns, recyclableRender, components */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "recyclableRender", function() { return recyclableRender; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "components", function() { return components; });
var components
try {
  components = {
    nxCanUseCoupon: function() {
      return __webpack_require__.e(/*! import() | components/nx-can-use-coupon/nx-can-use-coupon */ "components/nx-can-use-coupon/nx-can-use-coupon").then(__webpack_require__.bind(null, /*! @/components/nx-can-use-coupon/nx-can-use-coupon.vue */ 205))
    }
  }
} catch (e) {
  if (
    e.message.indexOf("Cannot find module") !== -1 &&
    e.message.indexOf(".vue") !== -1
  ) {
    console.error(e.message)
    console.error("1. ????????????????????????????????????")
    console.error(
      "2. ???????????????????????? easycom ??????????????????https://uniapp.dcloud.net.cn/collocation/pages?id=easycom"
    )
    console.error(
      "3. ?????????????????? easycom ????????????????????????????????? components ??????????????????"
    )
  } else {
    throw e
  }
}
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
}
var recyclableRender = false
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ 150:
/*!*******************************************************************************!*\
  !*** D:/code/uniapp/nx-coupon/pages/index/index.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/babel-loader/lib!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!../../../../../codeTool/HBuilderX.3.4.2.20220310-alpha/HBuilderX/plugins/uniapp-cli/node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!./index.vue?vue&type=script&lang=js& */ 151);
/* harmony import */ var _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_babel_loader_lib_index_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_webpack_preprocess_loader_index_js_ref_12_1_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_script_js_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_vue_cli_plugin_uni_packages_vue_loader_lib_index_js_vue_loader_options_codeTool_HBuilderX_3_4_2_20220310_alpha_HBuilderX_plugins_uniapp_cli_node_modules_dcloudio_webpack_uni_mp_loader_lib_style_js_index_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 151:
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/webpack-preprocess-loader??ref--12-1!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/script.js!./node_modules/@dcloudio/vue-cli-plugin-uni/packages/vue-loader/lib??vue-loader-options!./node_modules/@dcloudio/webpack-uni-mp-loader/lib/style.js!D:/code/uniapp/nx-coupon/pages/index/index.vue?vue&type=script&lang=js& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(uni) {Object.defineProperty(exports, "__esModule", { value: true });exports.default = void 0;function ownKeys(object, enumerableOnly) {var keys = Object.keys(object);if (Object.getOwnPropertySymbols) {var symbols = Object.getOwnPropertySymbols(object);if (enumerableOnly) symbols = symbols.filter(function (sym) {return Object.getOwnPropertyDescriptor(object, sym).enumerable;});keys.push.apply(keys, symbols);}return keys;}function _objectSpread(target) {for (var i = 1; i < arguments.length; i++) {var source = arguments[i] != null ? arguments[i] : {};if (i % 2) {ownKeys(Object(source), true).forEach(function (key) {_defineProperty(target, key, source[key]);});} else if (Object.getOwnPropertyDescriptors) {Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));} else {ownKeys(Object(source)).forEach(function (key) {Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));});}}return target;}function _defineProperty(obj, key, value) {if (key in obj) {Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true });} else {obj[key] = value;}return obj;} //
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var _default =
{
  data: function data() {
    return {
      //???????????????????????????
      couponDiscounts: '',
      // ?????????
      couponData: {
        useList: [
          // {
          // 	couponName: "1118-2",
          // 	couponSn: "Y1483348124452782092",
          // 	discountsMaxAmount: "50.00",
          // 	discountsMinAmount: "1500.00",
          // 	exchangeEndDate: "2022-01-21 15:58:47",
          // 	exchangeStartDate: "2022-01-18 15:58:47",
          // 	id: "1483348124657315841",
          // 	isAdditivity: 1,
          // 	source: 0,
          // 	type: 0,
          // },
          // {
          // 	couponName: "1118-3",
          // 	couponSn: "Y1483348124452782092",
          // 	discountsMaxAmount: "100.00",
          // 	discountsMinAmount: "1500.00",
          // 	exchangeEndDate: "2022-01-21 15:58:47",
          // 	exchangeStartDate: "2022-01-18 15:58:47",
          // 	id: "1483348124657315841",
          // 	isAdditivity: 0,
          // 	source: 0,
          // 	type: 0,
          // }, {
          // 	couponName: "1118-2",
          // 	couponSn: "Y1483348124452782092",
          // 	discountsMaxAmount: "50.00",
          // 	discountsMinAmount: "1500.00",
          // 	exchangeEndDate: "2022-01-21 15:58:47",
          // 	exchangeStartDate: "2022-01-18 15:58:47",
          // 	id: "1483348124657315841",
          // 	isAdditivity: 1,
          // 	source: 0,
          // 	type: 0,
          // },
          // {
          // 	couponName: "1118-3",
          // 	couponSn: "Y1483348124452782092",
          // 	discountsMaxAmount: "100.00",
          // 	discountsMinAmount: "1500.00",
          // 	exchangeEndDate: "2022-01-21 15:58:47",
          // 	exchangeStartDate: "2022-01-18 15:58:47",
          // 	id: "1483348124657315841",
          // 	isAdditivity: 1,
          // 	source: 0,
          // 	type: 0,
          // }
        ],
        stopList: [
          // {
          // 	couponName: '1118-4',
          // 	couponSn: 'Y1483348124452782092',
          // 	discountsMaxAmount: '50.00',
          // 	discountsMinAmount: '1500.00',
          // 	exchangeEndDate: '2022-01-21 15:58:47',
          // 	exchangeStartDate: '2022-01-18 15:58:47',
          // 	id: '1483348124657315841',
          // 	isAdditivity: 1,
          // 	source: 0,
          // 	type: 0
          // },
          // {
          // 	couponName: '1118-',
          // 	couponSn: 'Y1483348124452782092',
          // 	discountsMaxAmount: '100.00',
          // 	discountsMinAmount: '1500.00',
          // 	exchangeEndDate: '2022-01-21 15:58:47',
          // 	exchangeStartDate: '2022-01-18 15:58:47',
          // 	id: '1483348124657315841',
          // 	isAdditivity: 1,
          // 	source: 0,
          // 	type: 0
          // }
        ] } };



  },
  onShow: function onShow() {
    var that = this;
    this.couponData.stopList = [];
    this.couponData.useList = [
    {
      couponName: "1118-2",
      couponSn: "Y1483348124452782092",
      discountsMaxAmount: "50.00",
      discountsMinAmount: "1500.00",
      exchangeEndDate: "2022-01-21 15:58:47",
      exchangeStartDate: "2022-01-18 15:58:47",
      id: "1483348124657315841",
      isAdditivity: 1,
      source: 0,
      type: 0 },

    {
      couponName: "1118-3",
      couponSn: "Y1483348124452782092",
      discountsMaxAmount: "100.00",
      discountsMinAmount: "1500.00",
      exchangeEndDate: "2022-01-21 15:58:47",
      exchangeStartDate: "2022-01-18 15:58:47",
      id: "1483348124657315841",
      isAdditivity: 0,
      source: 0,
      type: 0 },
    {
      couponName: "1118-2",
      couponSn: "Y1483348124452782092",
      discountsMaxAmount: "50.00",
      discountsMinAmount: "1500.00",
      exchangeEndDate: "2022-01-21 15:58:47",
      exchangeStartDate: "2022-01-18 15:58:47",
      id: "1483348124657315841",
      isAdditivity: 1,
      source: 0,
      type: 0 },

    {
      couponName: "1118-3",
      couponSn: "Y1483348124452782092",
      discountsMaxAmount: "100.00",
      discountsMinAmount: "1500.00",
      exchangeEndDate: "2022-01-21 15:58:47",
      exchangeStartDate: "2022-01-18 15:58:47",
      id: "1483348124657315841",
      isAdditivity: 1,
      source: 0,
      type: 0 }];


    this.couponData.stopList = [
    {
      couponName: '1118-4',
      couponSn: 'Y1483348124452782092',
      discountsMaxAmount: '50.00',
      discountsMinAmount: '1500.00',
      exchangeEndDate: '2022-01-21 15:58:47',
      exchangeStartDate: '2022-01-18 15:58:47',
      id: '1483348124657315841',
      isAdditivity: 1,
      source: 0,
      type: 0 },

    {
      couponName: '1118-',
      couponSn: 'Y1483348124452782092',
      discountsMaxAmount: '100.00',
      discountsMinAmount: '1500.00',
      exchangeEndDate: '2022-01-21 15:58:47',
      exchangeStartDate: '2022-01-18 15:58:47',
      id: '1483348124657315841',
      isAdditivity: 1,
      source: 0,
      type: 0 }];


    // ????????????checkbox????????????
    this.couponData.useList = this.couponData.useList.map(function (item) {
      var obj = _objectSpread(_objectSpread({},
      item), {}, {
        checked: false, // ??????
        topRightTip: false, //???????????????
        bottomTip: false // ????????????
      });
      return obj;
    });
    console.log('this.couponData.useList', this.couponData.useList);
    if (this.$refs.picCoupon) {
      this.$refs.picCoupon.setUseData(that.couponData.useList);
      this.$refs.picCoupon.setStopList(that.couponData.stopList);
    }

  },
  onLoad: function onLoad(parms) {
    // ?????????????????????
    this.$bus.$on('couponChecked', this.couponChecked);
  },
  onUnload: function onUnload() {
    // ??????????????????
    uni.$off('couponChecked');
  },
  methods: {
    setCheckUseList: function setCheckUseList(parameIndex, setBool, isAdd) {
      // isAdd??????????????? 0 ???????????? 1 ????????? 2 ?????? ??????????????????
      var that = this;
      var tempArray = [];
      that.couponData.useList.forEach(function (item, index) {
        var obj = item;
        var isAddBool = true;
        if (isAdd == 0) {
          isAddBool = item.isAdditivity == 0 ? true : false;
        } else if (isAdd == 1) {
          isAddBool = item.isAdditivity == 1;
        }
        if (parameIndex != index && isAddBool) {
          obj.checked = setBool;
        }

        tempArray.push(obj);
      });
      that.couponData.useList = tempArray;
      if (this.$refs.picCoupon) {
        this.$refs.picCoupon.setUseData(tempArray);
      }
    },
    setDefaultUseList: function setDefaultUseList(parameIndex, topOrBot, setBool, isAdd) {
      // index, -1???????????????????????????topOrBoT???0???top???1:bot 2 ???????????? ?????????????????????????????????setBool????????????true??????false,isAdd??????????????? 0 ???????????? 1 ????????? 2 ??????
      var that = this;
      // console.log('parameIndex', parameIndex);
      // console.log('topOrBot', topOrBot);
      // console.log('setBool', setBool);
      // console.log('isAdd', isAdd);
      var tempArray = [];
      that.couponData.useList.forEach(function (item, index) {
        var obj = item;
        var isAddBool = true;
        if (isAdd == 0) {
          isAddBool = item.isAdditivity == 0 ? true : false;
        } else if (isAdd == 1) {
          isAddBool = item.isAdditivity == 1;
        }
        if (parameIndex != index && isAddBool) {
          if (topOrBot == 0) {
            obj.topRightTip = setBool;
          } else if (topOrBot == 1) {
            obj.bottomTip = setBool;
          } else {
            obj.topRightTip = setBool;
            obj.bottomTip = setBool;
          }
        }

        tempArray.push(obj);
      });
      that.couponData.useList = tempArray;
      if (this.$refs.picCoupon) {
        this.$refs.picCoupon.setUseData(tempArray);
      }
    },
    couponChecked: function couponChecked(index) {
      var that = this;
      console.log('index', index);
      console.log(
      'that.couponData.useList[index]',
      that.couponData.useList[index]);


      that.couponData.useList[index].checked = !that.couponData.useList[index].checked;
      if (that.couponData.useList[index].checked) {
        // ?????????
        console.log('?????????');

        // ????????????????????????????????????
        that.couponData.useList[index].bottomTip = false;
        this.$refs.picCoupon.setUseData(that.couponData.useList);
        var isAdditivity = that.couponData.useList[index].isAdditivity; // ????????????????????????
        if (isAdditivity) {
          // ?????????
          console.log('?????????');
          // ????????????????????????????????????????????????
          that.setCheckUseList(-1, false, 0);
          // ????????????????????????????????????????????????????????????
          that.setDefaultUseList(-1, 0, true, 1);
          // ????????????????????????????????????????????????????????????
          that.setDefaultUseList(-1, 1, true, 0);
          // ?????????????????????????????????????????????????????????
          that.setDefaultUseList(-1, 1, false, 1);
        } else {
          // ????????????
          console.log('????????????');
          // ????????????????????????????????????
          console.log('????????????????????????????????????');
          that.setCheckUseList(index, false, 2);
          // ????????????????????????????????????????????????????????????
          that.setDefaultUseList(-1, 0, false, 1);
          // ????????????????????????????????????????????????
          that.setDefaultUseList(index, 1, true, 2);
        }
      } else {
        // ????????????
        console.log('????????????');
        var _isAdditivity = that.couponData.useList[index].isAdditivity; // ????????????????????????
        if (_isAdditivity) {
          // ?????????
          var checkList = that.couponData.useList.map(
          function (item) {return item.checked;});
          // ??????????????????????????????
          if (checkList.length == 0) {
            // ?????????????????????????????????
            //??????????????????
            that.setDefaultUseList(-1, 2, false, 2);
          }
        } else {
          // ????????????
          //??????????????????
          that.setDefaultUseList(-1, 2, false, 2);
        }
      }
    } } };exports.default = _default;
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./node_modules/@dcloudio/uni-mp-weixin/dist/index.js */ 1)["default"]))

/***/ })

},[[146,"common/runtime","common/vendor"]]]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map