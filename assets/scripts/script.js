 // Initialize AOS
 function aos_init() {
    AOS.init({
    duration: 1000,
    once: true
    });
}
$(window).on('load', function() {
    aos_init();
});

//banner image moving effect
var lFollowX = 0,
lFollowY = 0,
x = 0,
y = 0,
friction = 1 / 10;

function animate() {
x += (lFollowX - x) * friction;
y += (lFollowY - y) * friction;

translate = 'translate(' + x + 'px, ' + y + 'px) scale(1)';

$('.heroimg').css({
    '-webit-transform': translate,
    '-moz-transform': translate,
    'transform': translate
});

window.requestAnimationFrame(animate);
}

$(window).on('mousemove click', function (e) {

var lMouseX = Math.max(-100, Math.min(100, $(window).width() / 2 - e.clientX));
var lMouseY = Math.max(-100, Math.min(100, $(window).height() / 2 - e.clientY));
lFollowX = (20 * lMouseX) / 100; // 100 : 12 = lMouxeX : lFollow
lFollowY = (10 * lMouseY) / 100;

});

animate();

//typed js effect
var typed = new Typed('.name', {
    strings: [
        "<span style='color:#ffd000;'>make your website responsive 🤓 </span>",
	"<span style='color:#FAF8D4;'>build efficient apps </span>",
	"<span style='color:#FAF8D4;'> </span>",
        "<span style='color:#FFB8D1;'>craft stunning websites </span>",
        "<span style='color:#CDC1FF;'>design beautiful User Interfaces </span>",
        "<span style='color:#008DD5;'>create smooth User Experiences </span>",
        "<span style='color:#28AFB0;'>make your website SEO ready </span>",
		"<span style='color:#ffd000;'>Even i can find bugs in private companies (only RVDP) 🤓 </span>"
    ],
    typeSpeed: 40,
    backSpeed: 40,
    showCursor: true,
    loop: true,
    cursorChar: '|',
    backDelay: 4000
});


//project slider script

const slider = document.querySelector(".slider");
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".slide");
const numberOfSlides = slides.length;
var slideNumber = 0;

//image slider next button
nextBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber++;

  if(slideNumber > (numberOfSlides - 1)){
    slideNumber = 0;
  }

  slides[slideNumber].classList.add("active");
});

//image slider previous button
prevBtn.addEventListener("click", () => {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });

  slideNumber--;

  if(slideNumber < 0){
    slideNumber = numberOfSlides - 1;
  }

  slides[slideNumber].classList.add("active");
});

//image slider autoplay
var playSlider;

var repeater = () => {
  playSlider = setInterval(function(){
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });

    slideNumber++;

    if(slideNumber > (numberOfSlides - 1)){
      slideNumber = 0;
    }

    slides[slideNumber].classList.add("active");
  }, 5000);
}
repeater();

//stop the image slider autoplay on mouseover
slider.addEventListener("mouseover", () => {
  clearInterval(playSlider);
});

//start the image slider autoplay again on mouseout
slider.addEventListener("mouseout", () => {
  repeater();
});
