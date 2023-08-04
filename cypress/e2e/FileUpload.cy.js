import 'cypress-file-upload'

describe("File uploads",()=>{

    it.skip('Single File Upload',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile('dummy.pdf')
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')



    })

    it.skip('File upload - Rename',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#file-upload").attachFile({filePath:'dummy.pdf',fileName:'myfile.pdf'})
        cy.get("#file-submit").click()
        cy.wait(5000)
        cy.get("div[class='example'] h3").should('have.text','File Uploaded!')


        
    })

    it.skip('File Upload - Drag and Drop',()=>{
        cy.visit("https://the-internet.herokuapp.com/upload")

        cy.get("#drag-drop-upload").attachFile("dummy.pdf",{subjectType:'drag-n-drop'})
        cy.wait(3000)
        cy.get('#drag-drop-upload > .dz-preview > .dz-details > .dz-filename > span')
          .contains("dummy.pdf")

        
    })

    it.skip('Multiple File Upload',()=>{
        cy.visit("https://davidwalsh.name/demo/multiple-file-upload.php")

        cy.get("#filesToUpload").attachFile(['dummy.pdf','sample.pdf'])
        cy.wait(3000)
        cy.get(':nth-child(6) > strong').should('contain.text','Files You Selected:')
        


        
    })

    it.only('File upload - Shadow Dom',()=>{
        cy.visit("https://www.htmlelements.com/demos/fileupload/shadow-dom/index.htm")

        cy.get(".smart-browse-input", {includeShadowDom:true}).attachFile("dummy.pdf")  //element inside a shadow dom
        cy.wait(4000)
        cy.get(".smart-item-name",{includeShadowDom:true}).contains("dummy.pdf")
        
    })

})