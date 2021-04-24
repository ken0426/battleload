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
const menuButton = document.getElementById("menuButton");
const bottom_arrows = document.getElementsByClassName("bottom-arrow");
const top_arrows = document.getElementsByClassName("top-arrow");
const imag_boxs = document.getElementsByClassName("imag-box");
const details_rights = document.getElementsByClassName("details-right");

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
  area.style.display = "flex";
  area_box.style.display = "block";
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

bottom_arrow = Array.from(bottom_arrows);
top_arrow = Array.from(top_arrows);
imag_box = Array.from(imag_boxs);
details_right = Array.from(details_rights);


for (var i = 0; i < bottom_arrow.length; i++) {
bottom_arrow.forEach(function(bottom_arrow){
  bottom_arrow.addEventListener('click',()=>{
      bottom_arrow.style.display = "none";
      imag_box.forEach(function(imag_box){
          imag_box.style.display = "block";
      });
      details_right.forEach(function(details_right){
        details_right.style.display = "block";
      });
      top_arrow.forEach(function(top_arrow){
        top_arrow.style.display = "block";
      });
    });
  });
}



top_arrow.forEach(function(top_arrow){
  top_arrow.addEventListener('click',()=>{
    top_arrow.style.display = "none";
    imag_box.forEach(function(imag_box){
        imag_box.style.display = "none";
    });
    details_right.forEach(function(details_right){
      details_right.style.display = "none";
    });
    bottom_arrow.forEach(function(bottom_arrow){
      bottom_arrow.style.display = "block";
    });
  });
});



