describe('Proto Commerce Practice',() =>{
it("Access Proto Commerce",()=>{
cy.visit('https://rahulshettyacademy.com/angularpractice/');
cy.wait(5000)
cy.get((':nth-child(1) > .form-control')).type("Hemavathy")
cy.get((':nth-child(2) > .form-control')).type("hema15@gmail.com")
cy.get(('#exampleInputPassword1')).type("ani12345")
cy.get(('form.ng-dirty > :nth-child(4)')).click()
cy.get('input[id="exampleCheck1"]').click()
cy.get('select[id="exampleFormControlSelect1"]').select("Female").should('have.value','Female')
cy.get('input[id="inlineRadio2"]').check().should('be.checked')
cy.get('input[type="date"]').type('2024-05-20').should('have.value', '2024-05-20');  
cy.get('input[type="submit"]').click()
cy.get(':nth-child(1) > .form-control').invoke('text').then((text1) => {
    cy.get('input[class="ng-untouched ng-pristine ng-valid"]').invoke('text').then((text2) => {
        expect(text1.trim()).to.equal(text2.trim())
        cy.contains('Shop').click()
        cy.get('button[class="btn btn-info"]').eq(0).click()
        cy.get('button[class="btn btn-info"]').eq(1).click()
        cy.get('span[class="navbar-toggler-icon"]').click()
        cy.get('button.navbar-toggler').click()
        cy.get('button[class="btn btn-success"]').click()
        cy.get('input[id="country"]').type("in")
        cy.wait(5000)
        cy.get('div[class="suggestions"]'){
        cy.wrap($suggestions).click({force:true})
        }
    })
})
})
})

