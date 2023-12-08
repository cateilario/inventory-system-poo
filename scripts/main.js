import { ProductManager } from "./ProductManager.js";
import { updateInventoryTable } from "./updateTable.js";
import { searchProduct } from "./searchProduct.js"
import { addProduct } from "./addProduct.js";

// Instanciar el ProductManager
export const productManager = new ProductManager();

const addBtn = document.getElementById("inventory-form")
const searchBtn = document.getElementById("search-btn");
const searchName = document.getElementById("search");
    
addBtn.addEventListener("click", addProduct)
searchBtn.addEventListener("click", searchProduct)
searchName.addEventListener("keydown", (event) => {
    if(event.key === "Enter") {
        event.preventDefault();
        searchProduct();
    }
})

// Llamar a la función para mostrar la tabla del inventario
updateInventoryTable();






