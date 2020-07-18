import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import FormPage from '../../page-objects/pages/FormPage'
import HelloPage from '../../page-objects/pages/HelloPage'
import Navbar from '../../page-objects/components/NavBar'

//const value = 'Lucas'

Given('I am in the home page', () => {
    FormPage.loadDocler()
})

When('I click in the form button',()=>{
    Navbar.clickForm()
})

And('Type {} the input field',(value)=>{
    FormPage.inputValue(value)
})

And('Submit the form',()=>{
    FormPage.sendValue()
})

Then('I should get redirect to the Hello page',()=>{
    HelloPage.isHelloPage()
})

And('The following text should appear: {}!',(value)=>{
    HelloPage.isTextValid(value)
})
