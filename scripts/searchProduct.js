import { productManager } from "./main.js";
import { updateProduct } from "./updateProduct.js";
import { deleteProduct } from "./deleteProduct.js";


export const searchProduct = () => {
    const searchName = document.getElementById("search");
    const foundedModal = document.getElementById("modal-search");
    const modalContent = document.getElementById("founded-product");
    const deleteBtn = document.getElementById("btn-delete");
    const openEditModal = document.getElementById("btn-edit");
    const closeModalBtn = document.getElementById("close-modal");

    const foundProduct = productManager.searchProductByName(searchName.value)
    
    if(!foundProduct) {
        alert(`No hay coincidencias en el inventario.`);
        searchName.value = "";
        return;
    }

    foundedModal.style.display = "block";
    
    modalContent.innerHTML = `<p><strong>Producto:</strong> <br> ${foundProduct.name}</p> 
                            <p><strong>Stock:</strong>  <br> ${foundProduct.quantity} uds</p>  
                            <p><strong>Precio:</strong> <br>${foundProduct.price}€</p>`
  
    openEditModal.addEventListener("click", () =>{
        foundedModal.style.display = "none";
        updateProduct(foundProduct);
        searchName.value = "";
    })

    deleteBtn.addEventListener("click", () => {
        deleteProduct(foundProduct);
        foundedModal.style.display = "none";
        searchName.value = "";
    })

    closeModalBtn.addEventListener("click", () =>{
        foundedModal.style.display = "none"
        searchName.value = "";
    })
}

