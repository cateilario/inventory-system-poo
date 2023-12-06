export class Product {
    #id;
    #name;
    #quantity;
    #price;

    constructor(id, name, quantity, price){
        this.#id = id;
        this.#name = name;
        this.#quantity = quantity;
        this.#price = price;
    }

    // Getters y setters
    get id(){
        return this.#id;
    }

    set id(value){
        this.#id = value;
    }

    get name(){
        return this.#name;
    }

    set name(value){
        this.#name = value;
    }

    get quantity(){
        return this.#quantity;
    }

    set quantity(value){
        this.#quantity = value;
    }

    get price(){
        return this.#price;
    }

    set price(value){
        this.#price = value;
    }

    showProduct(){
        console.log(`ID: ${this.#id}<br/>,
        Nombre: ${this.#name}<br/>,
        Cantidad: ${this.#quantity}<br/>,
        Precio: ${this.#price}<br/>`)
    }


}