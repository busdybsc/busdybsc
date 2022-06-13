"use strict";
(() => {
var exports = {};
exports.id = 16;
exports.ids = [16];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 4300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6176);
/* harmony import */ var _lib_networkHelper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(2);


function handler(req, res) {
  _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("networks").then(response => {
    console.log("response:", response);
    let available_networks = [];

    for (let i = 0; i < response.content.length; i++) {
      let d = response.content[i];
      let network_data = _lib_networkHelper__WEBPACK_IMPORTED_MODULE_1__/* ["default"].getNetworkData */ .Z.getNetworkData(d.symbol);

      if (network_data) {
        available_networks.push(network_data);
      }
    }

    if (available_networks.length) {
      res.status(200).json(available_networks);
      return false;
    }

    res.status(200).json([]);
    return false;
  }).catch(error => {
    console.log("error:", error);
    res.status(406).json(error);
  });
  return false;
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [176,2], () => (__webpack_exec__(4300)));
module.exports = __webpack_exports__;

})();