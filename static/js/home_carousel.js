export function HomeCarousel() {
    let height = document.querySelector('.home-text-container').clientHeight;
    let r = Math.round(height * 0.75);
    let d = r * 2;
    var offsets = document.querySelector('.home-text-container').getBoundingClientRect();
    var bottom = offsets.bottom;
    var left = offsets.left;

    document.getElementById("home_carousel_container").style.display = "none";
    document.getElementById("home_carousel_container").style.left = Math.round(left - r) + "px";
    document.getElementById("home_carousel_container").style.top = Math.round(bottom - r) + "px";
    let current_big_circle = document.getElementById("circle_green");

    classForEach('circle', (element) => {
        element.style.height = `${d}px`;
        element.style.width = `${d}px`;
    });
    classForEach('carousel_illustration_container', (element) => {
        element.style.height = r * 1 + "px";
        element.style.width = r * 1 + "px";
    });

    let carousel_links = document.getElementById("carousel_links_container").getElementsByTagName('a');

    Array.from(carousel_links).forEach(function (element) {
        element.addEventListener('click', (e) => clickButton(element.getAttribute('data-activate')))
    });

    document.getElementById("home_carousel_container").style.display = "block";

    // Initialise la position du rond courant.
    let current = document.querySelector('[data-position="current"]');
    let next = document.querySelector('[data-position="next"]');
    animateCircle(current, -45);
    animateCircle(next, -225);


    function clickButton(key) {
        let circle_key = "circle_" + key;
        if (window.lock_carousel === true) {
            return;
        }
        window.lock_carousel = true;
        let next = document.querySelector('[data-position="next"]');
        Array.from(next.getElementsByTagName('img')).forEach(function (element) {
            document.getElementById("pictures_container").append(element);
        });
        next.prepend(document.querySelector('[data-picture="' + key + '"]'));
        if (current_big_circle !== document.getElementById(circle_key)) {
            current_big_circle.style.opacity = '0';
            document.getElementById(circle_key).style.opacity = '100';
            current_big_circle = document.getElementById(circle_key);
        }
        changePosition();
    }

    function changePosition() {
        var id = null;
        var current = document.querySelector('[data-position="current"]');
        var next = document.querySelector('[data-position="next"]');
        var pos = -45;
        clearInterval(id);
        id = setInterval(frame, 10);
        function frame() {
            if (pos < -180) {
                clearInterval(id);
                next.setAttribute("data-position", "current");
                current.setAttribute("data-position", "next");
                window.lock_carousel = false;
            } else {
                pos = pos - 2;
                animateCircle(current, pos);
                animateCircle(next, pos - 225);
            }
        }
    }

    function animateCircle(element, angle = 0){
        var currentx = Math.cos(angle * Math.PI / 180) * r + r - element.offsetWidth / 2;
        var currenty = Math.sin(angle * Math.PI / 180) * r + r - element.offsetWidth / 2;
        element.style.left = currentx + 'px';
        element.style.top = currenty + 'px';
    }

    function classForEach(selector, callback){
        Array.from(document.getElementsByClassName(selector)).forEach((element) => callback(element));
    }
}


window.addEventListener('DOMContentLoaded', () => {
    new HomeCarousel();
});