import { scrolling } from "./scrolling.js"

const transition = (settime, images, index = 0) => {

    if (index < images.length) {
        setTimeout(() => {
            // clean all posible active class setting all the items whith the image class
            [...images].map(img => img.className = 'img');
            // toggle the class to active
            images[index].classList.toggle('active')
            if (index === 0) {
                // toggle the pre image which flows to the left
                images[images.length - 1].classList.toggle('pre')
            } else {
                // toggle the pre image which flows to the left
                images[index - 1].classList.toggle('pre')
            }
            transition(settime, images, index + 1)
        }, settime)

    } else {
        // create and infinite loop of the slider effect
        transition(settime, images, 0)
    }
}

// main function 
export const slider = (pictures, className, settime) => {
    //create the slider conteiner
    const sliderWrapper = document.createElement("div");
    // pass the id as an argument
    sliderWrapper.className = className;
    sliderWrapper.id = "slider";
    container.appendChild(sliderWrapper);

    // create a title
    const title = document.createElement("h1");
    title.innerHTML = "Click to continue";
    title.id = "title"
    sliderWrapper.appendChild(title);

    //loop inside the array of pictures
    for (let i = 0; i < pictures.length; i++) {

        const img = document.createElement("div");
        img.style.backgroundImage = `url("./${pictures[i]}")`;
        img.className = `${i === 0 ? "img active" : "img"}`
        //add the srolling event to the img
        img.onclick = () => {
            scrolling()
        }
        sliderWrapper.appendChild(img);
    }
    // select all the images from the DOM which have already been created
    const images = document.querySelectorAll(".img");
    // create a local function which loop inside the array and set the time out

    // call the function
    transition(settime, images)
}

