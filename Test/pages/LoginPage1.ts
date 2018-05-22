//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

// import * as chai from 'chai';
// import * as chaiAsPromised from 'chai-as-promised';
// chai.use(chaiAsPromised);


var until = protractor.ExpectedConditions;


   export const locatorsLoginPage1 = {

        LoginButtonOOB: {
            type:IdentificationType[IdentificationType.Id],
            value: "username"
        },
        PasswordOOB: {
            type:IdentificationType[IdentificationType.Id],
            value: "password"
        },




        // SignInForgotPassword: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: ".signin"
        // },

        // Username: {
        //     type:IdentificationType[IdentificationType.Name],
        //     value: "username"            
        // },

        // Password: {
        //     type:IdentificationType[IdentificationType.Name],
        //     value: "pass"            
        // },

        // ErorrMessage: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: ".error-msg"            
        // },

        // ErorrMessageUsername: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: ".mat-error"            
        // },

        // ErorrMessagePassword: {
        //     type:IdentificationType[IdentificationType.Id],
        //     value: "mat-error-1"            
        // },

        // ErorrMessageUsernameForgotPassword: {
        //     type:IdentificationType[IdentificationType.Id],
        //     value: "mat-error-2"            
        // },

        // ShowPassEye: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: ".show-pass"            
        // },

        // SigninForgotPassword: {
        //     type:IdentificationType[IdentificationType.Css],
        //     value: ".signin"            
        // },

    };

export class LoginPage1 extends BasePage{

    loginButtonOOB = this.ElementLocator(locatorsLoginPage1.LoginButtonOOB);
    passwordOOB = this.ElementLocator(locatorsLoginPage1.PasswordOOB);



    // erorrMessage = this.ElementLocator(locatorsLoginPage.ErorrMessage);
    // erorrMessageUsername = this.ElementLocator(locatorsLoginPage.ErorrMessageUsername);
    // erorrMessagePassword = this.ElementLocator(locatorsLoginPage.ErorrMessagePassword); 
    // erorrMessageUsernameForgotPassword = this.ElementLocator(locatorsLoginPage.ErorrMessageUsernameForgotPassword);    
    // showPassEye = this.ElementLocator(locatorsLoginPage.ShowPassEye);
    // signinForgotPassword = this.ElementLocator(locatorsLoginPage.SigninForgotPassword);
    // password = this.ElementLocator(locatorsLoginPage.Password);
    


    async getRouteLoginOOB(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage1.PasswordOOB)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

 




}