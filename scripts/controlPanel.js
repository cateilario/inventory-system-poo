import { productManager } from "./main.js";

export const totalInventory = () => {
    const products = productManager.listProducts()

    // Elementos del DOM
    const totalPriceResult = document.getElementById("total-price");
    const totalQuantityResult = document.getElementById("total-quantity")

    // Calcular el precio total y la cantidad total
    const totalPrice = products.reduce((total, product) => total + (product.quantity * product.price), 0);
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);

    totalPriceResult.textContent = `${totalPrice.toLocaleString()}€`;
    totalQuantityResult.textContent = `${totalQuantity}`;
}

document.addEventListener("DOMContentLoaded", totalInventory);