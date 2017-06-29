
          window.__NEXT_REGISTER_PAGE('/post', function() {
            var comp = module.exports =
webpackJsonp([6],{

/***/ 544:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _link = __webpack_require__(540);

var _link2 = _interopRequireDefault(_link);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = "/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/Header.js";


var linkStyle = {
  marginRight: 15
};

var Header = function Header() {
  return _react2.default.createElement("div", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  }, _react2.default.createElement(_link2.default, { href: "/", __source: {
      fileName: _jsxFileName,
      lineNumber: 9
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, "Home")), _react2.default.createElement(_link2.default, { href: "/about", __source: {
      fileName: _jsxFileName,
      lineNumber: 12
    }
  }, _react2.default.createElement("a", { style: linkStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 13
    }
  }, "About")));
};

exports.default = Header;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/Header.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/Header.js"); } } })();

/***/ }),

/***/ 545:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _Header = __webpack_require__(544);

var _Header2 = _interopRequireDefault(_Header);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/MyLayout.js';


var layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
};

var Layout = function Layout(props) {
  return _react2.default.createElement('div', { style: layoutStyle, __source: {
      fileName: _jsxFileName,
      lineNumber: 10
    }
  }, _react2.default.createElement(_Header2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11
    }
  }), props.children);
};

exports.default = Layout;

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/MyLayout.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/BAOSS/Dropbox/Programming/projects/hello-next/components/MyLayout.js"); } } })();

/***/ }),

/***/ 553:
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__resourceQuery) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _style = __webpack_require__(546);

var _style2 = _interopRequireDefault(_style);

var _react = __webpack_require__(12);

var _react2 = _interopRequireDefault(_react);

var _MyLayout = __webpack_require__(545);

var _MyLayout2 = _interopRequireDefault(_MyLayout);

var _reactMarkdown = __webpack_require__(572);

var _reactMarkdown2 = _interopRequireDefault(_reactMarkdown);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _jsxFileName = '/Users/BAOSS/Dropbox/Programming/projects/hello-next/pages/post.js?entry';

exports.default = function (props) {
  return _react2.default.createElement(_MyLayout2.default, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    }
  }, _react2.default.createElement('h1', {
    'data-jsx': 1238997497,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    }
  }, props.url.query.title), _react2.default.createElement('div', { className: 'markdown', 'data-jsx': 1238997497,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    }
  }, _react2.default.createElement(_reactMarkdown2.default, { source: '\nThis is our blog post.\nYes. We can have a [link](/link).\nAnd we can have a title as well.\n\n### This is a title\n\nAnd here\'s the content.\n     ', __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    }
  })), _react2.default.createElement(_style2.default, {
    styleId: 1238997497,
    css: '.markdown{font-family:\'Arial\'}.markdown a{-webkit-text-decoration:none;text-decoration:none;color:blue}.markdown a:hover{opacity:0.6}.markdown h3{margin:0;padding:0;-webkit-text-transform:uppercase;text-transform:uppercase}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInBhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBaUJzQixBQUc0QixBQUVDLEFBRVQsQUFFSCxVQUFrQixHQUZULFFBSlEsQUFNa0MsK0JBSnBCLFlBQU0saUJBSW9CIiwiZmlsZSI6InBhZ2VzL3Bvc3QuanM/ZW50cnkiLCJzb3VyY2VSb290IjoiL1VzZXJzL0JBT1NTL0Ryb3Bib3gvUHJvZ3JhbW1pbmcvcHJvamVjdHMvaGVsbG8tbmV4dCIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICA8TWFya2Rvd24gc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgYH0vPlxuICAgPC9kaXY+XG4gICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAubWFya2Rvd24ge1xuICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICB9XG5cbiAgICAgLm1hcmtkb3duIGEge1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgfVxuXG4gICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgIH1cblxuICAgICAubWFya2Rvd24gaDMge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcbiJdfQ== */\n/*@ sourceURL=pages/post.js?entry */'
  }));
};

 ;(function register() { /* react-hot-loader/webpack */ if (true) { if (typeof __REACT_HOT_LOADER__ === 'undefined') { return; } if (typeof module.exports === 'function') { __REACT_HOT_LOADER__.register(module.exports, 'module.exports', "/Users/BAOSS/Dropbox/Programming/projects/hello-next/pages/post.js"); return; } for (var key in module.exports) { if (!Object.prototype.hasOwnProperty.call(module.exports, key)) { continue; } var namedExport = void 0; try { namedExport = module.exports[key]; } catch (err) { continue; } __REACT_HOT_LOADER__.register(namedExport, key, "/Users/BAOSS/Dropbox/Programming/projects/hello-next/pages/post.js"); } } })();
    (function (Component, route) {
      if (false) return
      if (false) return

      var qs = __webpack_require__(85)
      var params = qs.parse(__resourceQuery.slice(1))
      if (params.entry == null) return

      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(module.exports.default || module.exports, "/post")
  
/* WEBPACK VAR INJECTION */}.call(exports, "?entry"))

/***/ }),

/***/ 575:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(553);


/***/ })

},[575]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYnVuZGxlcy9wYWdlcy9wb3N0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vLy4vY29tcG9uZW50cy9IZWFkZXIuanM/NzJhZjMzZSIsIndlYnBhY2s6Ly8vLi9jb21wb25lbnRzL015TGF5b3V0LmpzPzcyYWYzM2UiLCJ3ZWJwYWNrOi8vLy4vcGFnZXMvcG9zdC5qcz83MmFmMzNlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBMaW5rIGZyb20gJ25leHQvbGluaydcblxuY29uc3QgbGlua1N0eWxlID0ge1xuICBtYXJnaW5SaWdodDogMTVcbn1cblxuY29uc3QgSGVhZGVyID0gKCkgPT4gKFxuICAgIDxkaXY+XG4gICAgICAgIDxMaW5rIGhyZWY9XCIvXCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+SG9tZTwvYT5cbiAgICAgICAgPC9MaW5rPlxuICAgICAgICA8TGluayBocmVmPVwiL2Fib3V0XCI+XG4gICAgICAgICAgPGEgc3R5bGU9e2xpbmtTdHlsZX0+QWJvdXQ8L2E+XG4gICAgICAgIDwvTGluaz5cbiAgICA8L2Rpdj5cbilcblxuZXhwb3J0IGRlZmF1bHQgSGVhZGVyXG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gLi9jb21wb25lbnRzL0hlYWRlci5qcyIsImltcG9ydCBIZWFkZXIgZnJvbSAnLi9IZWFkZXInXG5cbmNvbnN0IGxheW91dFN0eWxlID0ge1xuICBtYXJnaW46IDIwLFxuICBwYWRkaW5nOiAyMCxcbiAgYm9yZGVyOiAnMXB4IHNvbGlkICNEREQnXG59XG5cbmNvbnN0IExheW91dCA9IChwcm9wcykgPT4gKFxuICA8ZGl2IHN0eWxlPXtsYXlvdXRTdHlsZX0+XG4gICAgPEhlYWRlciAvPlxuICAgIHtwcm9wcy5jaGlsZHJlbn1cbiAgPC9kaXY+XG4pXG5cbmV4cG9ydCBkZWZhdWx0IExheW91dFxuXG5cblxuLy8gV0VCUEFDSyBGT09URVIgLy9cbi8vIC4vY29tcG9uZW50cy9NeUxheW91dC5qcyIsImltcG9ydCBMYXlvdXQgZnJvbSAnLi4vY29tcG9uZW50cy9NeUxheW91dC5qcydcbmltcG9ydCBNYXJrZG93biBmcm9tICdyZWFjdC1tYXJrZG93bidcblxuZXhwb3J0IGRlZmF1bHQgKHByb3BzKSA9PiAoXG4gIDxMYXlvdXQ+XG4gICA8aDE+e3Byb3BzLnVybC5xdWVyeS50aXRsZX08L2gxPlxuICAgPGRpdiBjbGFzc05hbWU9XCJtYXJrZG93blwiPlxuICAgICA8TWFya2Rvd24gc291cmNlPXtgXG5UaGlzIGlzIG91ciBibG9nIHBvc3QuXG5ZZXMuIFdlIGNhbiBoYXZlIGEgW2xpbmtdKC9saW5rKS5cbkFuZCB3ZSBjYW4gaGF2ZSBhIHRpdGxlIGFzIHdlbGwuXG5cbiMjIyBUaGlzIGlzIGEgdGl0bGVcblxuQW5kIGhlcmUncyB0aGUgY29udGVudC5cbiAgICAgYH0vPlxuICAgPC9kaXY+XG4gICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAubWFya2Rvd24ge1xuICAgICAgIGZvbnQtZmFtaWx5OiAnQXJpYWwnO1xuICAgICB9XG5cbiAgICAgLm1hcmtkb3duIGEge1xuICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICBjb2xvcjogYmx1ZTtcbiAgICAgfVxuXG4gICAgIC5tYXJrZG93biBhOmhvdmVyIHtcbiAgICAgICBvcGFjaXR5OiAwLjY7XG4gICAgIH1cblxuICAgICAubWFya2Rvd24gaDMge1xuICAgICAgIG1hcmdpbjogMDtcbiAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgIHRleHQtdHJhbnNmb3JtOiB1cHBlcmNhc2U7XG4gICAgIH1cbiAgYH08L3N0eWxlPlxuICA8L0xheW91dD5cbilcblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyAuL3BhZ2VzL3Bvc3QuanM/ZW50cnkiXSwibWFwcGluZ3MiOiI7QTs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7Ozs7Ozs7O0FBQ0E7QUFDQTtBQUFBO0FBQ0E7QUFFQTtBQUNBOztBQUFBO0FBQ0E7QUFEQTtBQUFBO0FBQ0E7QUFDQTtBQURBO0FBQ0E7QUFBQTtBQUFBO0FBQUE7QUFFQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFLQTtBQUNBO0FBREE7QUFDQTs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2xCQTtBQUNBOzs7Ozs7OztBQUNBO0FBRUE7QUFDQTtBQUFBO0FBRkE7QUFDQTtBQUlBO0FBQ0E7QUFBQTtBQUNBO0FBREE7QUFBQTs7QUFDQTtBQUNBO0FBREE7QUFBQTtBQUtBO0FBQ0E7QUFEQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2hCQTtBQUNBOzs7QUFFQTtBQUNBOzs7Ozs7O0FBREE7QUFDQTs7QUFBQTtBQUNBO0FBREE7QUFBQTtBQUNBOztBQUFBO0FBQUE7QUFBQTtBQUFBOztBQUNBO0FBQ0E7QUFEQTtBQUNBO0FBQUE7QUFBQTtBQUFBOztBQUhBO0FBQUE7QUFBQTtBQURBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QSIsInNvdXJjZVJvb3QiOiIifQ==
            return { page: comp.default }
          })
        