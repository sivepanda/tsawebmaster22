class BookedEvent {
    constructor(tm, dt, tr, vrop, usr) {
        this.time = tm;
        this.date = dt;
        this.tier = tr;
        this.vroption = vrop;
        this.user = usr;
    }
}

function myFunction() {
    var dt = document.getElementsByClassName("jsAppointmentValue")[0].innerHTML;
    localStorage.setItem("event", dt);
    // myConsole.log(localStorage.getItem("event"));
}

// class Event {
//     constructor(tm, dt, tr, vrop, usr) {
//         this.time = tm;
//         this.date = dt;
//         this.tier = tr;
//         this.vroption = vrop;
//         this.user = usr;
//     }
// }

function setTier(tr) {
    // jfField form-radio-item isFilled
    // var tr = document.getElementsByClassName("jfField form-radio-item isFilled")[0].innerText;
    switch (tr) {
        case 0:
            tr = 'basicet'
            break;
        case 1:
            tr = 'advet'
            break;
        case 2:
            tr = 'vret'
            break;
    }
    localStorage.setItem("tier", tr);
    // myConsole.log(localStorage.getItem("tier"));

}

function setVR(vr) {
    switch (vr) {
        case 0:
            vr = 'Buying A Headset'
            break;
        case 1:
            vr = 'Renting A Headset'
            break;
        case 2:
            vr = 'Using your Own Headset'
            break;
    }
    localStorage.setItem("vr", vr);
    // myConsole.log(localStorage.getItem("vr"));
}

function addBookedEvent() {
    // myConsole.log(localStorage.getItem("event"));
    // myConsole.log(localStorage.getItem("tier"));
    // myConsole.log(localStorage.getItem("vr"));
    var dat = localStorage.getItem("event");
    const a = dat.split(", ");
    var dt = String(a[1]);
    var tm = a[2].split(" ")[1] + " " + a[2].split(" ")[2];
    var tr = localStorage.getItem("tier").split(" -")[0];
    var vrop = localStorage.getItem("vr") ? localStorage.getItem("vr") : "none";
    var usr = localStorage.getItem("currentUser");
    let i = 0;
    var eventNew = new BookedEvent(tm, dt, tr, vrop, usr);
    while (localStorage.getItem("event" + i) != null && i < 20) {
        i++;
    }
    // document.getElementById("herberg").innerHTML = JSON.stringify(eventNew);

    localStorage.setItem(("event" + i), JSON.stringify(eventNew));
    localStorage.setItem(("vr"), "");
}

// onclick=\"setTier()\"

// for (var i = 0; i < subBtns.length; i++) {
//     subBtns[i].addEventListener("click", addBookedEvent);

// }