var menu = document.querySelector('.side-bar-mobile')
var burger = document.querySelector('.burger')

burger.addEventListener('click',function() {
    menu.classList.add('menu-ativo')
})
if
burger.addEventListener('click',function() {
    menu.classList.remove('menu-ativo')
})
























/*const inputs = document.querySelectorAll(".side-bar-mobile");

function clicou_burger(){
  let parent = this.parentNode.parentNode;
  //parent.classList.remove('');
  parent.classList.add('menu-ativo');
}
/*
function blurFunc(){
  let parent = this.parentNode.parentNode;
  if (this.value == "") {
    parent.classList.add('blur');
  }
}
*/

/*
inputs.forEach(input => {
  input.addEventListener("focus", focusFunc);
  input.addEventListener("blur", blurFunc);
})
*/