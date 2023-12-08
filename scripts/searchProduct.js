import { productManager } from "./main.js";
import { updateProduct } from "./updateProduct.js";
import { deleteProduct } from "./deleteProduct.js";

const searchBtn = document.getElementById("search-btn");
const searchInput = document.getElementById("search");
const foundedModal = document.getElementById("modal-search");
const modalContent = document.getElementById("founded-product");
const deleteBtn = document.getElementById("btn-delete");
const openEditModal = document.getElementById("btn-edit");
const closeModalBtn = document.getElementById("close-modal");

searchBtn.addEventListener('click', searchProduct);
console.log("clicked")
const searchProduct = () => {
    console.log("button-clicked")
    const searchName = searchInput.value;
    console.log(searchName)
    const foundProduct = productManager.searchProductByName(searchName)

    if(!foundProduct) {
        alert(`No hay coincidencias en el inventario.`);
        searchInput.value = "";
        return;
    }

    foundedModal.style.display = "block";
    console.log(foundProduct);
    modalContent.innerHTML = `<p><strong>Producto:</strong> <br> ${foundProduct.name}</p> 
                            <p><strong>Stock:</strong>  <br> ${foundProduct.quantity} uds</p>  
                            <p><strong>Precio:</strong> <br>${foundProduct.price}€</p>`
  
    openEditModal.addEventListener("click", () =>{
        foundedModal.style.display = "none";
        updateProduct(foundProduct);
        searchInput.value= "";
    })

    deleteBtn.addEventListener("click", () => {
        deleteProduct(foundProduct);
        foundedModal.style.display = "none";
        searchInput.value = "";
    })

    closeModalBtn.addEventListener("click", () =>{
        foundedModal.style.display = "none"
        searchInput.value = "";
    })
}

