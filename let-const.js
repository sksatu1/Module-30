// const myName = 'satu';
// myName = 'sanat';    value assign  is not allowed
const myValue = [5, 3, 15, 77, 88];
// myValue = 5;    value assign is not allowed

// push pop is allowed for const array variable 
myValue.push(100);
console.log(myValue);

//  value assign is allowed for an indevidual array index but not for whole array 
myValue[0] = 7;
console.log(myValue);

// same rules descriebd above are allowed for  " object" and " array" 
let sum = 0;
for (let i = 0; i < myValue.length; i++) {
    // for each time number will be set const 
    const number = myValue[i];
    // console.log('my number = ', number);
    sum = sum + number;
}
console.log('my array sum = ', sum);
