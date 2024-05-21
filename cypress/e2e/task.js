describe ("Login Test Automation",()=>{
    it("test login page followinf test cases given",()=>{
      cy.visit("https://practicetestautomation.com/practice-test-login/")
      cy.get("#username").eq(0).type("student")
        cy.get('input[type="Password"]').type(" Password123")
        cy.get('button[class="btn"]').click()

})
     } )

