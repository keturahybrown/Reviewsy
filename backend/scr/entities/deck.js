/* 
    Class contianing Decks that hold up to 10 cards 
*/ 

export default class Deck {
    
    #id;
    #userId; 
    #name;
    #cardAmount;
    #subjectId; // can only be apart of one subject 
    #cardIds;

    constructor(id, userId, subjectId, name, cardAmount, cardIds = []){
        this.#id = id;
        this.#userId = userId;
        this.#subjectId = subjectId;
        this.#name = name;
        this.#cardAmount = cardAmount; 
        this.#cardIds = cardIds
    }

    addCard(){
        // max amount allowed is 10 per deck 
    }

    changeName(){

    }

    deleteCard(){

    }

    clearDeck(){

    }

    addToSubject(){

    }



}