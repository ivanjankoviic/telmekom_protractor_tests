//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsActivityLog = {

        CalendarActivityLog: {
            type:IdentificationType[IdentificationType.Css],
            value: ".btnpicker"
        },

    };

export class ActivityLog extends BasePage{

    // calendarActivityLog = this.ElementLocator(LocatorsActivityLog.CalendarActivityLog);

    async getRouteActivityLog(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsActivityLog.CalendarActivityLog)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }




}