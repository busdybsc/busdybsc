"use strict";
exports.id = 2;
exports.ids = [2];
exports.modules = {

/***/ 2:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const NETWORK_HELPER = {
  networks: {
    avax: {
      title: "Avalanche",
      image: "/images/avalanche.svg",
      value: "avax",
      currency: "AVAX",
      id: 43114
    },
    eth: {
      title: "Ethereum",
      image: "/images/eth.svg",
      value: "eth",
      currency: "ETH",
      id: 1
    },
    pol: {
      title: "Polygon",
      image: "/images/polygon.svg",
      value: "pol",
      currency: "MATIC",
      id: 137
    },
    bsc: {
      title: "BSC",
      image: "/images/bnb.svg",
      value: "bsc",
      currency: "BNB",
      id: 56
    },
    bsc_test: {
      title: "BSC - Tesztnet",
      image: "/images/bnb.svg",
      value: "bsc",
      currency: "BNB",
      id: 97
    },
    cro: {
      title: "Cronos",
      image: "/images/cro.svg",
      value: "cro",
      currency: "CRO",
      id: 25
    },
    ftm: {
      title: "Fantom",
      image: "/images/ftm.svg",
      value: "ftm",
      currency: "FTM",
      id: 250
    }
  },
  getNetworkData: key => {
    if (typeof NETWORK_HELPER.networks[key] != "undefined") {
      return NETWORK_HELPER.networks[key];
    }

    return false;
  },
  getNetworkByChain: id => {
    for (let i = 0; i < Object.keys(NETWORK_HELPER.networks).length; i++) {
      let o = Object.keys(NETWORK_HELPER.networks)[i];
      o = NETWORK_HELPER.networks[o];

      if (parseInt(o.id) == parseInt(id)) {
        return o;
      }
    }

    return false;
  }
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (NETWORK_HELPER);

/***/ })

};
;