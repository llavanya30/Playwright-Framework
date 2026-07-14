class InventoryPage{
    constructor(page){
        this.page=page;
        this.productTitle='.inventory_item_name';
    }

    async clickFirstProduct(){
        await this.page.click(this.productTitle);
    }
}

module.exports = { InventoryPage };