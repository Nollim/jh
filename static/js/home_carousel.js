export function homeCarousel() {
    let height = document.querySelector('.home-text-container').clientHeight;
    let width = document.querySelector('.home-text-container').clientWidth;
    let position = width > height ? "left" : "bottom";

    let r = Math.round(height * 0.75);
    let d = r * 2;
    var svg1offsets = document.querySelector('.home-text-container').getBoundingClientRect();
    var bottom = svg1offsets.bottom;
    var left = svg1offsets.left;
    Array.from(document.getElementsByClassName('svg')).forEach((element) => {
        element.style.height = String(d);
        element.style.width = String(d);
    });
    document.getElementById("home_carousel_container").style.display = "none";
    document.getElementById("home_carousel_container").style.left = Math.round(left - r) + "px";
    document.getElementById("home_carousel_container").style.top = Math.round(bottom - r) + "px";
    Array.from(document.getElementsByClassName('circle')).forEach((element) => {
        element.style.height = String(d + "px");
        element.style.width = String(d + "px");
    });
    let current_big_circle = document.getElementById("circle_green");
    let carousel_links = document.getElementById("carousel_links_container").getElementsByTagName('a');
    Array.from(carousel_links).forEach(function (element) {
        element.addEventListener('click', (e) => changeColor(element.getAttribute('data-activate')))
    });

    Array.from(document.getElementsByClassName('carousel_illustration_container')).forEach((element) => {
        element.style.height = r * 0.8 + "px";
        element.style.width = r * 0.8 + "px";
    });

    document.getElementById("home_carousel_container").style.display = "block";

    // Initialise la position du rond courant.
    let pos = -45;
    var current = document.querySelector('[data-position="current"]');
    var currentx = Math.cos(pos * Math.PI / 180) * r + r - current.offsetWidth / 2;
    var currenty = Math.sin(pos * Math.PI / 180) * r + r - current.offsetWidth / 2;
    current.style.left = currentx + 'px';
    current.style.top = currenty + 'px';



    function changeColor(key) {
        let circle_key = "circle_" + key;
        if (window.lock_carousel === true) {
            return;
        }
        window.lock_carousel = true;
        var next = document.querySelector('[data-position="next"]');
        next.append(document.querySelector('[data-picture="' + key + '"]'));
        //next.removeChild()
        if (current_big_circle !== document.getElementById(circle_key)) {
            current_big_circle.style.opacity = '0';
            document.getElementById(circle_key).style.opacity = '100';
            current_big_circle = document.getElementById(circle_key);
        }
        changePosition();
    }

    window.changePosition = function () {

        var id = null;
        var current = document.querySelector('[data-position="current"]');
        var next = document.querySelector('[data-position="next"]');
        var pos = -45;
        clearInterval(id);
        id = setInterval(frame, 10);

        function frame() {
            if (pos < -180) {
                clearInterval(id);
                //
                next.setAttribute("data-position", "current");
                current.setAttribute("data-position", "next");

                window.lock_carousel = false;
            } else {
                pos = pos - 2;
                var currentx = Math.cos(pos * Math.PI / 180) * r + r - current.offsetWidth / 2;
                var currenty = Math.sin(pos * Math.PI / 180) * r + r - current.offsetWidth / 2;
                current.style.left = currentx + 'px';
                current.style.top = currenty + 'px';

                var nextx = Math.cos((pos - 225) * Math.PI / 180) * r + r - next.offsetWidth / 2;
                var nexty = Math.sin((pos - 225) * Math.PI / 180) * r + r - next.offsetWidth / 2;
                next.style.left = nextx + 'px';
                next.style.top = nexty + 'px';
            }
        }
    }
}


