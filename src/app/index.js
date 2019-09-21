import '../style/app.scss';

let elements = [];
for (let i = 0; i < 10000; i++) {
    elements[i] = i;
}

const container = document.getElementsByClassName("menu-container")[0];
const menuDropdown = document.getElementById('menu-dropdown');
for (let i = 0; i < 10; i++) {
    menuDropdown.insertAdjacentHTML('beforeend', `<div class="element">element${i + 1}</div>`);
}

function updateChildsPosition(parentScrollTop) {
    let childs = menuDropdown.getElementsByTagName('div');
    for (let i = 0; i < childs.length; i++) {
        let child = childs[i];
        child.style.top = parentScrollTop + "px";
    }
}

function fillDataToElements(parentScrollTop) {
    let firstItem = menuDropdown.getElementsByTagName('div')[0];
    let currentIndexOfFirst = Math.round(parseInt(firstItem.style.top, 10) / 20);
    console.log('currentIndexOfFirst ', currentIndexOfFirst)
    let index = 0;
    for (let i = currentIndexOfFirst; i < currentIndexOfFirst + 10; i++) { 
       let currentElement = menuDropdown.getElementsByTagName('div')[index];
       currentElement.innerText = `element${i + 1}`;
       index++;
    }
}

let lastScrollTop = 0;
function print(e) {
    console.log("aa ", e.target.scrollTop);
    var st = e.target.scrollTop;
    updateChildsPosition(st);
    fillDataToElements(st);
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
