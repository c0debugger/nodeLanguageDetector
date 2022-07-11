// node index.js "come estas"
//Spanish

// console.log(process.argv[2]);
import {franc, francAll} from 'franc';
import langs from 'langs';

let userInput = process.argv[2];

let code = franc(userInput);

const lang=langs.where("2T", code);

console.log(lang.name);

