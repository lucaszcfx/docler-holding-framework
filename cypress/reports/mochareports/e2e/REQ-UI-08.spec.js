import BasePage from '../../page-objects/BasePage'
import {home_page} from '../../../config'

describe ('REQ-UI-08', () =>{
    before(function() {
        BasePage.loadDocler()
    })

    describe ('Home Page', () =>{
        it('When I click on the UI Testing button - Home Page', () => {
            BasePage.isHomePage()
        })

        it('I should get navigated to the Home page  - Home Page', () => {
            cy.contains(home_page)
        })
    })

    describe ('Form Page', () =>{
        it('When I click on the UI Testing button - Form Page', () => {
            BasePage.isHomePage('/form.html')
        })

        it('I should get navigated to the Home page - Form Page ', () => {
            cy.contains(home_page)
        })
    })
    
    describe ('Error Page', () =>{
        it('When I click on the UI Testing button - Error Page', () => {
            BasePage.isHomePage('/error')
        })

        it('I should get navigated to the Home page - Error Page', () => {
            cy.contains(home_page)
        })
    })
})
