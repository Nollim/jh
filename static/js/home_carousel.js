

export function homeCarousel(){
    let height = document.querySelector('.home-text-container').clientHeight;
    let width = document.querySelector('.home-text-container').clientWidth;
    let position = width > height ? "left" : "bottom";
    //console.log(position);

    let r = Math.round(height * 0.75);
    let d = r * 2;
    var svg1offsets = document.querySelector('.home-text-container').getBoundingClientRect();
    var bottom = svg1offsets.bottom;
    var left = svg1offsets.left;
    //document.getElementById("svg1").style.width = String(r*2);
    //document.getElementById("svg1").style.height = String(r*2);
    Array.from(document.getElementsByClassName('svg')).forEach((element) => {
        console.log(element);
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
    let current = document.getElementById("circle_green");
    let carousel_links = document.getElementById("carousel_links_container").getElementsByTagName('a');
    Array.from(carousel_links).forEach(function (element) {
        element.addEventListener('click', (e) => changeColor(element.getAttribute('data-activate')))
    });

    Array.from(document.getElementsByClassName('carousel_illustration_container')).forEach((element) => {
        element.style.height = r * 0.8 + "px";
        element.style.width = r * 0.8 + "px";
    });
    function changeColor(key){
        if(current !== document.getElementById(key)){
            current.style.opacity = '0';
            document.getElementById(key).style.opacity = '100';
            current = document.getElementById(key);
        }
    }

    document.getElementById("home_carousel_container").style.display = "block";

    window.changePosition = function (){

        var id = null;
            var next = document.getElementById("carousel_illustration_container_next");
            var prev = document.getElementById("carousel_illustration_container_prev");
            var pos = -45;
            clearInterval(id);
            id = setInterval(frame, 10);
            function frame() {
                if (pos < -180) {
                    clearInterval(id);
                } else {
                    pos = pos - 2;
                    var nextx = Math.cos(pos * Math.PI/180) * r + r - next.offsetWidth/2;
                    var nexty = Math.sin(pos * Math.PI/180) * r + r - next.offsetWidth/2;
                    next.style.left = nextx + 'px';
                    next.style.top = nexty + 'px';

                    var prevx = Math.cos((pos - 225) * Math.PI/180) * r + r - next.offsetWidth/2;
                    var prevy = Math.sin((pos - 225) * Math.PI/180) * r + r - next.offsetWidth/2;
                    prev.style.left = prevx + 'px';
                    prev.style.top = prevy + 'px';
                }
            }
    }
}


