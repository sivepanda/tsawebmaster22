//load logo and other header elements
var header = document.getElementById("header").children;
header[2].src = "resources/images/nw22.png";
console.log('done');
//load fonts
var fonts = document.createElement('link');
fonts.setAttribute('rel', 'stylesheet');
fonts.setAttribute('type', 'text/css');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Michroma&display=swap&family=Barlow+Condensed:wght@200;300;400&display=swap');
document.head.appendChild(fonts);
//set header icon
var icon = document.createElement('link');
icon.setAttribute('rel', 'icon');
icon.setAttribute('href', 'resources/images/nw22_ico.ico');
icon.setAttribute('type', 'image/x-icon');
document.head.appendChild(icon);
//set site title
document.title = "NU_WRLD";

//loading screen
var isLoaded = false;
var timerComplete = false;

window.addEventListener('load', (event) => {
    isLoaded = true;
    loaded();
});

loadInterval = setInterval(function() {
    timerComplete = true;
    loaded();
}, 300);

function loaded() {
    if (isLoaded && timerComplete && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        load.remove();
        window.clearTimeout(loadInterval);
        console.log('a');
    }
}