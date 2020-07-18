import BasePage from '../../page-objects/BasePage'

describe ('REQ-UI-02', () =>{
    before(function() {
        BasePage.loadDocler()
    })

    it('The Company Logo should be visible on every site - Home', () => {
        BasePage.verifyLogo()              
    })

    it('The Company Logo should be visible on every site - Form', () => {
        BasePage.verifyLogo('form.html')              
    })

    it('The Company Logo should be visible on every site - Error', () => {
        BasePage.verifyLogo('error')              
    })
})
