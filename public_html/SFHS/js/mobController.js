var height = window.screen.height;
var width = window.screen.width;
var isOpen = false;

console.log(width/height);

if (width>height) {
    document.getElementById('dtstyles').disabled  = false;
    document.getElementById('mobstyles').disabled  = true;
    document.getElementById("hambgrmenu").style.display = 'none';
}
else {
    document.getElementById('mobstyles').disabled  = false;
    document.getElementById('dtstyles').disabled  = true;
    document.getElementById("hambgrmenu").style.display = 'block';
    document.getElementById('vid').remove();
    document.getElementById('dtstyles').remove();
}

function openMenu() {
    if(isOpen) {
        document.getElementById("header").style.height = "12vh";
        isOpen = false;
    } else {
        document.getElementById("header").style.height = "35vh";
        isOpen = true;
    }  
}