
export class OnlineShopPage {
    constructor(){

        this.onlineShop = '#onlineshoplink';

    }

    clickOnlineShop(){
        cy.get(this.onlineShop, {setTimeout:10000}).click();
    }

    verificaOnlineShop(title){
        cy.contains('h2', title, { setTimeout: 10000 });
    }


}