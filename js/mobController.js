var height = window.screen.height;
var width = window.screen.width;
var isOpen = false;
var dtstyles = 'styles/mainstyles.css';
var mobstyles = 'styles/mobilestyles.css';
var styles = document.createElement('link');

styles.setAttribute('rel', 'stylesheet');

console.log(width / height);

if (width > height) {
    styles.setAttribute('href', dtstyles);
    document.getElementById("hambgrmenu").style.display = 'none';
} else {
    styles.setAttribute('href', mobstyles);
    document.getElementById("hambgrmenu").style.display = 'block';
    document.getElementById("loadtank").remove();
    if (document.getElementById("ec2")) {
        document.getElementById("ec2").remove();

    }
    // document.getElementById('vid').remove();
    // document.getElementById('dtstyles').remove();

}

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