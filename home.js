function toDexNumber(str) {
    while(str.length < 3) {
        str = '0' + str;
    }
    return str;
}
function randomNumber() {
    var num = Math.floor(Math.random() * (151 - 1) + 1);
    console.log(num.toString());
    dexNum = toDexNumber(num.toString());

    var missingno = Math.floor(Math.random() * (1000 - 1) + 1);
    if (missingno == 1) {
        return '000';
    }

    return dexNum;
}
var numDebug = randomNumber()
console.log(numDebug)

document.getElementById("randpoke").src = "images/data/sprites/" + numDebug + ".png";
