var checkBox = document.getElementById("scrollsnap");

function setSnap() {
    if (isLoaded) {
        var localWebStorage = window.localStorage;
        var checkBox = document.getElementById("scrollsnap");

        // If the checkbox is checked, display the output text
        if (checkBox.checked == false) {
            document.cookie = 'scrollsnapping=false';
            localWebStorage.setItem("scrollsnapping", "false");
        } else {
            document.cookie = 'scrollsnapping=true';
            localWebStorage.setItem("scrollsnapping", "true");

        }


    }
}

//reflect user settings
if (getCookie('scrollsnapping') == "true") {
    checkBox.checked = true;
    console.log("e");
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