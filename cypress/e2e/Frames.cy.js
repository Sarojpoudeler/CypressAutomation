import 'cypress-iframe'

describe('Handling frames', ()=>{

    it('Approach 1', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        const iframe = cy.get("#mce_0_ifr")
            .its('0.contentDocument.body')
            .should('be.visible')
            .then(cy.wrap)

            iframe.clear().type("hello saroj {ctrl+a}")
            cy.get("button[title='Bold']").click()
    })


    //using custom command
    it('Approach 2 using custom command', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.getIframe('#mce_0_ifr')
            .clear().type("hello saroj {ctrl+a}")
            cy.get("button[title='Bold']").click()
    })


    //handling iframe using cypress iframe plugin
    it.only('Approach 3 using cypress-iframe plugin ', ()=>{
        cy.visit("https://the-internet.herokuapp.com/iframe")

        cy.frameLoaded('#mce_0_ifr')  // load the frame

        cy.iframe('#mce_0_ifr').clear().type("hello saroj")
       
    })



})