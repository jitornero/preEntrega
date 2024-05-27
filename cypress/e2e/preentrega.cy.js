import { LoginPage } from "../support/pages/loginPage"
 
describe('pre-entrega', () => {
  const loginPage = new LoginPage();
  let dataSet;
  
  before('import data',()=>{
    cy.fixture('../fixtures/dataSet.json').then((dataJson)=>{
      dataSet = dataJson;
      console.log(dataSet)
    })
  })

  beforeEach('', ()=>{
    cy.visit('/');
    loginPage.login();
    
  })

  it('onlineShop', () => {
    
    cy.get('#onlineshoplink').click();
    cy.contains('h2', dataSet.pageNames.onlineShop, {setTimeout:10000});

    cy.contains('p', dataSet.productos.primerProducto.name).siblings('div').find('button[id^="add-to-cart"]', {setTimeout: 6000}).click();
    cy.contains('p', `${dataSet.productos.primerProducto.name} has been added to the shopping cart`,{setTimeout: 6000});
    cy.get('#closeModal').click();

    cy.contains('p', dataSet.productos.primerProducto.name).siblings('div').find('button[id^="add-to-cart"]', {setTimeout: 6000}).click();
    cy.contains('p', `${dataSet.productos.primerProducto.name} has been added to the shopping cart`,{setTimeout: 6000});
    cy.get('#closeModal').click();

    cy.contains('p', dataSet.productos.segundoProducto.name).siblings('div').find('button[id^="add-to-cart"]', {setTimeout: 6000}).click();
    cy.contains('p', `${dataSet.productos.segundoProducto.name} has been added to the shopping cart`,{setTimeout: 6000});
    cy.get('#closeModal').click();



    cy.get('#goShoppingCart').click();
    cy.contains('p', `${dataSet.productos.segundoProducto.name}`,{setTimeout: 6000})
      .prev();

    cy.contains('p', `${dataSet.productos.segundoProducto.name}`,{setTimeout: 6000})
      .siblings();

  })
})


//Deberán utilizar una clase diferente para cada pagina que utilicen : más de una classe dentro del fixture?










// cy.intercept({
//   path: '/api/login',
// }).as('loginOK')
// cy.wait('@loginOK').then((res)=>{console.log(res.response.body)})