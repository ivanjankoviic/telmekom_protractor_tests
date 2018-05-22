import {defineSupportCode} from 'cucumber'
// import {locatorsLoginPage} from "../pages/LoginPage";
// import {locatorsAdminPortalClient} from "../pages/AdminPortalClientPage";
import {Orders, locatorsOrders} from "../pages/AdminPortalOrdersPage";
import {expect} from 'chai'
import { browser, element, by, protractor } from 'protractor';
import {httpFactory} from "@angular/http/src/http_module";
import { promise } from 'selenium-webdriver';
import { async } from 'q';

    var oreders = new Orders
    var until = protractor.ExpectedConditions;
    

defineSupportCode(({Given, Then, When}) => {    

    Then(/^I check Orders route "([^"]*)"$/,async (url: string) =>{
        await oreders.getRouteOrders().then((value)=> {
            expect(value).to.be.equal(url)
        })
        // await browser.sleep(2000)
        
    })
        
    
});
