//*********** closure *************//

// function counter() {
//     let count = 0;
//     function innerFunction() {
//         console.log("inside the inner function , someone call me");

//     }
//     return innerFunction;
// }
// const output = counter();
// console.log(output);  // [Function: innerFunction]
// console.log(output());  // inside the inner function , someone call me


function counter2() {
    let count = 10;
    return function (user) {
        count = count + 1;
        console.log('inside the inner function', user, count);
    }
}
const innerFunction2 = counter2()
// innerFunction2()
// innerFunction2()
// innerFunction2()

const rahimCounter = counter2();
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
rahimCounter('rahim')
console.log('---------------------------');
const karimCounter = counter2();
karimCounter('karim')
karimCounter('karim')
rahimCounter('rahim')


