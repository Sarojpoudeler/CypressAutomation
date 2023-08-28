///<reference types="Cypress" />


describe("demo test ", ()=>{

    it('sign up page for the demo site',()=>{

        cy.visit("https://www.automationexercise.com/login")

        //get id for email
        cy.get("input[placeholder='Name']").type("saroj")

        //get id for pw
        cy.get("input[data-qa='signup-email']").type("saroj.poudel@yopmail.com")

        //submit button
        cy.get("button[data-qa='signup-button']").click()


        //selecting the gender from radio buttons
        cy.get("#id_gender1").check().should('be.checked')

        //creating pw for login
        cy.get("#password").type("password@123")

        //dropdown
        cy.get("#days").select("1")

        //month
        cy.get("#months").select("January")

        //select year
        cy.get("#years").select('2020')

        //selecting the checkboxes
        cy.get("#newsletter").check().should('be.checked')

        //first name
        cy.get("#first_name").type("saroj")

        //last name
        cy.get("#last_name").type("test user")


        //company
        cy.get("#company").type("test company")

        //address
        cy.get("#address1").type("#address1").type("kathmandu nepal")

        //address 2
        cy.get("#address2").type("kathmandu")

        //select country
        cy.get("#country").select("India")

        //select state
        cy.get("#state").type("provience1")

        //select city
        cy.get("#city").type("kathmandu")

        //zip code
        cy.get("#zipcode").type("12343")

        //mobile numbetr
        cy.get("#mobile_number").type("1234567899")

        //click submit button
        cy.get("button[data-qa='create-account']").click()

        

        





    })

    





})