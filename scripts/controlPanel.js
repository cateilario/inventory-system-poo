import { productManager } from "./main.js";

export const totalInventory = () => {
    const products = productManager.listProducts()

    // Elementos del DOM
    const totalPriceResult = document.getElementById("total-price");
    const totalQuantityResult = document.getElementById("total-quantity");
    const averageCostResult = document.getElementById("average-cost");

    // Calcular el precio total, la cantidad total y el coste medio
    const totalPrice = products.reduce((total, product) => total + (product.quantity * product.price), 0);
    const totalQuantity = products.reduce((total, product) => total + product.quantity, 0);
    const averageCost = products.reduce((total, product) => total + (product.quantity * product.price), 0) / totalQuantity;
    
    totalPriceResult.innerHTML = `${totalPrice.toLocaleString()}€`;
    totalQuantityResult.innerHTML = `${totalQuantity}`;
    averageCostResult.innerHTML = `${averageCost.toFixed(2)}€`;
}

document.addEventListener("DOMContentLoaded", totalInventory);