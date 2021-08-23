// function declaration 
function add(num1, num2) {
    return num1 + num2;
}

// function expression -----------------------
const add2 = function add2(num1, num2) {
    return num1 + num2;
}

// function expression (anonymous)-------------------------------------
const add3 = function (num1, num2) {
    return num1 + num2;
}

// arrow function  ----------------------------------------
const add4 = (num1, num2) => num1 + num2;


const sum = add(15, 40);
const sum2 = add2(15, 40);
const sum3 = add3(15, 40);
const sum4 = add4(15, 40);

console.log(sum, sum2, sum3, sum4);