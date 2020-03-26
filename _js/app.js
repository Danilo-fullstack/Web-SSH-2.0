// Verificar se o checkbox está checado e deixa a logo e o burger position: absolute

var check = document.getElementById("btn-menu")
var logo = document.querySelector(".logo")
var burger = document.querySelector(".burger")

check.addEventListener('click',function() {
  if (check.checked == true){
    logo.style.position = "fixed"
    burger.style.position = "fixed"
    check.style.position = "fixed"
  } else {
    logo.style.position = "absolute"
    burger.style.position = "absolute"
    check.style.position = "absolute"
  }
})

//-----------------------------------------------------------------//







/*
  if (check.checked == true){ 
    window.alert('CHECOU, DEU CERTO!!!');
  }
*/

//var botao = document.querySelector('.btn-menu')
//window.alert(botao);

/*
var menu = document.querySelector('.side-bar-mobile')
var burger = document.querySelector('.burger')

burger.addEventListener('click',function() {
    menu.classList.add('menu-ativo')
})
if
burger.addEventListener('click',function() {
    menu.classList.remove('menu-ativo')
})
*/
























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