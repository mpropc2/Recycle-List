import '../style/app.scss';

let elements = [];
for (let i = 0; i < 10000; i++) {
    elements[i] = i;
}

const container = document.getElementsByClassName("menu-container")[0];
const menuDropdown = document.getElementById('menu-dropdown');
for (let i = 0; i < 15; i++) {
    menuDropdown.insertAdjacentHTML('beforeend', `<div class="element">element${i + 1}</div>`);
}

let initialScrollTop = 0;
let lastScrollTop = 0;
const visibleItem = 10; 
function print(e) {
    console.log("aa ", e.target.scrollTop);
    var st = e.target.scrollTop;
    var distance = st - lastScrollTop;
    initialScrollTop += distance;
    console.log('initialScrollTop ', initialScrollTop);
    if (st > lastScrollTop){
        // downscroll code
        // console.log("scrolling down!")
    } else {
        // upscroll code
        // console.log("scrolling up!")
    }
    lastScrollTop = st <= 0 ? 0 : st;
}

container.onscroll = print;
