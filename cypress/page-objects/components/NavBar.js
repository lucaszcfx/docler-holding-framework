export default class NavBar {
   
    static clickUiTesting() {
        cy.get('#site').click()
    }

    static clickHome() {
        cy.get('#home').click()
    }

    static clickForm() {
        cy.get('#form').click()
    }
    
    static clickError() {
        cy.get('#error').click()
    }

    static uiTestingButon(){
        cy.get('.button').click()

    }
    



    //below is old
    static clickOnLogo() {
        cy.get('.brand').click()
    }

    static search(text){
        cy.get('#searchTerm').type(`${text} {enter}`)
    }

    static clickSignIn() {
        cy.get('#signin_button').click()
    }

    static clickSettings() {
        cy.contains('Settings').click()
    }

    static logout() {
        cy.contains('username').click()
        cy.get('#logout_link').click()
    }

    static displaySignInButton() {
        cy.isVisible('#signin_button')
    }
}