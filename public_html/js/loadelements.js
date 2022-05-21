//load logo and other header elements



var header = document.getElementById("header").children;
header[2].src = "resources/images/nw22.png";
console.log('loaded desktop logo');

// var mobHeader = document.getElementById("mobile-nav").children;
header[2].src = "resources/images/nw22.png";
console.log('loaded mobile logo');
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
//set local storage variable
var localWebStorage = window.localStorage;


//loading screen
var isLoaded = false;
var timerComplete = false;

//scrollbar
var defaultRemover = document.createElement('div');
var progressbar = document.createElement('div');
var scrollPath = document.createElement('div');
var userScrollbarSetting = getCookie("customscrollbar") == "true" ? true : false;


var height = window.innerHeight;
var width = window.innerWidth;


if (width > height) {

    createScrollbar();
}

// document.getElementById("indexpage") ? (localWebStorage.getItem('scrollsnapping') == "true" ? document.getElementById("indexpage").style.scrollSnapType = 'none' : document.getElementById("indexpage").style.scrollSnapType = 'y mandatory') : console.log("No snap target");
if (document.getElementById("indexpage") && width > height) {
    console.log("scroll snapping is set as" + getCookie('scrollsnapping'));

    if (getCookie('scrollsnapping') == "true") {
        document.getElementById("indexpage").style.scrollSnapType = 'none';
    } else if (getCookie('scrollsnapping') == "false") {
        document.getElementById("indexpage").style.scrollSnapType = 'y mandatory';
    } else {
        document.getElementById("indexpage").style.scrollSnapType = 'y mandatory';

    }
    console.log("No snap target");
}


window.addEventListener('load', (event) => {
    isLoaded = true;
    loaded();
});


function changeElementIDDisplay(id, display) {
    document.getElementById(id) ? document.getElementById(id).style.display = display : console.log(id + " replaced");
}

/* scrollbar */
function barProgress() { //height adjustment on scrolling
    if (userScrollbarSetting) {
        var progressbar = document.getElementById('progressbar');
        var totalHeight = document.body.scrollHeight - window.innerHeight;
        progressbar ? progressbar.style.height = ((window.pageYOffset / totalHeight) * 100) + '%' : null;
    }
}

function createScrollbar() { //appending scrollbar to all pages
    // var docBody = document.getElementsByTagName("body");
    // var html = document.getElementById("html");
    console.log('custom scrollbar set as ' + userScrollbarSetting)
    if (!userScrollbarSetting) {
        console.log("setting up custom scrollbar")
        scrollPath.setAttribute('id', 'scrollPath');
        document.body.append(scrollPath);
        progressbar.setAttribute('id', 'progressbar');
        document.body.append(progressbar);
    } else {
        document.body.setAttribute("style", "scrollbar-width:auto;");
        console.log("normal scrollbar");
    }
}

/*LOADING SCREEN */
//remove loading screen upon load
function loaded() {
    if (isLoaded && timerComplete && document.getElementById("loadtank")) {
        var load = document.getElementById("loadtank");
        changeElementIDDisplay("ic1btn", "");
        load.remove();
        window.clearTimeout(loadInterval);
        console.log('Page loaded successfully');
        window.scrollTo(0, 0);
        if (width > height) {
            document.body.addEventListener('scroll', function(e) {
                var progressbar = document.getElementById('progressbar');
                var totalHeight = document.body.scrollHeight - window.innerHeight;
                progressbar.style.height = ((document.body.scrollTop / totalHeight) * 100) + '%';
            });
        }
    }
}

//min time for loading screen to be shown
loadInterval = setInterval(function() {
    timerComplete = true;
    loaded();
}, 300);

function elementInViewport(el) {
    var top = el.offsetTop;
    var left = el.offsetLeft;
    var width = el.offsetWidth;
    var height = el.offsetHeight;

    while (el.offsetParent) {
        el = el.offsetParent;
        top += el.offsetTop;
        left += el.offsetLeft;
    }

    return (
        top >= window.pageYOffset &&
        left >= window.pageXOffset &&
        (top + height) <= (window.pageYOffset + window.innerHeight) &&
        (left + width) <= (window.pageXOffset + window.innerWidth)
    );
}

/* 
var cards = document.getElementsByClassName("telemetryheading");
document.body.addEventListener('scroll', function(e) {
    for (i = 0, i < cards.length, i++) {
        if(elementInViewport(cards[i])){
            cards[i].style.setProperty("--tele-anim", "75vw");
    
        }
    });
    
} */


//cookies
function setCookie(cname, cvalue) {
    document.cookie += cname + "=" + cvalue + ";";
}

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}




/*
function onScrollTo(identity, task) {
    let options = {
        root: document.querySelector('#indexpage'),
        rootMargin: '0px',
        threshold: 1.0
    }

    let observer = new IntersectionObserver(callback, options);

    let target = document.querySelector(identity);

    observer.observe(target);
}

function widen(identity) {
    square.style.setProperty('--tele-anim', "75vw");
}

if (document.getElementById("indexpage")) {

    let options = {
        root: document.querySelector('#indexpage'),
        rootMargin: '0px',
        threshold: 1.0
    }

    let observer = new IntersectionObserver(callback, options);

    let target = document.querySelector('.telemetryheading');
    observer.observe(target);
}
*/