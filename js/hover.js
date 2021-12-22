var right = document.getElementsByClassName("biglinkright");
var left = document.getElementsByClassName("biglinkleft");

window.onload = function() {
    left[0].style.opacity = "1";
    right[0].style.opacity = "1";
};

right[0].onmouseover = function() {
    left[0].style.opacity = "0";
    right.style.color = "rgb(25, 71, 2)";
};
left[0].onmouseover = function() {
    right[0].style.opacity = "0";
};
right[0].onmouseout = function() {
    left[0].style.opacity = "1";
    console.log("a");
};
left[0].onmouseout = function() {
    right[0].style.opacity = "1";
};