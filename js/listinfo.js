var titlebox = document.getElementById("ec2");
var titles = document.getElementsByClassName("title");
var descriptions = document.getElementsByClassName("description");

titles[0].onmouseover = function() {
    titlebox.style.background = "url('resources/images/Beethoven.jpg')";
    descriptions[0].style.opacity = "1";
};
titles[1].onmouseover = function() {
    descriptions[1].style.opacity = "1";
};
titles[2].onmouseover = function() {
    descriptions[2].style.opacity = "1";
};
titles[3].onmouseover = function() {
    descriptions[3].style.opacity = "1";
};
//mouseout
titles[0].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[0].style.opacity = "0";
};
titles[1].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[1].style.opacity = "0";
};
titles[2].onmouseout = function() {
    descriptions[2].style.opacity = "0";
    titlebox.style.background = "";

};
titles[3].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[3].style.opacity = "0";
};