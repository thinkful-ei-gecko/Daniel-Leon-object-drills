'use strict';
// Drill #1

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