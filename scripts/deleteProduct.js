import { updateInventoryTable } from "./updateTable.js";
import { productManager } from "./main.js";

export const deleteProduct = (product) => {

    if (confirm(`¿Seguro de que deseas borrar el producto?`)) {
        productManager.deleteProductByID(product.id);
        console.log(productManager.products)

    productManager.listProducts();
    updateInventoryTable();  
    }
};
