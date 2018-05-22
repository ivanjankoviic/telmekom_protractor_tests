//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsCallLog = {

        DownloadButton:{
            type:IdentificationType[IdentificationType.Css],
            value: '.downloadButton'            
        },


    };

export class CallLog extends BasePage{

    downloadButton = this.ElementLocator(locatorsCallLog.DownloadButton);


    async getRouteCallLog(){
        let _url        
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsCallLog.DownloadButton)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }


    async clickDownloadButton(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsCallLog.DownloadButton)), 10000).then(() =>{
            this.downloadButton.click();
        })
    }


}