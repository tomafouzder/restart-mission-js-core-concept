/**
 * 
 * Undefine ---> Not define
 * 
 */

let money;
// console.log(money);

// ----------------------

function total(a, b) {
    // console.log('value of parameter :', a, b);
    const sum = a + b;
    // console.log('sum of total numbers: ', sum);
}

const result = total(2, 3);
// console.log('value of result :', result);  //when block element not return then result is--> undefined

// -----------------------

function total2(a, b) {
    console.log('value of parameter total2 :', a, b);
    if (a === undefined || b === undefined) {
        return;  // undefine
    }
    if (a && b) {
        const sum = a + b;
        return sum;
    }
}

const result2 = total2(8)
console.log('result2', result2);


// ----------------------

const phone = { brand: 'samsung', price: 2500 }
console.log(phone.brand);
console.log(phone.color);  // undefine

// -----------------------

const bank = ['soali', 'ropali', 'jomuna'];
// console.log(bank[3]);   //undefined
delete bank[1]
console.log(bank);  // [ 'soali', <1 empty item>, 'jomuna' ]

console.log('type of undefine : ', typeof undefined);
console.log('type of null : ', typeof null);  // object



