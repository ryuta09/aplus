const modals = document.querySelectorAll('.modal');
const newsItems = document.querySelectorAll('.p-news-row__item');
const modalClose = document.querySelectorAll('.btn--close-modal');
const modalOverlay = document.querySelector('.overlay');

newsItems.forEach((newsItem, index) => {
  newsItem.addEventListener('click', (e) => {
    modals[index].classList.remove('hidden');
    modalOverlay.classList.remove('hidden');
    //閉じるボタンをクリックしたら
    if(e.target.classList.contains('btn--close-modal')) {
      modals[index].classList.add('hidden');
      modalOverlay.classList.add('hidden');
    }
  })
})

//モーダルの画面外をクリックしたら
modalOverlay.addEventListener('click', () => {
  modals.forEach((modal) => {
    modal.classList.add('hidden');
  });
  modalOverlay.classList.add('hidden');
});
