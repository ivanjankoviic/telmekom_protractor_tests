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
exports.locatorsHeader = {
    ProfilePicture: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[data-dc-automation="header-profile-picture"]'
    },
    // TODO: ubaciti data-dc za logout dugme
    Logout: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[ng-reflect-trigger="[object HTMLButtonElement]]"'
    },
    ProfileButton: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".mat-menu-ripple.mat-ripple"
    },
    ArrowOpenSideMenu: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[data-dc-automation="move-event-cancel-button"]'
    },
    OpenLanguage: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".language-button"
    },
    CloseBackground: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: ".cdk-overlay-backdrop"
    },
    EnglishLanguage: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[data-dc-automation="header-language-EN"]'
    },
    GermanLanguage: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[data-dc-automation="header-language-DE"]'
    },
    ItalianLanguage: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[data-dc-automation="header-language-IT"]'
    },
    SuperAdminMenu: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '.super-admin-menu'
    },
};
var Header = /** @class */ (function (_super) {
    __extends(Header, _super);
    function Header() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.profilePicture = _this.ElementLocator(exports.locatorsHeader.ProfilePicture);
        _this.profileButton = _this.ElementLocator(exports.locatorsHeader.ProfileButton);
        _this.arrowOpenSideMenu = _this.ElementLocator(exports.locatorsHeader.ArrowOpenSideMenu);
        _this.openLanguage = _this.ElementLocator(exports.locatorsHeader.OpenLanguage);
        _this.closeBackground = _this.ElementLocator(exports.locatorsHeader.CloseBackground);
        _this.englishLanguage = _this.ElementLocator(exports.locatorsHeader.EnglishLanguage);
        _this.germanLanguage = _this.ElementLocator(exports.locatorsHeader.GermanLanguage);
        _this.italianLanguage = _this.ElementLocator(exports.locatorsHeader.ItalianLanguage);
        _this.superAdminMenu = _this.ElementLocator(exports.locatorsHeader.SuperAdminMenu);
        _this.logout = _this.ElementLocator(exports.locatorsHeader.Logout);
        return _this;
    }
    Header.prototype.clickProfilePicture = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.ProfilePicture)), 10000).then(function () {
                            _this.profilePicture.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO:ubaciti data-dc za logout dugme
    // nacin za hvatanje elemenata preko teksta
    Header.prototype.clickLogout = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText('.profile-button', 'Logout'))), 10000).then(function () {
                            protractor_1.element(protractor_1.by.cssContainingText('.profile-button', 'Logout')).click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickProfileButton = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.ProfileButton)), 10000).then(function () {
                            _this.profileButton.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.openSideMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.ArrowOpenSideMenu)), 10000).then(function () {
                            _this.arrowOpenSideMenu.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickOpenLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.OpenLanguage)), 10000).then(function () {
                            _this.openLanguage.click();
                        })
                        // await browser.sleep(2000)        
                    ];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickCloseBackground = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.CloseBackground)), 10000).then(function () {
                            _this.closeBackground.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    // TODO: ubaciti data-dc 
    // nacin za hvatanje elemenata preko teksta
    Header.prototype.clickEnglishLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(protractor_1.element(protractor_1.by.cssContainingText('.mat-menu-item', 'EN'))), 10000).then(function () {
                            protractor_1.element(protractor_1.by.cssContainingText('.mat-menu-item', 'EN')).click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickGermanLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.GermanLanguage)), 10000).then(function () {
                            _this.germanLanguage.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickItalianLanguage = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.ItalianLanguage)), 10000).then(function () {
                            _this.italianLanguage.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    Header.prototype.clickSuperAdminMenu = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsHeader.SuperAdminMenu)), 10000).then(function () {
                            _this.superAdminMenu.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return Header;
}(BasePage_1.BasePage));
exports.Header = Header;
//# sourceMappingURL=HeaderPage.js.map