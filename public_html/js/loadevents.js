document.getElementById("userNm") ? document.getElementById("userNm").innerHTML = "Welcome, " + JSON.parse(localStorage.getItem(localStorage.getItem("currentUser"))).fullname : console.log(" ");

function addEvent(time, date, tier, vr) {
    var newEvent = new BookedEvent(time, date, tier, vr);
    while (localStorage.getItem("event" + i) != null && i < 20) {
        i++
    }
    localStorage.setItem("event" + i, JSON.stringify(newEvent))
    return true;
}

function placeEvents() {
    let str = "";
    let i = 0;
    while (localStorage.getItem("event" + i) != null && i < 20) {
        curr = JSON.parse(localStorage.getItem("event" + i));
        img = curr.tier == 'basicet' ? 'novis' : curr.tier == 'advet' ? 'novis_adv' : 'novis_vr';
        tier = curr.tier == 'basicet' ? 'Basic' : curr.tier == 'advet' ? 'Advanced' : 'VR';
        str += '<div class="card27  ' + curr.tier + '">  <div class="imgBx"> <img src="resources/images/' + img + '.png">' + '</div> <div class="contentBx">' + '<h3>' + curr.date + '</h3>' + '<p class="price">Tier: ' + tier + '<br>' + 'VR Option: ' + curr.vroption + '<br>' + '</p> </div> </div>';
        i++;
    }
    document.getElementById("ye1cc").innerHTML += str;
}

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