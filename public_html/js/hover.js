if (!isMobile) {
    var right = document.getElementById("blr");
    var left = document.getElementById("bll");
    var h2 = document.getElementsByClassName("biglink");
    var small = "5vh"
    var large = "10vh"


    window.onload = function() {
        left.style.opacity = "1";
        right.style.opacity = "1";
    };

    window.onunload = function() {
        left.style.opacity = "1";
        right.style.opacity = "1";
    };

    right.onmouseover = function() {
        left.style.opacity = "0";
        h2[1].style.fontSize = "9vh";
        h2[0].style.fontSize = "12vh";
    };
    left.onmouseover = function() {
        right.style.opacity = "0";
        h2[0].style.fontSize = "9vh";
        h2[1].style.fontSize = "12vh";
    };
    right.onmouseout = function() {
        h2[1].style.fontSize = "10vh";
        h2[0].style.fontSize = "10vh";
        left.style.opacity = "1";
    };
    left.onmouseout = function() {
        h2[0].style.fontSize = "10vh";
        h2[1].style.fontSize = "10vh";
        right.style.opacity = "1";
    };
}