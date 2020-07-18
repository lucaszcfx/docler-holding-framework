import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from '../../page-objects/components/NavBar'
import BasePage from '../../page-objects/BasePage'
import {x_form} from '../../../config'

Given('I open the home page', () => {
    BasePage.loadDocler()
})

When('I click on the Form button',()=>{
    Navbar.clickForm()
})

Then('it should turn to active status form',()=>{
    BasePage.isActive(x_form)
})