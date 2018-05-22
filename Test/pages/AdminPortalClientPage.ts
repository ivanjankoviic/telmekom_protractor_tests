//import the class

import {$, $$, browser, by, element, protractor} from 'protractor';
import {BasePage, IdentificationType} from "./BasePage";
import { async } from 'q';

var until = protractor.ExpectedConditions;


   export const locatorsAdminPortalClient = {

        ClientListHeader: {
            type:IdentificationType[IdentificationType.Css],
            value: ".header-table-title"
        },
       
        SearchField:{
            type:IdentificationType[IdentificationType.Css],
            value: '.input-field'            
        },

        TableClient:{
            type:IdentificationType[IdentificationType.Css],
            value: '.scroll-table'            
        },



    };

export class AdminPortalClient extends BasePage{

    clientListHeader = this.ElementLocator(locatorsAdminPortalClient.ClientListHeader);
    searchField = this.ElementLocator(locatorsAdminPortalClient.SearchField);
    tableClient = this.ElementLocator(locatorsAdminPortalClient.TableClient);


    async getRouteAdminPortalClient(){
        let _url        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsAdminPortalClient.ClientListHeader)), 10000).then(() =>{
            browser.getCurrentUrl().then((value)=> {
                _url = value
            }) 
        })
        return _url
    }

    async searchFieldInput(search){
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsAdminPortalClient.SearchField)), 10000).then(() =>{
            this.searchField.click().then(() =>{
                this.searchField.clear().then(() =>{                    
                this.searchField.sendKeys(search).then(() =>{ 
                    browser.actions().sendKeys(protractor.Key.ENTER).perform();
                   })     
                })
            })
        })
    
    }


    async coutnNumberOfUsers(){
        let _table        
        await browser.wait(until.elementToBeClickable(this.ElementLocator(locatorsAdminPortalClient.TableClient)), 10000).then(() =>{
            this.tableClient.all(by.css("tr")).count().then((value) =>{
                _table = value                
                // console.log('ovo je*'+ value)
            })
            
        })
        return _table            
        // await browser.sleep(1000)                        
    }





}