var titlebox = document.getElementById("ec2");
var titles = document.getElementsByClassName("title");
var descriptions = document.getElementsByClassName("description");

window.onload = function() {
    descriptions[0].style.opacity = "1";
};

titlebox.onmouseout = function() {
    descriptions[0].style.opacity = "1";
}

titles[0].onmouseover = function() {
    descriptions[0].style.opacity = "0";
    titlebox.style.background = "url('resources/images/bass_dim.png')";
    titlebox.style.backgroundPosition = "top center";
    titlebox.style.backgroundSize = "cover";
    descriptions[1].style.opacity = "1";
};
titles[1].onmouseover = function() {
    descriptions[0].style.opacity = "0";
    titlebox.style.background = "url('resources/images/droole_dim.png')";
    titlebox.style.backgroundPosition = "top center";
    titlebox.style.backgroundSize = "cover";
    descriptions[2].style.opacity = "1";
};
titles[2].onmouseover = function() {
    descriptions[0].style.opacity = "0";
    titlebox.style.background = "url('resources/images/smore_dim.png')";
    titlebox.style.backgroundPosition = "top center";
    titlebox.style.backgroundSize = "cover";
    descriptions[3].style.opacity = "1";
};
titles[3].onmouseover = function() {
    descriptions[0].style.opacity = "0";
    titlebox.style.background = "url('resources/images/pd_dim.png')";
    titlebox.style.backgroundPosition = "top center";
    titlebox.style.backgroundSize = "cover";
    descriptions[4].style.opacity = "1";
};
//mouseout
titles[0].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[1].style.opacity = "0";
};
titles[1].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[2].style.opacity = "0";
};
titles[2].onmouseout = function() {
    descriptions[3].style.opacity = "0";
    titlebox.style.background = "";

};
titles[3].onmouseout = function() {
    titlebox.style.background = "";
    descriptions[4].style.opacity = "0";
};