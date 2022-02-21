var height = window.innerHeight;
var width = window.innerWidth;
var isOpen = false;
var dtstyles = 'styles/mainstyles.css';
var mobstyles = 'styles/mobilestyles.css';
var styles = document.createElement('link');
var isMobile;

styles.setAttribute('rel', 'stylesheet');

resizeWindow();
document.head.appendChild(styles);
const head = document.getElementById("header");


function resizeWindow() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    console.log("window size ratio: " + width / height);

    if (width > height) {
        isMobile = false;
        styles.setAttribute('href', dtstyles);
        document.getElementById("hamburger") ? document.getElementById("hamburger").style.display = 'none' : console.log('hamburger removed');
        document.getElementById("artistsec") ? document.getElementById("artistsec").style.display = 'none' : console.log("artistsec removed");
        document.getElementById("navbar") ? document.getElementById("navbar").style.display = 'block' : console.log("navbar replaced");
        document.getElementById("artistic4") ? document.getElementById("artistic4").style.display = 'block' : console.log("artistic4 replaced");
        document.getElementById("skeu") ? document.getElementById("skeu").style.display = 'flex' : console.log("skeu replaced");
        document.getElementById("ec2") ? document.getElementById("ec2").style.display = 'grid' : console.log("ec2 replaced");
        document.getElementById("1c2cc") ? document.getElementById("1c2cc").style.display = 'flex' : console.log("telemetrycardcontainer replaced");
        document.getElementById("1c3cc") ? document.getElementById("1c3cc").style.display = 'flex' : console.log("telemetrycardcontainer replaced");
    } else {
        isMobile = true;
        styles.setAttribute('href', mobstyles);
        document.getElementById("hamburger") ? document.getElementById("hamburger").style.display = 'block' : console.log('hamburger replaced');
        document.getElementById("navbar") ? document.getElementById("navbar").style.display = 'none' : console.log("navbar removed");
        document.getElementById("artistsec") ? document.getElementById("artistsec").style.display = 'none' : console.log("artistsec removed");
        document.getElementById("loadtank").remove();
        document.getElementById("ec2") ? document.getElementById("ec2").style.display = 'none' : console.log("ec2 removed");
        document.getElementById("artistic4") ? document.getElementById("artistic4").style.display = 'block' : console.log("artistic4 replaced");
        document.getElementById("1c2cc") ? document.getElementById("1c2cc").style.display = 'none' : console.log("telemetrycardcontainer removed");
        document.getElementById("1c3cc") ? document.getElementById("1c3cc").style.display = 'none' : console.log("telemetrycardcontainer removed");
        document.getElementById("skeu") ? document.getElementById("skeu").style.display = 'none' : console.log("skeu removed");
    }
}

function openMenu() {
    if (isOpen) {
        document.getElementById("header").style.height = "12vh";
        isOpen = false;
    } else {
        document.getElementById("header").style.height = "45vh";
        isOpen = true;
    }
}

if (isMobile) {
    window.addEventListener("scroll", function(e) {
        const head = document.getElementById("header");
        if (window.scrollY > 12) {
            head.classList.add('is-active');
        } else {
            head.classList.remove('is-active');

        }
    });
}

window.addEventListener('load', (event) => {
    const menu_btn = document.querySelector('.hamburger');
    const mobile_menu = document.querySelector('.mobile-nav');
    const head = document.getElementById("header");
    if (isMobile) {
        head.style.width = 100 + "vw";
    }
    console.log('mobile menu ready');


    menu_btn.addEventListener('click', function() {
        // head.style.width = 100 + "vw";
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
});

function toggleMenu() {
    console.log('menu loaded');
    // head.style.width = 100 + "vw";
    menu_btn.classList.toggle('is-active');
    mobile_menu.classList.toggle('is-active');
}

// document.getElementById("ec1cc").addEventListener("scroll", function(e) {
//     console.log("scr");
//     var amtScrolled = document.getElementById("ec1cc").scrollTop == 0 ? 1 : document.getElementById("ec1cc").scrollTop;
//     var moveAmt = (115) - (185 * Math.cos((2 * Math.PI * amtScrolled) / (document.getElementById('ec1cc').offsetHeight)));
//     document.getElementById("ec1cc").style.setProperty('--top-dist', moveAmt + "%");
//     console.log("calculated" + moveAmt);
//     // console.log("scr" + amtScrolled);
//     // console.log("tot" + document.getElementById('ec1cc').offsetHeight);
// });


// Set the correct viewport after device orientation change or resize
window.addEventListener("resize", resizeWindow);