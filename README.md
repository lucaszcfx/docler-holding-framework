# docler-holding-framework

**Language:** JavaScript

**Framework:** Cypress

**Pre-Requisite:** Node

**git clone** https://github.com/lucaszcfx/docler-holding-framework.git


**To install the framework:** npm install

## **Commands to execute the project:**
* **"npm run test"**(works only in Windows) - Will run all tests in chrome and generate a report in the folder cypress/Reports/mochareposts/report.html
* **"npm run cy:run"** - Will run all tests in chrome, without report
* **"npm run cy:open"** - It will open a dashboard where automated tests can be performed manually by clicking on each feature 


## Within the cypress folder the framework is divided:

1. **Fixtures:**
     * Usually data for testing is placed inside this folder

2. **Integration:**
     * I used this folder to place the features, divided into 4 folders, one for each path of the site.

3. **Page-objects:**
Folder dedicated to mapping objects on each page, all page-objects extend BasePage:
  * Components
    * NavBar
  * pages
    * FormPage
    * ErrorPage
    * FormPage
    * HelloPage
  * Basepage
  
4. **Plugins:**
     * It contains index.js where I configured the cypress-cucumber-preprocessor that is used as support for using feature files when testing with Cypress.

5. **Reports:**
     * Folder directed to when the test execution report is generated

6. **Screenshots:**
     * I have not used this folder in this framework

7. **Step_definitions:**
Step by step to run the tests

8. **Support:**
     * commands.js -> I didn't use
     * index.js -> I used to import "cypress-xpath"

9. **Videos:**
     * Is a standard project folder, it stores videos.


## In the project's root folder:

1. **Node_modules:**
     * A set of functions you want to include in your application.

2. **Dockerfile e .dockerignore:**
     * Folders to run via docker

3. **Prettierc:**
     * Is An opinionated code formatter

4. **Cypress.json:**
     * This file i used to configure some behaviours about the framework

5. **Package.json:**
     * Folder contains the dependencies I used for the framework, parameterization of the step_definitions folder and the settings to run the project.

6. **Package-lock.json**
     * Description. package-lock. json is automatically generated for any operations where npm modifies either the node_modules tree, or package. json .
