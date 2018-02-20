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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
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
/******/ 	return __webpack_require__(__webpack_require__.s = 14);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("react-router-dom");

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.removeUser = exports.removeUserProd = exports.currentUser = exports.userProducts = exports.singleProduct = exports.allProducts = exports.addProduct = undefined;
exports.getName = getName;
exports.newComp = newComp;

var _constants = __webpack_require__(3);

var _axios = __webpack_require__(22);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function getName(id) {
    return async function (dispatch, getState) {
        var _ref = await getUserFromAPI(id),
            data = _ref.data;

        dispatch({ type: _constants.UPDATE_NAME, payload: data });
    };
}

function newComp(newComp) {
    return async function (dispatch, getState) {
        dispatch({ type: _constants.NEWCOMP, payload: newComp });
    };
}

function getUserFromAPI(id) {
    return _axios2.default.get('https://jsonplaceholder.typicode.com/users/' + id);
}

var nextProdId = 0;
var addProduct = exports.addProduct = function addProduct(product) {
    return {
        type: _constants.ADD_NEW_PRODUCT,
        id: nextProdId++,
        product: product
    };
};

var allProducts = exports.allProducts = function allProducts(products, count) {
    return {
        type: _constants.ALL_PRODUCTS,
        products: products,
        count: count
    };
};

var singleProduct = exports.singleProduct = function singleProduct(product) {
    return {
        type: _constants.SINGLE_PRODUCT,
        product: product
    };
};

var userProducts = exports.userProducts = function userProducts(_userProducts) {
    return {
        type: _constants.USER_PRODUCTS,
        userProducts: _userProducts
    };
};

var currentUser = exports.currentUser = function currentUser(_currentUser) {
    return {
        type: _constants.CURRENT_USER,
        currentUser: _currentUser
    };
};

var removeUserProd = exports.removeUserProd = function removeUserProd(id) {
    return {
        type: _constants.REMOVE_USER_PRODUCT,
        id: id
    };
};

var removeUser = exports.removeUser = function removeUser(id) {
    return {
        type: _constants.REMOVE_USER,
        id: id
    };
};

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var UPDATE_NAME = exports.UPDATE_NAME = 'UPDATE_NAME';
var CUSTOM = exports.CUSTOM = 'CUSTOM';
var NEWCOMP = exports.NEWCOMP = 'NEWCOMP';

// export const tokenToVerify = localStorage.getItem('tokenToVerify');
var tokenToVerify = exports.tokenToVerify = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6InN1cGVyc2VjcmV0IHRva2VuIiwiaWF0IjoxNTE4NTMzNjYwfQ.XHxmYN7KtuiTADAPanlpraDk61Yb-bfCvkHgffLJnXs';
var POST = exports.POST = 'POST';
var GET = exports.GET = 'GET';
var PUT = exports.PUT = 'PUT';
var DELETE = exports.DELETE = 'DELETE';
var HEADERS = exports.HEADERS = {
    'Accept': 'application/json',
    'Content-Type': 'application/json; charset=utf-8',
    'x-access-token': { tokenToVerify: tokenToVerify }
};

var REGISTER_URL = exports.REGISTER_URL = 'http://localhost:8080/users/register';
var LOGIN_URL = exports.LOGIN_URL = 'http://localhost:8080/users/sign_in';
var RESET_PASSWD_URL = exports.RESET_PASSWD_URL = 'http://localhost:8080/users/reset_password';
var EDIT_USER_URL = exports.EDIT_USER_URL = 'http://localhost:8080/users/edit_user';
var DELETE_USER_URL = exports.DELETE_USER_URL = 'http://localhost:8080/users/delete_single_user';
var ALL_USERS_URL = exports.ALL_USERS_URL = 'http://localhost:8080/users/list_all_users';
var TOKEN_URL = exports.TOKEN_URL = 'http://localhost:8080/token';
var UPLOAD_FILE_URL = exports.UPLOAD_FILE_URL = 'http://localhost:8080/upload_file';

var CREATE_PRODUCT_URL = exports.CREATE_PRODUCT_URL = 'http://localhost:8080/products/create';
var UPDATE_PRODUCT_URL = exports.UPDATE_PRODUCT_URL = 'http://localhost:8080/products/update';
var DELETE_PRODUCT_URL = exports.DELETE_PRODUCT_URL = 'http://localhost:8080/products/delete';
var PRODUCTS_LIST_URL = exports.PRODUCTS_LIST_URL = 'http://localhost:8080/products/products-list';
var ADMIN_LOGIN_URL = exports.ADMIN_LOGIN_URL = 'http://localhost:8080/admin/login';
var ADD_TO_CART_URL = exports.ADD_TO_CART_URL = 'http://localhost:8080/products/add-to-cart';
var GET_CART_LIST_URL = exports.GET_CART_LIST_URL = 'http://localhost:8080/products/cart-list'; //cart-list
// export const DELETE_FROM_CART = 'http://localhost:8080/cart/remove-cart-product';
var DELETE_FROM_CART = exports.DELETE_FROM_CART = 'http://localhost:8080/users/remove-user-product';

var ALL_PRODUCTS = exports.ALL_PRODUCTS = 'ALL_PRODUCTS';
var ADD_NEW_PRODUCT = exports.ADD_NEW_PRODUCT = 'ADD_NEW_PRODUCT';
var SINGLE_PRODUCT = exports.SINGLE_PRODUCT = 'SINGLE_PRODUCT';
var REMOVE_PRODUCT = exports.REMOVE_PRODUCT = 'REMOVE_PRODUCT';
var USER_PRODUCTS = exports.USER_PRODUCTS = 'USER_PRODUCTS';
var CURRENT_USER = exports.CURRENT_USER = 'CURRENT_USER';
var REMOVE_USER = exports.REMOVE_USER = 'REMOVE_USER';
var REMOVE_USER_PRODUCT = exports.REMOVE_USER_PRODUCT = 'REMOVE_USER_PRODUCT';

/***/ }),
/* 4 */
/***/ (function(module, exports) {

module.exports = require("redux-form");

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getToken = exports.uploadFile = exports.getAllUsers = exports.deleteUser = exports.resetPassword = exports.updateUser = exports.userDetails = exports.login = exports.registration = exports.AuthButton = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _constants = __webpack_require__(3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var AuthButton = exports.AuthButton = (0, _reactRouterDom.withRouter)(function (_ref) {
    var history = _ref.history;
    return _react2.default.createElement(
        'span',
        { className: 'pointer text-decor', onClick: function onClick() {
                localStorage.removeItem('userToken');
                return history.push('/login');
            } },
        'Sign Out'
    );
});

var registration = exports.registration = function registration(body) {
    return fetch(_constants.REGISTER_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var login = exports.login = function login(body) {
    return fetch(_constants.LOGIN_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var userDetails = exports.userDetails = function userDetails(body) {
    return fetch(_constants.LOGIN_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var updateUser = exports.updateUser = function updateUser(body) {
    return fetch(_constants.EDIT_USER_URL, {
        method: _constants.PUT,
        headers: _constants.HEADERS,
        body: body
    });
};

var resetPassword = exports.resetPassword = function resetPassword(body) {
    return fetch(_constants.RESET_PASSWD_URL, {
        method: _constants.PUT,
        headers: _constants.HEADERS,
        body: body
    });
};

var deleteUser = exports.deleteUser = function deleteUser(body) {
    return fetch(_constants.DELETE_USER_URL, {
        method: _constants.DELETE,
        headers: _constants.HEADERS,
        body: body
    });
};

var getAllUsers = exports.getAllUsers = function getAllUsers() {
    return fetch(_constants.ALL_USERS_URL, {
        method: _constants.GET,
        headers: { 'x-access-token': _constants.tokenToVerify }
    });
};

var uploadFile = exports.uploadFile = function uploadFile(body) {
    return fetch(_constants.UPLOAD_FILE_URL, {
        method: _constants.POST,
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
            'x-access-token': _constants.tokenToVerify
        },
        body: body
    });
};

var getToken = exports.getToken = function getToken() {
    return fetch(_constants.TOKEN_URL, {
        method: _constants.GET
    });
};

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("react-helmet");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("redux");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("react-loading");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("react-redux");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("jsonwebtoken");

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.getAllProducts = exports.deleteFromCart = exports.getCartList = exports.addToCart = exports.updateItem = exports.adminLogin = exports.deleteProduct = exports.createProduct = undefined;

var _constants = __webpack_require__(3);

var createProduct = exports.createProduct = function createProduct(body) {
    return fetch(_constants.CREATE_PRODUCT_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var deleteProduct = exports.deleteProduct = function deleteProduct(body) {
    return fetch(_constants.DELETE_PRODUCT_URL, {
        method: _constants.DELETE,
        headers: _constants.HEADERS,
        body: body
    });
};

var adminLogin = exports.adminLogin = function adminLogin(body) {
    return fetch(_constants.ADMIN_LOGIN_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var updateItem = exports.updateItem = function updateItem(body) {
    return fetch(_constants.UPDATE_PRODUCT_URL, {
        method: _constants.PUT,
        headers: _constants.HEADERS,
        body: body
    });
};

var addToCart = exports.addToCart = function addToCart(body) {
    return fetch(_constants.ADD_TO_CART_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var getCartList = exports.getCartList = function getCartList(body) {
    return fetch(_constants.GET_CART_LIST_URL, {
        method: _constants.POST,
        headers: _constants.HEADERS,
        body: body
    });
};

var deleteFromCart = exports.deleteFromCart = function deleteFromCart(body) {
    return fetch(_constants.DELETE_FROM_CART, {
        method: _constants.DELETE,
        headers: _constants.HEADERS,
        body: body
    });
};

var getAllProducts = exports.getAllProducts = function getAllProducts() {
    return fetch(_constants.PRODUCTS_LIST_URL, {
        method: _constants.GET,
        headers: { 'x-access-token': _constants.tokenToVerify }
    });
};

// export const getToken = () => {
//     return fetch(TOKEN_URL, {
//         method: GET
//     })
// }

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _navbar = __webpack_require__(19);

var _navbar2 = _interopRequireDefault(_navbar);

var _Home = __webpack_require__(20);

var _Home2 = _interopRequireDefault(_Home);

var _user = __webpack_require__(21);

var _user2 = _interopRequireDefault(_user);

var _newComponent = __webpack_require__(23);

var _newComponent2 = _interopRequireDefault(_newComponent);

var _Login = __webpack_require__(24);

var _Login2 = _interopRequireDefault(_Login);

var _ProductList = __webpack_require__(27);

var _ProductList2 = _interopRequireDefault(_ProductList);

var _Register = __webpack_require__(28);

var _Register2 = _interopRequireDefault(_Register);

var _SingleProduct = __webpack_require__(31);

var _SingleProduct2 = _interopRequireDefault(_SingleProduct);

var _UserAccount = __webpack_require__(32);

var _UserAccount2 = _interopRequireDefault(_UserAccount);

var _UserCart = __webpack_require__(33);

var _UserCart2 = _interopRequireDefault(_UserCart);

var _NoMatch = __webpack_require__(34);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
    routes: [{
        path: '/',
        component: _Home2.default,
        exact: true
    }, {
        path: '/user',
        component: _user2.default,
        exact: true
    }, {
        path: '/new-component',
        component: _newComponent2.default,
        exact: true
    }, {
        path: '/login',
        component: _Login2.default,
        exact: true
    }],
    redirects: [{
        from: '/people',
        to: '/user',
        status: 301
    }]
};

/***/ }),
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.selectField = exports.renderField = undefined;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var renderField = exports.renderField = function renderField(_ref) {
    var tagName = _ref.tagName,
        className = _ref.className,
        id = _ref.id,
        defaultValue = _ref.defaultValue,
        input = _ref.input,
        label = _ref.label,
        type = _ref.type,
        placeholder = _ref.placeholder,
        htmlFor = _ref.htmlFor,
        icon = _ref.icon,
        rows = _ref.rows,
        cols = _ref.cols,
        _ref$meta = _ref.meta,
        touched = _ref$meta.touched,
        error = _ref$meta.error;

    var TagName = tagName ? tagName : 'input';

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { htmlFor: htmlFor, 'data-icon': icon },
                label
            ),
            _react2.default.createElement(TagName, _extends({}, input, {
                id: id,
                className: className,
                type: type,
                placeholder: placeholder,
                rows: rows,
                cols: cols,
                value: defaultValue
            })),
            touched && error && _react2.default.createElement(
                'span',
                { className: 'validation-error' },
                error
            )
        )
    );
};

var selectField = exports.selectField = function selectField(_ref2) {
    var tagName = _ref2.tagName,
        className = _ref2.className,
        options = _ref2.options,
        id = _ref2.id,
        input = _ref2.input,
        label = _ref2.label,
        htmlFor = _ref2.htmlFor,
        icon = _ref2.icon,
        _ref2$meta = _ref2.meta,
        touched = _ref2$meta.touched,
        error = _ref2$meta.error;

    var TagName = tagName ? tagName : 'select';

    return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
            'div',
            null,
            _react2.default.createElement(
                'label',
                { htmlFor: htmlFor, 'data-icon': icon },
                label
            ),
            _react2.default.createElement(
                TagName,
                _extends({}, input, {
                    id: id,
                    className: className,
                    options: options
                }),
                Object.values(options).map(function (opt, index) {
                    return _react2.default.createElement(
                        'option',
                        {
                            name: opt, key: index },
                        typeof options === 'string' ? options : opt
                    );
                })
            ),
            touched && error && _react2.default.createElement(
                'span',
                { className: 'validation-error' },
                error
            )
        )
    );
};

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _express = __webpack_require__(15);

var _express2 = _interopRequireDefault(_express);

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _server = __webpack_require__(16);

var _server2 = _interopRequireDefault(_server);

var _reactHelmet = __webpack_require__(6);

var _reactHelmet2 = _interopRequireDefault(_reactHelmet);

var _app = __webpack_require__(17);

var _app2 = _interopRequireDefault(_app);

var _reactDom = __webpack_require__(39);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(7);

var _combine = __webpack_require__(40);

var _combine2 = _interopRequireDefault(_combine);

var _reactRouter = __webpack_require__(43);

var _thunk = __webpack_require__(44);

var _thunk2 = _interopRequireDefault(_thunk);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// import App from '../shared/App.js'

var app = (0, _express2.default)();


app.use('/dist', _express2.default.static('./dist'));

app.get('*', async function (req, res) {
    try {
        //create new redux store on each request
        var store = (0, _redux.createStore)(_combine2.default, {}, (0, _redux.applyMiddleware)(_thunk2.default));
        var foundPath = null;
        // match request url to our React Router paths and grab component

        var _ref = _routes2.default.routes.find(function (_ref2) {
            var path = _ref2.path,
                exact = _ref2.exact;

            foundPath = (0, _reactRouter.matchPath)(req.url, {
                path: path,
                exact: exact,
                strict: false
            });
            return foundPath;
        }) || {},
            path = _ref.path,
            component = _ref.component;
        // safety check for valid component, if no component we initialize an empty shell.


        if (!component) component = {};
        // safety check for fetchData function, if no function we give it an empty promise
        if (!component.fetchData) component.fetchData = function () {
            return new Promise(function (resolve) {
                return resolve();
            });
        };
        // meat and bones of our isomorphic application: grabbing async data
        await component.fetchData({ store: store, params: foundPath ? foundPath.params : {} });
        //get store state (js object of entire store)
        var preloadedState = store.getState();
        //context is used by react router, empty by default
        var context = {};
        var html = _server2.default.renderToString(_react2.default.createElement(
            _reactRedux.Provider,
            { store: store },
            _react2.default.createElement(
                _reactRouter.StaticRouter,
                { context: context, location: req.url },
                _react2.default.createElement(_app2.default, null)
            )
        ));
        //render helmet data aka meta data in <head></head>
        var helmetData = _reactHelmet2.default.renderStatic();
        //check context for url, if url exists then react router has ran into a redirect
        if (context.url)
            //process redirect through express by redirecting
            res.redirect(context.status, 'http://' + req.headers.host + context.url);else if (foundPath && foundPath.path == '/404')
            //if 404 then send our custom 404 page with initial state and meta data, this is needed for status code 404
            res.status(404).send(renderFullPage(html, preloadedState, helmetData));else
            //else send down page with initial state and meta data
            res.send(renderFullPage(html, preloadedState, helmetData));
    } catch (error) {
        res.status(400).send(renderFullPage('An error occured.', {}, {}));
    }
});

var port = process.env.PORT || 9000;
app.listen(port, function () {
    console.log('app running on localhost:' + port);
});

function renderFullPage(html, preloadedState, helmet) {
    return '\n    <!doctype html>\n    <html>\n      <head>\n        <link rel="icon" href="/dist/favicon.ico" type="image/ico" />\n        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto">\n        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat">\n        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">\n        ' + helmet.title.toString() + '\n        ' + helmet.meta.toString() + '\n        ' + helmet.link.toString() + '\n      </head>\n      <body>\n        <div id="root">' + html + '</div>\n        <script>\n          // WARNING: See the following for security issues around embedding JSON in HTML:\n          // http://redux.js.org/docs/recipes/ServerRendering.html#security-considerations\n          window.__PRELOADED_STATE__ = ' + JSON.stringify(preloadedState).replace(/</g, '\\u003c') + '\n        </script>\n        <script src="/dist/assets/app.bundle.js"></script>\n      </body>\n    </html>\n    ';
}

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-dom/server");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _redirectWStatus = __webpack_require__(18);

var _redirectWStatus2 = _interopRequireDefault(_redirectWStatus);

var _routes = __webpack_require__(12);

var _routes2 = _interopRequireDefault(_routes);

var _NavBar = __webpack_require__(35);

var _NavBar2 = _interopRequireDefault(_NavBar);

var _Header = __webpack_require__(36);

var _Header2 = _interopRequireDefault(_Header);

var _Footer = __webpack_require__(37);

var _Footer2 = _interopRequireDefault(_Footer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }
// import Navbar from './navbar.jsx';


var App = function (_Component) {
    _inherits(App, _Component);

    function App() {
        _classCallCheck(this, App);

        return _possibleConstructorReturn(this, (App.__proto__ || Object.getPrototypeOf(App)).apply(this, arguments));
    }

    _createClass(App, [{
        key: 'render',
        value: function render() {
            var routes = _routes2.default.routes.map(function (_ref, i) {
                var path = _ref.path,
                    component = _ref.component,
                    exact = _ref.exact;
                return _react2.default.createElement(_reactRouterDom.Route, { key: Math.random() + 'ROUTE_',
                    exact: exact,
                    path: path,
                    component: component });
            });
            var redirects = _routes2.default.redirects.map(function (_ref2, i) {
                var from = _ref2.from,
                    to = _ref2.to,
                    status = _ref2.status;
                return _react2.default.createElement(_redirectWStatus2.default, { key: Math.random() + 'REDIRECT_',
                    from: from,
                    to: to,
                    status: status });
            });
            return _react2.default.createElement(
                'div',
                { className: '' },
                _react2.default.createElement(_NavBar2.default, null),
                _react2.default.createElement(
                    'div',
                    { className: 'w3-main custom-main', style: { marginLeft: 250 + "px" } },
                    _react2.default.createElement(_Header2.default, null),
                    _react2.default.createElement(
                        'div',
                        { className: 'margin' },
                        _react2.default.createElement(
                            _reactRouterDom.Switch,
                            null,
                            routes
                        )
                    )
                )
            );
            // return (
            //     <div>
            //         <Navbar />
            //         <Switch>
            //             {routes}
            //             {redirects}
            //         </Switch>
            //     </div>
            // );
        }
    }]);

    return App;
}(_react.Component);

exports.default = App;

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var RedirectWithStatus = function RedirectWithStatus(_ref) {
    var key = _ref.key,
        from = _ref.from,
        to = _ref.to,
        status = _ref.status;
    return _react2.default.createElement(_reactRouterDom.Route, { render: function render(_ref2) {
            var staticContext = _ref2.staticContext;

            // there is no `staticContext` on the client, so
            // we need to guard against that here
            if (staticContext) staticContext.status = status;
            return _react2.default.createElement(_reactRouterDom.Redirect, { key: key, from: from, to: to });
        } });
};
exports.default = RedirectWithStatus;

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'ul',
                    null,
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/' },
                            'Home'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/user' },
                            'User'
                        )
                    ),
                    _react2.default.createElement(
                        'li',
                        null,
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/new-component' },
                            'New Component'
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData() {
            console.log('test');
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactHelmet = __webpack_require__(6);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Home = function (_Component) {
    _inherits(Home, _Component);

    function Home() {
        _classCallCheck(this, Home);

        return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).apply(this, arguments));
    }

    _createClass(Home, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            localStorage.setItem('item', 'some item to showsdfasdf');
        }
    }, {
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'Home'
                    )
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    'Homee page'
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Home;
}(_react.Component);

exports.default = Home;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(7);

var _reactHelmet = __webpack_require__(6);

var _index = __webpack_require__(2);

var actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var User = function (_Component) {
    _inherits(User, _Component);

    function User() {
        _classCallCheck(this, User);

        return _possibleConstructorReturn(this, (User.__proto__ || Object.getPrototypeOf(User)).apply(this, arguments));
    }

    _createClass(User, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.getName(2);
            console.log(localStorage.getItem('item'));
        }
    }, {
        key: 'render',
        value: function render() {
            // console.log(this.props)
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'User'
                    )
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    'User page '
                ),
                'Async data [ name: ',
                this.props.name,
                'email: ',
                this.props.email,
                ']'
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            return store.dispatch(actions.getName(2));
        }
    }]);

    return User;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.user);
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(User);

/***/ }),
/* 22 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRedux = __webpack_require__(9);

var _redux = __webpack_require__(7);

var _reactHelmet = __webpack_require__(6);

var _index = __webpack_require__(2);

var actions = _interopRequireWildcard(_index);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NewComponent = function (_Component) {
    _inherits(NewComponent, _Component);

    function NewComponent() {
        _classCallCheck(this, NewComponent);

        var _this = _possibleConstructorReturn(this, (NewComponent.__proto__ || Object.getPrototypeOf(NewComponent)).call(this));

        _this.state = {
            something: 'Something'
        };
        return _this;
    }

    _createClass(NewComponent, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.props.newComp('Other name');
            // console.log(localStorage.getItem('item'))
        }
    }, {
        key: 'click',
        value: function click() {
            console.log(localStorage.getItem('item'));
            console.log(this.state.something);
        }
    }, {
        key: 'render',
        value: function render() {
            console.log(this.props);
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    _reactHelmet.Helmet,
                    null,
                    _react2.default.createElement('meta', { charSet: 'utf-8' }),
                    _react2.default.createElement(
                        'title',
                        null,
                        'New Component'
                    )
                ),
                _react2.default.createElement(
                    'strong',
                    null,
                    'New Component Page '
                ),
                _react2.default.createElement(
                    'button',
                    { onClick: this.click.bind(this) },
                    'Click '
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            return store.dispatch(actions.newComp('Some Name'));
        }
    }]);

    return NewComponent;
}(_react.Component);

function mapStateToProps(state) {
    return _extends({}, state.newComp);
}

function mapDispatchToProps(dispatch) {
    return (0, _redux.bindActionCreators)(actions, dispatch);
}

exports.default = (0, _reactRedux.connect)(mapStateToProps, mapDispatchToProps, null, { withRef: true })(NewComponent);

/***/ }),
/* 24 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(4);

var _LoginTemplate = __webpack_require__(25);

var _LoginTemplate2 = _interopRequireDefault(_LoginTemplate);

var _authService = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Login = function (_Component) {
    _inherits(Login, _Component);

    function Login() {
        _classCallCheck(this, Login);

        return _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).apply(this, arguments));
    }

    _createClass(Login, [{
        key: 'render',


        // getApiToken () {
        //     getToken()
        //         .then(response => {
        //             return response.json()
        //         })
        //         .then(body => {
        //             localStorage.setItem('tokenToVerify', body.token);
        //             this.setState({token: body.token})
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         });
        // }
        //
        // handleSubmit  (values, dispatch) {
        //     const username = values.username;
        //     const password = values.password;
        //     const token = this.state.token;
        //
        //     login(JSON.stringify({username, password, token}))
        //         .then(response => {
        //             if (response.status === 200) {
        //                 dispatch(reset('loginForm'));
        //                 setTimeout(() => {
        //                     this.setState({
        //                         loginStatus: '',
        //                         redirectToReferrer: true,
        //                         loading: false
        //                     })
        //                 }, 150)
        //             }
        //             return response.json()
        //         })
        //         .then(body => {
        //             console.log(body)
        //             this.setState({
        //                 loginStatus: body.message,
        //             });
        //             localStorage.setItem('userToken', body.token);
        //         })
        //         .catch(err => {
        //             this.setState({
        //                 loginStatus: 'Server is no available. Please try later!',
        //                 loading: true
        //             });
        //             console.log(err)
        //         });
        //     this.setState({
        //         loginStatus: '',
        //         loading: false
        //     })
        // }

        value: function render() {
            // const {loginStatus, redirectToReferrer} = this.state;
            // const {from} = this.props.location.state || {from: {pathname: '/my-account'}};

            return _react2.default.createElement(_LoginTemplate2.default
            // onSubmit={this.handleSubmit}
            // loginStatus={loginStatus}
            // redirectToReferrer={redirectToReferrer}
            // from={from}
            , null);
        }
    }], [{
        key: 'fetchData',

        // constructor() {
        //     super();
        //
        //     this.state = {
        //         token: null,
        //         loginStatus: '',
        //         redirectToReferrer: false,
        //         loading: false
        //     }
        // }

        // componentWillMount() {
        //     this.getApiToken();
        // }

        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Login;
}(_react.Component);

exports.default = Login;

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _TagCreator = __webpack_require__(13);

var _login = __webpack_require__(26);

var _login2 = _interopRequireDefault(_login);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var LoginTemplate = function (_Component) {
    _inherits(LoginTemplate, _Component);

    function LoginTemplate() {
        _classCallCheck(this, LoginTemplate);

        return _possibleConstructorReturn(this, (LoginTemplate.__proto__ || Object.getPrototypeOf(LoginTemplate)).apply(this, arguments));
    }

    _createClass(LoginTemplate, [{
        key: 'render',
        value: function render() {
            // const {handleSubmit, loginStatus, redirectToReferrer, loading} = this.props;

            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'custom-row' },
                    _react2.default.createElement(
                        'form',
                        null,
                        _react2.default.createElement('p', { className: 'validation-error' }),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'username',
                                id: 'username',
                                className: 'input w3-input w3-border',
                                type: 'text',
                                htmlFor: 'username',
                                placeholder: 'username',
                                label: 'username',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'password',
                                id: 'password',
                                className: 'input w3-input w3-border',
                                type: 'password',
                                htmlFor: 'password',
                                placeholder: 'password',
                                label: 'password',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wrapper' },
                            _react2.default.createElement(
                                'span',
                                { className: 'group-btn' },
                                _react2.default.createElement('input', {
                                    className: 'w3-button w3-red w3-margin-bottom button',
                                    type: 'submit', value: 'Login' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'change_link' },
                        'Not a member yet ?',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/register' },
                            'Join us'
                        )
                    )
                )
            );
        }
    }]);

    return LoginTemplate;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'loginForm',
    validate: _login2.default
})(LoginTemplate);

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var validate = function validate(values) {
    var errors = {};

    if (!values.username) {
        errors.username = 'Required';
    }
    if (!values.password) {
        errors.password = 'Required';
    }

    return errors;
};

exports.default = validate;

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactLoading = __webpack_require__(8);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _jsonwebtoken = __webpack_require__(10);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _productService = __webpack_require__(11);

var _authService = __webpack_require__(5);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ProductList = function (_Component) {
    _inherits(ProductList, _Component);

    function ProductList() {
        _classCallCheck(this, ProductList);

        var _this = _possibleConstructorReturn(this, (ProductList.__proto__ || Object.getPrototypeOf(ProductList)).call(this));

        _this.state = {
            status: '',
            token: null
        };
        return _this;
    }

    _createClass(ProductList, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getApiToken();
            this.getProductList();
        }
    }, {
        key: 'getApiToken',
        value: function getApiToken() {
            var _this2 = this;

            (0, _authService.getToken)().then(function (response) {
                return response.json();
            }).then(function (body) {
                return _this2.setState({ token: body.token });
            }).catch(function (err) {
                return console.log(err);
            });
        }
    }, {
        key: 'getProductList',
        value: function getProductList() {
            var dispatch = this.props.dispatch;


            (0, _productService.getAllProducts)().then(function (response) {
                return response.json();
            }).then(function (products) {
                // console.log(products)
                dispatch((0, _index.allProducts)(products.products, products.count));
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'addToCart',
        value: function addToCart(prod_id) {
            var _this3 = this;

            var currentUserToken = localStorage.getItem('userToken');
            var token = this.state.token;
            var dispatch = this.props.dispatch;


            if (currentUserToken) {
                _jsonwebtoken2.default.verify(currentUserToken, 'secret_key', function (err, user) {
                    if (err) console.log(err);
                    var user_id = user.user._id;

                    (0, _productService.addToCart)(JSON.stringify({ prod_id: prod_id, user_id: user_id, token: token })).then(function (response) {

                        if (response.status === 200) {
                            console.log('ok!!!');
                        }
                        return response.json();
                    }).then(function (body) {
                        console.log(body.products);
                        dispatch((0, _index.userProducts)(body.products));
                        _this3.setState({
                            status: body.message
                        });
                    }).catch(function (err) {
                        console.log(err);
                    });
                    _this3.setState({ status: '' });
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var _this4 = this;

            var _props$products = this.props.products,
                products = _props$products.products,
                count = _props$products.count;
            var status = this.state.status;


            if (products === undefined || count === undefined) {
                return _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(_reactLoading2.default, { color: 'black', type: 'spokes', className: 'center' })
                );
            }
            // console.log(products)
            // console.log(count)


            return _react2.default.createElement(
                'div',
                { className: '' },
                _react2.default.createElement(
                    'div',
                    { className: 'w3-display-container w3-container' },
                    _react2.default.createElement('img', {
                        src: './images/main.jpeg',
                        alt: 'logo',
                        className: 'main-img',
                        style: { width: 100 + "%" }
                    }),
                    _react2.default.createElement(
                        'div',
                        { className: 'top-left w3-text-white', style: { padding: 24 + "px" + 48 + "px" } },
                        _react2.default.createElement(
                            'h1',
                            { className: 'w3-jumbo w3-hide-small' },
                            'New arrivals'
                        ),
                        _react2.default.createElement(
                            'h1',
                            { className: 'w3-hide-large w3-hide-medium' },
                            'New arrivals'
                        ),
                        _react2.default.createElement(
                            'h1',
                            { className: 'w3-hide-small' },
                            'COLLECTION 2016'
                        ),
                        _react2.default.createElement(
                            'p',
                            null,
                            _react2.default.createElement(
                                'a',
                                { className: 'w3-button w3-black w3-padding-large w3-large' },
                                'ADD TO CART'
                            )
                        )
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'w3-container w3-text-grey' },
                    _react2.default.createElement(
                        'h2',
                        null,
                        count,
                        ' items'
                    )
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'validation-error' },
                    status
                ),
                _react2.default.createElement(
                    'div',
                    { className: 'w3-row w3-grayscale' },
                    products.map(function (product, index) {
                        return _react2.default.createElement(
                            'div',
                            { className: 'w3-col l3 s6 box', key: index },
                            _react2.default.createElement(
                                'div',
                                { className: 'w3-container' },
                                _react2.default.createElement(
                                    'div',
                                    { className: 'w3-display-container' },
                                    _react2.default.createElement(
                                        _reactRouterDom.Link,
                                        { to: '/product-list/product/' + product._id },
                                        _react2.default.createElement('img', { src: product.imagePath,
                                            alt: product.imagePath,
                                            className: 'img-style'
                                        })
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        { className: 'w3-display-middle w3-display-hover' },
                                        _react2.default.createElement(
                                            'a',
                                            { onClick: _this4.addToCart.bind(_this4, product._id),
                                                className: 'w3-button w3-black' },
                                            'Add To Cart',
                                            _react2.default.createElement('i', { className: 'fa fa-shopping-cart' })
                                        )
                                    ),
                                    _react2.default.createElement(
                                        'h3',
                                        null,
                                        product.name
                                    ),
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        '$',
                                        product.price
                                    )
                                )
                            )
                        );
                    })
                )
            );
        }
    }]);

    return ProductList;
}(_react.Component);

exports.default = ProductList;

/***/ }),
/* 28 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(4);

var _RegisterTemplate = __webpack_require__(29);

var _RegisterTemplate2 = _interopRequireDefault(_RegisterTemplate);

var _authService = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Register = function (_Component) {
    _inherits(Register, _Component);

    function Register() {
        _classCallCheck(this, Register);

        var _this = _possibleConstructorReturn(this, (Register.__proto__ || Object.getPrototypeOf(Register)).call(this));

        _this.state = {
            regStatus: '',
            redirectToReferrer: false
        };
        return _this;
    }

    _createClass(Register, [{
        key: 'handleSubmit',
        value: function handleSubmit(values, dispatch) {
            var _this2 = this;

            (0, _authService.registration)(JSON.stringify(values)).then(function (response) {
                console.log(response);
                if (response.status === 200) {
                    console.log(response);
                    dispatch((0, _reduxForm.reset)('register'));
                    _this2.setState({
                        redirectToReferrer: true
                    });
                }
                return response.json();
            }).then(function (body) {
                console.log(body);
                _this2.setState({
                    regStatus: body.message
                });
            }).catch(function (err) {
                _this2.setState({
                    regStatus: 'Server is no available. Please try later'
                });
            });
            this.setState({
                regStatus: ''
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var _state = this.state,
                regStatus = _state.regStatus,
                redirectToReferrer = _state.redirectToReferrer;

            var _ref = this.props.location.state || { from: { pathname: '/my-account' } },
                from = _ref.from;

            return _react2.default.createElement(_RegisterTemplate2.default, {
                onSubmit: this.handleSubmit,
                regStatus: regStatus,
                redirectToReferrer: redirectToReferrer,
                from: from
            });
        }
    }]);

    return Register;
}(_react.Component);

exports.default = Register;

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reduxForm = __webpack_require__(4);

var _reactRouterDom = __webpack_require__(1);

var _TagCreator = __webpack_require__(13);

var _register = __webpack_require__(30);

var _register2 = _interopRequireDefault(_register);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var RegisterTemplate = function (_Component) {
    _inherits(RegisterTemplate, _Component);

    function RegisterTemplate() {
        _classCallCheck(this, RegisterTemplate);

        return _possibleConstructorReturn(this, (RegisterTemplate.__proto__ || Object.getPrototypeOf(RegisterTemplate)).apply(this, arguments));
    }

    _createClass(RegisterTemplate, [{
        key: 'render',
        value: function render() {
            // const {handleSubmit, regStatus, redirectToReferrer, from} = this.props;
            var _props = this.props,
                handleSubmit = _props.handleSubmit,
                regStatus = _props.regStatus,
                redirectToReferrer = _props.redirectToReferrer,
                from = _props.from;
            // console.log(redirectToReferrer);


            return _react2.default.createElement(
                'div',
                { className: 'container' },
                _react2.default.createElement(
                    'div',
                    { className: 'custom-row' },
                    _react2.default.createElement(
                        'form',
                        { onSubmit: handleSubmit, autoComplete: 'on' },
                        _react2.default.createElement(
                            'p',
                            { className: 'validation-error' },
                            regStatus
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'username_reg',
                                id: 'username_reg',
                                className: 'input w3-input w3-border',
                                type: 'text',
                                htmlFor: 'username_reg',
                                placeholder: 'username',
                                label: 'username',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'email_reg',
                                id: 'email_reg',
                                className: 'input w3-input w3-border',
                                type: 'text',
                                htmlFor: 'email_reg',
                                placeholder: 'email',
                                label: 'email',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'password_reg',
                                id: 'password_reg',
                                className: 'input w3-input w3-border',
                                type: 'password',
                                htmlFor: 'password_reg',
                                placeholder: 'password',
                                label: 'password',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(_reduxForm.Field, {
                                tagName: 'input',
                                name: 'password_reg_confirm',
                                id: 'password_reg_confirm',
                                className: 'input w3-input w3-border',
                                type: 'password',
                                htmlFor: 'password_reg_confirm',
                                placeholder: 'confirm password',
                                label: 'confirm password',
                                component: _TagCreator.renderField
                            })
                        ),
                        _react2.default.createElement(
                            'div',
                            { className: 'wrapper' },
                            _react2.default.createElement(
                                'span',
                                { className: 'group-btn' },
                                _react2.default.createElement('input', {
                                    className: 'w3-button w3-red w3-margin-bottom button',
                                    type: 'submit', value: 'Login' })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'change_link' },
                        'Already a member ?',
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/login', className: 'to_register' },
                            ' Go and log in '
                        )
                    )
                ),
                redirectToReferrer === true && _react2.default.createElement(_reactRouterDom.Redirect, { to: from })
            );
        }
    }]);

    return RegisterTemplate;
}(_react.Component);

exports.default = (0, _reduxForm.reduxForm)({
    form: 'register',
    validate: _register2.default
})(RegisterTemplate);

/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
var validate = function validate(values) {
    var errors = {};
    if (!values.username_reg) {
        errors.username_reg = 'Required';
    }
    if (!values.email_reg) {
        errors.email_reg = 'Required';
    }
    if (!values.password_reg) {
        errors.password_reg = 'Required';
    }
    if (!values.password_reg_confirm) {
        errors.password_reg_confirm = 'You must reenter your password';
    }

    if (values.username_reg && values.username_reg.length < 6) {
        errors.username_reg = 'Username is too short';
    }
    if (values.email_reg && !values.email_reg.match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)) {
        errors.email_reg = 'Email is not valid';
    }
    ///^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/
    //     if(values.passwordsignup && values.passwordsignup.length < 6) {
    //         errors.passwordsignup = 'Must contain 6 characters'
    //     }
    if (values.password_reg && !values.password_reg.match(/^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/)) {
        errors.password_reg = 'Please much the requested format';
    }
    if (values.password_reg_confirm && values.password_reg !== values.password_reg_confirm) {
        errors.password_reg_confirm = 'Passwords do not much';
    }
    return errors;
};

exports.default = validate;

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _reactLoading = __webpack_require__(8);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _productService = __webpack_require__(11);

var _actions = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SingleProduct = function (_Component) {
    _inherits(SingleProduct, _Component);

    function SingleProduct() {
        _classCallCheck(this, SingleProduct);

        return _possibleConstructorReturn(this, (SingleProduct.__proto__ || Object.getPrototypeOf(SingleProduct)).apply(this, arguments));
    }

    _createClass(SingleProduct, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.getProductList();
        }
    }, {
        key: 'getProductList',
        value: function getProductList() {
            var dispatch = this.props.dispatch;

            var id = this.props.match.params.id;

            (0, _productService.getAllProducts)().then(function (response) {
                return response.json();
            }).then(function (products) {
                var product = products.products.filter(function (prod) {
                    return prod._id === id;
                });
                dispatch((0, _actions.singleProduct)(product, product.variants));
            }).catch(function (err) {
                console.log(err);
            });
        }
    }, {
        key: 'render',
        value: function render() {
            var product = this.props.product;


            if (product.length <= 0) {
                return _react2.default.createElement(_reactLoading2.default, { color: 'black', type: 'spokes', className: 'center' });
            }

            // console.log(product)

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'div',
                    { className: '' },
                    _react2.default.createElement(
                        'div',
                        null,
                        product.product.map(function (prod, index) {
                            return _react2.default.createElement(
                                'div',
                                { key: index, className: 'box' },
                                _react2.default.createElement(
                                    'h1',
                                    null,
                                    prod.name
                                ),
                                _react2.default.createElement('img', { src: prod.imagePath, alt: prod.name, className: 'img-style' }),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Price:'
                                    ),
                                    ' ',
                                    prod.price
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Available Quantity:'
                                    ),
                                    ' ',
                                    prod.available_quantity
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Status:'
                                    ),
                                    ' ',
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        prod.status
                                    )
                                ),
                                _react2.default.createElement(
                                    'div',
                                    null,
                                    _react2.default.createElement(
                                        'b',
                                        null,
                                        'Product Description:'
                                    ),
                                    ' ',
                                    prod.description
                                ),
                                prod.variants.length <= 0 ? _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Have No Variants'
                                ) : _react2.default.createElement(
                                    'h3',
                                    null,
                                    'Product\'s Variants'
                                ),
                                prod.variants.map(function (variant, ind) {
                                    return _react2.default.createElement(
                                        'div',
                                        { key: ind, className: 'box' },
                                        _react2.default.createElement(
                                            'div',
                                            { className: '' },
                                            _react2.default.createElement('img', { src: variant.variant_image_path,
                                                alt: variant.variant_name,
                                                className: 'img-style' }),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    'Variant Name:'
                                                ),
                                                ' ',
                                                variant.variant_name
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    'Variant Price:'
                                                ),
                                                ' ',
                                                variant.variant_price
                                            ),
                                            _react2.default.createElement(
                                                'div',
                                                null,
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    'Variant Status:'
                                                ),
                                                ' ',
                                                _react2.default.createElement(
                                                    'b',
                                                    null,
                                                    variant.variant_status
                                                )
                                            )
                                        )
                                    );
                                })
                            );
                        }),
                        _react2.default.createElement('div', { className: ' ' })
                    )
                ),
                _react2.default.createElement(
                    _reactRouterDom.Link,
                    { to: '/products-list', className: 'w3-button w3-black w3-round-large' },
                    'Back'
                )
            );
        }
    }]);

    return SingleProduct;
}(_react.Component);

exports.default = SingleProduct;

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _jsonwebtoken = __webpack_require__(10);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _reactLoading = __webpack_require__(8);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _index = __webpack_require__(2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserAccount = function (_Component) {
    _inherits(UserAccount, _Component);

    function UserAccount() {
        _classCallCheck(this, UserAccount);

        return _possibleConstructorReturn(this, (UserAccount.__proto__ || Object.getPrototypeOf(UserAccount)).apply(this, arguments));
    }

    _createClass(UserAccount, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            this.userProfile();
        }
    }, {
        key: 'userProfile',
        value: function userProfile() {
            var dispatch = this.props.dispatch;

            var currentUserToken = localStorage.getItem('userToken');

            if (currentUserToken) {
                _jsonwebtoken2.default.verify(currentUserToken, 'secret_key', function (err, user) {
                    if (err) console.log(err);
                    if (user) {
                        dispatch((0, _index.currentUser)(user.user));
                    }
                });
            }
        }
    }, {
        key: 'render',
        value: function render() {
            var currentUser = this.props.currentUser;


            if (currentUser === undefined) {
                return _react2.default.createElement(_reactLoading2.default, { color: 'black', type: 'spokes', className: 'center' });
            }

            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'h1',
                    null,
                    'My Profile'
                ),
                Object.values(currentUser).map(function (user, ind) {
                    return _react2.default.createElement(
                        'div',
                        { key: ind },
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'My Username'
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    user.username
                                )
                            )
                        ),
                        _react2.default.createElement(
                            'div',
                            null,
                            _react2.default.createElement(
                                'span',
                                null,
                                'My Mail'
                            ),
                            ' ',
                            _react2.default.createElement(
                                'span',
                                null,
                                _react2.default.createElement(
                                    'b',
                                    null,
                                    user.email
                                )
                            )
                        )
                    );
                }),
                _react2.default.createElement(
                    'div',
                    null,
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/products-list', className: 'w3-button w3-black w3-round-large' },
                        'Back'
                    )
                )
            );
        }
    }]);

    return UserAccount;
}(_react.Component);

exports.default = UserAccount;

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _jsonwebtoken = __webpack_require__(10);

var _jsonwebtoken2 = _interopRequireDefault(_jsonwebtoken);

var _reactLoading = __webpack_require__(8);

var _reactLoading2 = _interopRequireDefault(_reactLoading);

var _productService = __webpack_require__(11);

var _index = __webpack_require__(2);

var _authService = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var UserCart = function (_Component) {
    _inherits(UserCart, _Component);

    function UserCart() {
        _classCallCheck(this, UserCart);

        var _this = _possibleConstructorReturn(this, (UserCart.__proto__ || Object.getPrototypeOf(UserCart)).call(this));

        _this.state = {
            token: null
        };
        return _this;
    }

    _createClass(UserCart, [{
        key: 'componentDidMount',
        value: function componentDidMount() {
            // this.getApiToken();
            this.userCartList();
        }

        // getApiToken = () => {
        //     getToken()
        //         .then(response => {
        //             return response.json()
        //         })
        //         .then(body => {
        //             // console.log(body.token)
        //             this.setState({token: body.token})
        //         })
        //         .catch(err => {
        //             console.log(err)
        //         });
        // };


    }, {
        key: 'userCartList',
        value: function userCartList() {
            var currentUserToken = localStorage.getItem('userToken');
            var token = this.state.token;

            var dispatch = this.props.dispatch;


            if (currentUserToken) {
                _jsonwebtoken2.default.verify(currentUserToken, 'secret_key', function (err, user) {
                    if (err) console.log(err);

                    if (user) {
                        var user_id = user.user._id;

                        (0, _productService.getCartList)(JSON.stringify({ user_id: user_id })).then(function (response) {
                            return response.json();
                        }).then(function (body) {
                            //must be dispatch
                            dispatch((0, _index.userProducts)(body.userProducts));
                        }).catch(function (err) {
                            console.log(err);
                        });
                    }
                });
            }
        }
    }, {
        key: 'removeSingleProd',
        value: function removeSingleProd(id) {
            var dispatch = this.props.dispatch;


            dispatch((0, _index.removeUserProd)(id));
        }
    }, {
        key: 'deleteProdFromCart',
        value: function deleteProdFromCart(prod_id) {
            var currentUserToken = localStorage.getItem('userToken');

            _jsonwebtoken2.default.verify(currentUserToken, 'secret_key', function (err, user) {
                if (err) console.log(err);
                if (user) {
                    console.log(user.user);
                    var user_id = user.user._id;

                    (0, _productService.deleteFromCart)(JSON.stringify({ user_id: user_id, prod_id: prod_id })).then(function (response) {
                        return response.json();
                    }).then(function (body) {
                        console.log(body);
                    }).catch(function (err) {
                        console.log(err);
                    });
                }
            });
            this.removeSingleProd(prod_id);
        }
    }, {
        key: 'render',
        value: function render() {
            var _this2 = this;

            var userProducts = this.props.userProducts.userProducts;


            if (userProducts === undefined) {
                return _react2.default.createElement(_reactLoading2.default, { color: 'black', type: 'spokes', className: 'center' });
            }
            console.log(this.props.userProducts);

            return _react2.default.createElement(
                'div',
                null,
                userProducts.length <= 0 ? _react2.default.createElement(
                    'h2',
                    null,
                    'Your Cart is Empty'
                ) : _react2.default.createElement(
                    'h1',
                    null,
                    'My Cart'
                ),
                userProducts.map(function (prod, index) {
                    // console.log(prod);

                    return _react2.default.createElement(
                        'div',
                        { key: index, className: 'box' },
                        _react2.default.createElement(
                            'div',
                            { className: '' },
                            _react2.default.createElement(
                                'div',
                                null,
                                _react2.default.createElement(
                                    'h2',
                                    null,
                                    prod.name
                                ),
                                _react2.default.createElement(
                                    'div',
                                    { className: '' },
                                    _react2.default.createElement('img', { src: prod.imagePath, alt: prod.name, className: 'img-style' }),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Price:'
                                        ),
                                        ' ',
                                        prod.price
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Available Quantity:'
                                        ),
                                        ' ',
                                        prod.available_quantity
                                    ),
                                    _react2.default.createElement(
                                        'div',
                                        null,
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            'Status:'
                                        ),
                                        ' ',
                                        _react2.default.createElement(
                                            'b',
                                            null,
                                            prod.status
                                        )
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                'a',
                                { onClick: _this2.deleteProdFromCart.bind(_this2, prod._id),
                                    className: 'w3-button w3-red' },
                                'remove'
                            )
                        )
                    );
                }),
                _react2.default.createElement(
                    'div',
                    { className: 'after-box' },
                    _react2.default.createElement(
                        _reactRouterDom.Link,
                        { to: '/products-list', className: 'w3-button w3-black w3-round-large' },
                        'Back'
                    )
                )
            );
        }
    }]);

    return UserCart;
}(_react.Component);

exports.default = UserCart;

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.NoMatch = undefined;

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var NoMatch = exports.NoMatch = function NoMatch(_ref) {
    var location = _ref.location;
    return _react2.default.createElement(
        "div",
        { className: "w3-content w3-justify w3-text-grey w3-padding-64" },
        _react2.default.createElement(
            "h3",
            null,
            "No match for ",
            _react2.default.createElement(
                "code",
                null,
                location.pathname
            )
        )
    );
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var NavBar = function (_Component) {
    _inherits(NavBar, _Component);

    function NavBar() {
        _classCallCheck(this, NavBar);

        return _possibleConstructorReturn(this, (NavBar.__proto__ || Object.getPrototypeOf(NavBar)).apply(this, arguments));
    }

    _createClass(NavBar, [{
        key: 'render',
        value: function render() {
            return _react2.default.createElement(
                'div',
                null,
                _react2.default.createElement(
                    'nav',
                    { className: 'w3-sidebar w3-bar-block back-color w3-collapse w3-top',
                        style: { Zindex: 3, width: 250 + "px" },
                        id: 'mySidebar' },
                    _react2.default.createElement(
                        'div',
                        { className: 'w3-container w3-display-container w3-padding-16' },
                        _react2.default.createElement('i', { className: 'fa fa-remove w3-hide-large w3-button w3-display-topright' }),
                        _react2.default.createElement(
                            'h3',
                            { className: 'w3-wide' },
                            _react2.default.createElement(
                                _reactRouterDom.Link,
                                { to: '/products-list' },
                                _react2.default.createElement('img', {
                                    src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR755vR128JIUZf3ufiz8fJkaCG1ue5xjMLjYUbun2t30N5LfLLFw',
                                    className: 'logo-large', alt: 'logo' })
                            )
                        )
                    ),
                    _react2.default.createElement('div', { className: 'w3-padding-64 w3-large w3-text-grey', style: { fontWeight: "bold" } }),
                    _react2.default.createElement(
                        'a',
                        { className: 'w3-bar-item w3-button w3-padding' },
                        'Newsletter'
                    ),
                    _react2.default.createElement(
                        'a',
                        { className: 'w3-bar-item w3-button w3-padding' },
                        'Subscribe'
                    )
                ),
                _react2.default.createElement(
                    'header',
                    { className: 'w3-bar w3-top w3-hide-large w3-black w3-xlarge' },
                    _react2.default.createElement(
                        'div',
                        { className: 'w3-bar-item w3-padding-24 w3-wide' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/products-list' },
                            _react2.default.createElement('img', {
                                src: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR755vR128JIUZf3ufiz8fJkaCG1ue5xjMLjYUbun2t30N5LfLLFw',
                                className: 'logo', alt: 'logo' })
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return NavBar;
}(_react.Component);

exports.default = NavBar;

/***/ }),
/* 36 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _reactRouterDom = __webpack_require__(1);

var _authService = __webpack_require__(5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Header = function (_Component) {
    _inherits(Header, _Component);

    function Header() {
        _classCallCheck(this, Header);

        return _possibleConstructorReturn(this, (Header.__proto__ || Object.getPrototypeOf(Header)).apply(this, arguments));
    }

    _createClass(Header, [{
        key: 'render',
        value: function render() {
            var currentUserToken = localStorage.getItem('userToken');

            return _react2.default.createElement(
                'div',
                { className: 'grey' },
                _react2.default.createElement('div', { className: 'w3-hide-large', style: { marginTop: 83 + "px" } }),
                _react2.default.createElement(
                    'header',
                    { className: 'w3-container w3-xlarge' },
                    _react2.default.createElement(
                        'p',
                        { className: 'w3-left ' },
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/products-list', className: 'decor-non' },
                            'Products'
                        )
                    ),
                    _react2.default.createElement(
                        'p',
                        { className: 'w3-right' },
                        _react2.default.createElement('span', { className: 'w3-margin-right font-size' }),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/my-account', className: ' w3-margin-right' },
                            _react2.default.createElement('i', { className: 'fa fa-user w3-margin-right' })
                        ),
                        _react2.default.createElement(
                            _reactRouterDom.Link,
                            { to: '/my-cart' },
                            _react2.default.createElement('i', { className: 'fa fa-shopping-cart w3-margin-right' })
                        )
                    )
                )
            );
        }
    }], [{
        key: 'fetchData',
        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Header;
}(_react.Component);

exports.default = Header;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

var _Subscribe = __webpack_require__(38);

var _Subscribe2 = _interopRequireDefault(_Subscribe);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_Component) {
    _inherits(Footer, _Component);

    function Footer() {
        _classCallCheck(this, Footer);

        return _possibleConstructorReturn(this, (Footer.__proto__ || Object.getPrototypeOf(Footer)).apply(this, arguments));
    }

    _createClass(Footer, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    null,
                    _react2.default.createElement(_Subscribe2.default, null),
                    _react2.default.createElement(
                        "footer",
                        { className: "w3-padding-64 w3-light-grey w3-small w3-center", id: "footer" },
                        _react2.default.createElement(
                            "div",
                            { className: "w3-row-padding" },
                            _react2.default.createElement(
                                "div",
                                { className: "w3-col s4" },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Contact"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    "Questions? Go ahead."
                                ),
                                _react2.default.createElement(
                                    "form",
                                    { action: "", target: "_blank" },
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        _react2.default.createElement("input", { className: "w3-input w3-border", type: "text", placeholder: "Name", name: "Name",
                                            required: true })
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        _react2.default.createElement("input", { className: "w3-input w3-border", type: "text", placeholder: "Email",
                                            name: "Email",
                                            required: true })
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        _react2.default.createElement("input", { className: "w3-input w3-border", type: "text", placeholder: "Subject",
                                            name: "Subject", required: true })
                                    ),
                                    _react2.default.createElement(
                                        "p",
                                        null,
                                        _react2.default.createElement("input", { className: "w3-input w3-border", type: "text", placeholder: "Message",
                                            name: "Message", required: true })
                                    ),
                                    _react2.default.createElement(
                                        "button",
                                        { type: "submit", className: "w3-button w3-block w3-black" },
                                        "Send"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "w3-col s4" },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "About"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "About us"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "We're hiring"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Support"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Find store"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Shipment"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Payment"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Gift card"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Return"
                                    )
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement(
                                        "a",
                                        null,
                                        "Help"
                                    )
                                )
                            ),
                            _react2.default.createElement(
                                "div",
                                { className: "w3-col s4 w3-justify" },
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "Store"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement("i", { className: "fa fa-fw fa-map-marker" }),
                                    " Company Name"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement("i", { className: "fa fa-fw fa-phone" }),
                                    " 0044123123"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement("i", { className: "fa fa-fw fa-envelope" }),
                                    " ex@mail.com"
                                ),
                                _react2.default.createElement(
                                    "h4",
                                    null,
                                    "We accept"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement("i", { className: "fa fa-fw fa-cc-amex" }),
                                    " Amex"
                                ),
                                _react2.default.createElement(
                                    "p",
                                    null,
                                    _react2.default.createElement("i", { className: "fa fa-fw fa-credit-card" }),
                                    " Credit Card"
                                ),
                                _react2.default.createElement("br", null),
                                _react2.default.createElement("i", { className: "fa fa-facebook-official w3-hover-opacity w3-large" }),
                                _react2.default.createElement("i", { className: "fa fa-instagram w3-hover-opacity w3-large" }),
                                _react2.default.createElement("i", { className: "fa fa-snapchat w3-hover-opacity w3-large" }),
                                _react2.default.createElement("i", { className: "fa fa-pinterest-p w3-hover-opacity w3-large" }),
                                _react2.default.createElement("i", { className: "fa fa-twitter w3-hover-opacity w3-large" }),
                                _react2.default.createElement("i", { className: "fa fa-linkedin w3-hover-opacity w3-large" })
                            )
                        )
                    ),
                    _react2.default.createElement(
                        "div",
                        { className: "w3-black w3-center w3-padding-24" },
                        "Powered by ",
                        _react2.default.createElement(
                            "a",
                            {
                                href: "https://www.w3schools.com/w3css/default.asp", title: "W3.CSS",
                                target: "_blank",
                                rel: "noopener noreferrer",
                                className: "w3-hover-opacity" },
                            "w3.css"
                        )
                    )
                ),
                _react2.default.createElement(
                    "div",
                    { id: "newsletter", className: "w3-modal" },
                    _react2.default.createElement(
                        "div",
                        { className: "w3-modal-content w3-animate-zoom", style: { padding: 32 + "px" } },
                        _react2.default.createElement(
                            "div",
                            { className: "w3-container w3-white w3-center" },
                            _react2.default.createElement("i", {
                                className: "fa fa-remove w3-right w3-button w3-transparent w3-xxlarge" }),
                            _react2.default.createElement(
                                "h2",
                                { className: "w3-wide" },
                                "NEWSLETTER"
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                "Join our mailing list to receive updates on new arrivals and special offers."
                            ),
                            _react2.default.createElement(
                                "p",
                                null,
                                _react2.default.createElement("input", { className: "w3-input w3-border", type: "text", placeholder: "Enter e-mail" })
                            ),
                            _react2.default.createElement(
                                "button",
                                { type: "button", className: "w3-button w3-padding-large w3-red w3-margin-bottom" },
                                "Subscribe"
                            )
                        )
                    )
                )
            );
        }
    }], [{
        key: "fetchData",
        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Footer;
}(_react.Component);

exports.default = Footer;

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = __webpack_require__(0);

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Subscribe = function (_Component) {
    _inherits(Subscribe, _Component);

    function Subscribe() {
        _classCallCheck(this, Subscribe);

        return _possibleConstructorReturn(this, (Subscribe.__proto__ || Object.getPrototypeOf(Subscribe)).apply(this, arguments));
    }

    _createClass(Subscribe, [{
        key: "render",
        value: function render() {
            return _react2.default.createElement(
                "div",
                null,
                _react2.default.createElement(
                    "div",
                    { className: "w3-container w3-black w3-padding-32" },
                    _react2.default.createElement(
                        "h1",
                        null,
                        "Subscribe"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        "To get special offers and VIP treatment:"
                    ),
                    _react2.default.createElement(
                        "p",
                        null,
                        _react2.default.createElement("input", {
                            className: "w3-input w3-border",
                            type: "text",
                            placeholder: "Enter e-mail",
                            style: { width: 100 + "%" } })
                    ),
                    _react2.default.createElement(
                        "button",
                        { type: "button", className: "w3-button w3-red w3-margin-bottom" },
                        "Subscribe"
                    )
                )
            );
        }
    }], [{
        key: "fetchData",
        value: function fetchData(_ref) {
            var store = _ref.store;

            // localStorage.setItem('item', 'some item to show')
            return new Promise(function (resolve) {
                return resolve();
            }); //default
        }
    }]);

    return Subscribe;
}(_react.Component);

exports.default = Subscribe;

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 40 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _redux = __webpack_require__(7);

var _reduxForm = __webpack_require__(4);

var _userReducer = __webpack_require__(41);

var _userReducer2 = _interopRequireDefault(_userReducer);

var _newComponent = __webpack_require__(42);

var _newComponent2 = _interopRequireDefault(_newComponent);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var reducers = (0, _redux.combineReducers)({
    user: _userReducer2.default,
    newComp: _newComponent2.default,
    form: _reduxForm.reducer
});

exports.default = reducers;

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = userReducer;

var _constants = __webpack_require__(3);

var initialState = {
    name: null,
    email: null
};
function userReducer() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments[1];

    switch (action.type) {
        case _constants.UPDATE_NAME:
            return _extends({}, state, { name: action.payload.name, email: action.payload.email });
        default:
            return state;
    }
}

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

exports.default = newComp;

var _constants = __webpack_require__(3);

function newComp() {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
    var action = arguments[1];

    switch (action.type) {
        case _constants.NEWCOMP:
            return _extends({}, state, { mewComp: action.payload });
        default:
            return state;
    }
}

// const product = (state = [], action) => {
//     switch (action.type) {
//         case SINGLE_PRODUCT:
//             return {...state,  product: action.product};
//         // case REMOVE_PRODUCT:
//         //     return {...state, products: state.products.filter(prod => prod._id !== action.id), count: state.count-1};
//         default:
//             return state
//     }
// }

/***/ }),
/* 43 */
/***/ (function(module, exports) {

module.exports = require("react-router");

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var customMiddleware = function customMiddleware(store) {
    return function (next) {
        return function (action) {
            return isFunction(action) ? action(store.dispatch, store.getState) : next(action);
        };
    };
};
var isFunction = function isFunction(action) {
    return typeof action === 'function';
};
exports.default = customMiddleware;

/***/ })
/******/ ]);
//# sourceMappingURL=server.js.map