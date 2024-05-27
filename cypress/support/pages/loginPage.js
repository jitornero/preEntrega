export class LoginPage {

  constructor(){

  };


    login(){
      console.log();
      cy.get('#registertoggle').dblclick();
      cy.get('#user').type(Cypress.env().user);
      cy.get('#pass').type(Cypress.env().pass);
      cy.get('#submitForm').click();        
    };


}