export class ProductManager {
    #products;

    constructor(){
        this.#products = [];
    }

    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }
    
    // Método para cargar productos
    uploadProducts(){
        this.#products = [
            {id: 1, name: "Manzana Gran Smith", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 2, name: "Manzana Golden", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 3, name: "Piña", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 4, name: "Naranja", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 5, name: "Melocotón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 6, name: "Pera", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 7, name: "Mandarina", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 8, name: "Kiwi", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 9, name: "Limón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 10, name: "Aguacate", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 11, name: "Plátano de Canarias", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 12, name: "Melón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 13, name: "Fresa", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 14, name: "Cereza", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 15, name: "Nectarina", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 16, name: "Sandía", quantity: getRandomQuantity(), price: getRandomPrice()},
        ];
    }

    // Método para obtener lista productos actualizada
    listProducts(){
        if(this.#products.length === 0){
            this.uploadProducts();
        }
        return this.#products;
    }

    // Método para guardar productos en localStorage
    saveInLocalStorage() {
        localStorage.setItem("products", JSON.stringify(this.#products));
    }

    // Cargar Productos desde localStorage
    loadProductsFromLocalStorage() {
        const storedProducts = localStorage.getItem("products");
        if (storedProducts) {
            this.#products = JSON.parse(storedProducts);
        } else {
            this.uploadProducts(); // Cargar productos predeterminados si no hay nada en localStorage
        }
        console.log("Products loaded from localStorage:", this.#products)
    }

    // Método para añadir un producto
    addProduct(product){
        this.#products.push(product);
        this.saveInLocalStorage();
    }

    // Método para actualizar un producto a partir del ID
    updateProductByID(id, updateProduct){
        // comprobar el id de cada product
        // comprobar que sea el mismo que el que se pasamos como parámetro
        const index = this.#products.findIndex(product => product.id === id);

        // Si index no es -1 (!= no coincidente === coincidente), hay que reemplazar
        if(index !== -1){
            this.#products[index] = updateProduct; 
            this.saveInLocalStorage();
        }
    }

    // Método para borrar un producto a partir del ID
    deleteProductByID(id){
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1){
            this.#products.splice(index, 1);
            this.saveInLocalStorage();
        }
    }

    // Método para buscar un producto a partir del nombre
    searchProductByName(name) {
        return this.#products.find(product => product.name.toLowerCase() === name.toLowerCase());
    }

    // Método para mostrar todos los productos entro del array (~ toString)
    showProducts(){
        for(const product of this.#products){
            console.log(`ID: ${product.id} <br/>, 
            Nombre: ${product.name} <br/>, 
            Cantidad: ${product.quantity}.#quantity} <br/>, 
            Precio: ${product.price}.#price} <br/>
            `);
        }
    }
}

// Funciones para obtener cantidad y precio aleatorios
const getRandomQuantity = () =>{
    return Math.floor(Math.random()* 100) +1;
}

const getRandomPrice = () => {
    return (Math.random() * 300 + 1).toFixed(2);
}