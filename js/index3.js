const input_ruc = document.getElementById("input_ruc");
const button = document.getElementById("button_ruc");
button.addEventListener("click", buscarruc);

function buscarruc() {
  if (input_ruc.value.length == 0){
    console.log('vacio')
  }
}
