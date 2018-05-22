import { defineSupportCode } from 'cucumber'
import { browser, protractor } from "protractor";
import { config } from "../steps/config";
import { JsonFormatter } from "../reporting/CucumberReportExtension";

// const { BeforeAll, After, Status } = require("cucumber");
// import * as fs from "fs";


defineSupportCode(({ registerHandler, registerListener, setDefaultTimeout }) => {

    setDefaultTimeout(20*1000)
    registerHandler('AfterStep', async () => {
        console.log("Step executed")
    });

    // registerHandler('AfterScenario', async () => {
    //     console.log("Scenario executed !!");
    // });

    // registerHandler('AfterFeature', async () => {
    //     console.log("Executing After feature !!");
    // });

    // registerHandler('BeforeScenario', async () => {
    //     console.log("Executing before feature !!");
    // });

    // registerHandler('BeforeScenario', async () => {
    //     ptor = protractor.getInstance();
    //     ptor.get('#/login');
    //   }, 30000);

    
    // BeforeAll({timeout: 10 * 1000}, async () => {
    //     await browser.get(config.baseUrl);
    // });
    

    // BeforeAll({timeout: 10 * 1000}, async () => {
    //     await browser.get(config.baseUrl);
    // });
    
    // After(async function(scenario) {
    //     if (scenario.result.status === Status.FAILED) {
    //         // screenShot is a base-64 encoded PNG
    //          const screenShot = await browser.takeScreenshot();
    //          this.attach(screenShot, "image/png");
    //     }
    // });



      registerListener(JsonFormatter);

});

