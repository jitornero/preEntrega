export class AgregarProducto {

    constructor(){
        
    }


    agregarProducto(producto){
        cy.contains('p', producto.name).siblings('div').find('button[id^="add-to-cart"]', { setTimeout: 6000 }).click({force: true}).then(()=>{
            console.log('PRE añadir', producto.quantity)
            producto.quantity++;
            console.log('post añadir', producto.quantity)})
          cy.contains('p', `${producto.name} has been added to the shopping cart`, { setTimeout: 6000 });
          cy.get('#closeModal').click();
    }
}