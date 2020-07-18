import { Given, When, Then } from "cypress-cucumber-preprocessor/steps";
import Navbar from '../../page-objects/components/NavBar'
import BasePage from '../../page-objects/BasePage'
import {x_home} from '../../../config'
 


Given('I open the home page', () => {
    BasePage.loadDocler()
})

When('I click on the Home button',()=>{
    Navbar.clickHome()
})

Then('it should turn to active status',()=>{
    BasePage.isActive(x_home)
})