//from tutorial: https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45
//Image sources: https://www.serebii.net/pokedex/stat/all.shtml

d3.csv("data/teams.csv").then(function (data) {
    teams = [];
    for (var i = 0; i < data.length; i++) {
        teams.push(data[i]);
    } 
    console.log(teams);
    //var pokedex = data;
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

            /*
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
                    "<td>" + pokeID.toString() + "</a>" + "</td>" + 
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
            } */

            var num;
            for (var i = 0; i < teams.length; i++) {
                console.log(teams[i]);
                console.log(teams[i]["team0"]);
                console.log(teams[i]["team1"]);
                console.log(teams[i]["team2"]);
                console.log(teams[i]["team3"]);
                console.log(teams[i]["team4"]);
                console.log(teams[i]["team5"]);
                d3.select("tbody").insert("tr").html(
                "<td style=text-align:center>" + teams[i]["rating"] + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team0"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team1"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team2"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team3"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team4"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + teams[i]["team5"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
                "<td style=text-align:center>" + teams[i]["user"] + "</a>" + "</td>"
                ) 
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
        
        // This code will filter the pokemon looking at the names column. It will store the values when there is a match from the text sequence the user entered and the text from our name column from the CSV data.
        
        var filteredTeams = [];

        for (var i = 0; i < teams.length; i++) {
            if (teams[i]['user'].toLowerCase().includes(inputValue.toLowerCase())) {
                filteredTeams.push(teams[i]);
            }
        }

        // Once I had all the values in my output variable, all I needed was to loop through them and add them to the table one by one. This was done using d3, where I inserted the value for each one of the columns I wanted using the necessary html to fit each table row.
        for (var i = 0; i < filteredTeams.length; i++) {
            d3.select("tbody").insert("tr").html(
            "<td style=text-align:center>" + filteredTeams[i]["rating"] + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team0"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team1"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team2"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team3"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team4"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "../../data/sprites/' + filteredTeams[i]["team5"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td style=text-align:center>" + filteredTeams[i]["user"] + "</a>" + "</td>"
            ) 
        }
    };
});