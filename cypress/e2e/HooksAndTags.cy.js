
//before
//after
//beforeEach
//afterEach


describe('MyTestSuite',()=>{

    before( ()=>{

        cy.log("***launch app****")
    })

    after( ()=>{

        cy.log("****close app ******")
    } )

    beforeEach( ()=>{

        cy.log("******Login ********")
    })

    afterEach( ()=>{

        cy.log("*****logout **********")
    })

    it('Search',()=>{
        cy.log("*****search Functionality")


    })

    it('Advance Search',()=>{
        cy.log("*****Advance search Functionality")
        
    })

    it('Listing Products',()=>{

        cy.log("*****listing products Functionality")
    })






})