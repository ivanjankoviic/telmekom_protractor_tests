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
var until = protractor_1.protractor.ExpectedConditions;
exports.locatorsProfile = {
    ChangePassword: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".change-pswd-btn"
    },
    // TODO: naci nacin da se otvori prvi user na tabeli
    // ACRServicePicture: {
    //     type:IdentificationType[IdentificationType.Css],
    //     value: '[ng-reflect-message="ACR Service Sas"]'
    // },    
    FREILogisticsPicture: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '.user-data-wrapper'
    },
    IdProfilePicture: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: "test"
    },
};
var Profile = /** @class */ (function (_super) {
    __extends(Profile, _super);
    function Profile() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.changePassword = _this.ElementLocator(exports.locatorsProfile.ChangePassword);
        // aCRServicePicture = this.ElementLocator(locatorsProfile.ACRServicePicture);
        _this.fREILogisticsPicture = _this.ElementLocator(exports.locatorsProfile.FREILogisticsPicture);
        _this.idProfilePicture = _this.ElementLocator(exports.locatorsProfile.IdProfilePicture);
        return _this;
    }
    Profile.prototype.getRouteProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsProfile.ChangePassword)), 10000).then(function () {
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
    Profile.prototype.getRouteIdProfile = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _url;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsProfile.IdProfilePicture)), 10000).then(function () {
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
    Profile.prototype.clickChangePassword = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsProfile.ChangePassword)), 10000).then(function () {
                            _this.changePassword.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // async clickACRServicePicture(){
    //     await browser.wait(until.presenceOf(this.ElementLocator(locatorsProfile.ACRServicePicture)), 10000).then(() =>{
    //         this.aCRServicePicture.click();
    //     })
    // }
    Profile.prototype.clickFREILogisticsPicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.presenceOf(this.ElementLocator(exports.locatorsProfile.FREILogisticsPicture)), 10000).then(function () {
                            _this.fREILogisticsPicture.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Profile;
}(BasePage_1.BasePage));
exports.Profile = Profile;
//# sourceMappingURL=ProfilePage.js.map