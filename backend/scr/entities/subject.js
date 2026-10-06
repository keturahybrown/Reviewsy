/*
    class the contians the subjects to categorize decks 
*/

export default class Subject{
    
    #id;
    #user; 
    #name; 
    #decks = []

    constructor(id, user, name, decks){
        this.#id = id;
        this.#user = user; 
        this.#name = name;
        this.#decks = decks 
    }

    get decks() {return this.#decks}
    get name() {return this.#name}
    get id() {return this.#id}

    addDecks(){

    }

    rename(newName){
        

    }

    

}