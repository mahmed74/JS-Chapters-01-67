var counter = 0

function countInc() {
    counter++
    var screenVar = document.getElementById('screen');
    screenVar.value = counter;
    // console.log(counter)
}

function countDec() {
    counter--
    // console.log(counter)
    if (counter < 0) {
        counter = 0
    }
    var screenVar = document.getElementById('screen');
    screenVar.value = counter;
}