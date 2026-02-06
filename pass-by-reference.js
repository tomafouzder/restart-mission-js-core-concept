// all primitive values (number, string, boolean, ) always pass by value
function multiply(x, y) {
    x = x + 5;
    y = y + 5;
    const mult = x * y;
    return mult;
}

const a = 5;
const b = 7;

const result = multiply(a, b);
console.log(result);


// all non-primitive values (object, array) always pass by reference and it change value 
const manik = { name: 'manik', money: 5000 };
const roton = { name: 'roton', money: 40000 };
console.log('before calling:', manik, roton);

function totalMoney(person1, person2) {
    person1.money = 0;
    person2.money = person2.money / 2;
    const total = person1.money + person2.money;
    return total;
}
const balance = totalMoney(manik, roton)
console.log('Total balance:', balance);

console.log('After function call:', manik, roton);



