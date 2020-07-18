import FormPage from '../../../page-objects/pages/FormPage'
import Navbar from '../../../page-objects/components/NavBar'

describe ('REQ-UI-11', () =>{
    before(function() {
        FormPage.loadDocler()
    })

    it('On the Form page', () => {
        Navbar.clickForm()
    })

    it('a form should be visible', () => {
        FormPage.isFormVisible()
    })
     
    it('with one input box ', () => {
        FormPage.isBoxVisible()
    })

    it('and one submit button', () => {
        FormPage.isSubmitButtonVisible()
    })
})