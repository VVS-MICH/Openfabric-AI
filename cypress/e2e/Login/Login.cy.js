/// <reference types="cypress" />


describe('LOG IN PROCESSES', () => {
  

  it('Verify that the user is able to log in with valid email and password', () => {
    cy.visit('/')    //visiting the testnet
    cy.contains("Login with Email").should("exist").click()    //verifing we are in the log in page
    cy.contains("Enter your email").should("exist")
    cy.get("#mat-input-0").type("michaelifyadeoye@gmail.com")   // entering the emmail and password 
    cy.get("#mat-input-1").type("password")
         // clicking on log in 
    cy.contains("Login").click()
    cy.contains("Installed apps").should("exist").should("be.visible")     // asserting that the user is logged in to the app
  })

  it('Verify that the user is unable to log in with invalid email and password', () => {
    cy.visit('/')
    cy.contains("Login with Email").should("exist").click()
    cy.contains("Enter your email").should("exist")
    cy.get("#mat-input-0").type("michaelifyadeoye@gmail.com")
    cy.get("#mat-input-1").type("Wrongpassword")
    cy.contains("Login").click()
    cy.get("#mat-error-0").should("exist").should("be.visible")
    cy.get("#mat-error-0").should("have.text", " Invalid credentials ")      // asserting that the user gets an error message
    cy.contains("Installed apps").should("not.exist")       // asserting that the user is not logged in to the app


  })

  it('Verify that the user is able to log in with Metamask', () => {
    cy.visit('/')
    cy.contains("Login with Metamask").should("exist").click()
    cy.contains("Enter your email").should("exist")
    cy.get("#mat-input-0").type("michaelifyadeoye@gmail.com")
    cy.get("#mat-input-1").type("Wrongpassword")
    cy.get("#mat-error-0").should("exist").should("be.visible")
    cy.contains("Login").click()
    cy.get("#mat-error-0").should("have.text", " Invalid credentials ")
    cy.contains("Installed apps").should("not.exist")
  })

  
})
