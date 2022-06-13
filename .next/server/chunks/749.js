"use strict";
exports.id = 749;
exports.ids = [749];
exports.modules = {

/***/ 2087:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



const appendClasses = arr => {
  let classes = [];

  for (let i = 0; i < arr.length; i++) {
    if (styles[arr[i]] != undefined) {
      classes.push(styles[arr[i]]);
    } else {
      classes.push(arr[i]);
    }
  }

  return classes;
};

const Col = props => {
  let xs, sm, md, lg;
  let classesArr;
  let classes = props.customClass; // if(/\s/.test(props.customClass)) {
  // 	classesArr = props.customClass.split(' ');
  // 	classes = appendClasses(classesArr);
  // } else if(props.customClass) {
  // 	classesArr = props.customClass;
  // 	classes = appendClasses(classesArr);
  // }

  props.xs ? xs = 'col-xs-' + props.xs : props.xs;
  props.sm ? sm = 'col-sm-' + props.sm : props.sm;
  props.md ? md = 'col-md-' + props.md : props.md;
  props.lg ? lg = 'col-lg-' + props.lg : props.lg;
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()(xs, sm, md, lg, classes),
    style: props.style,
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Col);

/***/ }),

/***/ 9082:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);
 // const appendClasses = (arr) => {
//   let classes = [];
//   for (let i = 0; i < arr.length; i++) {
//     if (styles[arr[i]] != undefined) {
//       classes.push(styles[arr[i]]);
//       console.log(styles[arr[i]]);
//     } else {
//       classes.push(arr[i]);
//     }
//   }
//   return classes;
// };



const Container = props => {
  // TODO: FIX extra classes
  //if (props.class == undefined)
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: "grid",
    children: props.children
  }); //   let classesArr = props.class.split(" ");
  //   let classes = appendClasses(classesArr);
  //   return <div className={clsx("grid", classes)}>{props.children}</div>;
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Container);

/***/ }),

/***/ 6269:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8103);
/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(clsx__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(997);
/* harmony import */ var react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__);



function appendClasses(arr) {
  let classes = [];

  for (let i = 0; i < arr.length; i++) {
    classes.push(arr[i]);
  }

  return classes;
}

const Row = props => {
  let classesArr, classes;
  props.customClass != undefined ? classesArr = props.customClass.split(" ") : "";
  props.customClass != undefined ? classes = appendClasses(classesArr) : "";
  return /*#__PURE__*/react_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx("div", {
    className: clsx__WEBPACK_IMPORTED_MODULE_0___default()("row", classes),
    style: props.style,
    children: props.children
  });
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Row);

/***/ })

};
;