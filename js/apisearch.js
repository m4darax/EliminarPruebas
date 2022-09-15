const url = "http://localhost:40000/CassandraApi/api/empresas";
const listmodel = document.getElementById("listmodel");

function loadDataBunisess() {
  const option = document.getElementsByTagName("option");

  if (option.length === 0) {
    console.log("CARGANDO EMPRESAS")
    document.addEventListener("DOMContentLoaded", callAPI());
  }{
    console.log("empresas cargadas")
  }
}

function callAPI() {
  console.log("FUNCTION CALLAPI")
  fetch(url)
    .then((resp) => resp.json())
    .then((data) =>  showData(data));
}

function showData(datos) {
  console.log("FUNCTION SHOWDATA")
  datos.forEach((element) => {
    const optionsdata = document.createElement("options");
    optionsdata.innerHTML = `<option value="${element.razon_social}">${element.ruc}</option>`
    console.log("razon " + element.razon_social + " ruc " + element.ruc)
    listmodel.appendChild(optionsdata)
  });
}
