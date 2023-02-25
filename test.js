const hamburgerMenu=document.querySelector(".hamburger-menu");
const navi=document.getElementById("hamburger-navigation");
const humbergerMenuSection =document.querySelectorAll(".humberger-menu-section")

hamburgerMenu.addEventListener("click", function () {
    hamburgerMenu.classList.toggle("active");
    navi.classList.toggle('active');
  });

  humbergerMenuSection.forEach((humbergerMenuSection) => {
    humbergerMenuSection.addEventListener("click", function () {
      hamburgerMenu.classList.remove("active");
      navi.classList.remove("active");
    });
  });

$('.slider').slick({
    dots: false,
    arrows:false,
    autoplay:true,
    speed: 20000,
    cssEase: 'linear',
    autoplaySpeed: 0,
    slidesToShow: 4,
    responsive: [
      {
        breakpoint: 755, 
        settings: {
        slidesToShow: 2,
        },
      },
      {
        breakpoint: 450, // 〜479px以下のサイズに適用
        settings: {
          slidesToShow: 1,
        },
      },
    ],
});
          
