const dropdowns = [];
dropdowns.length = 6;

const olddropdowns = [];
olddropdowns.length = 6;



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
    alert("team uploaded!");
}

function teamEdit(dropdownnumber, imageid, idnumber){
    //sets the pokemon image
    document.getElementById(imageid).src = 'images/sprites/' + idnumber + '.png';

    dropdowns[dropdownnumber] = idnumber;    
    edittypevalues(dropdowns[dropdownnumber]);
    undotypevalues(olddropdowns[dropdownnumber]);
    olddropdowns[dropdownnumber] = dropdowns[dropdownnumber];



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
    grassvalue++;
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
    firevalue--;
    watervalue++;
    grassvalue++;
    electricvalue++;
    icevalue--;
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



function unnormaltype(){
    fightingvalue++;
    ghostvalue -= 2;
}

function unfightingtype(){
    flyingvalue++;
    rockvalue--;
    bugvalue--;
    psychicvalue++;

}

function unflyingtype(){
    fightingvalue--;
    groundvalue -= 2;
    rockvalue++;
    bugvalue--;
    grassvalue--;
    electricvalue++;
    icevalue++;

}

function unpoisontype(){
    fightingvalue--;
    poisonvalue--;
    groundvalue++;
    bugvalue++;
    grassvalue++;
    psychicvalue--;

}

function ungroundtype(){
    poisonvalue--;
    rockvalue--;
    watervalue++;
    grassvalue++;
    electricvalue -= 2;
}

function unrocktype(){
    normalvalue--;
    fightingvalue++;
    flyingvalue--;
    poisonvalue--;
    groundvalue++;
    firevalue--;
    watervalue++;
    grassvalue++;
}

function unbugtype(){
    fightingvalue--;
    flyingvalue++;
    poisonvalue++;
    groundvalue--;
    rockvalue++;
    firevalue++;
    grassvalue--;
}

function unghosttype(){
    normalvalue -= 2;
    fightingvalue -= 2;
    poisonvalue--;
    bugvalue--;
    ghostvalue++;
}

function unfiretype(){
    groundvalue++;
    rockvalue++;
    bugvalue--;
    firevalue--;
    watervalue++;
    grassvalue--;
}

function unwatertype(){
    firevalue--;
    watervalue--;
    grassvalue++;
    electricvalue++;
    icevalue--;
}

function ungrasstype(){
    flyingvalue++;
    poisonvalue++;
    groundvalue--;
    bugvalue++;
    firevalue++;
    watervalue--;
    grassvalue--;
    electricvalue--;
    icevalue++;
}

function unelectrictype(){
    flyingvalue--;
    groundvalue++;
    electricvalue--;
}

function unpsychictype(){
    fightingvalue--;
    bugvalue++;
    ghostvalue -= 2;
    psychicvalue--;
}

function unicetype(){
    fightingvalue++;
    rockvalue++;
    firevalue++;
    icevalue--;
}

function undragontype(){
    firevalue--;
    watervalue--;
    grassvalue--;
    electricvalue--;
    icevalue++;
    dragonvalue++;
}


function edittypevalues(pokemonnumber){
    if((pokemonnumber == '016') || (pokemonnumber == '017') || (pokemonnumber == '018') || (pokemonnumber == '019') || (pokemonnumber == '020') || (pokemonnumber == '021') || (pokemonnumber == '022') || (pokemonnumber == '039') || (pokemonnumber == '040') || (pokemonnumber == '052') || (pokemonnumber == '053') || (pokemonnumber == '083') || (pokemonnumber == '084') || (pokemonnumber == '085') || (pokemonnumber == '108') || (pokemonnumber == '113') || (pokemonnumber == '115') || (pokemonnumber == '128') || (pokemonnumber == '132') || (pokemonnumber == '133') || (pokemonnumber == '137') || (pokemonnumber == '143')){
        normaltype();
    }
    if((pokemonnumber == '056') || (pokemonnumber == '057') || (pokemonnumber == '062') || (pokemonnumber == '066') || (pokemonnumber == '067') || (pokemonnumber == '068') || (pokemonnumber == '106') || (pokemonnumber == '107')){
        fightingtype();
    }
    if((pokemonnumber == '006') || (pokemonnumber == '012') || (pokemonnumber == '016') || (pokemonnumber == '017') || (pokemonnumber == '018') || (pokemonnumber == '021') || (pokemonnumber == '022') || (pokemonnumber == '041') || (pokemonnumber == '042') || (pokemonnumber == '083') || (pokemonnumber == '084') || (pokemonnumber == '085') || (pokemonnumber == '123') || (pokemonnumber == '131') || (pokemonnumber == '142') || (pokemonnumber == '144') || (pokemonnumber == '145') || (pokemonnumber == '146') || (pokemonnumber == '149')){
        flyingtype();
    }
    if((pokemonnumber == '001') || (pokemonnumber == '002') || (pokemonnumber == '003') || (pokemonnumber == '013') || (pokemonnumber == '014') || (pokemonnumber == '015') || (pokemonnumber == '023') || (pokemonnumber == '024') || (pokemonnumber == '029') || (pokemonnumber == '030') || (pokemonnumber == '031') || (pokemonnumber == '032') || (pokemonnumber == '033') || (pokemonnumber == '034') || (pokemonnumber == '041') || (pokemonnumber == '042') || (pokemonnumber == '043') || (pokemonnumber == '044') || (pokemonnumber == '045') || (pokemonnumber == '048') || (pokemonnumber == '049') || (pokemonnumber == '069')|| (pokemonnumber == '070') || (pokemonnumber == '071') || (pokemonnumber == '072') || (pokemonnumber == '073') || (pokemonnumber == '088') || (pokemonnumber == '089') || (pokemonnumber == '092') || (pokemonnumber == '093') || (pokemonnumber == '094') || (pokemonnumber == '109') || (pokemonnumber == '110')){
        poisontype();
    }
    if((pokemonnumber == '027') || (pokemonnumber == '028') || (pokemonnumber == '031') || (pokemonnumber == '034') || (pokemonnumber == '050') || (pokemonnumber == '051') || (pokemonnumber == '074') || (pokemonnumber == '075') || (pokemonnumber == '076') || (pokemonnumber == '095') || (pokemonnumber == '104') || (pokemonnumber == '105') || (pokemonnumber == '111') || (pokemonnumber == '112')){
        groundtype();
    }
    if((pokemonnumber == '074') || (pokemonnumber == '075') || (pokemonnumber == '076') || (pokemonnumber == '095') || (pokemonnumber == '111') || (pokemonnumber == '112') || (pokemonnumber == '138') || (pokemonnumber == '139') || (pokemonnumber == '140') || (pokemonnumber == '141') || (pokemonnumber == '142')){
        rocktype();
    }
    if((pokemonnumber == '010') || (pokemonnumber == '011') || (pokemonnumber == '012') || (pokemonnumber == '013') || (pokemonnumber == '014') || (pokemonnumber == '015') || (pokemonnumber == '046') || (pokemonnumber == '047') || (pokemonnumber == '048') || (pokemonnumber == '049') || (pokemonnumber == '123') || (pokemonnumber == '127')){
        bugtype();
    }
    if((pokemonnumber == '092') || (pokemonnumber == '093') || (pokemonnumber == '094')){
        ghosttype();
    }
    if((pokemonnumber == '004') || (pokemonnumber == '005') || (pokemonnumber == '006') || (pokemonnumber == '037') || (pokemonnumber == '038') || (pokemonnumber == '058') || (pokemonnumber == '059') || (pokemonnumber == '077') || (pokemonnumber == '078') || (pokemonnumber == '126') || (pokemonnumber == '136') || (pokemonnumber == '146')){
        firetype();
    }
    if((pokemonnumber == '007') || (pokemonnumber == '008') || (pokemonnumber == '009') || (pokemonnumber == '054') || (pokemonnumber == '055') || (pokemonnumber == '060') || (pokemonnumber == '061') || (pokemonnumber == '062') || (pokemonnumber == '072') || (pokemonnumber == '073') || (pokemonnumber == '079') || (pokemonnumber == '080') || (pokemonnumber == '086') || (pokemonnumber == '087') || (pokemonnumber == '090') || (pokemonnumber == '091') || (pokemonnumber == '098') || (pokemonnumber == '099') || (pokemonnumber == '116') || (pokemonnumber == '117') || (pokemonnumber == '118') || (pokemonnumber == '119') || (pokemonnumber == '120') || (pokemonnumber == '121') || (pokemonnumber == '129') || (pokemonnumber == '130') || (pokemonnumber == '131') || (pokemonnumber == '134') || (pokemonnumber == '138') || (pokemonnumber == '139') || (pokemonnumber == '140') || (pokemonnumber == '141')){
        watertype();
    }
    if((pokemonnumber == '001') || (pokemonnumber == '002') || (pokemonnumber == '003') || (pokemonnumber == '043') || (pokemonnumber == '044') || (pokemonnumber == '045') || (pokemonnumber == '046') || (pokemonnumber == '047') || (pokemonnumber == '069') || (pokemonnumber == '070') || (pokemonnumber == '071') || (pokemonnumber == '102') || (pokemonnumber == '103') || (pokemonnumber == '114')){
        grasstype();
    }
    if((pokemonnumber == '025') || (pokemonnumber == '026') || (pokemonnumber == '081') || (pokemonnumber == '082') || (pokemonnumber == '100') || (pokemonnumber == '101') || (pokemonnumber == '125') || (pokemonnumber == '135') || (pokemonnumber == '145')){
        electrictype();
    }
    if((pokemonnumber == '063') || (pokemonnumber == '064') || (pokemonnumber == '065') || (pokemonnumber == '079') || (pokemonnumber == '080') || (pokemonnumber == '096') || (pokemonnumber == '097') || (pokemonnumber == '102') || (pokemonnumber == '103') || (pokemonnumber == '121') || (pokemonnumber == '122') || (pokemonnumber == '124') || (pokemonnumber == '150') || (pokemonnumber == '151')){
        psychictype();
    }
    if((pokemonnumber == '087') || (pokemonnumber == '091') || (pokemonnumber == '124') || (pokemonnumber == '131') || (pokemonnumber == '144')){
        icetype();
    }
    if((pokemonnumber == '147') || (pokemonnumber == '148') || (pokemonnumber == '149')){
        dragontype();
    }
}

function undotypevalues(pokemonnumber){
    if((pokemonnumber == '016') || (pokemonnumber == '017') || (pokemonnumber == '018') || (pokemonnumber == '019') || (pokemonnumber == '020') || (pokemonnumber == '021') || (pokemonnumber == '022') || (pokemonnumber == '039') || (pokemonnumber == '040') || (pokemonnumber == '052') || (pokemonnumber == '053') || (pokemonnumber == '083') || (pokemonnumber == '084') || (pokemonnumber == '085') || (pokemonnumber == '108') || (pokemonnumber == '113') || (pokemonnumber == '115') || (pokemonnumber == '128') || (pokemonnumber == '132') || (pokemonnumber == '133') || (pokemonnumber == '137') || (pokemonnumber == '143')){
        unnormaltype();
    }
    if((pokemonnumber == '056') || (pokemonnumber == '057') || (pokemonnumber == '062') || (pokemonnumber == '066') || (pokemonnumber == '067') || (pokemonnumber == '068') || (pokemonnumber == '106') || (pokemonnumber == '107')){
        unfightingtype();
    }
    if((pokemonnumber == '006') || (pokemonnumber == '012') || (pokemonnumber == '016') || (pokemonnumber == '017') || (pokemonnumber == '018') || (pokemonnumber == '021') || (pokemonnumber == '022') || (pokemonnumber == '041') || (pokemonnumber == '042') || (pokemonnumber == '083') || (pokemonnumber == '084') || (pokemonnumber == '085') || (pokemonnumber == '123') || (pokemonnumber == '131') || (pokemonnumber == '142') || (pokemonnumber == '144') || (pokemonnumber == '145') || (pokemonnumber == '146') || (pokemonnumber == '149')){
        unflyingtype();
    }
    if((pokemonnumber == '001') || (pokemonnumber == '002') || (pokemonnumber == '003') || (pokemonnumber == '013') || (pokemonnumber == '014') || (pokemonnumber == '015') || (pokemonnumber == '023') || (pokemonnumber == '024') || (pokemonnumber == '029') || (pokemonnumber == '030') || (pokemonnumber == '031') || (pokemonnumber == '032') || (pokemonnumber == '033') || (pokemonnumber == '034') || (pokemonnumber == '041') || (pokemonnumber == '042') || (pokemonnumber == '043') || (pokemonnumber == '044') || (pokemonnumber == '045') || (pokemonnumber == '048') || (pokemonnumber == '049') || (pokemonnumber == '069')|| (pokemonnumber == '070') || (pokemonnumber == '071') || (pokemonnumber == '072') || (pokemonnumber == '073') || (pokemonnumber == '088') || (pokemonnumber == '089') || (pokemonnumber == '092') || (pokemonnumber == '093') || (pokemonnumber == '094') || (pokemonnumber == '109') || (pokemonnumber == '110')){
        unpoisontype();
    }
    if((pokemonnumber == '027') || (pokemonnumber == '028') || (pokemonnumber == '031') || (pokemonnumber == '034') || (pokemonnumber == '050') || (pokemonnumber == '051') || (pokemonnumber == '074') || (pokemonnumber == '075') || (pokemonnumber == '076') || (pokemonnumber == '095') || (pokemonnumber == '104') || (pokemonnumber == '105') || (pokemonnumber == '111') || (pokemonnumber == '112')){
        ungroundtype();
    }
    if((pokemonnumber == '074') || (pokemonnumber == '075') || (pokemonnumber == '076') || (pokemonnumber == '095') || (pokemonnumber == '111') || (pokemonnumber == '112') || (pokemonnumber == '138') || (pokemonnumber == '139') || (pokemonnumber == '140') || (pokemonnumber == '141') || (pokemonnumber == '142')){
        unrocktype();
    }
    if((pokemonnumber == '010') || (pokemonnumber == '011') || (pokemonnumber == '012') || (pokemonnumber == '013') || (pokemonnumber == '014') || (pokemonnumber == '015') || (pokemonnumber == '046') || (pokemonnumber == '047') || (pokemonnumber == '048') || (pokemonnumber == '049') || (pokemonnumber == '123') || (pokemonnumber == '127')){
        unbugtype();
    }
    if((pokemonnumber == '092') || (pokemonnumber == '093') || (pokemonnumber == '094')){
        unghosttype();
    }
    if((pokemonnumber == '004') || (pokemonnumber == '005') || (pokemonnumber == '006') || (pokemonnumber == '037') || (pokemonnumber == '038') || (pokemonnumber == '058') || (pokemonnumber == '059') || (pokemonnumber == '077') || (pokemonnumber == '078') || (pokemonnumber == '126') || (pokemonnumber == '136') || (pokemonnumber == '146')){
        unfiretype();
    }
    if((pokemonnumber == '007') || (pokemonnumber == '008') || (pokemonnumber == '009') || (pokemonnumber == '054') || (pokemonnumber == '055') || (pokemonnumber == '060') || (pokemonnumber == '061') || (pokemonnumber == '062') || (pokemonnumber == '072') || (pokemonnumber == '073') || (pokemonnumber == '079') || (pokemonnumber == '080') || (pokemonnumber == '086') || (pokemonnumber == '087') || (pokemonnumber == '090') || (pokemonnumber == '091') || (pokemonnumber == '098') || (pokemonnumber == '099') || (pokemonnumber == '116') || (pokemonnumber == '117') || (pokemonnumber == '118') || (pokemonnumber == '119') || (pokemonnumber == '120') || (pokemonnumber == '121') || (pokemonnumber == '129') || (pokemonnumber == '130') || (pokemonnumber == '131') || (pokemonnumber == '134') || (pokemonnumber == '138') || (pokemonnumber == '139') || (pokemonnumber == '140') || (pokemonnumber == '141')){
        unwatertype();
    }
    if((pokemonnumber == '001') || (pokemonnumber == '002') || (pokemonnumber == '003') || (pokemonnumber == '043') || (pokemonnumber == '044') || (pokemonnumber == '045') || (pokemonnumber == '046') || (pokemonnumber == '047') || (pokemonnumber == '069') || (pokemonnumber == '070') || (pokemonnumber == '071') || (pokemonnumber == '102') || (pokemonnumber == '103') || (pokemonnumber == '114')){
        ungrasstype();
    }
    if((pokemonnumber == '025') || (pokemonnumber == '026') || (pokemonnumber == '081') || (pokemonnumber == '082') || (pokemonnumber == '100') || (pokemonnumber == '101') || (pokemonnumber == '125') || (pokemonnumber == '135') || (pokemonnumber == '145')){
        unelectrictype();
    }
    if((pokemonnumber == '063') || (pokemonnumber == '064') || (pokemonnumber == '065') || (pokemonnumber == '079') || (pokemonnumber == '080') || (pokemonnumber == '096') || (pokemonnumber == '097') || (pokemonnumber == '102') || (pokemonnumber == '103') || (pokemonnumber == '121') || (pokemonnumber == '122') || (pokemonnumber == '124') || (pokemonnumber == '150') || (pokemonnumber == '151')){
        unpsychictype();
    }
    if((pokemonnumber == '087') || (pokemonnumber == '091') || (pokemonnumber == '124') || (pokemonnumber == '131') || (pokemonnumber == '144')){
        unicetype();
    }
    if((pokemonnumber == '147') || (pokemonnumber == '148') || (pokemonnumber == '149')){
        undragontype();
    }
}