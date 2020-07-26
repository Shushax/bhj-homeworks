let arrowsElems = document.getElementsByClassName('slider__arrow');
let slidersElems = document.getElementsByClassName('slider__item');
let sliders = Array.from(slidersElems);
let arrows = Array.from(arrowsElems);



arrows[0].onclick = function() {
    // for (let i = sliders.length - 1; i >= 0; i--) {
    //     if (sliders[0].className.includes('slider__item_active')) {
    //         sliders[0].classList.remove('slider__item_active');
    //         sliders[4].classList.add('slider__item_active');
    //     }
    //     if (sliders[i].className.includes('slider__item_active')) {
    //         sliders[i].classList.remove('slider__item_active');
    //         sliders[i - 1].classList.add('slider__item_active');
    //         break;
    //     }
    // }
}

arrows[1].onclick = function() {
    let activeSlide = sliders.find((element) => element.className.includes('slider__item_active'));
    activeSlide.classList.remove('slider__item_active');
    // for (let i = 0; i < sliders.length; i++) {
    //     if ((i + 1) === sliders.length) {
    //         sliders[i].classList.remove('slider__item_active');
    //         sliders[0].classList.add('slider__item_active');
    //     }
    //     if (sliders[i].className.includes('slider__item_active')) {
    //         sliders[i].classList.remove('slider__item_active');
    //         sliders[i + 1].classList.add('slider__item_active');
    //         break;
    //     }
        
    // }
}
