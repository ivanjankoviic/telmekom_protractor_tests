//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsProfile = {

        ChangePassword: {
            type:IdentificationType[IdentificationType.Css],
            value: ".change-pswd-btn"
        },

        // TODO: naci nacin da se otvori prvi user na tabeli
        // ACRServicePicture: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: '[ng-reflect-message="ACR Service Sas"]'
        // },    

        FREILogisticsPicture: {
            type:IdentificationType[IdentificationType.Css],
            value: '.user-data-wrapper'
        },  

        IdProfilePicture: {
            type:IdentificationType[IdentificationType.Id],
            value: "test"
        },

    };

export class Profile extends BasePage{

    changePassword = this.ElementLocator(locatorsProfile.ChangePassword);
    // aCRServicePicture = this.ElementLocator(locatorsProfile.ACRServicePicture);
    fREILogisticsPicture = this.ElementLocator(locatorsProfile.FREILogisticsPicture);    
    idProfilePicture = this.ElementLocator(locatorsProfile.IdProfilePicture);
    

    async getRouteProfile(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsProfile.ChangePassword)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteIdProfile(){
        let _url       
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsProfile.IdProfilePicture)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async clickChangePassword(){
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsProfile.ChangePassword)), 10000).then(() =>{
            this.changePassword.click();
        })
    }

    // async clickACRServicePicture(){
    //     await browser.wait(until.presenceOf(this.ElementLocator(locatorsProfile.ACRServicePicture)), 10000).then(() =>{
    //         this.aCRServicePicture.click();
    //     })
    // }

    async clickFREILogisticsPicture(){
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsProfile.FREILogisticsPicture)), 10000).then(() =>{
            this.fREILogisticsPicture.click();
        })
    }


}