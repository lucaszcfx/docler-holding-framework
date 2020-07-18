import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import BasePage from '../../page-objects/BasePage'
import {home_page} from '../../../config'
 

Given('I open on page {}', (page) => {
    BasePage.urlWithPath(page)
})

When('I click on the UI Testing button',() => {
    BasePage.clickHomePage() 
})
Then('I should get navigated to the Home page',() => {
    BasePage.contains(home_page)
})

