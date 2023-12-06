import { Product } from "./Product.js";
import { ProductManager } from "./ProductManager.js";

document.addEventListener("DOMContentLoaded", () =>{

// Instanciar el ProductManager
const productManager = new ProductManager();

// Manejo formulario para añadir producto
document.getElementById('inventory-form').addEventListener('submit', function(e){
    e.preventDefault();

    // Obtener los valores del usuario
    const productName = document.getElementById('product-name').value
    const productQuantity = parseInt(document.getElementById('product-quantity').value)
    const productPrice = parseFloat(document.getElementById('product-price').value)
    const addedInput = document.getElementById("added-product")

    // Crear una instancia de Product con los valores del formulario
    if (productName && !isNaN(productPrice) && !isNaN(productQuantity)){
    const newProduct = new Product(Date.now(), productName, productQuantity, productPrice)
    console.log(newProduct)

    // Agregar el newProduct a la instancia de ProductManager
    productManager.addProduct(newProduct);

    // Limpiar formulario
    this.reset();

    // Mensaje confirmación
    addedInput.innerText = `Producto "${productName}" añadido con éxito`
    addedInput.classList.add = "hidden"
    addedInput.style.display = "block"
    setTimeout(() => {
            addedInput.style.display= "none"
    }, 4000);

    // Actualizar la tabla del inventario
    productManager.listProducts();
    updateInventoryTable();
    }
})

const updateInventoryTable = () => {
    const tableBody = document.getElementById('inventory-content');
    tableBody.innerHTML = '';

    // Obtener lista de productos de ProductManager
    const products = productManager.listProducts();

    // Iterar sobre lista de productos y agregar filas a la tabla
    products.forEach(product => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${product.name}</td>
            <td>${product.quantity}</td>
            <td>${product.price}</td>
            <td>
                <button id="edit-button" class="edit-button">Editar</button>
                <button id="delete-button" class="delete-button">Eliminar</button>
            </td>
        `;
        tableBody.appendChild(row);
    })
}

// Llamar a la función para mostrar la tabla del inventario
updateInventoryTable();


});