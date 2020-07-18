import BasePage from '../BasePage'

export default class FormPage extends BasePage {
    static isFormVisible(){
        cy.get('form')
            .should('be.visible')
    }

    static isBoxVisible(){
        cy.get('#hello-input')
            .should('be.visible')
    }

    static isSubmitButtonVisible(){
        cy.get('#hello-submit')
            .should('be.visible')
    }

    static inputValue(value){
        cy.get('#hello-input')
            .should('be.visible')
            .type(value)  
    }
    
    static sendValue(){
        cy.get('#hello-submit')
            .should('be.visible')
            .click()
    }
}