class CartPage{
    constructor(page){
        this.page=page;
        this.cartIcon='.shopping_cart_link';
        this.cartTitle='.title';
    }

    async goToCart(){
        await this.page.click(this.cartIcon);

    }

    async getCartTitle(){
        return await this.page.textContent(this.cartTitle);
    }
}
module.exports = { CartPage }; 