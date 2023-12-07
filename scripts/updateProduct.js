import { productManager } from "./main.js";
import { updateInventoryTable } from "./updateTable.js";

const modalBox = document.getElementById("edit-modal")
const closeModal = document.getElementById("btn-close")
const saveBtn = document.getElementById("btn-save")
const newNameInput = document.getElementById("name-edit")
const newQuantityInput = document.getElementById("quantity-edit")
const newPriceInput = document.getElementById("price-edit")

export const updateProduct = product => {
    console.log(product)
    modalBox.style.display = "block";

    newNameInput.value = product.name;

    closeModal.addEventListener("click", () => {
        modalBox.style.display = "none";
    })

    saveBtn.addEventListener("click", () => {
        const newName = newNameInput.value;
        const newQuantity = parseInt(newQuantityInput.value);
        const newPrice = parseFloat(newPriceInput.value).toFixed(2)

        if(isNaN(newName) &&!isNaN(newQuantity) && !isNaN(newPrice)) {
            const updatedProduct = {
                name: newName,
                quantity: newQuantity,
                price: newPrice,
            };

            productManager.updateProductByID(product.id, updatedProduct)
            updateInventoryTable();
            console.log(productManager.listProducts())
            modalBox.style.display = 'none';
        } else {
            alert('Error! Ingrese valores válidos.')
            newQuantityInput.value = "";
            newPriceInput.value = "";
        }
    })
}

