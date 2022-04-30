var scrollCheckBox = document.getElementById("scrollsnap") ? document.getElementById("scrollsnap") : null;
var scrollRail = document.getElementById("ss_rail") ? document.getElementById("ss_rail") : null;
var scrollCircle = document.getElementById("ss_circle") ? document.getElementById("ss_circle") : null;
var barCheckBox = document.getElementById("custscroll") ? document.getElementById("custscroll") : null;

function setSnap() {
    scrollCheckBox.classList.toggle("active");
    // scrollRail.classList.toggle("active");
    // scrollCircle.classList.toggle("active");
    setUserSetting("scrollsnap", 'scrollsnapping');
    console.log("here");
}

function setScrollbar() {
    barCheckBox.classList.toggle("active");
    console.log("there");
    setUserSetting("custscroll", "customscrollbar");
    location.reload();
}

function setUserSetting(elementId, cookieName) {
    if (isLoaded) {
        var checkBox = document.getElementById(elementId);

        //if checkbox is checked, set cookiename to true or false if not
        if (checkBox.checked == false) {
            document.cookie = cookieName + '=false; SameSite=Lax;';
            localWebStorage.setItem(cookieName, "false");
        } else {
            document.cookie = cookieName + '=true; SameSite=Lax;';
            localWebStorage.setItem(cookieName, "true");

        }
    }
}

//reflect user settings
if (getCookie('scrollsnapping') == "true") {
    scrollCheckBox.checked = true;
    console.log("Set Scrollsnapping switch to true");
}
if (getCookie('customscrollbar') == "true") {
    barCheckBox.checked = true;
    console.log("Set CustomScrollbar switch to true");
}

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