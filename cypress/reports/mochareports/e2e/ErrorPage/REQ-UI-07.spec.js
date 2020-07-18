import ErrorPage from '../../../page-objects/pages/ErrorPage'
import Navbar from '../../../page-objects/components/NavBar'
import BasePage from '../../../page-objects/BasePage'

describe ('REQ-UI-07 - Getting the true status code', () =>{
    before(function() {
        ErrorPage.loadDocler()
    })

    it('When I click on the Error button', () => {
        Navbar.clickError()
               
    })

    it('I should get a 404 HTTP response code - HTTP code ', () => {
        ErrorPage.verifyStatusCode()
    })
})

describe ('REQ-UI-07 - Getting the HTML error', () =>{
    before(function() {
        ErrorPage.loadDocler()
    })

    it('When I click on the Error button', () => {
        Navbar.clickError()
               
    })

    it('I should get a 404 HTTP response code - HTML error ', () => {
        BasePage.contains('404 Error')
    })
})