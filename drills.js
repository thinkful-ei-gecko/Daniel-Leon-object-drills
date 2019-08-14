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


