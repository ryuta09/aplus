import Swiper from 'https://cdn.jsdelivr.net/npm/swiper@10/swiper-bundle.min.mjs';

const swiper = new Swiper('.swiper', {
  loop: true, // ループ有効
  slidesPerView: '3', // 一度に表示する枚数
  speed: 8000, // ループの時間
  allowTouchMove: false, // スワイプ無効
  spaceBetween: 40,
  autoplay: {
    delay: 0,// 途切れなくループ
  },
  freeMode: {
    enabled: true,
    momentum: false,
  },
  grabCursor: true,
  on: {
    touchEnd: (swiper) => {
      swiper.slideTo(swiper.activeIndex + 1);
    }
  }
});