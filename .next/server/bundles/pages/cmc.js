module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 7);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/layout.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__navbar__ = __webpack_require__("./components/navbar.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head__ = __webpack_require__("next/head");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_next_head___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_next_head__);
var _jsxFileName = "/Users/AndreRuiz/Documents/tutorials-2018/tutorial-nextjs/components/layout.js";


 // Layout component - this is just to make all pages look the same

var Layout = function Layout(props) {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2_next_head___default.a, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("title", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, "5C Eats"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("link", {
    rel: "stylesheet",
    href: "https://bootswatch.com/4/lux/bootstrap.min.css",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__navbar__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, props.children));
};

/* harmony default export */ __webpack_exports__["a"] = (Layout);

/***/ }),

/***/ "./components/menus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("axios");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = "/Users/AndreRuiz/Documents/tutorials-2018/tutorial-nextjs/components/menus.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // parse date to macth with format of JSON from ASPC such as 'fri'

var options = {
  weekday: 'long'
};
var week_day = new Date().toLocaleString('en-US', options);
var week_day_parsed = week_day.toLocaleLowerCase();
week_day_parsed = week_day_parsed.slice(0, 3);

var Menus =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Menus, _React$Component);

  function Menus() {
    var _ref;

    var _temp, _this;

    _classCallCheck(this, Menus);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _possibleConstructorReturn(_this, (_temp = _this = _possibleConstructorReturn(this, (_ref = Menus.__proto__ || Object.getPrototypeOf(Menus)).call.apply(_ref, [this].concat(args))), Object.defineProperty(_assertThisInitialized(_this), "state", {
      configurable: true,
      enumerable: true,
      writable: true,
      value: {
        curTime: new Date().toLocaleString(),
        arrayMenus: [],
        fraryBreakfast: [],
        fraryLunch: [],
        fraryDinner: [],
        frankBreakfast: [],
        frankLunch: [],
        frankDinner: [],
        cmcBreakfast: [],
        cmcLunch: [],
        cmcDinner: [],
        pitzerBreakfast: [],
        pitzerLunch: [],
        pitzerDinner: [] //calls to fetch the data and create the clock like widget

      }
    }), _temp));
  }

  _createClass(Menus, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.setDateTime();
      this.renderData();
    } // API call

  }, {
    key: "renderData",
    value: function renderData() {
      var _this2 = this;

      __WEBPACK_IMPORTED_MODULE_1_axios___default.a.get('https://aspc.pomona.edu/api/menu/?auth_token=5a828762c6abffeee0b12e06cb93c210fda7e93f').then(function (response) {
        var menus_data = response.data;

        _this2.setState({
          arrayMenus: menus_data
        });

        var menus = _this2.state.arrayMenus;
        var arraySize = _this2.state.arrayMenus.length; //populate array for breakfast, lunch, etc for each dining hall
        // fri is just for testing purposes as I am doing this Sat and its empty lol

        for (var i = 0; i < arraySize; i++) {
          if (menus[i].dining_hall == 'frary' && menus[i].day == 'fri') {
            if (menus[i].meal == 'breakfast') {
              _this2.setState({
                fraryBreakfast: menus[i].food_items
              });
            } else if (menus[i].meal == 'lunch') {
              _this2.setState({
                fraryLunch: menus[i].food_items
              });
            } else if (menus[i].meal == 'dinner') {
              _this2.setState({
                fraryDinner: menus[i].food_items
              });
            }
          }

          if (menus[i].dining_hall == 'frank' && menus[i].day == 'fri') {
            if (menus[i].meal == 'breakfast') {
              _this2.setState({
                frankBreakfast: menus[i].food_items
              });
            } else if (menus[i].meal == 'lunch') {
              _this2.setState({
                frankLunch: menus[i].food_items
              });
            } else if (menus[i].meal == 'dinner') {
              _this2.setState({
                frankDinner: menus[i].food_items
              });
            }
          }

          if (menus[i].dining_hall == 'cmc' && menus[i].day == 'fri') {
            if (menus[i].meal == 'breakfast') {
              _this2.setState({
                cmcBreakfast: menus[i].food_items
              });
            } else if (menus[i].meal == 'lunch') {
              _this2.setState({
                cmcLunch: menus[i].food_items
              });
            } else if (menus[i].meal == 'dinner') {
              _this2.setState({
                cmcDinner: menus[i].food_items
              });
            }
          }

          if (menus[i].dining_hall == 'pitzer' && menus[i].day == 'fri') {
            if (menus[i].meal == 'breakfast') {
              _this2.setState({
                pitzerBreakfast: menus[i].food_items
              });
            } else if (menus[i].meal == 'lunch') {
              _this2.setState({
                pitzerLunch: menus[i].food_items
              });
            } else if (menus[i].meal == 'dinner') {
              _this2.setState({
                pitzerDinner: menus[i].food_items
              });
            }
          }
        }

        console.log(_this2.state.fraryBreakfast);
      }).catch(function (error) {
        console.error(error);
      });
    } // create time like widget 

  }, {
    key: "setDateTime",
    value: function setDateTime() {
      var _this3 = this;

      setInterval(function () {
        _this3.setState({
          curTime: new Date().toLocaleString()
        });
      }, 1000);
    } // render 

  }, {
    key: "render",
    value: function render() {
      var breakfast = '';
      var lunch = '';
      var dinner = ''; // return the breakfast array for now, I suspect we are going to have to 
      // use a conditional and check the props passed in by each page and see 
      //if what dining hall is and render accordingly 
      //i.e if(this.props.diningHall == 'frary'){
      //     render the frary elements 
      // }

      if (this.props.diningHall == 'frary') {
        breakfast = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 124
          }
        }, this.state.fraryBreakfast.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 125
            }
          }, menu);
        }));
        lunch = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 128
          }
        }, this.state.fraryLunch.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 129
            }
          }, menu);
        }));
        dinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 132
          }
        }, this.state.fraryDinner.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 133
            }
          }, menu);
        }));
      }

      if (this.props.diningHall == 'frank') {
        breakfast = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 140
          }
        }, this.state.frankBreakfast.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 141
            }
          }, menu);
        }));
        lunch = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 144
          }
        }, this.state.frankLunch.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 145
            }
          }, menu);
        }));
        dinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 148
          }
        }, this.state.frankDinner.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 149
            }
          }, menu);
        }));
      }

      if (this.props.diningHall == 'cmc') {
        breakfast = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 156
          }
        }, this.state.cmcBreakfast.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 157
            }
          }, menu);
        }));
        lunch = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 160
          }
        }, this.state.cmcLunch.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 161
            }
          }, menu);
        }));
        dinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 164
          }
        }, this.state.cmcDinner.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 165
            }
          }, menu);
        }));
      }

      if (this.props.diningHall == 'pitzer') {
        breakfast = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 172
          }
        }, this.state.pitzerBreakfast.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 173
            }
          }, menu);
        }));
        lunch = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 176
          }
        }, this.state.pitzerLunch.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 177
            }
          }, menu);
        }));
        dinner = __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
          className: "list-unstyled",
          __source: {
            fileName: _jsxFileName,
            lineNumber: 180
          }
        }, this.state.pitzerDinner.map(function (menu) {
          return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
            key: menu.id,
            __source: {
              fileName: _jsxFileName,
              lineNumber: 181
            }
          }, menu);
        }));
      }

      if (week_day_parsed == 'sat' || week_day_parsed == 'sun') {}

      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 191
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 192
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 193
        }
      }, "The day and current time is: ", this.state.curTime), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 194
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 195
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 196
        }
      }, "Breakfast"), breakfast, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 198
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 199
        }
      }, "Lunch"), lunch, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 201
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 202
        }
      }, "Dinner"), dinner);
    }
  }]);

  return Menus;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Menus);

/***/ }),

/***/ "./components/navbar.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link__ = __webpack_require__("next/link");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_next_link___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_next_link__);
var _jsxFileName = "/Users/AndreRuiz/Documents/tutorials-2018/tutorial-nextjs/components/navbar.js";

 // Navbar component - to make navbar consistent accross pages

var Navbar = function Navbar() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("nav", {
    className: "navbar navbar-expand-lg navbar-light bg-light",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "navbar-brand",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, ":)"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("button", {
    className: "navbar-toggler",
    type: "button",
    "data-toggle": "collapse",
    "data-target": "#navbarNav",
    "aria-controls": "navbarNav",
    "aria-expanded": "false",
    "aria-label": "Toggle navigation",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "navbar-toggler-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  })), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
    className: "collapse navbar-collapse",
    id: "navbarNav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
    className: "navbar-nav",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item active",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 14
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "Home", __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("span", {
    className: "sr-only",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 15
    }
  }, "(current)")))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 18
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/frary",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 19
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    }
  }, "Frary"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/frank",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    }
  }, "Frank"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 28
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/cmc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 30
    }
  }, "CMC"))), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
    className: "nav-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1_next_link___default.a, {
    href: "/pitzer",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("a", {
    className: "nav-link",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    }
  }, "Pitzer"))))));
};

/* harmony default export */ __webpack_exports__["a"] = (Navbar);

/***/ }),

/***/ "./pages/cmc.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("react");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_layout__ = __webpack_require__("./components/layout.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_menus__ = __webpack_require__("./components/menus.js");
var _jsxFileName = "/Users/AndreRuiz/Documents/tutorials-2018/tutorial-nextjs/pages/cmc.js";




var CMC = function CMC() {
  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_1__components_layout__["a" /* default */], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__components_menus__["a" /* default */], {
    diningHall: "cmc",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (CMC);

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("./pages/cmc.js");


/***/ }),

/***/ "axios":
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "next/head":
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ "next/link":
/***/ (function(module, exports) {

module.exports = require("next/link");

/***/ }),

/***/ "react":
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=cmc.js.map