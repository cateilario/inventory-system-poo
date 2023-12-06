export class ProductManager {
    #products;

    constructor(){
        this.#products = []
    }

    get products(){
        return this.#products;
    }

    set products(value){
        this.#products = value;
    }

    // Método para obtener lista productos
    listProducts(){
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