

import { LoginPage } from "../support/pages/loginPage"
import { OnlineShopPage } from "../support/pages/onlineShopPage"
import { AgregarProducto } from "../support/pages/productsPage";

describe('pre-entrega', () => {
  const loginPage = new LoginPage();
  const onlineShop = new OnlineShopPage();
  const agregarProducto = new AgregarProducto();

  let dataSet;
  let subTotal1;
  let subTotal2;
  let totalPrice;
  
  before('import data', () => {
    cy.fixture('../fixtures/dataSet.json').then((dataJson) => {
      dataSet = dataJson;
      console.log(dataSet)
    })
  })

  beforeEach('', () => {
    cy.visit('/');
    
    loginPage.login();

  })

  it('onlineShop', () => {
    onlineShop.clickOnlineShop();
    onlineShop.verificaOnlineShop(dataSet.pageNames.onlineShop);

    agregarProducto.agregarProducto(dataSet.productos.primerProducto, dataSet.productos.primerProducto);
    agregarProducto.agregarProducto(dataSet.productos.primerProducto, dataSet.productos.primerProducto);
    agregarProducto.agregarProducto(dataSet.productos.segundoProducto, dataSet.productos.segundoProducto);

    // cy.contains('p', dataSet.productos.segundoProducto.name).siblings('div').find('button[id^="add-to-cart"]', { setTimeout: 6000 }).click().then(()=>{
    //   dataSet.productos.segundoProducto.quantity++;
    //   console.log(dataSet.productos.segundoProducto.quantity)});
    // cy.contains('p', `${dataSet.productos.segundoProducto.name} has been added to the shopping cart`, { setTimeout: 6000 });
    // cy.get('#closeModal').click();



    cy.get('#goShoppingCart').click();

    cy.contains('p', `${dataSet.productos.primerProducto.name}`, { setTimeout: 6000 })
    .siblings().then((sibling) => {
      cy.log(sibling[0])
      cy.wrap(sibling[0]).should('have.text', dataSet.productos.primerProducto.quantity)
      cy.wrap(sibling[1]).should('have.text', `$${dataSet.productos.primerProducto.precioUnitario}`)
      cy.wrap(sibling[2]).should('have.text', `$${dataSet.productos.primerProducto.precioUnitario * dataSet.productos.primerProducto.quantity}`)
    })


    cy.contains('p', `${dataSet.productos.segundoProducto.name}`, { setTimeout: 6000 })
      .siblings().then((sibling) => {
        cy.log(sibling[0])
        cy.wrap(sibling[0]).should('have.text', dataSet.productos.segundoProducto.quantity)
        cy.wrap(sibling[1]).should('have.text', `$${dataSet.productos.segundoProducto.precioUnitario}`)
        cy.wrap(sibling[2]).should('have.text', `$${dataSet.productos.segundoProducto.precioUnitario * dataSet.productos.segundoProducto.quantity}`)
      })

    
    
      cy.then(() => {
        totalPrice = dataSet.productos.primerProducto.precioUnitario * dataSet.productos.primerProducto.quantity +
          dataSet.productos.segundoProducto.precioUnitario * dataSet.productos.segundoProducto.quantity;
        console.log('after', totalPrice);
        cy.log(totalPrice);
        cy.contains('button', 'Show total price').click();
        cy.get('#price').should('have.text', `${totalPrice}`);
      });
  })
})


//Deberán utilizar una clase diferente para cada pagina que utilicen : más de una classe dentro del fixture?










// cy.intercept({
//   path: '/api/login',
// }).as('loginOK')
// cy.wait('@loginOK').then((res)=>{console.log(res.response.body)})