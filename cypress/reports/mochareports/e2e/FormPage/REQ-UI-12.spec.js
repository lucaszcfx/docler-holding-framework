import FormPage from '../../../page-objects/pages/FormPage'
import HelloPage from '../../../page-objects/pages/HelloPage'
import Navbar from '../../../page-objects/components/NavBar'

describe ('REQ-UI-12', () =>{
    before(function() {
        FormPage.loadDocler()
    })

    const value = 'Lucas'

    it('On the Form page', () => {
        Navbar.clickForm()
    })

    it('if you type <value> the input field and submit the form', () => {
        FormPage.inputValue(value)
    })

     
    it('you should get redirect to the Hello page', () => {
        HelloPage.isHelloPage()
    })

    it('and the following text should appear: <result>', () => {
         HelloPage.isTextValid(value)
    })    


})