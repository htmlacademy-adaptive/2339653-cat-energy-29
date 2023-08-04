// Бегунок на слайдере


export let slider = () => {

let slider = document.querySelector('.slider');
let before = slider.querySelector('.slider__before');
let beforeImage = before.querySelector('.slider__before-image');
let toggle = slider.querySelector('.slider__toggle');
let body = document.body;

let isActive = false;

document.addEventListener('DOMContentLoaded', () => {
  let width = slider.offsetWidth;
  beforeImage.style.width = `${width}px`;
});


const beforeAfterSlider = (x) => {
  let shift = Math.max(0, Math.min(x, slider.offsetWidth));
  before.style.width = `${shift}px`;
  toggle.style.left = `${shift}px`;
};

let pauseEvents = (e) => {
  e.stopPropagation();
  e.preventDefault();
  return false;
};

body.addEventListener('mousedown', () => {
  isActive = true;
  console.log('down');
});

body.addEventListener('mouseup', () => {
  isActive = false;
  console.log('up');

});

body.addEventListener('mouseleave', () => {
  isActive = false;
});

body.addEventListener('mousemove', (e) => {
  if (!isActive) {
    return;
  }

  let x = e.pageX;

  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
})


body.addEventListener('touchstart', () => {
  isActive = true;
});

body.addEventListener('touchend', () => {
  isActive = false;
});

body.addEventListener('touchcancel', () => {
  isActive = false;
});

body.addEventListener('touchmove', (e) => {
  if (!isActive) {
    return;
  }

  let x;
  let i;

  for (i = 0; e < e.changedTouches.length; i++) {
x = e.changedTouches[i].pageX;
  }


  x -= slider.getBoundingClientRect().left;
  beforeAfterSlider(x);
  pauseEvents(e);
});



}
