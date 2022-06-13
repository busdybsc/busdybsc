"use strict";
(() => {
var exports = {};
exports.id = 620;
exports.ids = [620];
exports.modules = {

/***/ 3582:
/***/ ((module) => {

module.exports = require("cors");

/***/ }),

/***/ 7458:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ handler)
/* harmony export */ });
/* harmony import */ var _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6176);

function handler(req, res) {
  const {
    query: {
      from,
      to
    },
    method
  } = req;
  _lib_apiHelper__WEBPACK_IMPORTED_MODULE_0__/* ["default"].get */ .Z.get("rate/" + from + "/" + to).then(response => {
    console.log("response", response);

    if (!response.error && response.rate) {
      res.status(200).json(response.rate);
      return;
    }

    res.status(406).json("error");
    return false;
  }).catch(error => {
    console.log("error", error);
    res.status(406).json(error);
  });
}

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../../webpack-api-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = __webpack_require__.X(0, [176], () => (__webpack_exec__(7458)));
module.exports = __webpack_exports__;

})();