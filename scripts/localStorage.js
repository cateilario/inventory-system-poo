import { Product } from "Product.js";
import { ProductManager } from "./ProductManager.js";
export class LocalStorage extends ProductManager {
    
    addProduct(product) {
        super.addProduct(product);
        this.uploadToLocalStorage();
    }

    updateProduct(id, updatedProduct) {
        super.updateProductByID(id, updatedProduct);
        this.uploadToLocalStorage();
    }

    deleteProduct(id) {
        super.deleteProductByID(id);
        this.uploadToLocalStorage();
    }
}