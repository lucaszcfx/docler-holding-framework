import ErrorPage from '../../page-objects/pages/ErrorPage'
import Navbar from '../../page-objects/components/NavBar'


    Given('I open the home page', () =>{
        ErrorPage.loadDocler()
   })
        
    When('I click on the Error button', () => {
        Navbar.clickError()
               
    })

    Then('I should get a 404 HTTP response code', () => {
        ErrorPage.verifyStatusCode()
    })

    Then('I should get a 404 HTML error', () => {
        ErrorPage.contains('404 Error')
    })
