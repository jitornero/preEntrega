

import { LoginPage } from "../support/pages/loginPage"
import { OnlineShopPage } from "../support/pages/onlineShopPage"
import { AgregarProducto } from "../support/pages/productsPage";
import { CartPage } from "../support/pages/cartPage";


describe('pre-entrega', () => {
  const loginPage = new LoginPage();
  const onlineShop = new OnlineShopPage();
  const agregarProducto = new AgregarProducto();
  const cartPage = new CartPage();
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


    cartPage.clickShoppingCart();

    cartPage.verificarProducto(dataSet.productos.primerProducto)
    cartPage.verificarProducto(dataSet.productos.segundoProducto)
    
    cartPage.verificarTotal(dataSet.productos.primerProducto, dataSet.productos.segundoProducto)

  })
})

