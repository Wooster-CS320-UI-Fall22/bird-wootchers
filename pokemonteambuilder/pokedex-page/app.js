//from tutorial: https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45
//Image sources: https://www.serebii.net/pokedex/stat/all.shtml

d3.csv("https://gist.githubusercontent.com/armgilles/194bcff35001e7eb53a2a8b441e8b2c6/raw/92200bc0a673d5ce2110aaad4544ed6c4010f687/pokemon.csv").then(function (data) {
    pokedex = [];
    for (var i = 0; i < data.length; i++) {
        if(!data[i]['Name'].includes('Mega')) {
            pokedex.push(data[i]);
        }
    } 
    console.log(pokedex);
    //var pokedex = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

            // Display Full Pokedex List
            var i = 0;
            var num = pokedex[i]['#'];
            // console.log(num);
            while (num != '152') {
                var pokeID = pokedex[i]['#']
                while (pokeID.length < 3) {
                    pokeID = '0' + pokeID;
                }
                //console.log(pokeID);
                d3.select("tbody").insert("tr").html(
                    "<td>" + (pokedex[i]['#']) + "</a>" + "</td>" + 
                    "<td>" + '<img src= "https://www.serebii.net/pokearth/sprites/yellow/' + 
                        pokeID.toString() + '.png" alt="sprite" border=3 height=50 width=50> <img/>' + 
                        "</a>" + "</td>" + 
                    "<td>" + (pokedex[i]['Name']) + "</td> " +
                    "<td>" + (pokedex[i]['Type 1']) +"</td>" +
                    "<td>" + (pokedex[i]['Type 2']) +"</td>" +
                    "<td>" + (pokedex[i]['HP']) +"</td>" +
                    "<td>" + (pokedex[i]['Attack']) +"</td>" +
                    "<td>" + (pokedex[i]['Defense']) +"</td>" +
                    "<td>" + (pokedex[i]['Sp. Atk']) +"</td>" +
                    "<td>" + (pokedex[i]['Speed']) +"</td" 
                ) 
                i++;
                num = pokedex[i]['#'];
            }
            /*
            for (var i = 0; i < pokedex.length; i++) {
                d3.select("tbody").insert("tr").html(
                "<td>" + (pokedex[i]['#']) + "</a>" + "</td>" + 
                "<td>" + '<img src= "https://www.serebii.net/pokearth/sprites/yellow/094.png" + alt="sprite" border=3 height=50 width=50> <img/>' + "</a>" + "</td>" + 
                "<td>" + (pokedex[i]['Name']) + "</td> " +
                "<td>" + (pokedex[i]['Type 1']) +"</td>" +
                "<td>" + (pokedex[i]['Type 2']) +"</td>" +
                "<td>" + (pokedex[i]['HP']) +"</td>" +
                "<td>" + (pokedex[i]['Attack']) +"</td>" +
                "<td>" + (pokedex[i]['Defense']) +"</td>" +
                "<td>" + (pokedex[i]['Sp. Atk']) +"</td>" +
                "<td>" + (pokedex[i]['Sp. Def']) +"</td>" +
                "<td>" + (pokedex[i]['Speed']) +"</td" ) 
            }*/

    // Defining the function
    function runEnter() {

        // This line of code selects the <tbody> from the html and clears it. If this is not used, then the results would appear on top of the previous result.
        d3.select("tbody").html("") 
        
        // This code is needed to prevent the page from reloading.
        d3.event.preventDefault(); 
        
        // This code will get the user's input from what the user will type in the html <input> since we assigned it the "user-input" id. It will get the value and store it in our inputValue variable
        var inputValue = d3.select("#user-input").property("value");
        console.log(inputValue);
        
        // This code will filter the movies looking at the actors column. It will store the values when there is a match from the text sequence the user entered and the text from our actors column from the CSV data.
        
        var filteredMovies = 
        pokedex.filter(pokedex => pokedex.Name.includes(inputValue));


        // This was the easiest approach I found to sort the results by a different column in descending order. I had to include a new script in my head to use the _.sortBy This is the script:  
        // var output = _.sortBy(filteredMovies, 'avg_vote').reverse();
        // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
        for (var i = 0; i < pokedex.length; i++) {
            console.log(pokedex[i]['name']);
            d3.select("tbody").insert("tr").html(
            "<td>" + (pokedex[i]['#']) + "</a>" + "</td>" + 
            "<td>" + '<img src= "https://www.serebii.net/pokearth/sprites/yellow/094.png" + alt="sprite" border=3 height=50 width=50> <img/>' + "</a>" + "</td>" + 
            "<td>" + (pokedex[i]['Name']) + "</td> " +
            "<td>" + (pokedex[i]['Type 1']) +"</td>" +
            "<td>" + (pokedex[i]['Type 2']) +"</td>" +
            "<td>" + (pokedex[i]['HP']) +"</td>" +
            "<td>" + (pokedex[i]['Attack']) +"</td>" +
            "<td>" + (pokedex[i]['Defense']) +"</td>" +
            "<td>" + (pokedex[i]['Sp. Atk']) +"</td>" +
            "<td>" + (pokedex[i]['Sp. Def']) +"</td>" +
            "<td>" + (pokedex[i]['Speed']) +"</td" ) 
        }
    };
});