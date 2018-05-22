//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsServices = {

        DataService: {
            type:IdentificationType[IdentificationType.Css],
            value: ".service-card"
        },



    };

export class Services extends BasePage{

    dataService = this.ElementLocator(locatorsServices.DataService);

    // TODO: izvuci Data, Voice, Misc preko data-dc

    async clickDataService(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsServices.DataService)), 10000).then(() =>{
             element.all(by.css('.service-card')).get(0).click();
        })
        await browser.sleep(2000)
    }

    async clickVoiceService(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsServices.DataService)), 10000).then(() =>{
             element.all(by.css('.service-card')).get(1).click();
        })
        await browser.sleep(2000)
    }

    async clickMiscService(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsServices.DataService)), 10000).then(() =>{
             element.all(by.css('.service-card')).get(2).click();
        })
        await browser.sleep(2000)
    }
// -----------------------------------------------------------------------------------------
    async getRouteIdServices(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsServices.DataService)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteIdServicesData(){
        let _url        
        await browser.sleep(1000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteIdServicesVoice(){
        let _url        
        await browser.sleep(1000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteIdServicesMisc(){
        let _url        
        await browser.sleep(1000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

}