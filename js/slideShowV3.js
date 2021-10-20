let count = 1;
const src = "https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_"
let mainElement = document.querySelector("div.main>img");
let thumbnailsElement = document.querySelector("div.thumbnails");
const MIN = 1;
const MAX = 19;
function left() {
  count--;
  let url;
  if (count < MIN) {
    count = MAX;
    thumbnailsElement.children[0].classList.remove("selected");
  } else {
    thumbnailsElement.children[count].classList.remove("selected");
  }
  if (count < 10){
    url = src + "0" + count + ".jpg";
  } else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count -1].classList.add("selected");
}

function right() {
  count++;
  let url;
  if (count > MAX) {
    count = MIN;
    thumbnailsElement.children[MAX-1].classList.remove("selected");
  } else {
    thumbnailsElement.children[count-2].classList.remove("selected");
  }
  if (count < 10){
    url = src + "0" + count + ".jpg";
  } else {
    url = src + count + ".jpg";
  }
  mainElement.setAttribute('src', url);
  thumbnailsElement.children[count -1].classList.add("selected");
}
//追加
let nowPlaying = false;
function play() {
  if(nowPlaying == false) {
    nowPlaying = true;
    autoPlay();
  }
}
//再生ボタン
function autoPlay() {
  console.log("setTimeout()関数");
  right();
  timer = setTimeout(function(){
    autoPlay();
  }, 1000);
}
//停止ボタン
let timer;
function stop() {
  clearTimeout(timer);
  nowPlaying = false;
}
//リセットボタン
function reset() {
  stop();
  thumbnailsElement.children[count-1].classList.remove("selected");
let url;
  url="https://www.takushoku-u.ac.jp/summary/images/summary_successive-chancellor_img_01.jpg"
  count = 1;
  thumbnailsElement.children[count-1].classList.add("selected");
  mainElement.setAttribute('src', url);
}
