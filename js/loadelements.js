//load logo and other header elements
var header = document.getElementById("header").children;
header[3].src = "resources/images/nw22.png";
console.log('done');
//load fonts
var fonts = document.createElement('link');
fonts.setAttribute('rel', 'stylesheet');
fonts.setAttribute('type', 'text/css');
fonts.setAttribute('href', 'https://fonts.googleapis.com/css2?family=Michroma&display=swap&family=Barlow+Condensed:wght@200;300;400&display=swap');
document.head.appendChild(fonts);