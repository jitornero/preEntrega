export class CartPage{

    constructor(){
        this.goShoppingCart = `//button[@id='goShoppingCart']`;
    }


    clickShoppingCart() {
        cy.xpath(this.goShoppingCart).click(); //Xpath para cumplir consigna
    }


    verificarProducto(producto){
        cy.contains('p', `${producto.name}`, { setTimeout: 6000 })
        .siblings().then((sibling) => {
          cy.log(sibling[0])
          cy.wrap(sibling[0]).should('have.text', producto.quantity)
          cy.wrap(sibling[1]).should('have.text', `$${producto.precioUnitario}`)
          cy.wrap(sibling[2]).should('have.text', `$${producto.precioUnitario * producto.quantity}`)
        })

    }


    verificarTotal(producto1, producto2, totalPrice){
        cy.then(() => {
            //console.log('before', totalPrice) para debug
            totalPrice = producto1.precioUnitario * producto1.quantity +
            producto2.precioUnitario * producto2.quantity;
            totalPrice = totalPrice.toFixed(2);
            //console.log('after', totalPrice) para debug
            cy.log(totalPrice);
            cy.contains('button', 'Show total price').click();
            cy.get('#price').should('have.text', `${totalPrice}`);
          });
    }
}