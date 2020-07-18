import HomePage from '../../../page-objects/pages/HomePage'

describe ('REQ-UI-09', () =>{
    before(function() {
        HomePage.loadDocler()
    })

    it('The following text should be visible on the Home page in <h1> tag: "Welcome to the Docler Holding QA Department" ', () => {
        HomePage.inspectTagH1()
    })
})