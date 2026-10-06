/*
    class creating the user object 
*/

export default class User {

    #id;
    #name; 
    #username; 
    
    constructor(id, name, username){
        this.#id = id;
        this.#name = name; 
        this.#username = username;
        
    }

    get id(){ return this.#id; }
    get name(){ return this.#name; } 
    get username(){return this.#username; } 

    changeName(name){
        this.#username = String(name) 
    }

}