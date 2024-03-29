//from tutorial: https://levelup.gitconnected.com/building-a-simple-website-that-outputs-results-from-a-csv-using-users-input-bfcb782ced45
//Image sources: https://www.serebii.net/pokedex/stat/all.shtml

d3.csv("images/data/teams.csv").then(function (data) {
    //Create teams list object with CSV data
    teams = [];
    for (var i = 0; i < data.length; i++) {
        teams.push(data[i]);
    } 
    console.log(teams);
    var button = d3.select("#button");
    var form = d3.select("#form");
    button.on("click", runEnter);
    form.on("submit", runEnter);

    //Output teams list
    for (var i = 0; i < teams.length; i++) {
        d3.select("tbody").insert("tr").html(
        "<td style=text-align:center>" + (Math.floor(Math.random() * (11 - 1) + 1)).toString() + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team0"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team1"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team2"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team3"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team4"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
        "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + teams[i]["team5"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
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
        
        // Create filtered list based on username
        var filteredTeams = [];
        for (var i = 0; i < teams.length; i++) {
            if (teams[i]['user'].toLowerCase().includes(inputValue.toLowerCase())) {
                filteredTeams.push(teams[i]);
            }
        }

        //Output filtered list
        for (var i = 0; i < filteredTeams.length; i++) {
            d3.select("tbody").insert("tr").html(
            "<td style=text-align:center>" + (Math.floor(Math.random() * (11 - 1) + 1)).toString() + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team0"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team1"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team2"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team3"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team4"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td>" + '<img style = "image-rendering:pixelated" src= "images/data/sprites/' + filteredTeams[i]["team5"] + '.png" + alt="sprite" border=3 height=70 width=70> <img/>' + "</a>" + "</td>" +
            "<td style=text-align:center>" + filteredTeams[i]["user"] + "</a>" + "</td>"
            ) 
        }
    };
});