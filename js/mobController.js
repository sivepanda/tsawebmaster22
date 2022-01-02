var height = window.screen.height;
var width = window.screen.width;
var isOpen = false;
var dtstyles = 'styles/mainstyles.css';
var mobstyles = 'styles/mobilestyles.css';
var styles = document.createElement('link');
var isMobile;

styles.setAttribute('rel', 'stylesheet');

console.log(width / height);

if (width > height) {
    isMobile = false;
    styles.setAttribute('href', dtstyles);
    document.getElementById("hambgrmenu").style.display = 'none';
    document.getElementById("artistsec") ? document.getElementById("artistsec").remove() : console.log("artistsec removed");
} else {
    isMobile = true;
    styles.setAttribute('href', mobstyles);
    document.getElementById("hambgrmenu").style.display = 'block';
    document.getElementById("loadtank").remove();
    document.getElementById("ec2") ? document.getElementById("ec2").remove() : console.log("ec2 removed");
    document.getElementById("artistic4") ? document.getElementById("artistic4").remove() : console.log("artistic4 removed");

}
// document.getElementById('vid').remove();
// document.getElementById('dtstyles').remove();


document.head.appendChild(styles);

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
        var amtScrolled = window.pageYOffset;
        const bkg = document.getElementById("ic1") ? document.getElementById("ic1") : document.getElementById("ac1");
        bkg.style.backgroundPosition = "center " + (-35 + -(amtScrolled * 0.1)) + "vh";
        // bkg.style.paddingBottom = (amtScrolled * 0.02) + "vw";

    });
}