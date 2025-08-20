
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
      loopAddBlankSlides: false,
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

// アコーディオンのタイトルがクリックされたら
$('.faq__question').on('click', function (e) {

  // .faq__answerを選択
  var content = $(this).next();

  // .faq__answerを表示・非表示
  content.slideToggle();

  // クリックされた要素の中、または近くのアイコンを探す
  var icon = $(this).find('.toggle-icon');

  // アイコンのクラスを切り替え
  if (icon.hasClass('bi-caret-down-fill')) {
    icon.removeClass('bi-caret-down-fill').addClass('bi-caret-up-fill');
  } else {
    icon.removeClass('bi-caret-up-fill').addClass('bi-caret-down-fill');
  }

});