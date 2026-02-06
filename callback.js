// Call Back function

function pakhiBhai(callBackMe, patri, patro) {
    console.log('value of patri :', patri);
    // console.log('callBackMe Parameter:', callBackMe);

    if (patro) {
        // console.log(callBackMe)
        callBackMe(patri)
    }
    else {
        console.log('tor kopale biye nai');
    }
}

function callSomeOne(person) {
    console.log('calling', person);
}
// callSomeOne("jodu")
pakhiBhai(callSomeOne, 'Ms.Jadukori', 'Mr.Jadukor')