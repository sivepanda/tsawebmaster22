var right = document.getElementsByClassName("biglinkright");
var left = document.getElementsByClassName("biglinkleft");
var h2 = document.getElementsByClassName("biglink");

window.onload = function() {
    left[0].style.opacity = "1";
    right[0].style.opacity = "1";
};

right[0].onmouseover = function() {
    left[0].style.opacity = "0";
    h2[1].style.fontSize = "9vh";
    h2[0].style.fontSize = "12vh";
};
left[0].onmouseover = function() {
    right[0].style.opacity = "0";
    h2[0].style.fontSize = "9vh";
    h2[1].style.fontSize = "12vh";
};
right[0].onmouseout = function() {
    h2[1].style.fontSize = "10vh";
    h2[0].style.fontSize = "10vh";
    left[0].style.opacity = "1";
};
left[0].onmouseout = function() {
    h2[0].style.fontSize = "10vh";
    h2[1].style.fontSize = "10vh";
    right[0].style.opacity = "1";
};