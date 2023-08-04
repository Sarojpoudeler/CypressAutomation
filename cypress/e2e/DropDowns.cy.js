
describe('handle Dropdowns', ()=>{

    it.skip('dropdown with select', ()=>{

        cy.visit("https://www.zoho.com/commerce/free-demo.html")

        cy.get("#zcf_address_country").select("Italy").should('have.value','Italy') //have.value is only used for selct type of dropdown



    })

    
    it.skip('dropdown without select', ()=>{

        cy.visit("https://www.dummyticket.com/dummy-ticket-for-visa-application/")

        cy.get("#select2-billing_country-container").click()

        cy.get(".select2-search__field").type("Italy").type('{enter}') //to press enter key when search is performed

        cy.get("#select2-billing_country-container").should('have.text','Italy')
        

    })

    it.skip('Auto suggest dropdown', ()=>{

        cy.visit("https://www.wikipedia.org/")

        cy.get("#searchInput").type('Nepal')

        cy.get(".suggestion-title").contains('Nepali Congress').click()
        

    })

    it('Dynamic dropdown', ()=>{

        cy.visit("https://www.google.com/")

        cy.get("textarea[name='q']").type("cypress automation")

        cy.wait(3000)

        cy.get("div.wM6W7d>span").should('have.length',12)

        cy.get("div.wM6W7d>span").each( ($el, index , $list)=>{
            if($el.text()=='cypress automation tutorial'){
                cy.wrap($el).click()

            }

        })
        cy.get("textarea[name='q']").should('have.value','cypress automation tutorial')

    })




})