function share() {
    data = {
        "poke1": document.getElementById("select-pokemon1").value,
        "poke2": document.getElementById("select-pokemon2").value,
        "poke3": document.getElementById("select-pokemon3").value,
        "poke4": document.getElementById("select-pokemon4").value,
        "poke5": document.getElementById("select-pokemon5").value,
        "poke6": document.getElementById("select-pokemon6").value,
        "rating": 0,
        "username": localStorage.getItem("username")
    }
    URL = '/shareteam'
    xhr = new XMLHttpRequest();
    sender = JSON.stringify(data);
    xhr.open('POST', URL);
    xhr.send(sender);
}

function teamEdit(imageid, idnumber){

    document.getElementById(imageid).src = 'images/sprites/' + idnumber + '.png';

    firetype();

    document.getElementById('normal').innerHTML = normalvalue;
    document.getElementById('fighting').innerHTML = fightingvalue;
    document.getElementById('flying').innerHTML = flyingvalue;
    document.getElementById('poison').innerHTML = poisonvalue;
    document.getElementById('ground').innerHTML = groundvalue;
    document.getElementById('rock').innerHTML = rockvalue;
    document.getElementById('bug').innerHTML = bugvalue;
    document.getElementById('ghost').innerHTML = ghostvalue;
    document.getElementById('fire').innerHTML = firevalue;
    document.getElementById('water').innerHTML = watervalue;
    document.getElementById('grass').innerHTML = grassvalue;
    document.getElementById('electric').innerHTML = electricvalue;
    document.getElementById('psychic').innerHTML = psychicvalue;
    document.getElementById('ice').innerHTML = icevalue;
    document.getElementById('dragon').innerHTML = dragonvalue;
}

let normalvalue = 0;
let fightingvalue = 0;
let flyingvalue = 0;
let poisonvalue = 0;
let groundvalue = 0;
let rockvalue = 0;
let bugvalue = 0;
let ghostvalue = 0;
let firevalue = 0;
let watervalue = 0;
let grassvalue = 0;
let electricvalue = 0;
let psychicvalue = 0;
let icevalue = 0;
let dragonvalue = 0;

function normaltype(){
    fightingvalue--;
    ghostvalue += 2;
}

function fightingtype(){
    flyingvalue--;
    rockvalue++;
    bugvalue++;
    psychicvalue--;

}

function flyingtype(){
    fightingvalue++;
    groundvalue += 2;
    rockvalue--;
    bugvalue++;
    grassvalue++;
    electricvalue--;
    icevalue--;

}

function poisontype(){
    fightingvalue++;
    poisonvalue++;
    groundvalue--;
    bugvalue--;
    grassvalue--;
    psychicvalue++;

}

function groundtype(){
    poisonvalue++;
    rockvalue++;
    watervalue--;
    grassvalue--;
    electricvalue += 2;
}

function rocktype(){
    normalvalue++;
    fightingvalue--;
    flyingvalue++;
    poisonvalue++;
    groundvalue--;
    firevalue++;
    watervalue--;
    grassvalue--;
}

function bugtype(){
    fightingvalue++;
    flyingvalue--;
    poisonvalue--;
    groundvalue++;
    rockvalue--;
    firevalue--;
    grassvalue++;
}

function ghosttype(){
    normalvalue += 2;
    fightingvalue += 2;
    poisonvalue++;
    bugvalue++;
    ghostvalue--;
}

function firetype(){
    groundvalue--;
    rockvalue--;
    bugvalue++;
    firevalue++;
    watervalue--;
    grassvalue--;
}

function watertype(){
    firevalue++;
    watervalue++;
    grassvalue--;
    electricvalue--;
    icevalue++;
}

function grasstype(){
    flyingvalue--;
    poisonvalue--;
    groundvalue++;
    bugvalue--;
    firevalue++;
    watervalue--;
    grassvalue--;
    electricvalue--;
    icevalue++;
}

function electrictype(){
    flyingvalue++;
    groundvalue--;
    electricvalue++;
}

function psychictype(){
    fightingvalue++;
    bugvalue--;
    ghostvalue += 2;
    psychicvalue++;
}

function icetype(){
    fightingvalue--;
    rockvalue--;
    firevalue--;
    icevalue++;
}

function dragontype(){
    firevalue++;
    watervalue++;
    grassvalue++;
    electricvalue++;
    icevalue--;
    dragonvalue--;
}
