const btn = document.querySelector(".js-hamburger");
const headerInner = document.querySelector(".l-header__inner");
const body = document.querySelector("body");

headerInner.addEventListener("click", (e) => {
  const target = e.target;
  if (target.closest(".l-header__hamburger")) {
    body.classList.toggle("is-active");
    return;
  }

  //ナビゲーションを展開時にメニューをクリックで画面閉じる
  const clickedItem = target.closest(".l-header__item");
  if (body.classList.contains("is-active") && clickedItem) {
    body.classList.remove("is-active");
  }
});


/*==========================================================
# ファーストビューアニメーション
========================================================= */

sliderStart();

function sliderStart() {
  const slide = document.querySelector(".l-mv__list"); //スライダー親
  const slideItem = slide.querySelectorAll(".l-mv__item"); //スライド要素
  const totalNum = slideItem.length - 1; // スライドの枚数を取得
  const FadeTime = 2000; //フェードインの時間
  const IntarvalTime = 5000; //クロスフェードさせるまでの間隔
  let actNum = 0; //現在アクティブな番号
  let nowSlide; //現在表示中のスライド
  let NextSlide; //次に表示するスライド

  // DOM読み込み時にスライドの1枚目をフェードイン
  slideItem[0].classList.add("show_", "zoom_");

  // 処理を繰り返す
  setInterval(() => {
    if (actNum < totalNum) {
      nowSlide = slideItem[actNum];
      NextSlide = slideItem[++actNum];

      //.show_削除でフェードアウト
      nowSlide.classList.remove("show_");
      // と同時に、次のスライドがズームしながらフェードインする
      NextSlide.classList.add("show_", "zoom_");
      //フェードアウト完了後、.zoom_削除
      setTimeout(() => {
        nowSlide.classList.remove("zoom_");
      }, FadeTime);
    } else {
      nowSlide = slideItem[actNum];
      NextSlide = slideItem[(actNum = 0)];

      //.show_削除でフェードアウト
      nowSlide.classList.remove("show_");
      // と同時に、次のスライドがズームしながらフェードインする
      NextSlide.classList.add("show_", "zoom_");
      //フェードアウト完了後、.zoom_削除
      setTimeout(() => {
        nowSlide.classList.remove("zoom_");
      }, FadeTime);
    }
  }, IntarvalTime);
}

/* クリックでページの一番上に遷移
------------------------------------*/
const pageTop = document.querySelector('.js-arrow');
pageTop.addEventListener('click', scrollTop);
function scrollTop() {
  window.scroll({
    top: 0,
    behavior: 'smooth',
  })
};
