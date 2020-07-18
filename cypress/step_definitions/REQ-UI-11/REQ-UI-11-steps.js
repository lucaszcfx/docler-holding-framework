import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FormPage from '../../page-objects/pages/FormPage'
import Navbar from '../../page-objects/components/NavBar'

Given('I am in the home page', () => {
    FormPage.loadDocler()
})

When('I click in the form button',()=>{
    Navbar.clickForm()
})

Then('a form should be visible',()=>{
    FormPage.isFormVisible()
})

And('with one input box',()=>{
    FormPage.isBoxVisible()
})

And('one submit button',()=>{
    FormPage.isSubmitButtonVisible()
})
