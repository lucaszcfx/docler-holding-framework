import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from '../../page-objects/components/NavBar'
import BasePage from '../../page-objects/BasePage'
 

Given('I open the home page', () => {
    BasePage.loadDocler()
})

When('I click on the Form button',()=>{
    Navbar.clickForm()
})

Then('I should get navigated to the Forme Page',()=>{
    BasePage.contains('Simple Form Submission')
})
