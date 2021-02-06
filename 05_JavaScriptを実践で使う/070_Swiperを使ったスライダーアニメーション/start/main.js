document.addEventListener('DOMContentLoaded', function() {
  const hero = new HeroSlider('.swiper-container');
});

class HeroSlider {
  constructor(el) {
    this.el = el;
    this.swiper = this._initSwiper();
  }

  _initSwiper() {
    return new Swiper(this.el, {
      // Optional parameters
      // direction: 'vertical',
      effect: 'coverflow',
      loop: true,
      // スライドを中央配置。
      centeredSliders: true,
      // 表示するスライドの数。
      slidesPerView: 1,
      // スライドからスライドへのduration。
      speed: 1000,
      grabCursor: true,
      // 画面幅に応じてスライドの表示枚数を制御。
      breakpoints: {
        1024: {
          slidesPerView: 3,
        }
      },
      // 自動スライド設定。
      autoplay: {
        delay: 1000,
        // マウスでスライドさせた後も自動スライドさせる。
        disableOnInteraction: false
      }
    });
  }
}