//HI AHMAD. CHANGE THIS AND **ONLY** THIS :)
newMobile = false; // <-THIS GUY. SEE IT? False for old mobile, true for new
//YEP. THAT'S IT. STOP HERE

var height = window.innerHeight;
var width = window.innerWidth;
var isOpen = false;
var dtstyles = 'styles/mainstyles.css';
var mobstyles = newMobile ? 'styles/experimentalmobile.css' : 'styles/mobilestyles.css';
var styles = document.createElement('link');
var isMobile;
var initialLogoHeight;
var initialTextIBP3Height;

styles.setAttribute('rel', 'stylesheet');

resizeWindow();
document.head.appendChild(styles);
const head = document.getElementById("header");

function changeElementIDDisplay(id, display) {
    document.getElementById(id) ? document.getElementById(id).style.display = display : console.log(id + " replaced");
}


function resizeWindow() {
    var height = window.innerHeight;
    var width = window.innerWidth;
    console.log("window size ratio: " + width / height);

    if (width > height) {
        isMobile = false;
        styles.setAttribute('href', dtstyles);
        changeElementIDDisplay("hamburger", "none");
        changeElementIDDisplay("sitesettingspanel", "flex");
        changeElementIDDisplay("inddownarr", "none");
        document.getElementById("hamburger") ? document.getElementById("hamburger").style.display = 'none' : console.log('hamburger removed');
        document.getElementById("artistsec") ? document.getElementById("artistsec").style.display = 'none' : console.log("artistsec removed");
        document.getElementById("navbar") ? document.getElementById("navbar").style.display = 'block' : console.log("navbar replaced");
        document.getElementById("artistic4") ? document.getElementById("artistic4").style.display = 'block' : console.log("artistic4 replaced");
        document.getElementById("skeu") ? document.getElementById("skeu").style.display = 'flex' : console.log("skeu replaced");
        document.getElementById("ec2") ? document.getElementById("ec2").style.display = 'grid' : console.log("ec2 replaced");
        document.getElementById("1c2cc") ? document.getElementById("1c2cc").style.display = 'flex' : console.log("telemetrycardcontainer replaced");
        document.getElementById("1c3cc") ? document.getElementById("1c3cc").style.display = 'flex' : console.log("telemetrycardcontainer replaced");
        document.getElementById("ic1btn") ? document.getElementById("ic1btn").style.display = '' : console.log("ic1btn replaced");
        document.getElementById("ic1logo") ? document.getElementById("ic1logo").style.display = 'none' : console.log("ic1logo removed");
    } else {
        isMobile = true;
        styles.setAttribute('href', mobstyles);
        changeElementIDDisplay("sitesettingspanel", "none");
        document.getElementById("mainlogoind") ? document.getElementById("mainlogoind").style.opacity = "0" : console.log("not index");
        document.getElementById("hamburger") ? document.getElementById("hamburger").style.display = 'block' : console.log('hamburger replaced');
        document.getElementById("navbar") ? document.getElementById("navbar").style.display = 'none' : console.log("navbar removed");
        document.getElementById("artistsec") ? document.getElementById("artistsec").style.display = 'none' : console.log("artistsec removed");
        document.getElementById("loadtank").remove();
        document.getElementById("ec2") ? document.getElementById("ec2").style.display = 'none' : console.log("ec2 removed");
        document.getElementById("artistic4") ? document.getElementById("artistic4").style.display = 'block' : console.log("artistic4 replaced");
        document.getElementById("1c2cc") ? document.getElementById("1c2cc").style.display = 'none' : console.log("telemetrycardcontainer removed");
        document.getElementById("1c3cc") ? document.getElementById("1c3cc").style.display = 'none' : console.log("telemetrycardcontainer removed");
        document.getElementById("skeu") ? document.getElementById("skeu").style.display = 'none' : console.log("skeu removed");
        document.getElementById("ic1btn") ? document.getElementById("ic1btn").style.display = 'none' : console.log("skeu removed");
        document.getElementById("ic1logo") ? document.getElementById("ic1logo").style.display = '' : console.log("ic1logo replaced");
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
    const headLogo = document.getElementById("mainlogoind");
    const ic1Logo = document.getElementById("ic1logo");
    const ic1h1 = document.getElementById("ic1h1");
    const ic3bp = document.getElementById("ic3bp");
    // var conversion = 80 / ic1Logo.offsetWidth;
    window.addEventListener("scroll", function(e) {
        const head = document.getElementById("header");
        if (window.scrollY > 12) {
            head.classList.add('is-active');
        } else {
            head.classList.remove('is-active');
        }


        if (window.scrollY > 100) {
            headLogo ? headLogo.style.opacity = "1" : console.log("not index");
            if (window.scrollY > 1940) {
                ic3bp ? ic3bp.style.height = "0" : console.log("not index");
            } else {
                ic3bp ? ic3bp.style.height = "1" : console.log("not index");
                console.log("yo");
            }
        } else {
            headLogo ? headLogo.style.opacity = "0" : console.log("not index");


        }
        if (window.scrollY > 64) {
            console.log("anim done");
        } else if (window.scrollY == 0) {
            ic1Logo ? ic1Logo.style.width = 80 + "vw" : console.log("not index");
            ic1Logo ? ic1Logo.style.marginLeft = 10 + "vw" : console.log("not index");
            var logoHeight = ic1logo ? ic1Logo.offsetHeight : 0;
        } else {
            var finalSize = 50;
            var initialSize = 80;
            var deltaSize = initialSize - finalSize;
            var animationHeight = 64 / 2;
            var logoSize = finalSize + Math.floor((deltaSize) / (1 + Math.pow(Math.E, (0.1) * (window.scrollY - animationHeight))));
            ic1Logo ? ic1Logo.style.width = logoSize + "vw" : console.log("not index");
            ic1Logo ? ic1Logo.style.marginLeft = ((100 - logoSize) / 2) + "vw" : console.log("not index");
            var logoHeight = ic1logo ? ic1Logo.offsetHeight : 0;
            console.log("New margin " + (initialLogoHeight - logoHeight));
            console.log("Current marginTop: " + compStyle.marginTop);
            ic1h1 ? ic1h1.style.marginTop = ((initialLogoHeight - logoHeight)) + "px" : console.log("not index");
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

    const ic1Logo = document.getElementById("ic1logo");
    ic1Logo ? initialLogoHeight = ic1Logo.offsetHeight : console.log("not index");
    const ic3bp = document.getElementById("ic3bp");
    ic3bp ? initialTextIBP3Height = ic3bp.offsetHeight : console.log("not index");


    menu_btn.addEventListener('click', function() {
        // head.style.width = 100 + "vw";
        menu_btn.classList.toggle('is-active');
        mobile_menu.classList.toggle('is-active');
    });
});

function toggleMenu() {
    console.log('menu loaded');
    // head.style.width = 100 + "vw";
    // menu_btn.classList.toggle('is-active');
    // mobile_menu.classList.toggle('is-active');
    // document.body.style.margin = '10vw';
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