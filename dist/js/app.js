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
/******/ 	__webpack_require__.p = "/dist";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = React;

/***/ }),
/* 1 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var ReactDOM = __webpack_require__(2);
var ResumeComponent_1 = __webpack_require__(14);
__webpack_require__(20);
var App = /** @class */ (function () {
    function App() {
        this.init();
    }
    App.prototype.init = function () {
        ReactDOM.render(React.createElement(ResumeComponent_1.ResumeComponent, null), document.body);
    };
    return App;
}());
exports.default = App;
new App();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = ReactDOM;

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var EmploymentComponent_1 = __webpack_require__(15);
var ProfileComponent_1 = __webpack_require__(6);
var MainComponent = /** @class */ (function (_super) {
    __extends(MainComponent, _super);
    function MainComponent(props) {
        return _super.call(this, props) || this;
    }
    MainComponent.prototype.render = function () {
        return (React.createElement("main", { className: 'main' },
            React.createElement(ProfileComponent_1.ProfileComponent, null),
            React.createElement(EmploymentComponent_1.EmploymentComponent, null)));
    };
    return MainComponent;
}(React.Component));
exports.MainComponent = MainComponent;


/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FooterComponent = /** @class */ (function (_super) {
    __extends(FooterComponent, _super);
    function FooterComponent(props) {
        return _super.call(this, props) || this;
    }
    FooterComponent.prototype.render = function () {
        return (React.createElement("footer", { className: 'footer' },
            React.createElement("p", null, "Footer")));
    };
    return FooterComponent;
}(React.Component));
exports.FooterComponent = FooterComponent;


/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(props) {
        return _super.call(this, props) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("header", { className: 'header navbar navbar--spacebetween bg-blue text-white' },
            React.createElement("div", { className: 'navbar__brand' },
                React.createElement("a", { href: '/', title: 'Resume' },
                    React.createElement("span", { className: 'uppercase semibold text-white large' }, "Resume"))),
            React.createElement("div", { className: 'navbar__menu' },
                React.createElement("ul", { className: 'menu menu--horizontal menu--inherit' },
                    React.createElement("li", { className: 'menu__item' },
                        React.createElement("a", { className: 'menu__link', href: 'installation.html', title: 'My Resume' }, "Resumes")),
                    React.createElement("li", { className: 'menu__item' },
                        React.createElement("a", { className: 'menu__link', href: '', title: 'Profile' }, "Profile")),
                    React.createElement("li", { className: 'menu__item' },
                        React.createElement("a", { className: 'menu__link', href: 'https://github.com/maurovieirareis/resume', title: 'Github' }, "Github"))))));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var User_1 = __webpack_require__(7);
__webpack_require__(16);
var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.user = new User_1.default('Mauro', 27);
        return _this;
    }
    ProfileComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-profile' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-4' },
                    React.createElement("h4", { className: 'x-bold' }, "Profile")),
                React.createElement("div", { className: 'col-large-8' },
                    React.createElement("p", null, "I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an \"Apple Fanboy\", as well as a Sublime Text evangelist (I love this text editor for code).")))));
    };
    return ProfileComponent;
}(React.Component));
exports.ProfileComponent = ProfileComponent;


/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

Object.defineProperty(exports, "__esModule", { value: true });
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    return User;
}());
exports.default = User;


/***/ }),
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var OptionsComponent = /** @class */ (function (_super) {
    __extends(OptionsComponent, _super);
    function OptionsComponent(props) {
        return _super.call(this, props) || this;
    }
    OptionsComponent.prototype.render = function () {
        return (React.createElement("aside", { className: 'aside' },
            React.createElement("form", { action: '', className: 'form' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'form__field col-large-12' },
                        React.createElement("label", { htmlFor: 'postionApplying', className: 'form__label' }, "Position you are applying for"),
                        React.createElement("input", { id: 'postionApplying', type: 'text', value: 'Senio Front end Developer', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'firstName', className: 'form__label' }, "First Name"),
                        React.createElement("input", { id: 'firstName', type: 'text', value: 'Mauro', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'lastName', className: 'form__label' }, "Last Name"),
                        React.createElement("input", { id: 'lastName', type: 'text', value: 'Reis Vieirs', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'phoneNumber', className: 'form__label' }, "Phone Number"),
                        React.createElement("input", { id: 'phoneNumber', type: 'text', value: '917771054', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldEmail', className: 'form__label' }, "Email"),
                        React.createElement("input", { id: 'fieldEmail', type: 'email', value: 'mauroreisvieira@gmail.com', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-12' },
                        React.createElement("label", { htmlFor: 'fieldMessage', className: 'form__label' }, "Message"),
                        React.createElement("textarea", { id: 'fieldMessage', className: 'form__textarea', rows: '6' }, "I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an \"Apple Fanboy\", as well as a Sublime Text evangelist (I love this text editor for code).")),
                    React.createElement("div", { className: 'form__actions col-large-6' },
                        React.createElement("button", { className: 'button button--large button--success' }, "Save Changes"))))));
    };
    return OptionsComponent;
}(React.Component));
exports.OptionsComponent = OptionsComponent;


/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
var FooterComponent_1 = __webpack_require__(4);
var HeaderComponent_1 = __webpack_require__(5);
var OptionsComponent_1 = __webpack_require__(13);
var MainComponent_1 = __webpack_require__(3);
var ResumeComponent = /** @class */ (function (_super) {
    __extends(ResumeComponent, _super);
    function ResumeComponent(props) {
        return _super.call(this, props) || this;
    }
    ResumeComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'wrapper' },
            React.createElement(HeaderComponent_1.HeaderComponent, null),
            React.createElement(OptionsComponent_1.OptionsComponent, null),
            React.createElement(MainComponent_1.MainComponent, null),
            React.createElement(FooterComponent_1.FooterComponent, null)));
    };
    return ResumeComponent;
}(React.Component));
exports.ResumeComponent = ResumeComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var React = __webpack_require__(0);
__webpack_require__(18);
var EmploymentComponent = /** @class */ (function (_super) {
    __extends(EmploymentComponent, _super);
    function EmploymentComponent(props) {
        return _super.call(this, props) || this;
    }
    EmploymentComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-employment' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-12' },
                    React.createElement("h4", { className: 'x-bold' }, "Employment History")),
                React.createElement("div", { className: 'col-large-4' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "Apr 2013 - May 2016"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria"))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "May 2016 - Oct 2017"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria"))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "Oct 2017 - Present"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria"))))),
                React.createElement("div", { className: 'col-large-8' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "Web Developer"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "WayAcross"))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "Senio Front end Developer"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "Hi INTERACTIVE"))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("div", { className: 'flex flex--column' },
                                React.createElement("p", null, "Senio Front end Developer"),
                                React.createElement("p", { className: 'uppercase text-salmon' }, "Namecheap"))))))));
    };
    return EmploymentComponent;
}(React.Component));
exports.EmploymentComponent = EmploymentComponent;


/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 17 */,
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */,
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map