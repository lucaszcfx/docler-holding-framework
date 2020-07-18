import Navbar from '../../../page-objects/components/NavBar'
import BasePage from '../../../page-objects/BasePage'

describe ('REQ-UI-03', () =>{
    before(function() {
        BasePage.loadDocler()
    })

    it('When I click on the Home button', () => {
        Navbar.clickHome()
    })

    it('I should get navigated to the Home page', () => {
        BasePage.contains('Welcome to the Docler Holding QA Department')
    })
})