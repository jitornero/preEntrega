export class LoginPage {

  constructor(){
    this.user = '#user';
    this.pass = '#pass';
    this.registertoogle = '#registertoggle';
    this.iniciaSesion = '#submitForm'

  };
    escribirUsuario(){

    }
    escribirContraseña(){

    }
    clickIniciarSesion(){

    }
    login(){
      
      cy.get(this.registertoogle).dblclick();
      cy.get(this.user).type(Cypress.env().user);
      cy.get(this.pass).type(Cypress.env().pass);
      cy.get(this.iniciaSesion).click();        
    };


}