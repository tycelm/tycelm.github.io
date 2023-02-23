// with help from this codepen: https://codepen.io/oscicen/pen/zyJeJw

    // Add event listener
    document.addEventListener("mousemove", parallax);
    // Magic happens here
    function parallax(e) {
        let _w = window.innerWidth/2;
        let _h = window.innerHeight/2;
        let _mouseX = e.clientX;
        let _mouseY = e.clientY;
        let x = (_mouseX - _w) * 0.02;
        let y = (_mouseY - _h) * 0.02;
        document.getElementById('container').style.left = x + "px";
        document.getElementById('container').style.top = y + "px";
    }

