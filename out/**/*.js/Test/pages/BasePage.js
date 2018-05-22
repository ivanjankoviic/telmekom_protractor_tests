"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Created by ivan on 31.10.17..
 */
var protractor_1 = require("protractor");
var IdentificationType;
(function (IdentificationType) {
    IdentificationType[IdentificationType["Xpath"] = 0] = "Xpath";
    IdentificationType[IdentificationType["ClassName"] = 1] = "ClassName";
    IdentificationType[IdentificationType["Id"] = 2] = "Id";
    IdentificationType[IdentificationType["Js"] = 3] = "Js";
    IdentificationType[IdentificationType["Css"] = 4] = "Css";
    IdentificationType[IdentificationType["Name"] = 5] = "Name";
    // CssContainingText
})(IdentificationType = exports.IdentificationType || (exports.IdentificationType = {}));
var BasePage = /** @class */ (function () {
    function BasePage() {
    }
    BasePage.prototype.ElementLocator = function (obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return protractor_1.element(protractor_1.by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return protractor_1.element(protractor_1.by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return protractor_1.element(protractor_1.by.id(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return protractor_1.element(protractor_1.by.js(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return protractor_1.element(protractor_1.by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return protractor_1.element(protractor_1.by.name(obj.value));
            // TODO: naci nacin da se poveze cssContainingText
            // case IdentificationType[IdentificationType.CssContainingText]:
            // return element(by.cssContainingText(obj.value));
            default:
                break;
        }
    };
    return BasePage;
}());
exports.BasePage = BasePage;
//# sourceMappingURL=BasePage.js.map