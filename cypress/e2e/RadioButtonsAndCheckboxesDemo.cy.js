

describe("Check UI Elements", ()=>{

    it("Checking Radio Buttons", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of radio buttons
        cy.get("input#male").should("be.visible")
        cy.get("input#female").should("be.visible")

        //selecting radio buttons
        cy.get("input#male").check().should('be.checked')
        cy.get("input#female").should('not.be.checked')

        cy.get("input#female").check().should('be.checked')
        cy.get("input#male").should('not.be.checked')





    })

    it("Checking Checkboxes ", ()=>{

        cy.visit("https://itera-qa.azurewebsites.net/home/automation")

        //visibility of check boxes 
        cy.get("input#monday").should('be.visible')
        
        //selecting single check box
        cy.get("input#monday").check().should('be.checked')

        //unselecting check box
        cy.get("input#monday").uncheck().should('not.be.checked')

        //select all check boxes
        cy.get("input.form-check-input[type='checkbox']").check().should('be.checked')

        //unselect all check boxes
        cy.get("input.form-check-input[type='checkbox']").uncheck().should('not.be.checked')

        //select first check box
        cy.get("input.form-check-input[type='checkbox']").first().check().should('be.checked')

        //select last check box
        cy.get("input.form-check-input[type='checkbox']").last().check().should('be.checked')




    })


})