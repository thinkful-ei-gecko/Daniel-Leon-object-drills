'use strict';

/*// Drill #1

let loaf = {
  flour: 300,
  water: 210,
  hydration() {
    return this.water / this.flour * 100;
  }
};

console.log(loaf.flour);
console.log(loaf.water);
console.log(loaf.hydration());

//Drill #2

const myObj = {
  foo : 'bar',
  bar : 'foo',
  fum : 'fee',
  quux : 'quix',
  spam : 'don\'t like'
}

function loops(myObj) {
  for (const prop in myObj) {
    console.log(`${prop} ${myObj[prop]}`);
  }
}

loops(myObj);


//Drill #3

let myObj = {
  meals : ['breakfast', 'second breakfast', 'elevenses', 'lunch', 'afternoon tea', 'dinner', 'supper']
};

console.log(myObj.meals[3]); 


// Drill #4&5
function people(name, jobTitle, boss) {
  return {
    name,
    jobTitle,
    boss
  };
}

const arr = [people('edison', 'inventor', 'Elon Musk'), people('jefferson', 'president','Elon Musk'), people('Bruce Wayne', 'Batman','Elon Musk'),people('Elon Musk', 'Owner')];


function objLoop(arr) {
  for (let i = 0; i < arr.length; i++) {
    if (!arr[i].boss) {
      console.log(`${arr[i].name} ${arr[i].jobTitle} doesn't report to anybody`);
    }
    else {
      console.log(`${arr[i].name} ${arr[i].jobTitle} reports to ${arr[i].boss}`);
    }
  }
}

objLoop(arr);

const words = 'craft block argon meter bells brown croon droop';


const cipher = {
  a: 2,
  b: 3,
  c: 4, 
  d: 5
};

function decodeWords(str, cipher) {
  let code = str.split(' ');
  let message = '';
  for (let i = 0; i < code.length; i++) {
    if (Object.keys(cipher).includes(code[i].charAt(0))) {
      for (let key in cipher) {
        if (key === code[i].charAt(0)) {
          message += code[i].charAt(cipher[key] -1);
        }
      }
    }
    else {
      message += ' ';
    }
  }
  return message;
}

console.log(decodeWords(words, cipher));
*/

//Drill 6

function createCharacter(name, nickname, race, origin, attack, defense) {
  return {
    name,
    nickname,
    race,
    origin,
    attack,
    defense,
    describe() {
      console.log(`${this.name} is a ${this.race} from ${this.origin}`);
    },
    evaluateFight(character) {
      //X is character damage
      //Y is your damage
      //-Your opponet takes X damage, you take Y damage-
      
      if (this.attack > character.defense) {
        let x = this.attack-character.defense;
      }
      else { 
        let x = 0;
      }
      if (this.defense >= character.attack) {
        let y = 0;
      }
      else { 
        let y = character.attack - this.defense;
      }
      return console.log(`Your opponent takes ${x} damage and you receive ${y} damage`);
    }
  };
}

let characters = [createCharacter('Gandalf the White','gandalf','Wizard','Middle Earth',10,6),createCharacter('Bilbo Baggins','Bilbo','Hobbit','The Shire',2,1),createCharacter('Frodo Baggins','Frodo','The Hobbit','The Shire',3,2),createCharacter('Aragorn son of Arathorn','Aragorn','Man','Dunnedain',6,8),createCharacter('Legolas','Legolas','Elf','Woodland Realm',8,5)];
characters.push(['Arwen Undomiel','Arwen','Half-Elf','Rivendell',10,10]);
let found = characters.find((element) => element.nickname === 'Aragorn');
found.describe();
let hobbitPeople = characters.filter((element) => element.race === 'Hobbit');
let aboveFive = characters.filter((element) => element.attack > 5);


const HEROES = [
  { id: 1, name: 'Captain America', squad: 'Avengers' },
  { id: 2, name: 'Iron Man', squad: 'Avengers' },
  { id: 3, name: 'Spiderman', squad: 'Avengers' },
  { id: 4, name: 'Superman', squad: 'Justice League' },
  { id: 5, name: 'Wonder Woman', squad: 'Justice League' },
  { id: 6, name: 'Aquaman', squad: 'Justice League' },
  { id: 7, name: 'Hulk', squad: 'Avengers' },
];

// console.log(HEROES['Object.keys(HEROES[1])[1]']);

let someHeroes = Object.keys(HEROES).map((key) =>  HEROES[key]);
console.log(someHeroes);


// function findOne(arr, query) {
//   for (let i = 0; i < Object.keys(query).length; i++) {
//     for (let j = 0; j < arr.length; j++) {
//       console.log(j + 'this is j');
//       for (let k = 0; k < Object.keys(arr)[j]; k++) {
//         console.log(k + 'this is k');
//         console.log(arr[j][k]);
//         console.log(Object.keys(query)[i] + 'this is query object keys');
//         if (Object.keys(query)[i] === arr[j][k]) {
//           if (Object.values(query)[i] === Object.values(arr[j][k])) {
//             let answer = arr[j];
//             for (let prop in query) {
//               if (query[prop] !== arr[j][prop]) {
//                 return 'could not find';
//               }
//             }
//             return 'should be answer';
//           }
//         }
//       }
//     }
//   }
//   return 'no solution';
// }


// console.log(findOne(HEROES, { id: 1 }));

// let query = {id : 2};

//findOne(arr, query)
// //take the query, find out how many keys are in it

//cycle through the code ^ many times
  //cycle through the heroes code and check if the key matches the others
    //if it does, check the next key in that object and see if the value matches
      //if it does, then return that object
  //if it doesn't, return null
