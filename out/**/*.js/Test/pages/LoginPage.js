"use strict";
//import the class
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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = y[op[0] & 2 ? "return" : op[0] ? "throw" : "next"]) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [0, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var protractor_1 = require("protractor");
var BasePage_1 = require("./BasePage");
// import * as chai from 'chai';
// import * as chaiAsPromised from 'chai-as-promised';
// chai.use(chaiAsPromised);
var until = protractor_1.protractor.ExpectedConditions;
exports.locatorsLoginPage = {
    LoginButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".md-raised.login-btn.mat-button"
    },
    ForgotPasswordButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".forgot-password"
    },
    SignInForgotPassword: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".signin"
    },
    Username: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Name],
        value: "username"
    },
    Password: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Name],
        value: "pass"
    },
    ErorrMessage: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".error-msg"
    },
    ErorrMessageUsername: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".mat-error"
    },
    ErorrMessagePassword: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "mat-error-1"
    },
    ErorrMessageUsernameForgotPassword: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "mat-error-2"
    },
    ShowPassEye: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".show-pass"
    },
    SigninForgotPassword: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".signin"
    },
};
var LoginPage = /** @class */ (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.loginButton = _this.ElementLocator(exports.locatorsLoginPage.LoginButton);
        _this.signInForgotPassword = _this.ElementLocator(exports.locatorsLoginPage.SignInForgotPassword);
        _this.erorrMessage = _this.ElementLocator(exports.locatorsLoginPage.ErorrMessage);
        _this.erorrMessageUsername = _this.ElementLocator(exports.locatorsLoginPage.ErorrMessageUsername);
        _this.erorrMessagePassword = _this.ElementLocator(exports.locatorsLoginPage.ErorrMessagePassword);
        _this.erorrMessageUsernameForgotPassword = _this.ElementLocator(exports.locatorsLoginPage.ErorrMessageUsernameForgotPassword);
        _this.showPassEye = _this.ElementLocator(exports.locatorsLoginPage.ShowPassEye);
        _this.signinForgotPassword = _this.ElementLocator(exports.locatorsLoginPage.SigninForgotPassword);
        _this.password = _this.ElementLocator(exports.locatorsLoginPage.Password);
        return _this;
    }
    LoginPage.prototype.getRouteLogin = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.LoginButton)), 10000).then(function () {
                            protractor_1.browser.getCurrentUrl().then(function (value) {
                                _url = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _url];
                }
            });
        });
    };
    LoginPage.prototype.getRouteForgotPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.SignInForgotPassword)), 10000).then(function () {
                            protractor_1.browser.getCurrentUrl().then(function (value) {
                                _url = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _url];
                }
            });
        });
    };
    LoginPage.prototype.checkErrorMessage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.ErorrMessage)), 10000).then(function () {
                            protractor_1.element(protractor_1.by.css('.error-msg > span')).getText().then(function (value) {
                                _text = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _text];
                }
            });
        });
    };
    LoginPage.prototype.checkErrorMessageUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsLoginPage.ErorrMessageUsername)), 4500).then(function () {
                            _this.erorrMessageUsername.getText().then(function (value) {
                                _text = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _text];
                }
            });
        });
    };
    LoginPage.prototype.checkErrorMessagePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsLoginPage.ErorrMessagePassword)), 10000).then(function () {
                            _this.erorrMessagePassword.getText().then(function (value) {
                                _text = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _text];
                }
            });
        });
    };
    LoginPage.prototype.checkErorrMessageUsernameForgotPassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _text;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsLoginPage.ErorrMessageUsernameForgotPassword)), 10000).then(function () {
                            _this.erorrMessageUsernameForgotPassword.getText().then(function (value) {
                                _text = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _text];
                }
            });
        });
    };
    LoginPage.prototype.refreshPage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.refresh()];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.clickShowPassEye = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.ShowPassEye)), 10000).then(function () {
                            _this.showPassEye.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.clearInputFiedUsername = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.ShowPassEye)), 10000).then(function () {
                            _this.showPassEye.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.clickSignIn = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.SigninForgotPassword)), 10000).then(function () {
                            _this.signinForgotPassword.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    LoginPage.prototype.getTypePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            var _type;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsLoginPage.ShowPassEye)), 10000).then(function () {
                            _this.password.getAttribute('type').then(function (value) {
                                _type = value;
                            });
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/, _type];
                }
            });
        });
    };
    LoginPage.prototype.getTitle = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _title;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)), 10000).then(() =>{
                    return [4 /*yield*/, protractor_1.browser.getTitle().then(function (value) {
                            _title = value;
                            // }) 
                        })];
                    case 1:
                        // await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)), 10000).then(() =>{
                        _a.sent();
                        return [2 /*return*/, _title];
                }
            });
        });
    };
    return LoginPage;
}(BasePage_1.BasePage));
exports.LoginPage = LoginPage;
//# sourceMappingURL=LoginPage.js.map