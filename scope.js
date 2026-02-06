//---------- block scape ----------//

// if (true){

// }

const name = "Tom Hanks";  // Global scope 
if (true) {
    const data = 25;
    console.log("inside the if block : ", data, name);
    doMath(14, 30)
}
// console.log(data);


// while loop:
// while (condition) {

// }

// for loop:
// for (const num of [1, 21, 5, 4]){
//     console.log(num);
// }


// function scope / local scope
function doMath(a, b) {
    //  console.log('calling doubledIt :', doubledIt(450));
    console.log(a, b)
    //we use a,b parameter only this inside of function scope block 
    function doubledIt(x) {
        return x * 2
    }
    // console.log('calling doubledIt :', doubledIt(450));
}
// console.log(a, b);
//  console.log('calling doubledIt :', doubledIt(450));  // error

