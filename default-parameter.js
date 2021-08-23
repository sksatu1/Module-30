function add(num1, num2 = 0) {
    // option 1 

    /* if (num2 == undefined) {
        num2 = 0;
    } */

    // Option 2
    /*  num2 = num2 || 0; */

    const total = num1 + num2;
    console.log(total);
}

add(15);
// add(13, 14);