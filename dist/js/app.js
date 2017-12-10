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
var WrapperComponent_1 = __webpack_require__(3);
__webpack_require__(16);
var App = /** @class */ (function () {
    function App() {
        this.init();
    }
    App.prototype.init = function () {
        ReactDOM.render(React.createElement(WrapperComponent_1.WrapperComponent, null), document.getElementById('app'));
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
var HeaderComponent_1 = __webpack_require__(4);
var OptionsComponent_1 = __webpack_require__(5);
var SideBarComponent_1 = __webpack_require__(6);
var EducationComponent_1 = __webpack_require__(7);
var EmploymentComponent_1 = __webpack_require__(9);
var ProfileComponent_1 = __webpack_require__(11);
var SkillComponent_1 = __webpack_require__(14);
var WrapperComponent = /** @class */ (function (_super) {
    __extends(WrapperComponent, _super);
    function WrapperComponent(props) {
        return _super.call(this, props) || this;
    }
    WrapperComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'wrapper' },
            React.createElement(HeaderComponent_1.HeaderComponent, null),
            React.createElement(SideBarComponent_1.SideBarComponent, null),
            React.createElement(OptionsComponent_1.OptionsComponent, null),
            React.createElement("main", { className: 'main' },
                React.createElement(ProfileComponent_1.ProfileComponent, null),
                React.createElement(EmploymentComponent_1.EmploymentComponent, null),
                React.createElement(EducationComponent_1.EducationComponent, null),
                React.createElement(SkillComponent_1.SkillComponent, null))));
    };
    return WrapperComponent;
}(React.Component));
exports.WrapperComponent = WrapperComponent;


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
var HeaderComponent = /** @class */ (function (_super) {
    __extends(HeaderComponent, _super);
    function HeaderComponent(props) {
        return _super.call(this, props) || this;
    }
    HeaderComponent.prototype.render = function () {
        return (React.createElement("header", { className: 'header navbar navbar--spacebetween' },
            React.createElement("div", { className: 'navbar__brand' },
                React.createElement("img", { src: './assets/images/logo.svg', alt: 'My Vitae', title: 'My Vitae' })),
            React.createElement("div", { className: 'navbar__menu' },
                React.createElement("ul", { className: 'list' },
                    React.createElement("li", { className: 'list__item' },
                        React.createElement("div", { className: 'flex flex--column ml-10' },
                            React.createElement("span", { className: 'semibold small mr-10' }, "Mauro Reis Vieira")),
                        React.createElement("img", { src: 'https://pbs.twimg.com/profile_images/913828202832973826/1WWUHoo5_400x400.jpg', className: 'list__pic list__pic--small' }))))));
    };
    return HeaderComponent;
}(React.Component));
exports.HeaderComponent = HeaderComponent;


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
var OptionsComponent = /** @class */ (function (_super) {
    __extends(OptionsComponent, _super);
    function OptionsComponent(props) {
        return _super.call(this, props) || this;
    }
    OptionsComponent.prototype.handleKeyPress = function (event) {
        console.log(event.target.value);
        if (event.key === 'Enter') {
            console.log('enter press here!');
        }
    };
    OptionsComponent.prototype.render = function () {
        return (React.createElement("aside", { className: 'aside' },
            React.createElement("form", { action: '', className: 'form mt-0' },
                React.createElement("div", { className: 'row' },
                    React.createElement("div", { className: 'col-large-12' },
                        React.createElement("div", { className: 'aside__header' },
                            React.createElement("h4", { className: 'text-right' }, "Personal Information"),
                            React.createElement("span", { className: 'uppercase small' }, "Write your personal information to bl\u00E1 bl\u00E1 bl\u00E1"))),
                    React.createElement("div", { className: 'form__field col-large-12' },
                        React.createElement("label", { htmlFor: 'postionApplying', className: 'form__label' }, "Position you are applying for"),
                        React.createElement("input", { id: 'postionApplying', type: 'text', defaultValue: 'Senio Front end Developer', onKeyUp: this.handleKeyPress, className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'firstName', className: 'form__label' }, "First Name"),
                        React.createElement("input", { id: 'firstName', type: 'text', defaultValue: 'Mauro', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'lastName', className: 'form__label' }, "Last Name"),
                        React.createElement("input", { id: 'lastName', type: 'text', defaultValue: 'Reis Vieira', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'phoneNumber', className: 'form__label' }, "Phone Number"),
                        React.createElement("input", { id: 'phoneNumber', type: 'text', defaultValue: '917771054', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldEmail', className: 'form__label' }, "Email"),
                        React.createElement("input", { id: 'fieldEmail', type: 'text', defaultValue: 'mauroreisvieira@gmail.com', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldBirth', className: 'form__label' }, "Place of birth"),
                        React.createElement("input", { id: 'fieldBirth', type: 'text', defaultValue: 'Tomar', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldDateBirth', className: 'form__label' }, "Date of birth"),
                        React.createElement("input", { id: 'fieldDateBirth', type: 'text', defaultValue: '1990-06-01', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldDriving', className: 'form__label' }, "Driving License"),
                        React.createElement("input", { id: 'fieldDriving', type: 'text', defaultValue: 'A e A1, B e B1 (SA – 195984 5)', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldNationality', className: 'form__label' }, "Nationality"),
                        React.createElement("input", { id: 'fieldNationality', type: 'text', defaultValue: 'Portuguese', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldCity', className: 'form__label' }, "City"),
                        React.createElement("input", { id: 'fieldCity', type: 'text', defaultValue: 'Leiria', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldCode', className: 'form__label' }, "Postal Code"),
                        React.createElement("input", { id: 'fieldCode', type: 'text', defaultValue: '2410-112', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldAddress', className: 'form__label' }, "Address"),
                        React.createElement("input", { id: 'fieldAddress', type: 'text', defaultValue: 'Rua João Paulo II LT.4 3º E', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-6' },
                        React.createElement("label", { htmlFor: 'fieldCountry', className: 'form__label' }, "Country"),
                        React.createElement("input", { id: 'fieldCountry', type: 'text', defaultValue: 'Portugal', placeholder: '', className: 'form__input form__label--large' })),
                    React.createElement("div", { className: 'form__field col-large-12' },
                        React.createElement("label", { htmlFor: 'fieldMessage', className: 'form__label' }, "Professional Summary"),
                        React.createElement("textarea", { id: 'fieldMessage', className: 'form__textarea', rows: 6 }, "I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an \"Apple Fanboy\", as well as a Sublime Text evangelist (I love this text editor for code).")),
                    React.createElement("div", { className: 'form__actions col-large-6' },
                        React.createElement("button", { className: 'button button--large button--info' }, "Save Changes"))))));
    };
    return OptionsComponent;
}(React.Component));
exports.OptionsComponent = OptionsComponent;


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
var SideBarComponent = /** @class */ (function (_super) {
    __extends(SideBarComponent, _super);
    function SideBarComponent(props) {
        return _super.call(this, props) || this;
    }
    SideBarComponent.prototype.render = function () {
        return (React.createElement("nav", { className: 'sidebar' },
            React.createElement("ul", { className: 'menu menu--inherit' },
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right is-active', href: '', title: '', "data-tooltip": 'Personal Information' },
                        React.createElement("i", { className: 'icon ion-person' }))),
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right', href: '', title: '', "data-tooltip": 'Employment History' },
                        React.createElement("i", { className: 'icon ion-ios-briefcase' }))),
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right', href: '', title: '', "data-tooltip": 'Education' },
                        React.createElement("i", { className: 'icon ion-university' }))),
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right', href: '', title: '', "data-tooltip": 'Skills' },
                        React.createElement("i", { className: 'icon ion-clipboard' }))),
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right', href: '', title: '', "data-tooltip": 'Languages' },
                        React.createElement("i", { className: 'icon ion-android-globe' }))),
                React.createElement("li", { className: 'menu__item' },
                    React.createElement("a", { className: 'menu__link tooltip tooltip--right', href: '', title: '', "data-tooltip": 'Hobbies' },
                        React.createElement("i", { className: 'icon ion-ios-heart' }))))));
    };
    return SideBarComponent;
}(React.Component));
exports.SideBarComponent = SideBarComponent;


/***/ }),
/* 7 */
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
__webpack_require__(8);
var EducationComponent = /** @class */ (function (_super) {
    __extends(EducationComponent, _super);
    function EducationComponent(props) {
        return _super.call(this, props) || this;
    }
    EducationComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-education' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-12' },
                    React.createElement("h5", { className: 'x-bold' }, "Education")),
                React.createElement("div", { className: 'col-large-12 my-20' },
                    React.createElement("div", { className: 'flex flex--row flex--content-between' },
                        React.createElement("div", { className: 'flex flex--column vw-2' },
                            React.createElement("p", null, "Nov 2011 - Jul 2013"),
                            React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria")),
                        React.createElement("div", { className: 'flex flex--column col-large' },
                            React.createElement("p", null, "Intituto Polit\u00E9cnico de Leiria"),
                            React.createElement("p", { className: 'text-grey mb-20' }, "CET"),
                            React.createElement("p", null, "Multimedia Technologies"),
                            React.createElement("p", null, "Data Base"),
                            React.createElement("p", null, "Development of Web Applications I and II")))),
                React.createElement("div", { className: 'col-large-12 my-20' },
                    React.createElement("div", { className: 'flex flex--row flex--content-between' },
                        React.createElement("div", { className: 'flex flex--column vw-2' },
                            React.createElement("p", null, "Sep 2013 - Present"),
                            React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria")),
                        React.createElement("div", { className: 'flex flex--column col-large' },
                            React.createElement("p", null, "Intituto Polit\u00E9cnico de Leiria"),
                            React.createElement("p", { className: 'text-salmon' }, "Computer Engineering")))))));
    };
    return EducationComponent;
}(React.Component));
exports.EducationComponent = EducationComponent;


/***/ }),
/* 8 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 9 */
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
__webpack_require__(10);
var EmploymentComponent = /** @class */ (function (_super) {
    __extends(EmploymentComponent, _super);
    function EmploymentComponent(props) {
        return _super.call(this, props) || this;
    }
    EmploymentComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-employment' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-12' },
                    React.createElement("h5", { className: 'x-bold' }, "Employment History")),
                React.createElement("div", { className: 'col-large-12 my-20' },
                    React.createElement("div", { className: 'flex flex--row flex--content-between' },
                        React.createElement("div", { className: 'flex flex--column vw-2' },
                            React.createElement("p", null, "Apr 2013 - May 2016"),
                            React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria")),
                        React.createElement("div", { className: 'flex flex--column col-large' },
                            React.createElement("p", null, "Web Developer"),
                            React.createElement("p", { className: 'text-salmon' }, "WayAcross")))),
                React.createElement("div", { className: 'col-large-12 my-20' },
                    React.createElement("div", { className: 'flex flex--row flex--content-between' },
                        React.createElement("div", { className: 'flex flex--column vw-2' },
                            React.createElement("p", null, "May 2016 - Oct 2017"),
                            React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria")),
                        React.createElement("div", { className: 'flex flex--column col-large' },
                            React.createElement("p", null, "Front end Developer"),
                            React.createElement("p", { className: 'text-salmon' }, "Hi INTERACTIVE")))),
                React.createElement("div", { className: 'col-large-12 my-20' },
                    React.createElement("div", { className: 'flex flex--row flex--content-between' },
                        React.createElement("div", { className: 'flex flex--column vw-2' },
                            React.createElement("p", null, "Oct 2017 - Present"),
                            React.createElement("p", { className: 'uppercase text-salmon' }, "Leiria")),
                        React.createElement("div", { className: 'flex flex--column col-large' },
                            React.createElement("p", null, "Senior Front end Developer"),
                            React.createElement("p", { className: 'text-salmon' }, "Namecheap")))))));
    };
    return EmploymentComponent;
}(React.Component));
exports.EmploymentComponent = EmploymentComponent;


/***/ }),
/* 10 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 11 */
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
var User_1 = __webpack_require__(12);
__webpack_require__(13);
var ProfileComponent = /** @class */ (function (_super) {
    __extends(ProfileComponent, _super);
    function ProfileComponent(props) {
        var _this = _super.call(this, props) || this;
        _this.user = new User_1.default('Mauro Reis Vieir', 27);
        return _this;
    }
    ProfileComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-profile' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-9' },
                    React.createElement("h1", { className: 'x-large semibold' },
                        "Mauro Reis Vieira ",
                        React.createElement("br", null),
                        React.createElement("span", { className: 'thin medium' }, "Senio Front end Developer"))),
                React.createElement("div", { className: 'col-large-3 text-right' },
                    React.createElement("div", null,
                        React.createElement("img", { src: "https://pbs.twimg.com/profile_images/913828202832973826/1WWUHoo5_400x400.jpg", className: 'w-7 h-7 circle text-right' })))),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list text-salmon uppercase' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Address")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Email")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Nationality")))),
                React.createElement("div", { className: 'col-large-4' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Rua Jo\u00E3o Paulo II LT.4 3\u00BA E")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "mauroreisvieira@gmail.com")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Portuguese")))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list text-salmon uppercase' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Phone")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Date / Place of Birth")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Driving License")))),
                React.createElement("div", { className: 'col-large-4' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "917771054")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "1990-06-01 / Tomar")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "A e A1, B e B1 (SA \u2013 195984 5)"))))),
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-4' },
                    React.createElement("h5", { className: 'x-bold' }, "Professional Summary")),
                React.createElement("div", { className: 'col-large-8 offset-large-4' },
                    React.createElement("p", null, "I'm a Portuguese developer, fascinated by web development, who likes what they do. I love to learn, and share my knowledge, in order to enrich my portfolio. I'm an \"Apple Fanboy\", as well as a Sublime Text evangelist (I love this text editor for code).")))));
    };
    return ProfileComponent;
}(React.Component));
exports.ProfileComponent = ProfileComponent;


/***/ }),
/* 12 */
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
/* 13 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

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
__webpack_require__(15);
var SkillComponent = /** @class */ (function (_super) {
    __extends(SkillComponent, _super);
    function SkillComponent(props) {
        return _super.call(this, props) || this;
    }
    SkillComponent.prototype.dotSkill = function (num) {
        var arrItem = [];
        for (var i = 1; i < 6; ++i) {
            if (i <= num) {
                arrItem.push('●');
            }
            else {
                arrItem.push('○');
            }
        }
        var listItems = arrItem.map(function (v, index) {
            return React.createElement("span", { key: index }, v);
        });
        return listItems;
    };
    SkillComponent.prototype.render = function () {
        return (React.createElement("div", { className: 'app-skill' },
            React.createElement("div", { className: 'row' },
                React.createElement("div", { className: 'col-large-12' },
                    React.createElement("h5", { className: 'x-bold' }, "Skills")),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "HTML")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "CSS/SCSS")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "JavaScript")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Typescript")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "ReactJS")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "VueJS")))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(5))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(5))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(3))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(3))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(3))))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "PHP")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Laravel")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Zend")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "PHP")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Laravel")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Zend")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", null, "Codeigniter")))),
                React.createElement("div", { className: 'col-large-2' },
                    React.createElement("ul", { className: 'list' },
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))),
                        React.createElement("li", { className: 'list__item' },
                            React.createElement("p", { className: 'text-salmon' }, this.dotSkill(4))))))));
    };
    return SkillComponent;
}(React.Component));
exports.SkillComponent = SkillComponent;


/***/ }),
/* 15 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 16 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ })
/******/ ]);
//# sourceMappingURL=app.js.map