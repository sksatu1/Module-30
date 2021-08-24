const add = (num1, num2) => num1 + num2;
const sum = add(90, 110);

const multiply = (num1, num2, num3) => num1 * num2 * num3;
const multiplyedValue = multiply(2, 3, 4);
console.log('multiply value = ', multiplyedValue);
console.log('sum= ', sum);

//  for one parameter ----------------------------------------------
const fiveTimes = num => num * 5;
const output = fiveTimes(10);
console.log(output);

//  for no parameter 
const getName = () => "sk satu";
const myName = getName();
console.log(myName);


// -----------------------------------arrow function for multiline -------------------------------------------

const doMath = (num1, num2) => {
    const sum = num1 + num2;
    const diff = num1 - num2;
    const result = sum * diff;
    const output = result * 5;
    return output;
}

const total = doMath(10, 5);
console.log(total);