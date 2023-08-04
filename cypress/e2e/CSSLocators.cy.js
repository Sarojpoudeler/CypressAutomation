describe('CSSLocators', () => {


    it('csslocators', () => {

        cy.visit("http://www.automationpractice.pl/index.php")

        cy.get("#search_query_top").type("T-shirts")  //id used , tag is optional
        
        //cy.get(".search_query").type("T-shirts") //class used , tag is optioanal
        //cy.get("[name='search_query']").type("T-shirts")  //attribute used, tag is optional
        //cy.get("input.search_query[name='search_query']").type("T-shirts")  //tag class attribute used


        cy.get("[name='submit_search']").click()

        cy.get(".lighter").contains("T-shirts") //Assertion


    }


    )


})

