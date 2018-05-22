//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsClientPortal = {

        ClientPortalHeading: {
            type:IdentificationType[IdentificationType.Css],
            value: ".header-table-title"
        },

        CalendarInputField: {
            type:IdentificationType[IdentificationType.Css],
            value: ".selection"
        },

        NextPage: {
            type:IdentificationType[IdentificationType.Css],
            value: ".mat-paginator-navigation-next"
        },

    };

export class ClientPortal extends BasePage{

    clientPortalHeading = this.ElementLocator(locatorsClientPortal.ClientPortalHeading);
    calendarInputField = this.ElementLocator(locatorsClientPortal.CalendarInputField);
    nextPage = this.ElementLocator(locatorsClientPortal.NextPage);
    

    async getRouteClientPortal(){
        let _url        
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsClientPortal.ClientPortalHeading)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }


    async calendarFieldInput(daySearch){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsClientPortal.CalendarInputField)), 10000).then(() =>{
            this.calendarInputField.click().then(() =>{
                this.calendarInputField.clear().then(() =>{ 
                    this.calendarInputField.sendKeys(daySearch).then(() =>{ 
                        browser.actions().sendKeys(protractor.Key.ENTER).perform();
                   })     
                })
             })
        })
    }



    async getHeadingClientText(){
        let _text
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsClientPortal.ClientPortalHeading)), 10000).then(() =>{
            this.clientPortalHeading.getText().then((value) =>{
                _text = value
        })
    })    
          return _text     
    
    }










    }
