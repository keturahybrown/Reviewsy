/*
    Class that contains card objects 
*/

export default class Card{

    #id; 
    #deckIds = []; 
    #front = '';
    #back = ''; 

    constructor(id, deckIds, front, back ){
        this.#id = id;
        this.#deckIds = deckIds; 
        this.#front = front;
        this.#back = back; 
    }
 
    get id(){return this.#id; }
    get decks (){ return [...this.#deckIds]}

    viewCard(){
        return {'front': this.#front, 
                'back': this.#back } 
    }

    edit(front = this.#front, back = this.#back){
        if (front !== this.#front || back !== this.#back){
            this.#front = front;
            this.#back = back; 
            return 'Card edited'
        } else {
            return 'Nothing to change'
        }
    }

    addToDeck(deckId){
        if (!this.#checkInDeck(deckId)){
            this.#deckIds.push(deckId); 
            return 'Card add to Deck'
        } else {
            return 'Card already In Deck'
        }
        
    }

    removeFromDeck(deckId){
        if (this.#checkInDeck(deckId)){
            const newDecks = this.#deckIds.filter(item => item !== deckId);
            this.#deckIds = newDecks; 
        }
    }

    #checkInDeck(deckId){
        return this.#deckIds.includes(deckId)
    }


}

