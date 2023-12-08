import { productManager } from "./main.js";
import { updateInventoryTable } from "./updateTable.js";

export const deleteProduct = product => {
    if(confirm(`¿Seguro que seas borrar el producto "${product.name}"?`)) {
        productManager.deleteProductByID(product.id);
        updateInventoryTable();
    }  
}