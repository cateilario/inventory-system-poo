import { productManager } from "./main.js";
import { deleteProduct } from "./deleteProduct.js";
import { updateProduct } from "./updateProduct.js";

export const updateInventoryTable = () => {
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

        const deleteBtn = row.querySelector('.delete-button');
    
        deleteBtn.addEventListener('click', () =>{
            deleteProduct(product)
        })

        const editBtn = row.querySelector('.edit-button');

        editBtn.addEventListener('click', () =>{
            updateProduct(product)
        })

    })
};