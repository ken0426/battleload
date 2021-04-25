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
const bottom_arrow = document.querySelectorAll(".bottom-arrow");
const top_arrow = document.querySelectorAll(".top-arrow");
const imag_box = document.querySelectorAll(".imag-box");
const details_right = document.querySelectorAll(".details-right");
const info_map_text_box = document.getElementById("info-map-text-box");
const info_map_text_box2 = document.getElementById("info-map-text-box2");
const top_icon = document.getElementById(".top-icon");



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

// bottom_arrow = Array.from(bottom_arrows);
// top_arrow = Array.from(top_arrows);
// imag_box = Array.from(imag_boxs);
// details_right = Array.from(details_rights);


for (var i = 0; i < bottom_arrow.length; i++ , imag_box.length ,details_right ,top_arrow){
  info_map_text_box.addEventListener('click', ()=>{
    info_map_text_box.style.display = "none";
    info_map_text_box2.style.display = "block";
    bottom_arrow[0].style.display = "none";
    imag_box[0].style.display = "block";
    details_right[0].style.display = "block";
    top_arrow[0].style.display = "inline";
    bottom_arrow[1].style.display = "none";
    imag_box[1].style.display = "block";
    details_right[1].style.display = "block";
    top_arrow[1].style.display = "inline";
    bottom_arrow[1].style.display = "none";
    imag_box[1].style.display = "block";
    details_right[1].style.display = "block";
    top_arrow[1].style.display = "inline";
    bottom_arrow[2].style.display = "none";
    imag_box[2].style.display = "block";
    details_right[2].style.display = "block";
    top_arrow[2].style.display = "inline";
    bottom_arrow[3].style.display = "none";
    imag_box[3].style.display = "block";
    details_right[3].style.display = "block";
    top_arrow[3].style.display = "inline";
    bottom_arrow[4].style.display = "none";
    imag_box[4].style.display = "block";
    details_right[4].style.display = "block";
    top_arrow[4].style.display = "inline";
    bottom_arrow[5].style.display = "none";
    imag_box[5].style.display = "block";
    details_right[5].style.display = "block";
    top_arrow[5].style.display = "inline";
    bottom_arrow[6].style.display = "none";
    imag_box[6].style.display = "block";
    details_right[6].style.display = "block";
    top_arrow[6].style.display = "inline";
    bottom_arrow[7].style.display = "none";
    imag_box[7].style.display = "block";
    details_right[7].style.display = "block";
    top_arrow[7].style.display = "inline";
    bottom_arrow[8].style.display = "none";
    imag_box[8].style.display = "block";
    details_right[8].style.display = "block";
    top_arrow[8].style.display = "inline";
    bottom_arrow[9].style.display = "none";
    imag_box[9].style.display = "block";
    details_right[9].style.display = "block";
    top_arrow[9].style.display = "inline";
  })
  info_map_text_box2.addEventListener('click', ()=>{
    info_map_text_box2.style.display = "none";
    info_map_text_box.style.display = "block";
    top_arrow[0].style.display = "none";
    imag_box[0].style.display = "none";
    details_right[0].style.display = "none";
    bottom_arrow[0].style.display = "inline";
    top_arrow[1].style.display = "none";
    imag_box[1].style.display = "none";
    details_right[1].style.display = "none";
    bottom_arrow[1].style.display = "inline";
    top_arrow[2].style.display = "none";
    imag_box[2].style.display = "none";
    details_right[2].style.display = "none";
    bottom_arrow[2].style.display = "inline";
    top_arrow[3].style.display = "none";
    imag_box[3].style.display = "none";
    details_right[3].style.display = "none";
    bottom_arrow[3].style.display = "inline";
    top_arrow[4].style.display = "none";
    imag_box[4].style.display = "none";
    details_right[4].style.display = "none";
    bottom_arrow[4].style.display = "inline";
    top_arrow[5].style.display = "none";
    imag_box[5].style.display = "none";
    details_right[5].style.display = "none";
    bottom_arrow[5].style.display = "inline";
    top_arrow[6].style.display = "none";
    imag_box[6].style.display = "none";
    details_right[6].style.display = "none";
    bottom_arrow[6].style.display = "inline";
    top_arrow[7].style.display = "none";
    imag_box[7].style.display = "none";
    details_right[7].style.display = "none";
    bottom_arrow[7].style.display = "inline";
    top_arrow[8].style.display = "none";
    imag_box[8].style.display = "none";
    details_right[8].style.display = "none";
    bottom_arrow[8].style.display = "inline";
    top_arrow[9].style.display = "none";
    imag_box[9].style.display = "none";
    details_right[9].style.display = "none";
    bottom_arrow[9].style.display = "inline";
  })

  
  bottom_arrow[0].addEventListener('click',()=>{
    bottom_arrow[0].style.display = "none";
    imag_box[0].style.display = "block";
    details_right[0].style.display = "block";
    top_arrow[0].style.display = "inline";
  });
  bottom_arrow[1].addEventListener('click',()=>{
    bottom_arrow[1].style.display = "none";
    imag_box[1].style.display = "block";
    details_right[1].style.display = "block";
    top_arrow[1].style.display = "inline";
  });
  bottom_arrow[2].addEventListener('click',()=>{
    bottom_arrow[2].style.display = "none";
    imag_box[2].style.display = "block";
    details_right[2].style.display = "block";
    top_arrow[2].style.display = "inline";
  });
  bottom_arrow[3].addEventListener('click',()=>{
    bottom_arrow[3].style.display = "none";
    imag_box[3].style.display = "block";
    details_right[3].style.display = "block";
    top_arrow[3].style.display = "inline";
  });
  bottom_arrow[4].addEventListener('click',()=>{
    bottom_arrow[4].style.display = "none";
    imag_box[4].style.display = "block";
    details_right[4].style.display = "block";
    top_arrow[4].style.display = "inline";
  });
  bottom_arrow[5].addEventListener('click',()=>{
    bottom_arrow[5].style.display = "none";
    imag_box[5].style.display = "block";
    details_right[5].style.display = "block";
    top_arrow[5].style.display = "inline";
  });
  bottom_arrow[6].addEventListener('click',()=>{
    bottom_arrow[6].style.display = "none";
    imag_box[6].style.display = "block";
    details_right[6].style.display = "block";
    top_arrow[6].style.display = "inline";
  });
  bottom_arrow[7].addEventListener('click',()=>{
    bottom_arrow[7].style.display = "none";
    imag_box[7].style.display = "block";
    details_right[7].style.display = "block";
    top_arrow[7].style.display = "inline";
  });
  bottom_arrow[8].addEventListener('click',()=>{
    bottom_arrow[8].style.display = "none";
    imag_box[8].style.display = "block";
    details_right[8].style.display = "block";
    top_arrow[8].style.display = "inline";
  });
  bottom_arrow[9].addEventListener('click',()=>{
    bottom_arrow[9].style.display = "none";
    imag_box[9].style.display = "block";
    details_right[9].style.display = "block";
    top_arrow[9].style.display = "inline";
  });
  top_arrow[0].addEventListener('click',()=>{
    top_arrow[0].style.display = "none";
    imag_box[0].style.display = "none";
    details_right[0].style.display = "none";
    bottom_arrow[0].style.display = "inline";
  })
  top_arrow[1].addEventListener('click',()=>{
    top_arrow[1].style.display = "none";
    imag_box[1].style.display = "none";
    details_right[1].style.display = "none";
    bottom_arrow[1].style.display = "inline";
  })
  top_arrow[2].addEventListener('click',()=>{
    top_arrow[2].style.display = "none";
    imag_box[2].style.display = "none";
    details_right[2].style.display = "none";
    bottom_arrow[2].style.display = "inline";
  })
  top_arrow[3].addEventListener('click',()=>{
    top_arrow[3].style.display = "none";
    imag_box[3].style.display = "none";
    details_right[3].style.display = "none";
    bottom_arrow[3].style.display = "inline";
  })
  top_arrow[4].addEventListener('click',()=>{
    top_arrow[4].style.display = "none";
    imag_box[4].style.display = "none";
    details_right[4].style.display = "none";
    bottom_arrow[4].style.display = "inline";
  })
  top_arrow[5].addEventListener('click',()=>{
    top_arrow[5].style.display = "none";
    imag_box[5].style.display = "none";
    details_right[5].style.display = "none";
    bottom_arrow[5].style.display = "inline";
  })
  top_arrow[6].addEventListener('click',()=>{
    top_arrow[6].style.display = "none";
    imag_box[6].style.display = "none";
    details_right[6].style.display = "none";
    bottom_arrow[6].style.display = "inline";
  })
  top_arrow[7].addEventListener('click',()=>{
    top_arrow[7].style.display = "none";
    imag_box[7].style.display = "none";
    details_right[7].style.display = "none";
    bottom_arrow[7].style.display = "inline";
  })
  top_arrow[8].addEventListener('click',()=>{
    top_arrow[8].style.display = "none";
    imag_box[8].style.display = "none";
    details_right[8].style.display = "none";
    bottom_arrow[8].style.display = "inline";
  })
  top_arrow[9].addEventListener('click',()=>{
    top_arrow[9].style.display = "none";
    imag_box[9].style.display = "none";
    details_right[9].style.display = "none";
    bottom_arrow[9].style.display = "inline";
  })
}




// for (var i = 0; i < bottom_arrow.length; i++) {
//   console.log(bottom_arrow[0]);
//   bottom_arrow.forEach(function(bottom_arrow){
//   bottom_arrow.addEventListener('click',()=>{
//       bottom_arrow.style.display = "none";
//       imag_box.forEach(function(imag_box){
//           imag_box.style.display = "block";
//       });
//       details_right.forEach(function(details_right){
//         details_right.style.display = "block";
//       });
//       top_arrow.forEach(function(top_arrow){
//         top_arrow.style.display = "block";
//       });
//     });
//   });
// }


// for (var i = 0; i < top_arrow.length; i++) {
// top_arrow.forEach(function(top_arrow){
//   top_arrow.addEventListener('click',()=>{
//     top_arrow.style.display = "none";
//     imag_box.forEach(function(imag_box){
//         imag_box.style.display = "none";
//     });
//     details_right.forEach(function(details_right){
//       
//     });
//     bottom_arrow.forEach(function(bottom_arrow){
//       bottom_arrow.style.display = "block";
//     });
//   });
// });
// }


