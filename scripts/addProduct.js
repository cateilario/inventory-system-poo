import { Product } from "./Product.js";
import { productManager } from "./main.js";
import { updateInventoryTable } from "./updateTable.js";

export const addProduct = () => {
// Manejo formulario para añadir producto
document.getElementById('inventory-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Obtener los valores del usuario
    const productName = document.getElementById('product-name').value;
    const productQuantity = parseInt(document.getElementById('product-quantity').value);
    const productPrice = parseFloat(document.getElementById('product-price').value);
    const addedInput = document.getElementById("added-product");

    // Crear una instancia de Product con los valores del formulario
    if (productName && !isNaN(productPrice) && !isNaN(productQuantity)){
    const newProduct = new Product(Date.now(), productName, productQuantity, productPrice);

    // Agregar el newProduct a la instancia de ProductManager
    productManager.addProduct(newProduct);
    console.log(productManager.listProducts())

    // Limpiar formulario
    this.reset();

    // Mensaje confirmación
    addedInput.innerText = `Producto "${productName}" añadido con éxito!`
    addedInput.classList.add("hidden")
    addedInput.style.display = "block"
    setTimeout(() => {
            addedInput.style.display= "none"
    }, 4000);

    // Actualizar la tabla del inventario
    productManager.listProducts();
    updateInventoryTable();
    }
})
}