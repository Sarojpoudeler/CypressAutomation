
describe('Custom commands',()=>{

    it.skip('handling  links', ()=>{
        cy.visit("https://demo.nopcommerce.com/")
        //direct without using custom command
        //cy.get("div[class='item-grid'] div:nth-child(2) div:nth-child(1) div:nth-child(2) h2:nth-child(1) a:nth-child(1)").click()

        //using custom command
        cy.clickLink("Apple MacBook Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')


    })

    it.skip('overwriting existing commands', ()=>{
        cy.visit("https://demo.nopcommerce.com/")

        cy.clickLink("APPLE MACBOOK Pro 13-inch")
        cy.get("div[class='product-name'] h1").should('have.text','Apple MacBook Pro 13-inch')





    })


    it.only('login command  ', ()=>{
       

        //login
        cy.visit("https://demo.nopcommerce.com/")
        cy.clickLink("Log in")
        cy.Loginapp("test@yopmail.com", "test123")

        cy.get(".ico-account").should('have.text','My account')



        //search


    })





})