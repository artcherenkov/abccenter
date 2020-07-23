var btns = document.querySelectorAll('.slider__number');
var sliders = document.querySelectorAll('.slider__item');
var switches = document.querySelectorAll('.slider__number');
var isFirstClick = true;

var switchImage = function(isFirstImage_) {
  if (isFirstImage_) {
    sliders[0].style.opacity = '1';
    switches[0].children[0].style.opacity = '1';
    sliders[1].style.opacity = '0';
    switches[1].children[0].style.opacity = '0';
  } else {
    sliders[0].style.opacity = '0';
    switches[0].children[0].style.opacity = '0';
    sliders[1].style.opacity = '1';
    switches[1].children[0].style.opacity = '1';
  }

  if (isFirstClick) {
    sliders.forEach(function (slider) {
      slider.style.animation = 'none';
    });
    switches.forEach(function (switch_) {
      switch_.children[0].style.animation = 'none';
    });
    isFirstClick = false;
  }
};

btns[0].addEventListener('click', function () {
  switchImage(true);
});

btns[1].addEventListener('click', function () {
  switchImage(false);
});
