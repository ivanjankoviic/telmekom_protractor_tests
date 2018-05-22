//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsInvoices = {

        OtherInvoices: {
            type:IdentificationType[IdentificationType.Id],
            value: "mat-tab-label-0-1"
        },

        // TODO: dodati data-dc 
        NextPage: {
            type:IdentificationType[IdentificationType.Css],
            value: ".mat-paginator-navigation-next"
        },

        PreviosPage: {
            type:IdentificationType[IdentificationType.Css],
            value: ".mat-paginator-navigation-previous"
        },




    };

export class Invoices extends BasePage{

    otherInvoices = this.ElementLocator(locatorsInvoices.OtherInvoices);
    nextPage = this.ElementLocator(locatorsInvoices.NextPage);
    previosPage = this.ElementLocator(locatorsInvoices.PreviosPage);
    

    async getRouteIdInvoices(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsInvoices.OtherInvoices)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async clickOtherInvoices(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsInvoices.OtherInvoices)), 10000).then(() =>{
            this.otherInvoices.click()
        })
        await browser.sleep(700)     
    }

    async clickNextPageTable(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsInvoices.NextPage)), 10000).then(() =>{
            this.nextPage.click()
        })
        // await browser.sleep(2000)       
    }


    async clickPreviousPageTable(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsInvoices.PreviosPage)), 10000).then(() =>{
            this.previosPage.click()
        })
        // await browser.sleep(2000)       
    }




}