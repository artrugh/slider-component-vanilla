// index.js

import { slider } from './slider.js';
import { scrolling } from "./scrolling.js";

const body = document.querySelector("body");

// this event take the user out of the slider
body.onscroll = () => {

    // be display this function only once
    // for that we need to check the hight of the sliderHeight
    let sliderHeight = slider.getBoundingClientRect().height;

    // now we just check if the height is more than 0 and we are in the correct scroll position
    if (sliderHeight > 0 && window.pageYOffset > window.innerHeight / 4) {
        scrolling()
    } else {
        console.log("nothing");
    }
}

//this function is not properly working, it should be fixed
body.onkeydown = (e) => {
    if (e.keyCode === 40) { window.scrollTo({ top: window.innerHeight }) }
    else if (e.keyCode === 38) console.log(window.pageYOffset);
}

// posible sources that can be used in the slider
const pictures = ["img/0.jpg", "img/1.jpg", "img/2.jpg"];


//create the main container
const container = document.createElement("div");
container.id = "container";
body.appendChild(container);

// you can choose between two tipe of sliders
// id = opacity-slider || id = position-slider 

// arguments for the slider:
// 1.src (has to be an array),
// 2.id(has to be  - opacity-slider || position-transition -,
// 3.settimer (has to be always longer than the transition css effect)

// slider(pictures, "position-slider", 3000);
slider(pictures, "opacity-slider", 3000);


// main container which contains the other components
const main = document.createElement("div");
main.id = "main";
container.appendChild(main);

const menu = document.createElement("div");
menu.id = "menu";
menu.innerHTML = "This is a possible MENU"
main.appendChild(menu);

// just add something to make the height longer
for (let i = 0; i < 100; i++) {
    const content = document.createElement("div");
    content.className = "content";
    main.appendChild(content);
}