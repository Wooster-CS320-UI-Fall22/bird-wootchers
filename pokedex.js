//from tutorial: https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45
//Image sources: https://www.serebii.net/pokedex/stat/all.shtml

//Takes numerical number as a string and makes it 3 digits long. used for loading images
function toDexNumber(str) {
    while(str.length < 3) {
        str = '0' + str;
    }
    return str;
}

d3.csv("images/data/pokemon-stats/pokemon.csv").then(function (data) {
    //Create pokedex list from csv data
    pokedex = [];
    for (var i = 0; i < data.length; i++) {
        pokedex.push(data[i]);
    } 
    console.log(pokedex);
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

            for (var i = 0; i < pokedex.length; i++) {
                d3.select("tbody").insert("tr").html(
                "<td>" + toDexNumber(pokedex[i]['#']) + "</a>" + "</td>" + 
                "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + toDexNumber(pokedex[i]['#']) + '.png" + alt="sprite" border=3 height=60 width=60> <img/>' + "</a>" + "</td>" + 
                "<td>" + (pokedex[i]['Name']) + "</td> " +
                "<td>" + (pokedex[i]['Type 1']) +"</td>" +
                "<td>" + (pokedex[i]['Type 2']) +"</td>" +
                "<td>" + (pokedex[i]['HP']) +"</td>" +
                "<td>" + (pokedex[i]['Attack']) +"</td>" +
                "<td>" + (pokedex[i]['Defense']) +"</td>" +
                "<td>" + (pokedex[i]['Special']) +"</td>" +
                "<td>" + (pokedex[i]['Speed']) +"</td" ) 
            }

    // Defining the function
    function runEnter() {

        // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select("tbody").html("") 
        
        // This code is needed to prevent the page from reloading.
        d3.event.preventDefault(); 
        
        // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
        var inputValue = d3.select("#user-input").property("value");
        console.log(inputValue);
        var filter = document.querySelector("#filter")
        console.log(filter.value);
        
        // This code will filter the pokemon depending on filter value from html page.
        var filteredDex = [];
        if (filter.value == 'Name') {
            for (var i = 0; i < pokedex.length; i++) {
                if (pokedex[i]['Name'].toLowerCase().includes(inputValue.toLowerCase())) {
                    filteredDex.push(pokedex[i]);
                }
            }
        } else {
            for (var i = 0; i < pokedex.length; i++) {
                if (pokedex[i]['Type 1'].toLowerCase().includes(inputValue.toLowerCase()) || pokedex[i]['Type 2'].toLowerCase().includes(inputValue.toLowerCase())) {
                    filteredDex.push(pokedex[i]);
                }
            }
        }


        // Output filtered list
        for (var i = 0; i < filteredDex.length; i++) {
            console.log(filteredDex[i]['name']);
            d3.select("tbody").insert("tr").html(
            "<td>" + toDexNumber(filteredDex[i]['#']) + "</a>" + "</td>" + 
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + toDexNumber(filteredDex[i]['#']) + '.png" + alt="sprite" border=3 height=60 width=60> <img/>' + "</a>" + "</td>" + 
            "<td>" + (filteredDex[i]['Name']) + "</td> " +
            "<td>" + (filteredDex[i]['Type 1']) +"</td>" +
            "<td>" + (filteredDex[i]['Type 2']) +"</td>" +
            "<td>" + (filteredDex[i]['HP']) +"</td>" +
            "<td>" + (filteredDex[i]['Attack']) +"</td>" +
            "<td>" + (filteredDex[i]['Defense']) +"</td>" +
            "<td>" + (filteredDex[i]['Special']) +"</td>" +
            "<td>" + (filteredDex[i]['Speed']) +"</td" ) 
        }
    };
});