import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../page-objects/pages/HomePage'
 

Given('I open the home page', () => {
    HomePage.loadDocler()
})

Then('The text should be visible in h1 tag - Welcome to the Docler Holding QA Department',()=>{
    HomePage.inspectTagH1()
})