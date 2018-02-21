document.getElementById('random').onclick = function() {
    var random = Math.floor(Math.random() * 100);
    alert('You are ' + random + '% lucky today!');
}

//this is the random D100 with an alert box to tell the visitor how lucky they are//