//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;

   export const locatorsHeader = {

        ProfilePicture:{
            type:IdentificationType[IdentificationType.Css],
            value: '[data-dc-automation="header-profile-picture"]'             
        },

        // TODO: ubaciti data-dc za logout dugme
        Logout:{
            type:IdentificationType[IdentificationType.Css],
            value: '[ng-reflect-trigger="[object HTMLButtonElement]]"'             
        },

        ProfileButton:{
            type:IdentificationType[IdentificationType.Css],
            value: ".mat-menu-ripple.mat-ripple"            
        },

        ArrowOpenSideMenu:{
            type:IdentificationType[IdentificationType.Css],
            value: '[data-dc-automation="move-event-cancel-button"]'            
        },

        OpenLanguage:{
            type:IdentificationType[IdentificationType.Css],
            value: ".language-button"           
        },

        CloseBackground:{
            type:IdentificationType[IdentificationType.Css],
            value: ".cdk-overlay-backdrop"           
        },

        EnglishLanguage:{
            type:IdentificationType[IdentificationType.Css],
            value: '[data-dc-automation="header-language-EN"]'           
        },

        GermanLanguage:{
            type:IdentificationType[IdentificationType.Css],
            value: '[data-dc-automation="header-language-DE"]'           
        },

        ItalianLanguage:{
            type:IdentificationType[IdentificationType.Css],
            value: '[data-dc-automation="header-language-IT"]'           
        },

        SuperAdminMenu:{
            type:IdentificationType[IdentificationType.Css],
            value: '.super-admin-menu'           
        },

    };

export class Header extends BasePage{

    profilePicture = this.ElementLocator(locatorsHeader.ProfilePicture);
    profileButton = this.ElementLocator(locatorsHeader.ProfileButton);
    arrowOpenSideMenu = this.ElementLocator(locatorsHeader.ArrowOpenSideMenu);
    openLanguage = this.ElementLocator(locatorsHeader.OpenLanguage);
    closeBackground = this.ElementLocator(locatorsHeader.CloseBackground);
    englishLanguage = this.ElementLocator(locatorsHeader.EnglishLanguage);
    germanLanguage = this.ElementLocator(locatorsHeader.GermanLanguage);
    italianLanguage = this.ElementLocator(locatorsHeader.ItalianLanguage);
    superAdminMenu = this.ElementLocator(locatorsHeader.SuperAdminMenu);
    logout = this.ElementLocator(locatorsHeader.Logout);

    
    async clickProfilePicture(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.ProfilePicture)), 10000).then(() =>{
            this.profilePicture.click();
        })
    }
    
    // TODO:ubaciti data-dc za logout dugme
    // nacin za hvatanje elemenata preko teksta
    async clickLogout(){
        await browser.wait(until.elementToBeClickable(element(by.cssContainingText('.profile-button', 'Logout'))), 10000).then(() =>{
            element(by.cssContainingText('.profile-button', 'Logout')).click();
        })
    }


    async clickProfileButton(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.ProfileButton)), 10000).then(() =>{
            this.profileButton.click();
        })
    }

    async openSideMenu(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.ArrowOpenSideMenu)), 10000).then(() =>{
            this.arrowOpenSideMenu.click();
        })
    }

    async clickOpenLanguage(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.OpenLanguage)), 10000).then(() =>{
            this.openLanguage.click();
        })
        // await browser.sleep(2000)        
    }

    async clickCloseBackground(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.CloseBackground)), 10000).then(() =>{
            this.closeBackground.click();
        })
    }

    // TODO: ubaciti data-dc 
    // nacin za hvatanje elemenata preko teksta
    async clickEnglishLanguage(){
        await browser.wait(until.elementToBeClickable(element(by.cssContainingText('.mat-menu-item', 'EN'))), 10000).then(() =>{
            element(by.cssContainingText('.mat-menu-item', 'EN')).click();
        })
    }

    async clickGermanLanguage(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.GermanLanguage)), 10000).then(() =>{
            this.germanLanguage.click();
        })
    }

    async clickItalianLanguage(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.ItalianLanguage)), 10000).then(() =>{
            this.italianLanguage.click();
        })
    }

    async clickSuperAdminMenu(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsHeader.SuperAdminMenu)), 10000).then(() =>{
            this.superAdminMenu.click();
        })
    }




    
}