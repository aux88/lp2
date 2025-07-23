
const mySwiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  centeredSlides: true,
  breakpoints: {
    768: {
      slidesPerView: 3, // 768px以上の場合の表示数
      spaceBetween: 40,  // 必要に応じてスライド間の余白を変更可能
      slidesPerGroup: 3,
      centeredSlides: false,    // 左寄せにする
    }
  },
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
  /*
  autoplay: { //自動再生の設定
    delay: 2500,
    disableOnInteraction: false,
  },*/
  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

});
