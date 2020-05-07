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

//----------------------------- Texto Digitado -----------------------------------//
// Repositório: https://github.com/mattboldt/typed.js
var typed3 = new Typed('#typed3', {
  strings: ["Confira abaixo nossos serviços", "Temos servidores de alta perfomance"],
  typeSpeed: 50,
  backSpeed: 20,
  smartBackspace: true,
  loop: true
});
//-----------------------------------------------------------------//



//-----------------------------------------------------------------//
/*
function textoDigitado(elemento) {
  const textoArray = elemento.innerHTML.split('');
  elemento.innerHTML = '';

  //for(r=0; r<=5; r++) {}

    textoArray.forEach((letra, i) => {
      for(r=0; r<=0; r++) {
        setTimeout(() => elemento.innerHTML += letra, 75 * i)
      }
    });
}

const texto = document.querySelector('.welcome h5');
textoDigitado(texto);
*/
//-----------------------------------------------------------------//

//------------ Rascunho ------------------------
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