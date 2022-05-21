if (!isMobile) {
    var right = document.getElementById("blr");
    var left = document.getElementById("bll");
    var h2 = document.getElementsByClassName("biglink");
    var small = "5vh"
    var large = "10vh"

    /* Get the height and width of the element */
    const heightR = right.clientHeight
    const heightL = left.clientHeight
    const widthR = right.clientWidth
    const widthL = left.clientWidth

    /*
     * Add a listener for mousemove event
     * Which will trigger function 'handleMove'
     * On mousemove
     */
    right.addEventListener('mousemove', handleMoveR);
    left.addEventListener('mousemove', handleMoveL);

    /* Define function a */
    function handleMoveR(e) {
        right.style.zIndex = "5";

        /*
         * Get position of mouse cursor
         * With respect to the element
         * On mouseover
         */
        /* Store the x position */
        const xValR = e.layerX
            /* Store the y position */
        const yValR = e.layerY

        /*
         * Calculate rotation valuee along the Y-axis
         * Here the multiplier 20 is to
         * Control the rotation
         * You can change the value and see the results
         */
        const yRotation = 20 * ((xValR - width / 2) / width)

        /* Calculate the rotation along the X-axis */
        const xRotation = -20 * ((yValR - height / 2) / height)

        /* Generate string for CSS transform property */
        const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

        /* Apply the calculated transformation */
        right.style.transformOrigin = "center"
        right.style.transform = string
    }

    function handleMoveL(e) {
        left.style.zIndex = "5";

        /*
         * Get position of mouse cursor
         * With respect to the element
         * On mouseover
         */
        /* Store the x position */
        const xValL = e.layerX
            /* Store the y position */
        const yValL = e.layerY

        /*
         * Calculate rotation valuee along the Y-axis
         * Here the multiplier 20 is to
         * Control the rotation
         * You can change the value and see the results
         */
        const yRotation = 20 * ((xValL - (width / 2)) / width)

        /* Calculate the rotation along the X-axis */
        const xRotation = -20 * ((yValL - (height / 2)) / height)

        /* Generate string for CSS transform property */
        const string = 'perspective(500px) scale(1.1) rotateX(' + xRotation + 'deg) rotateY(' + yRotation + 'deg)'

        /* Apply the calculated transformation */
        left.style.transformOrigin = "center"
        left.style.transform = string
    }

    /* Add listener for mouseout event, remove the rotation */
    right.addEventListener('mouseout', function() {
        right.style.zIndex = "1";

        right.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    /* Add listener for mousedown event, to simulate click */
    right.addEventListener('mousedown', function() {
        right.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })

    /* Add listener for mouseup, simulate release of mouse click */
    right.addEventListener('mouseup', function() {
        right.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })

    left.addEventListener('mouseout', function() {
        right.style.zIndex = "1";

        left.style.transform = 'perspective(500px) scale(1) rotateX(0) rotateY(0)'
    })

    /* Add listener for mousedown event, to simulate click */
    left.addEventListener('mousedown', function() {
        left.style.transform = 'perspective(500px) scale(0.9) rotateX(0) rotateY(0)'
    })

    /* Add listener for mouseup, simulate release of mouse click */
    left.addEventListener('mouseup', function() {
        left.style.transform = 'perspective(500px) scale(1.1) rotateX(0) rotateY(0)'
    })


    // window.onload = function() {
    //     left[0].style.opacity = "1";
    //     right[0].style.opacity = "1";
    // };

    // window.onunload = function() {
    //     left[0].style.opacity = "1";
    //     right[0].style.opacity = "1";
    // };

    // right[0].onmouseover = function() {
    //     left[0].style.opacity = "0";
    //     right[0].style.width = "75vw";
    //     right[0].style.transform = "skewY(-35deg)";
    //     right[0].style.marginLeft = "-50vw";
    //     // h2[1].style.fontSize = "9vh";
    //     // h2[0].style.fontSize = "12vh";
    // };
    // left[0].onmouseover = function() {
    //     right[0].style.opacity = "0";
    //     right[0].style.transform = "skewY(-35deg)";
    //     left[0].style.width = "75vw";
    //     left[0].style.marginLeft = "0";
    //     // h2[0].style.fontSize = "9vh";
    //     // h2[1].style.fontSize = "12vh";
    // };
    // right[0].onmouseout = function() {
    //     // h2[1].style.fontSize = "10vh";
    //     right[0].style.width = "50vw";
    //     right[0].style.marginLeft = "0vw";
    //     // h2[0].style.fontSize = "10vh";
    //     left[0].style.opacity = "1";
    // };
    // left[0].onmouseout = function() {
    //     // h2[0].style.fontSize = "10vh";
    //     // h2[1].style.fontSize = "10vh";
    //     left[0].style.width = "50vw";
    //     left[0].style.marginLeft = "0vw";
    //     right[0].style.opacity = "1";
    // };
}