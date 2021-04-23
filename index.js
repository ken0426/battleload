const header = document.getElementById("header");
const conditions = document.getElementById("conditions");
const conditions_shadow = document.getElementById("conditions-shadow");
const conditions_menu = document.getElementById("conditions-menu");
const close_btn = document.getElementById("close_btn");
const targetElement = document.querySelectorAll(".details");
const inputElem = document.getElementById('line');
let slide = document.getElementsByClassName("inpu[type=range]::-webkit-slider-thumb")
const currentValueElem = document.getElementById('current-value');
const on_line_btn = document.getElementById("on-line-btn");
const off_line_btn = document.getElementById("off-line-btn");
const area = document.getElementById("area");
const area_box = document.getElementById("area-box");
const menuButton = document.getElementById("menuButton")

document.addEventListener("DOMContentLoaded", function() {
  for (let i = 0; i < targetElement.length; i++) {
    const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .1
    if (window.innerHeight > getElementDistance) {
      targetElement[i].classList.add("show");
    }
  }
}) 
|| document.addEventListener("scroll", function() {
      for (let i = 0; i < targetElement.length; i++) {
        const getElementDistance = targetElement[i].getBoundingClientRect().top + targetElement[i].clientHeight * .1
        if (window.innerHeight > getElementDistance) {
          targetElement[i].classList.add("show");
        }
      }
    })

conditions.addEventListener('click',()=>{
  header.classList.toggle("active");
  conditions_menu.classList.toggle("active");
  conditions_shadow.style.visibility = "visible";
})

conditions_shadow.addEventListener('click',()=>{
  header.classList.toggle("active");
  conditions_menu.classList.toggle("active");
  conditions_shadow.style.visibility = "hidden";
})

close_btn.addEventListener('click',()=>{
  header.classList.toggle("active");
  conditions_menu.classList.toggle("active");
  conditions_shadow.style.visibility = "hidden";
})


// 現在の値をspanに埋め込む関数
const setCurrentValue = (val ) => {
  currentValueElem.innerText = val;
}

// inputイベント時に値をセットする関数
const rangeOnChange = (e) =>{
  setCurrentValue(e.target.value * 100);
}

window.onload = () => {
  inputElem.addEventListener('input', rangeOnChange); // スライダー変化時にイベントを発火
  setCurrentValue(inputElem.value); // ページ読み込み時に値をセット
}

on_line_btn.addEventListener('click', ()=>{
  area.style.display = "none";
  area_box.style.display = "none";
})

off_line_btn.addEventListener('click', ()=>{
  area.style.display = "flex";
  area_box.style.display = "block";
})

var bar_tan = document.getElementById("bar-btn");
var selector = document.getElementById("selector");


let bar_btn = document.getElementById("bar-btn");
const bar_boder = document.getElementById("bar-boder");
let bar = document.getElementById("bar");

inputElem.oninput = function(){
    bar.style.width = this.value + "%";
}

const btn_reset = document.getElementById("btn-reset");
btn_reset.addEventListener('click',()=>{
  document.conditions_menu.reset();
  setCurrentValue(inputElem.value);
  bar.style.width = 0;
})

menuButton.addEventListener('click', ()=>{
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
  mask.classList.toggle("active");
})

mask.addEventListener('click',()=>{
  menuButton.classList.toggle("active");
  nav.classList.toggle("active");
  mask.classList.toggle("active");
})


