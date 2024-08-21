# Getting Started with ShiftSelect Webdriver IO Automation
This ReadMe contains details on how to navigate through the framework, setup your environment to use the framework. Though this is not a comprehensive guide, a seasoned automation engineer should be able to get a overview of the whole project and structure.

## Pre Requisite
***
Install the below if they are not already installed on your local environment
- NodeJS (latest) [Download here](https://nodejs.org/en)
- Visual Studio code (latest version)

## Installation
***
Use the following command to install packages required  
`npm install`  

## Run tests
***
Use the following command to run tests  
`npm run local:chrome`

## Reports generation
***
Post execution, use the following command to generate and view report  
`npm run allure`

## Debugging a test 
***
Open JavaScript Debugging terminal and run the commands to initiate debugging.
Use breakpoints to get the insights and details

## Adding a new test
***
Add the feature file in the test/features/<folder>/<featureFileName>.feature  
Add the test definition files in test/step-definitions/web-portal/<featurefileName>.steps.ts  
Use the below section in config file to manage test the files to include or exclude  

```json
  specs: ["./test/features/**/*.feature"],
  // Patterns to exclude.
  exclude: [
    // 'path/to/excluded/files'
  ],
```
## Configs usage
***
- wdio.master.conf  
  This is base config which is inherited by other configs
- wdio.local.chrome.conf  
  Choose this config to run tests locally using chrome browser.
- wdio.local.edge.conf  
  Choose this config to run tests locally using edge browser.
- wdio.browserstack.base  
  This is base config for BrowserStack execution. This is inherited by other configs under "config/browserStack" folder.
- wdio.win10.chrome.conf  
  Choose this config to run tests on BrowserStack using chrome browser.
- appConfig.qa.json  
  This is a app config file to store all application related configs like app url, credentials etc. 


## Run a tests
***
  Choose an environment described in the below section  
- Running a single test on BrowserStack
  npx wdio ./config/browserStack/wdio.win10.chrome.conf.ts --cucumberOpts.tagExpression '@TCID:473205'
- Running a single test locally
  npx wdio ./config/wdio.local.chrome.conf.ts  --cucumberOpts.tagExpression '@TCID:472670'  

## Running tests in browserstack
Create a .env file in the root of the project ANDROIDUI-AUTOMATION and add your browserstack credentials

```
BS_USERNAME=<your_browserstack_username>
BS_PASSWORD=<your_browserstack_AccessKey>
```
## Controlling Test Execution Order

When running tests in parallel with WebdriverIO (WDIO), it's essential to consider the order of execution for feature files, each containing related scenarios with varying execution times. In parallel execution, each parallel thread selects a single feature file and proceeds to execute all scenarios within it. To optimize test run completion time, it's crucial to strategically order the feature files so that they are selected in the desired sequence.

Consider this example: We are employing four parallel threads, and we have a total of 15 feature files while documenting this. It's important to note that the parallel threads are assigned on a per-feature-file basis, rather than a scenario-by-scenario basis.

To manage the order of execution, we provide explicit ordering of feature files in the WDIO configuration. Here's how the configuration might look, as shown in **wdio.master.conf.ts**:
```
// wdio.master.conf.ts
specs: [
  "./test/features/**/Message.feature",
  "./test/features/**/Gatekeeper.feature",
  "./test/features/**/*.feature"
]
```

## Disabling a test
***
- Due to Bug
  Add @skip tag with bug number
  ```
  @skip('Bug 145270')
  ```
- Automation needs to be updated
  Add @skip tag with reason
  ```
  @skip('Faling while using safari needs an update on calendar click')
  ```

## Choosing an environment
***
For choosing Staging use the following command in the  
`$env:ENV='staging'`
`$env:ENV='prod'`
`$env:ENV='qa'`
`$env:ENV='perf'`
Check the env set 
`$env:Env`

## Choosing number of parallels
***
Default instances are 4 for browserstack run

For choosing 10 parallels using the below command
`$env:BS_MAX_INSTANCES=10`


## Choosing number of parallels
***
Default timeout is 10000 it is 10 seconds for the element waitfor

If application is slow you can use the below command to increse the timeout
`$env:WAIT_TIME_OUT=30000`

## Reporting
***
- Allure is used for reporting.

  ```json
  reporters: [    
    [
      "allure",
      {
        outputDir: "./reports/allure-results",
        addConsolelogs: true,
        useCucumberStepReporter: true,
      },
    ],
  ]
  ```

## Formatting
***
Install VS Code extension for working with the feature file  
**Cucumber (Gherkin) Full Support**  

**Prettier** package is used for formatting the code  
Run the following command  
`npx prettier --write .`

## Folder Structure
***
--ui-test  
&nbsp;&nbsp;|--config (wdio config, environment config which has user credentials )  
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--browserStack (contains all predefined configs to run in browserstack)  
&nbsp;&nbsp;|--configDataProvider (to process the environment and user credentials)  
&nbsp;&nbsp;|--node_modules (installed module for the framework, can be deleted and added back by running **npm install**)  
&nbsp;&nbsp;|--page-objects  
&nbsp;&nbsp;|--test (contains all test both feature files and step definition)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--features (contains feature files and scenarios)  
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;|--step-definitions (contains feature file definitions)  
&nbsp;&nbsp;|--utils  (contains all utility files which can be part of other projects too)  
&nbsp;&nbsp;|--\_results_ (contains all results files, not part of source control)  
&nbsp;&nbsp;|--.gitignore (list of file and folders that should not be part of source control)  
&nbsp;&nbsp;|--package.json (list for packages that are needed for framework)    
&nbsp;&nbsp;|--ReadMe.MD (this file)  
&nbsp;&nbsp;|--tsconfig.json (contains compilation options for type script)
