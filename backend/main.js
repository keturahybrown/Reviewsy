import Card from './scr/entities/card.js'
import express from 'express'; 

const app = express(); 
const router = express.Router(); 


let card = new Card(1, [5], 'hi', 'world');

let cardPropeties = card.viewCard();




console.log(cardPropeties);


app.use('/api', router); 