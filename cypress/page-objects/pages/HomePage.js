import BasePage from '../BasePage'

export default class HomePage extends BasePage {

    static inspectTagH1(){
        cy.get('h1')
            .contains('Welcome to the Docler Holding QA Department')
            .should('be.visible')
    }

    static inspectTagP(){
        cy.get('p')
            .contains('This site is dedicated to perform some exercises and demonstrate automated web testing')
            .should('be.visible')
    }
}