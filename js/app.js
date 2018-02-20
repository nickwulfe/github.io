button.onclick = function random() {
    button.addEventListener("click", random);
    var random = Math.floor(Math.random() * 100);
    console.log(random);
};