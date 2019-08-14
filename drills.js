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

*/
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

