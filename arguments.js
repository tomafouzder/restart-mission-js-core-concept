// normal case
function add(a, b) {
    console.log(a, b)
}
add(1, 8, 52, 8, 2, 7)


// use argument 
function add2(a, b) {
    console.log(arguments);
    const params = [...arguments]
    console.log(params);

}
add2(1, 8, 52, 8, 2, 7)