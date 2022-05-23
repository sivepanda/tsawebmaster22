var userLogin;
var pass;
var userExists = false;
var correctPass = false;
var userData;

const userSetBox = document.getElementById("setUser") ? document.getElementById("setUser") : false;
const pwrdSetBox = document.getElementById("setPass") ? document.getElementById("setPass") : false;

// COOKIES --------------------------------------------------------

//EXAMPLE OF COOKIE STRING [(user:"Admin",pass:"@#$%^&"),(user:"User",pass:"%^&*")]

function convertCookie(cookie) {

    return cookie

}

function setCookie(cname, cvalue) {
    document.cookie += cname + "=" + cvalue + ";";
    return cname + "=" + cvalue + ";";
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

function cookieExists(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return true;
        }
    }
    return false;
}

function getAndParseCookie(cname) {
    return JSON.parse(getCookie(cname));
}

//Let's do some basic encryption on the cookies being used as a user/pass

//IMPORT md5.js HERE (its imported now - JS functions are made public to each other when both are linked in the html) you may need to change the import type to async though)

// FUNCTIONALITY --------------------------------------------------------

function encrypt(toEncrypt) {

    // return toEncrypt

    return md5(toEncrypt);

}

function checkUser() {
    var user = document.getElementById("user").value;
    var pass = encrypt(document.getElementById("pass").value);

    i = 0;
    while (cookieExists("user" + i)) {
        if (getAndParseCookie(user + i)) {
            if (pass = getAndParseCookie(user + i).password) {
                setCookie("currentUser", ("user" + i));
                document.getElementById("output").innerHTML = "Welcome, " + getAndParseCookie("user" + i).fullname;
                window.open("your-events.html", "_self");
                return true;
            } else {
                document.getElementById("output").innerHTML = "Incorrect Password";
                return false;
            }
        } else {
            i++;
        }
    }
    document.getElementById("output").innerHTML = "User does not exist";
    return false;
    //document.getElementById("output") ? document.getElementById("output").innerHTML = "Welcome, " + document.getElementById("user").value : console.log("sad");
    //return (user == getAndParseCookie("user").username && pass == getAndParseCookie("user").password) ? true : false;
}

function checkUserLS() {
    var user = document.getElementById("user").value;
    var pass = encrypt(document.getElementById("pass").value);

    i = 0;
    while (localStorage.getItem("user" + i) != null) {
        if (JSON.parse(localStorage.getItem("user" + i)).username == user) {
            if (pass == JSON.parse(localStorage.getItem("user" + i)).password) {
                localStorage.setItem("currentUser", ("user" + i));
                document.getElementById("output").innerHTML = "Welcome, " + JSON.parse(localStorage.getItem("user" + i)).fullname;
                window.open("your-events.html", "_self");

                return true;
            } else {
                document.getElementById("output").innerHTML = "Incorrect Password";
                return false;
            }
        } else {
            i++;
        }
    }
    document.getElementById("output").innerHTML = "User does not exist";
    return false;
}

function register() {

    // CHECKS IF USER ALREADY EXISTS //
    //for u in getCookie(users)
    //if u == newUser
    //return False

    /*
    set cookie so that (user: input, pass: encrypt(input)) is appended to an array of users


    Another strategy is using the cookie storage itself as the array and the name of the cookie as the ID since JSON object conversion already exists. Instead, make it so
    that as you add users, the ID is incremented, so the first user's info is saved under "user1" second user "user2", etc. Then, just do "user" + i in your for loop.

    I experimented with this, and I haven't been able to get it to work yet. You may need to try and see if the JSON.parse can parse arrays...
    */

    //x = convertCookie(getCookie("users")) (THIS HAS TO BE CONVERTED FROM STRING TO ARRAY (Brandon can set up a function for this if necessary))
    //x.append((user: newUser, pass: encrypt(newPass)))

    //setCookie(users, x)

    //return True

    var f = document.getElementById("registerForm");

    var newUser = document.getElementById("newUser").value;
    var newPass = encrypt(document.getElementById("newPass").value);
    var newPassCheck = encrypt(document.getElementById("newPassCheck").value);
    var newName = document.getElementById("fullname").value;
    var userExists = false;
    if (newUser != "" && newPass != "" && newPass == newPassCheck && newName != "") {
        var user = new User(newName, newUser, newPass);
        var i = 0;
        while (cookieExists("user" + i)) {
            if (newUser == JSON.parse(localStorage.getItem("user" + i)).username) {
                userExists = true;
                break;
            }
            i++;
        }
        if (userExists) {
            document.getElementById("error").style.display = "block";
            document.getElementById("error").innerHTML = "Username is taken.";
        } else {
            console.log(i);
            setCookie("user" + i, JSON.stringify(user));
            localStorage.setItem("user" + i.toString(), JSON.stringify(user)); //alternative to cookies that are not persistent after browser close for testing
            // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
            window.open("account-login.html", "_self");
        }
    } else {
        document.getElementById("error").style.display = "block";
        if (newUser == "") {
            document.getElementById("error").innerHTML = "Please enter a username.";
        } else if (newPass == "" || newPassCheck == "") {
            document.getElementById("error").innerHTML = "Please enter a password.";
        } else if (newPass != newPassCheck) {
            document.getElementById("error").innerHTML = "Passwords do not match.";
        }
    }
}

class User {
    constructor(full, user, pass) {
        this.fullname = full
        this.username = user;
        this.password = pass;
    }
}



/*
lue;
    var newPass = document.getElementById("newPass").value;

    if(getCookie("users")==""){
        setCookie("users", newUser + "," + newPass + ".");
    }else{
        setCookie("users", getCookie("users") + newUser + "," + newPass + ".")
    }

    //thisUser,thisPass.

}*/