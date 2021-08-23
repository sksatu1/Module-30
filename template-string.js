// use of multiline 
const about = `amar sonar bangla 
  ami tomai valobasi
  ting ting`;

const myValue = [5, 3, 15, 77, 88];

const count = 5;
const old = '<h2 class="friend">friend-4</h2>';
const old2 = '<h2 class="friend">friend' + count + '</h2>';
const new1 = `<h2 class="friend">friend-${count}</h2>`;

const first = 'SK';
const second = 'satu';
const oldName = first + ' ' + second;
const newName = `this person name is : ${first} ${second}. Has money ${myValue.length * 500}`;
console.log(newName);

//  ekhane `` sign use kore tar moddhe variable use korte caile " ${variable_name} "  use korte pari