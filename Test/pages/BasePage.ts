/**
 * Created by ivan on 31.10.17..
 */
import {$, $$, browser, by, element} from 'protractor';


export enum IdentificationType{
    Xpath,
    ClassName,
    Id,
    Js,
    Css,
    Name,
    // CssContainingText
}

export class BasePage{

    ElementLocator(obj) {
        switch (obj.type) {
            case IdentificationType[IdentificationType.Xpath]:
                return element(by.xpath(obj.value));
            case IdentificationType[IdentificationType.ClassName]:
                return element(by.className(obj.value));
            case IdentificationType[IdentificationType.Id]:
                return element(by.id(obj.value));
            case IdentificationType[IdentificationType.Js]:
                return element(by.js(obj.value));
            case IdentificationType[IdentificationType.Css]:
                return element(by.css(obj.value));
            case IdentificationType[IdentificationType.Name]:
                return element(by.name(obj.value));
                // TODO: naci nacin da se poveze cssContainingText
            // case IdentificationType[IdentificationType.CssContainingText]:
                // return element(by.cssContainingText(obj.value));
            default:
                break;
        }
    }


}