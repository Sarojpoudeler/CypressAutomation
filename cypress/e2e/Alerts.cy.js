



describe('Alerts', ()=>{
    //1) Javascript Alert: It will have some text and 'OK' button

    it('Javascript Alert',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsAlert()']").click()

        cy.on('window:alert',(t)=>{                      //validation event method after storing on variable
            expect(t).to.contains('I am a JS Alert')

        })

        //alert window automatically closed by cypress
        cy.get("#result").should('have.text','You successfully clicked an alert')

    })




    //2)Javascript Confirm Alert: It will have some text with "OK" and "Cancel" buttons
    it('JS Confirm  Alert using ok button',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{                      //validation event method after storing on variable
            expect(t).to.contains('I am a JS Confirm')

        })

        //alert window automatically closed by cypress by clicking on 'OK' button 
        cy.get("#result").should('have.text','You clicked: Ok')

    })

    it('JS Confirm  Alert using cancel button',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.get("button[onclick='jsConfirm()']").click()

        cy.on('window:confirm',(t)=>{                      //validation event method after storing on variable
            expect(t).to.contains('I am a JS Confirm')

        })

        cy.on('window:confirm',()=> false) //it will use cancel button

        cy.get("#result").should('have.text','You clicked: Cancel')

    })


    //3)Javascript Promt Alert: It will have some text with a text box for user input along with 'OK'
    it('JS promt  Alert usin ok button ',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then( (win)=>{

            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        //cypress will automatically close promted alert- it will user OK button
        cy.get("#result").should('have.text','You entered: welcome')
    })

    it('JS promt  Alert using cancel button ',()=>{
        cy.visit("https://the-internet.herokuapp.com/javascript_alerts")

        cy.window().then( (win)=>{

            cy.stub(win,'prompt').returns('welcome')
        })

        cy.get("button[onclick='jsPrompt()']").click()

        cy.on('window:prompt',()=> false)  //clicking cancel button
        cy.get("#result").should('have.text','You entered: null')
    })


    //4)Authenticated Alert
    //Approach 1
    it('Authenticated alert ',()=>{
        cy.visit("https://the-internet.herokuapp.com/basic_auth",{auth: 
                                                                    {
                                                                        username:"admin",
                                                                        password:"admin"
                                                                    }
                                                                })

    cy.get("div[class='example'] p").should('have.contain',"Congratulations")

        
    })

    //Approach 2
    
    it.only('JS promt  Alert using cancel button ',()=>{
        cy.visit("https://admin:admin@the-internet.herokuapp.com/basic_auth")
    cy.get("div[class='example'] p").should('have.contain',"Congratulations")
    })






})