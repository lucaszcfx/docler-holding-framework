import BasePage from '../BasePage'

export default class ErrorPage extends BasePage {
    static verifyStatusCode() {
        cy.request( { url:'/error', failOnStatusCode: false}) 
            .then((response) => {
                expect(response.status).to.eq(404)
            })
    }
}