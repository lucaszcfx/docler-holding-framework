import BasePage from '../BasePage'

export default class HelloPage extends BasePage {
    static isTextValid(value){
        const message = value
        cy.get('#hello-text')
            .should('text' , message)
    }

    static isHelloPage(){
        cy.location('pathname').should('eq', '/hello.html')
    }


}