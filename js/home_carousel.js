

function homeCarousel(){
    let height = document.querySelector('.home-text-container').clientHeight;
    let width = document.querySelector('.home-text-container').clientWidth;
    let position = width > height ? "left" : "bottom";
    console.log(position);

    let r = height * 0.75;
    var svg1offsets = document.querySelector('.home-text-container').getBoundingClientRect();
    var bottom = svg1offsets.bottom;
    var left = svg1offsets.left;
    console.log(bottom);
    document.getElementById("svg1").style.width = String(r*2);
    document.getElementById("svg1").style.height = String(r*2);
    document.getElementById("home_carousel_container").style.left = left - r + "px";
    document.getElementById("home_carousel_container").style.top = bottom - r + "px";
    Array.from(document.getElementsByClassName('circle')).forEach((element) => {
        element.style.r = r;
        element.style.cx = r;
        element.style.cy = r;
    });
    let current = document.getElementById("circle_green");
    let carousel_links = document.getElementById("carousel_links_container").getElementsByTagName('a');
    Array.from(carousel_links).forEach(function (element) {
        element.addEventListener('click', (e) => changeColor(element.getAttribute('data-activate')))
    });
    function changeColor(key){
        if(current !== document.getElementById(key)){
            current.style.opacity = '0';
            document.getElementById(key).style.opacity = '100';
            current = document.getElementById(key);
        }
    }
}

homeCarousel();