import { url} from '../../config'
export default class BasePage {

    static loadDocler() {
        cy.visit(url)       
    }

    static urlWithPath(site){
        if(site!=null  && site != '/home' ){     
            cy.visit({url: url + site, failOnStatusCode: false})          
        }
        else{
            cy.visit(url)
        }
    }
    static verifyTitle(){
        cy.get('title').contains('UI Testing Site')
    }

    static verifyLogo(){
        cy.get('div[class="jumbotron"]').find("img").should('be.visible')
    }
    
    static clickHomePage(){
            cy.get('#site').click()
    } 

    static contains(message){
        cy.contains(message)
    }

    static isActive(isActive){
        cy.xpath(isActive).should('have.class', 'active')
    }

    //old below
    static pause(ms){
        cy.wait(ms)
    }

    static logInfo(message){
        cy.log(message)
    }

    static setMobileViewport() {
        cy.viewport('iphone-x')
    }

    static setTabletViewport() {
        cy.viewport('ipad-2')
    }

    static setDesktopViewport() {
        cy.viewport('macbook-13')
    }

    static setLargeDesktopViewport() {
        cy.viewport(1980, 1080)
    }
}