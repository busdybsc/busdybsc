"use strict";
exports.id = 176;
exports.ids = [176];
exports.modules = {

/***/ 6176:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(3582);
/* harmony import */ var cors__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(cors__WEBPACK_IMPORTED_MODULE_0__);

const API_HELPER = {
  api_url: process.env.API_URL,
  headers: {
    "Content-Type": "application/json",
    Authorization: "Bearer " + process.env.API_KEY
  },
  runMiddleware: (req, res) => {
    const fn = cors__WEBPACK_IMPORTED_MODULE_0___default()({
      methods: ["GET", "HEAD"]
    });
    return new Promise((resolve, reject) => {
      fn(req, res, result => {
        if (result instanceof Error) {
          return reject(result);
        }

        return resolve(result);
      });
    });
  },
  get: url => {
    return new Promise((resolve, reject) => {
      fetch(API_HELPER.api_url + url, {
        method: "get",
        headers: API_HELPER.headers
      }).then(response => {
        response.json().then(content => {
          if (content.error) {
            return reject(content.message);
          }

          return resolve(content);
        }).catch(() => {
          return reject(false);
        });
      }).catch(error => {
        return resolve(error);
      });
    });
  },
  post: (url, data) => {
    return new Promise((resolve, reject) => {
      fetch(API_HELPER.api_url + url, {
        method: "post",
        headers: API_HELPER.headers,
        body: JSON.stringify(data)
      }).then(response => {
        response.json().then(content => {
          if (content.error) {
            return reject(content.message);
          }

          return resolve(content);
        }).catch(() => {
          return reject(false);
        });
      }).catch(error => {
        return resolve(error);
      });
    });
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (API_HELPER);

/***/ })

};
;