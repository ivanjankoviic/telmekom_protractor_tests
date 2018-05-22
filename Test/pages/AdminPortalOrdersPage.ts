//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsOrders = {

        OrdersTableTitle: {
            type:IdentificationType[IdentificationType.Css],
            value: ".header-table-title"
        },

    };

export class Orders extends BasePage{

    // calendarActivityLog = this.ElementLocator(LocatorsActivityLog.CalendarActivityLog);

    async getRouteOrders(){
        let _url        
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsOrders.OrdersTableTitle)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }




}