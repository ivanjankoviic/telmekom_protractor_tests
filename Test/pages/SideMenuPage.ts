//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsSideMenu = {


        ActivityLog:{
            type:IdentificationType[IdentificationType.Css],
            value: '[routerlink="/activity-log"]'            
        },

        Orders:{
            type:IdentificationType[IdentificationType.Css],
            value: '[routerlink="/orders"]'            
        },

        Invoices:{
            type:IdentificationType[IdentificationType.Css],
            value: "body > app-root > app-main > mat-sidenav-container > mat-sidenav > app-side-menu > div.side-bar-content-container.close-content > mat-nav-list.client-menu.mat-nav-list.close-content > a:nth-child(4) > div > span > mat-icon"             
        },

        Services:{
            type:IdentificationType[IdentificationType.Id],
            value: 'services-button'            
        },

        Tickets:{
            type:IdentificationType[IdentificationType.Css],
            value: '[ng-reflect-message="Tickets"]'           
        },

        CallLog:{
            type:IdentificationType[IdentificationType.Css],
            // value: "//div//span[contains(md-icon, 'toc')]"  
            value: "body > app-root > app-main > mat-sidenav-container > mat-sidenav > app-side-menu > div.side-bar-content-container.close-content > mat-nav-list.client-menu.mat-nav-list.close-content > a:nth-child(5) > div > span > mat-icon"                    
        },
    };

export class SideMenu extends BasePage{

    activityLog = this.ElementLocator(locatorsSideMenu.ActivityLog);
    orders = this.ElementLocator(locatorsSideMenu.Orders);
    invoices = this.ElementLocator(locatorsSideMenu.Invoices);
    services = this.ElementLocator(locatorsSideMenu.Services);
    tickets = this.ElementLocator(locatorsSideMenu.Tickets);
    callLog = this.ElementLocator(locatorsSideMenu.CallLog);
    


    async clickActivityLog(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.ActivityLog)), 10000).then(() =>{
            this.activityLog.click();
        })
    }

    async clickServices(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.Services)), 10000).then(() =>{
            this.services.click();
        })
    }
    
    async clickTickets(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.Tickets)), 10000).then(() =>{
            this.tickets.click();
        })
    }

    async clickCallLog(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.CallLog)), 10000).then(() =>{
            this.callLog.click();
        })
    }

    async clickInvoices(){
        // await browser.sleep(1000)
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.Invoices)), 10000).then(() =>{
            this.invoices.click();
        })
    }

    async clickOrders(){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsSideMenu.Orders)), 10000).then(() =>{
            this.orders.click();
        })
    }






}