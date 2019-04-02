/*
* 禁止浏览器缩放
* ios
* */
export default function () {
  document.addEventListener('touchstart', (event) => {
    if(event.touches.length > 1){
      event.preventDefault();
    }
  },{
    passive: false  // 关闭被动监听
  });
  let lastTouchEnd = 0;
  document.addEventListener('touchend', (event) => {
    let now = (new Date()).getTime();
    if(now - lastTouchEnd <= 300){
      event.preventDefault()
    }
    lastTouchEnd = now
  }, false)
}