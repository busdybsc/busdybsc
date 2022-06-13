"use strict";
(() => {
var exports = {};
exports.id = 553;
exports.ids = [553];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 8798:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6176);

async function handler(req, res) {
  if (req.method != "POST") {
    res.status(200).json({
      success: false,
      message: "Method not allowed"
    });
    return false;
  }

  let inputs = req.body;
  let form_inputs = ["id", "hash"];

  for (let i = 0; i < form_inputs.length; i++) {
    let k = form_inputs[i];

    if (typeof inputs[k] == "undefined" || !inputs[k]) {
      inputs[k] = "";
    }
  }

  let post_data = {
    tx_hash: inputs["hash"],
    id: inputs["id"]
  };
  _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].post */ .Z.post("transaction/register", post_data).then(response => {
    if (response.error) {
      res.status(200).json({
        success: false,
        message: response.message
      });
      return false;
    }

    res.status(200).json({
      success: true,
      message: "success"
    });
    return false;
  }).catch(error => {
    res.status(200).json({
      success: false,
      message: error
    });
    return false;
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [176], () => (__webpack_exec__(8798)));
module.exports = __webpack_exports__;

})();