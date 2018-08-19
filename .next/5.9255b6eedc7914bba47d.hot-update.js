webpackHotUpdate(5,{

/***/ "./components/menus.js":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__("./node_modules/react/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios__ = __webpack_require__("./node_modules/axios/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_axios___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_axios__);
var _jsxFileName = "/Users/AndreRuiz/Documents/tutorials-2018/tutorial-nextjs/components/menus.js";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

 // parse date to macth with format of JSON from ASPC such as 'fri

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
        fraryDinner: [] //calls to fetch the data and create the clock like widget

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

        for (var i = 0; i < arraySize; i++) {
          if (menus[i].dining_hall == 'frary' && menus[i].day == 'fri') {
            if (menus[i].meal == 'breakfast') {
              _this2.setState({
                fraryBreakfast: menus[i].food_items
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
      // return the breakfast array for now, I suspect we are going to have to 
      // use a conditional and check the props passed in by each page and see 
      //if what dining hall it is and render accordingly 
      //i.e if(this.props.diningHall == 'frary'){
      //     render the frary elements 
      // }
      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("div", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 72
        }
      }, __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 73
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h6", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 74
        }
      }, "The current time and day is: ", this.state.curTime), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 75
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("br", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 76
        }
      }), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("h3", {
        __source: {
          fileName: _jsxFileName,
          lineNumber: 77
        }
      }, "Breakfast"), __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("ul", {
        className: "list-group",
        __source: {
          fileName: _jsxFileName,
          lineNumber: 78
        }
      }, this.state.fraryBreakfast.map(function (menu) {
        return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement("li", {
          __source: {
            fileName: _jsxFileName,
            lineNumber: 79
          }
        }, menu);
      })));
    }
  }]);

  return Menus;
}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);

/* harmony default export */ __webpack_exports__["a"] = (Menus);

/***/ })

})
//# sourceMappingURL=5.9255b6eedc7914bba47d.hot-update.js.map