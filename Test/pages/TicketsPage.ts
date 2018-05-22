//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsTickets = {

        SearchField:{
            type:IdentificationType[IdentificationType.Css],
            value: '.input-field'            
        },

        UserTickets:{
            type:IdentificationType[IdentificationType.Css],
            value: '.user-name'            
        },

        UserTicketsPicture:{
            type:IdentificationType[IdentificationType.Id],
            value: 'test'            
        },

    };

export class Tickets extends BasePage{

    searchField = this.ElementLocator(locatorsTickets.SearchField);
    userTickets = this.ElementLocator(locatorsTickets.UserTickets);
    userTicketsPicture = this.ElementLocator(locatorsTickets.UserTicketsPicture);
    

    async getRouteIdTickets(){
        let _url        
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsTickets.SearchField)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteIdTicketsIDT(){
        let _url        
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsTickets.UserTicketsPicture)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async clickUserTickets(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsTickets.UserTickets)), 10000).then(() =>{
            this.userTickets.click();
        })
    }


}