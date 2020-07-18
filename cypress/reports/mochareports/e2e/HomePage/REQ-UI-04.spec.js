import Navbar from '../../../page-objects/components/NavBar'
import BasePage from '../../../page-objects/BasePage'

describe ('REQ-UI-03', () =>{
    const home = '//body//li[1]'

    before(function() {
        BasePage.loadDocler()
    })

    it('When I click on the Home button', () => {
        Navbar.clickHome()
        
    })

    it('it should turn to active status', () => {
        BasePage.isActive(home)
    })
})