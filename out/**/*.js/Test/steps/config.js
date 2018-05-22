"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['../../../../../Test/features/*.feature'],
    // capabilities: {
    //     browserName: 'chrome',
    //     chromeOptions: {
    //         // args: ['--window-size=1080, 1920'] 
    //         args: ['--start-maximized'] 
    //     }
    // },
    // dodato setting time outs
    getPageTimeOut: 20000,
    allScriptsTimeout: 500000,
    // Set log level and enables colors for log output, 
    // Verbose logging is a computer logging mode that records more information than the usual logging mode.
    logLevel: 'verbose',
    coloredLogs: true,
    // pitati cemu sluzi
    // setting protractor to ignore uncaught exceptions to take care by protractor-cucumber-framework
    // ignoreUncaughtExceptions : true,
    framework: 'custom',
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    SELENIUM_PROMISE_MANAGER: true,
    // baseUrl: "http://localhost:8808/",
    // baseUrl: "http://sm.ooblife.com/login",
    baseUrl: "http://telmekom-client-staging2.digitalcube.rs/login",
    // cucumberOpts: {
    //     compiler: "ts:ts-node/register",
    //     strict: true,
    //     require: [
    //         '../steps/*.js',
    //         '../hooks/*.js'
    //     ],
    //     // tags: '@login or @forgotPassword or @clientRoute or @activityLogRoute or @profileRoute or @ordersRoute'
    //     tags: '@id/invoicesRoute'
    // },
    // za pustanje testova u razlicitim rezolucijama
    multiCapabilities: [{
            //     'browserName': 'firefox',
            //     'moz:firefoxOptions' : {
            //         args: ['--lang=en',
            //                '--window-size=800,800',
            //                "--headless"]
            //     },
            // cucumberOpts: {
            //     compiler: "ts:ts-node/register",
            //     strict: true,
            //     require: [
            //         '../steps/*.js',
            //         '../hooks/*.js'
            //     ],
            //     tags: '@id/invoicesRoute'
            // },
            //  },
            //  {
            //     'browserName': 'chrome',
            //     'chromeOptions' : {
            //      args: ['--lang=en',
            //             '--window-size=350,650']
            //     },
            //     // specs: ['spec.js']
            //     cucumberOpts: {
            //         compiler: "ts:ts-node/register",
            //         strict: true,
            //         require: [
            //             '../steps/*.js',
            //             '../hooks/*.js'
            //         ],
            //             tags: '@id/ticketsRouteIDT'
            //     },
            // },
            // {
            'browserName': 'chrome',
            'chromeOptions': {
                args: ['--lang=en',
                    '--start-maximized'
                ]
            },
            cucumberOpts: {
                compiler: "ts:ts-node/register",
                strict: true,
                require: [
                    '../steps/*.js',
                    '../hooks/*.js'
                ],
                tags: '@all'
            },
        }],
};
//# sourceMappingURL=config.js.map