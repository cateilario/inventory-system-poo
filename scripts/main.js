import { ProductManager } from "./ProductManager.js";
import { addProduct } from "./addProduct.js";
import { updateInventoryTable } from "./updateTable.js";

// Instanciar el ProductManager
export const productManager = new ProductManager();

// Llamar a la función para mostrar la tabla del inventario
updateInventoryTable();






