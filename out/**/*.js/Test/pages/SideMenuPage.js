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
exports.locatorsSideMenu = {
    ActivityLog: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[routerlink="/activity-log"]'
    },
    Orders: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[routerlink="/orders"]'
    },
    Invoices: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: "body > app-root > app-main > mat-sidenav-container > mat-sidenav > app-side-menu > div.side-bar-content-container.close-content > mat-nav-list.client-menu.mat-nav-list.close-content > a:nth-child(4) > div > span > mat-icon"
    },
    Services: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Id],
        value: 'services-button'
    },
    Tickets: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        value: '[ng-reflect-message="Tickets"]'
    },
    CallLog: {
        type: BasePage_1.IdentificationType[BasePage_1.IdentificationType.Css],
        // value: "//div//span[contains(md-icon, 'toc')]"  
        value: "body > app-root > app-main > mat-sidenav-container > mat-sidenav > app-side-menu > div.side-bar-content-container.close-content > mat-nav-list.client-menu.mat-nav-list.close-content > a:nth-child(5) > div > span > mat-icon"
    },
};
var SideMenu = /** @class */ (function (_super) {
    __extends(SideMenu, _super);
    function SideMenu() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.activityLog = _this.ElementLocator(exports.locatorsSideMenu.ActivityLog);
        _this.orders = _this.ElementLocator(exports.locatorsSideMenu.Orders);
        _this.invoices = _this.ElementLocator(exports.locatorsSideMenu.Invoices);
        _this.services = _this.ElementLocator(exports.locatorsSideMenu.Services);
        _this.tickets = _this.ElementLocator(exports.locatorsSideMenu.Tickets);
        _this.callLog = _this.ElementLocator(exports.locatorsSideMenu.CallLog);
        return _this;
    }
    SideMenu.prototype.clickActivityLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.ActivityLog)), 10000).then(function () {
                            _this.activityLog.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenu.prototype.clickServices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.Services)), 10000).then(function () {
                            _this.services.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenu.prototype.clickTickets = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.Tickets)), 10000).then(function () {
                            _this.tickets.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenu.prototype.clickCallLog = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.CallLog)), 10000).then(function () {
                            _this.callLog.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenu.prototype.clickInvoices = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: 
                    // await browser.sleep(1000)
                    return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.Invoices)), 10000).then(function () {
                            _this.invoices.click();
                        })];
                    case 1:
                        // await browser.sleep(1000)
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    SideMenu.prototype.clickOrders = function () {
        return __awaiter(this, void 0, void 0, function () {
            var _this = this;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4 /*yield*/, protractor_1.browser.wait(until.elementToBeClickable(this.ElementLocator(exports.locatorsSideMenu.Orders)), 10000).then(function () {
                            _this.orders.click();
                        })];
                    case 1:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    };
    return SideMenu;
}(BasePage_1.BasePage));
exports.SideMenu = SideMenu;
//# sourceMappingURL=SideMenuPage.js.map