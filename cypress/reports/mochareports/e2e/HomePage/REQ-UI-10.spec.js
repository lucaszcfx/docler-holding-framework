import HomePage from '../../../page-objects/pages/HomePage'

describe ('REQ-UI-10', () =>{
    before(function() {
        HomePage.loadDocler()
    })

    it('The following text should be visible on the Home page in <p> tag: "This site is dedicated to perform some exercises and demonstrate automated web testing.', () => {
        HomePage.inspectTagP()
    })
})