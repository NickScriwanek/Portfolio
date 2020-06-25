//Alle films worden in per genre in een array gezet
var actionMovies = ["The Equalizer", "Mad Max", "Logan", "The Avengers", "Captain America", "Guardians of the Galaxy", "Wonder Woman"];
var comedyMovies = ["Game Night", "Good Boys", "Bridesmaids", "Blockers", "Shazam!", "The Hangover", "Just go with it"];
var dramaMovies = ["The Godfather", "Saving Private Ryan", "There Will Be Blood", "The Artist", "The Dark Knight", "Heat", "Gladiator"];
var horrorMovies = ["Get out", "The Cabin in the Woods", "The Exorcist", "The Conjuring", "The Shining", "Psycho", "Insidious"];
var selectedGenre;
var randomMovie;
var counter = 0;
var tries = 0;

//Als je op de selecteer knop drukt, worden alle knoppen uitgelezen en wordt de geselecteerde genre in de var selectedGenre gezet.
//Vervolgens wordt de knop uitgezet
function selectGenre() {
    var btnAction = document.getElementById("btnAction");
    var btnComedy = document.getElementById("btnComedy");
    var btnDrama = document.getElementById("btnDrama");
    var btnHorror = document.getElementById("btnHorror");

    if (btnAction.checked == true) {
        selectedGenre = actionMovies;
    } else if (btnComedy.checked == true) {
        selectedGenre = comedyMovies;
    } else if (btnDrama.checked == true) {
        selectedGenre = dramaMovies;
    } else if (btnHorror.checked == true) {
        selectedGenre = horrorMovies;
    } else {
        alert("Selecteer eerst een genre");
    }
    $('#genreButton').attr('disabled', true);
}

//Als je op de knop drukt, wordt er in de var randomNumber een random nummer gegenereerd, evenals in randomNumber2.
//De randomNumber bepaalt welke film wordt geselecteerd. De JSON van deze randomMovie wordt uit de API van OMDb gehaald en er wordt een response gevraagd
//Vervolgens bepaalt randomNumber2 welke soort vraag er wordt gesteld, een met een poster, een met het plot of een met de director(s).
function apiCall() {
    var randomNumber = Math.floor((Math.random() * 7) - 1) + 1;
    var randomNumber2 = Math.floor((Math.random() * 3) - 1) + 1;
    randomMovie = selectedGenre[randomNumber];
    $.getJSON('http://www.omdbapi.com/?apikey=35694338&t=' + encodeURI(randomMovie)).then(function (response) {
        if (randomNumber2 == 0) {
            var image = response.Poster;
            document.getElementById("question").textContent = "Welke film hoort bij deze poster?";
            document.getElementById("textBox").textContent = "";
            $('#image').attr("src", image);
        } else if (randomNumber2 == 1) {
            var plot = response.Plot;
            document.getElementById("question").textContent = "Welke film hoort bij dit plot?";
            document.getElementById("textBox").textContent = plot;
            $('#image').attr("src", "");
        } else if (randomNumber2 == 2) {
            var director = response.Director;
            document.getElementById("question").textContent = "Welke film hoort bij deze director?";
            document.getElementById('textBox').textContent = director;
            $('#image').attr("src", "");
        }
    })
}

//Je hebt 10 pogingen om zoveel mogelijk filmvragen juist te beantwoorden. Hierna wordt je eindscore getoond en wordt na 5 seconden de pagina herladen.
function checkAnswer() {
    if (tries != 10) {
        if ($('#answer').val() == randomMovie) {
            counter++;
            document.getElementById("score").innerHTML = counter.toString();
            alert("goed");
            apiCall();
        }
        tries++;
    } else {
        document.getElementById('eindScore').textContent = "Uw eindscore is " + counter + " punten!";
        $('#answerButton').attr('disabled', true);
        document.getElementById("question").textContent = "Bedankt voor het spelen!";
        document.getElementById("score").innerHTML = "";
        document.getElementById("textBox").innerHTML = "";
        setTimeout(function () {
            location.reload();
        }, 5000);
    }
    document.getElementById('answer').value = "";
}

//Deze JQuery functie zorgt ervoor dat iedere keer als er op de genre selecteer knop wordt gedrukt, er nieuwe informatie uit de API wordt gehaald.
$('#genreButton').click(function () {
    apiCall();
});