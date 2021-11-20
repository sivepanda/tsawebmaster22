window.addEventListener("scroll", function(e) {
    var amtScrolled = window.pageYOffset;
    const bkg = document.querySelector(".bkg");
    bkg.style.marginTop = -(amtScrolled * 0.02) + "vw";
    bkg.style.paddingBottom = (amtScrolled * 0.02) + "vw";
});