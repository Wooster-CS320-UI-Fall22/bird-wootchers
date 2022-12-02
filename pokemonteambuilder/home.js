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

    return dexNum;
}
var numDebug = randomNumber()
console.log(numDebug)

document.getElementById("randpoke").src = "../data/sprites/" + numDebug + ".png";
