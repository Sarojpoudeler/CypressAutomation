
describe('mysuite', ()=>{

    it.skip('capture screenshots & videos', ()=>{

            cy.visit("https://demo.opencart.com/")
            cy.screenshot("homepage")
            cy.wait(5000)
            cy.get("img[title='Your Store']").screenshot('logo')


    })

    it.only('capture screenshots & videos', ()=>{

        cy.visit("https://demo.opencart.com/")
        //Automatically capture screenshot & videos on failure when you execute through CLI
        cy.get("li:nth-child(7) a:nth-child(1)").click()
        cy.get("div[id='content'] h2").should('have.text','Tablets')


})
})