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
            {id: 4, name: "Naranja", amounquantityt: getRandomQuantity(), price: getRandomPrice()},
            {id: 5, name: "Melocotón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 6, name: "Pera", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 7, name: "Mandarina", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 8, name: "Kiwi", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 9, name: "Limón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 10, name: "Aguacate", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 11, name: "Plátano", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 12, name: "Melón", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 13, name: "Fresa", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 14, name: "Cereza", quantity: getRandomQuantity(), price: getRandomPrice()},
            {id: 15, name: "Melón", quantity: getRandomQuantity(), price: getRandomPrice()},
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

    // Método para añadir un producto
    addProduct(product){
        this.#products.push(product);
    }

    // Método para actualizar un producto a partir del ID
    updateProductByID(id, updateProduct){
        // comprobar el id de cada product
        // comprobar que sea el mismo que el que se pasamos como parámetro
        const index = this.#products.findIndex(product => product.id === id);

        // Si index no es -1 (!= no coincidente === coincidente), hay que reemplazar
        if(index !== -1){
            this.#products[index] = updateProduct;
        }
    }

    // Método para borrar un producto a partir del ID
    deleteProductByID(id){
        const index = this.#products.findIndex(product => product.id === id);

        if (index !== -1){
            this.#products.splice(index, 1);
        }
    }

    uploadToLocalStorage(){
        this.#products.forEach(product => {
            localStorage.setItem(product.id, JSON.stringify(product.toJSON()))
        })
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
    return Math.floor(Math.random()* 13) +1;
}

const getRandomPrice = () => {
    return (Math.random() * 100 + 1).toFixed(2)
}