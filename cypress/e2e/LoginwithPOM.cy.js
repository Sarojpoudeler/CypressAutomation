import Login from "../PageObjects/LoginPage2"


describe('pom',()=>{

    it('login',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        const ln = new Login()
        ln.setUserName("Admin")
        ln.setPassword("admin123")
        ln.clickSubmit()
        ln.verifyLogin();


    })


    //using pom with fixtures
    it.only('login',()=>{

        cy.visit("https://opensource-demo.orangehrmlive.com/")

        cy.fixture('orangehrm').then( (data)=>{

            const ln = new Login()
            ln.setUserName(data.username)
            ln.setPassword(data.password)
            ln.clickSubmit()
            ln.verifyLogin();



        })
        

    })

})