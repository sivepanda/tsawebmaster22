if (!isMobile) {
    var right = document.getElementsByClassName("biglinkright");
    var left = document.getElementsByClassName("biglinkleft");
    var h2 = document.getElementsByClassName("biglink");
    var small = "5vh"
    var large = "10vh"


    window.onload = function() {
        left[0].style.opacity = "1";
        right[0].style.opacity = "1";
    };

    window.onunload = function() {
        left[0].style.opacity = "1";
        right[0].style.opacity = "1";
    };

    right[0].onmouseover = function() {
        left[0].style.opacity = "0";
        right[0].style.width = "100vw";
        right[0].style.marginLeft = "-50vw";
        // h2[1].style.fontSize = "9vh";
        // h2[0].style.fontSize = "12vh";
    };
    left[0].onmouseover = function() {
        right[0].style.opacity = "0";
        left[0].style.width = "100vw";
        left[0].style.marginLeft = "0";
        // h2[0].style.fontSize = "9vh";
        // h2[1].style.fontSize = "12vh";
    };
    right[0].onmouseout = function() {
        // h2[1].style.fontSize = "10vh";
        right[0].style.width = "50vw";
        right[0].style.marginLeft = "0vw";
        // h2[0].style.fontSize = "10vh";
        left[0].style.opacity = "1";
    };
    left[0].onmouseout = function() {
        // h2[0].style.fontSize = "10vh";
        // h2[1].style.fontSize = "10vh";
        left[0].style.width = "50vw";
        left[0].style.marginLeft = "0vw";
        right[0].style.opacity = "1";
    };
}