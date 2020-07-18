import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import HomePage from '../../page-objects/pages/HomePage'
 
Given('I open the home page', () => {
    HomePage.loadDocler()
})

Then('The text should be visible in p tag - This site is dedicated to perform some exercises and demonstrate automated web testing',()=>{
    HomePage.inspectTagP()
})