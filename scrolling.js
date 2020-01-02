export const scrolling = () => {
    title.style.opacity = 0;

    // only for the positionSlider we need to set the sliderWrapper
    if (slider.className === "position-slider") {
        console.log("this is a position slider");
        slider.style.transition = "height 1.5s ease";
        slider.style.height = `${0}px`;
    }

    //map the img
    const images = document.querySelectorAll(".img");
    [...images].map(img => {
        img.style.transition = "height 1.5s ease";
        img.style.height = `${0}px`;
    });
    //don't scroll so far
    window.scrollTo({ top: 0 });
    //after a second
    setTimeout(() => {
        slider.style.transition = "height 1.5s ease";
        title.style.display = "none";
        menu.style.position = "fixed";
        slider.style.height = 0;
    }, 1500)
}
