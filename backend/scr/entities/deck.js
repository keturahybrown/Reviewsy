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
    #CARD_LIMIT = 10; 

    constructor(id, userId, subjectId, name, cardAmount, cardIds = []){
        this.#id = id;
        this.#userId = userId;
        this.#subjectId = subjectId;
        this.#name = name;
        this.#cardAmount = cardAmount; 
        this.#cardIds = cardIds
    }

    addCard(cardId){
        // check if the max amount is reached 
        if (!this.#check_reached_card_limit){
            this.#cardIds.push(cardId); 
        } 
        
    }

    changeName(newName){
        this.#name = String(newName); 
    }

    deleteCard(cardId){

    }

    clearDeck(){

    }

    addToSubject(){

    }

    #check_reached_card_limit(){
        if(this.#cardAmount === this.#CARD_LIMIT){
            return true
        } else {
            return false 
        }
    }

}