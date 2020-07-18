import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from '../../page-objects/components/NavBar'
import BasePage from '../../page-objects/BasePage'
 

Given('I open the home page', () => {
    BasePage.loadDocler()
})

When('I click on the Home button',()=>{
    Navbar.clickHome()
})

Then('I should get navigated to the Home page',()=>{
    BasePage.contains('Welcome to the Docler Holding QA Department')
})