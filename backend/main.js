import Card from './scr/entities/card.js'

let card = new Card(1, [5], 'hi', 'world');

let cardPropeties = card.viewCard();

console.log(cardPropeties.front);