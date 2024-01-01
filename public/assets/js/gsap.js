
const cols = document.querySelectorAll('.loader__col');
const loader = document.querySelector('.loader');

if(window.location.pathname === '/') {
  gsap.set(cols,{
    background: '#fff'
  })
  const tl = gsap.timeline();
  tl.to(cols, 1.5, {
    width: "0",
    ease: 'expo.out',
    stagger: {
      each: .2,
      // amount: 1 // 処理する個数 / amountの値
      from: 'start'
        // start, end, center, edges, random
    }
  })
  .to(loader,{
    zIndex: '-1',
  })
  .to(cols,{
    backgroundColor: 'transparent'
  })
} else {
  loader.style.display = 'none';
  cols.forEach(col => {
    col.style.backgroundColor = 'transparent';
  })
}
