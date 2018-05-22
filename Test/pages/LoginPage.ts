//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

// import * as chai from 'chai';
// import * as chaiAsPromised from 'chai-as-promised';
// chai.use(chaiAsPromised);


var until = protractor.ExpectedConditions;


   export const locatorsLoginPage = {

        LoginButton: {
            type:IdentificationType[IdentificationType.Css],
            value: ".md-raised.login-btn.mat-button"
        },
        ForgotPasswordButton: {
            type:IdentificationType[IdentificationType.Css],
            value: ".forgot-password"
        },
        SignInForgotPassword: {
            type:IdentificationType[IdentificationType.Css],
            value: ".signin"
        },

        Username: {
            type:IdentificationType[IdentificationType.Name],
            value: "username"            
        },

        Password: {
            type:IdentificationType[IdentificationType.Name],
            value: "pass"            
        },

        ErorrMessage: {
            type:IdentificationType[IdentificationType.Css],
            value: ".error-msg"            
        },

        ErorrMessageUsername: {
            type:IdentificationType[IdentificationType.Css],
            value: ".mat-error"            
        },

        ErorrMessagePassword: {
            type:IdentificationType[IdentificationType.Id],
            value: "mat-error-1"            
        },

        ErorrMessageUsernameForgotPassword: {
            type:IdentificationType[IdentificationType.Id],
            value: "mat-error-2"            
        },

        ShowPassEye: {
            type:IdentificationType[IdentificationType.Css],
            value: ".show-pass"            
        },

        SigninForgotPassword: {
            type:IdentificationType[IdentificationType.Css],
            value: ".signin"            
        },

    };

export class LoginPage extends BasePage{

    loginButton = this.ElementLocator(locatorsLoginPage.LoginButton);
    signInForgotPassword = this.ElementLocator(locatorsLoginPage.SignInForgotPassword);
    erorrMessage = this.ElementLocator(locatorsLoginPage.ErorrMessage);
    erorrMessageUsername = this.ElementLocator(locatorsLoginPage.ErorrMessageUsername);
    erorrMessagePassword = this.ElementLocator(locatorsLoginPage.ErorrMessagePassword); 
    erorrMessageUsernameForgotPassword = this.ElementLocator(locatorsLoginPage.ErorrMessageUsernameForgotPassword);    
    showPassEye = this.ElementLocator(locatorsLoginPage.ShowPassEye);
    signinForgotPassword = this.ElementLocator(locatorsLoginPage.SigninForgotPassword);
    password = this.ElementLocator(locatorsLoginPage.Password);
    


    async getRouteLogin(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.LoginButton)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async getRouteForgotPassword(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.SignInForgotPassword)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async checkErrorMessage(){
        let _text
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ErorrMessage)), 10000).then(() =>{
            element(by.css('.error-msg > span')).getText().then((value) =>{
                _text = value
        })
    })
          return _text     
    
    }

    async checkErrorMessageUsername(){
        let _text
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsLoginPage.ErorrMessageUsername)), 4500).then(() =>{
            this.erorrMessageUsername.getText().then((value) =>{
                _text = value
        })
    })
          return _text     
    
    }

    async checkErrorMessagePassword(){
        let _text
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsLoginPage.ErorrMessagePassword)), 10000).then(() =>{
            this.erorrMessagePassword.getText().then((value) =>{
                _text = value
        })
    })
          return _text     
    
    }

    async checkErorrMessageUsernameForgotPassword(){
        let _text
        await browser.wait(until.presenceOf(this.ElementLocator(locatorsLoginPage.ErorrMessageUsernameForgotPassword)), 10000).then(() =>{
            this.erorrMessageUsernameForgotPassword.getText().then((value) =>{
                _text = value
        })
    })
          return _text     
    
    }
    
    async refreshPage(){
        await browser.refresh()
    }

    async clickShowPassEye(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)), 10000).then(() =>{
            this.showPassEye.click()
        })
    
    }

    async clearInputFiedUsername(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)),10000).then(() =>{
            this.showPassEye.click()
        })
    
    }

    async clickSignIn(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.SigninForgotPassword)), 10000).then(() =>{
            this.signinForgotPassword.click()
        })
    
    }

    async getTypePassword(){
        let _type        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)), 10000).then(() =>{
            this.password.getAttribute('type').then((value)=> {
                _type = value
            }) 
        })
        return _type
    }

    async getTitle(){
        let _title       
        // await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsLoginPage.ShowPassEye)), 10000).then(() =>{
           await browser.getTitle().then((value)=> {
                _title = value
            // }) 
        })
        return _title
    }















}