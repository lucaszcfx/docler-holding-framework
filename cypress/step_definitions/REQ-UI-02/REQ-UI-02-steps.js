import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BasePage from '../../page-objects/BasePage'
 

Given('I open the page {}', (page) => {
    BasePage.urlWithPath(page)
})

Then('The Company Logo should be visible on every site',() => {
    BasePage.verifyLogo() 
})

