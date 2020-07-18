import BasePage from '../../page-objects/BasePage'

describe ('REQ-UI-01', () =>{
    before(function() {
        BasePage.loadDocler()
    })

    it('The Title should be "UI Testing Site" on every site - Home', () => {
        BasePage.verifyTitle()              
    })

    it('The Title should be "UI Testing Site" on every site - Form', () => {
        BasePage.verifyTitle('form.html')              
    })

    it('The Title should be "UI Testing Site" on every site - Error', () => {
        BasePage.verifyTitle('error')              
    })
})
