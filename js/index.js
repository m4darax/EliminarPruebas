let button = document.getElementById("button_ruc_buscar")
button.addEventListener("click", buscarruc)

function buscarruc(){
    try{
        ruc = document.getElementById("input_ruc").value;
        if (input_ruc.value.length != 0){
            console.log("tiene datos")
            document.addEventListener("DOMContentLoaded", uploadData(ruc));
            document.addEventListener("DOMContentLoaded", uploadDataNotificaciones(ruc));
            document.addEventListener("DOMContentLoaded", uploadDataComunication(ruc));
        } else {
            console.log("CASILLA DE INPUT VACIO")
        }
    }catch (e) {
        console.log("error")
    }
}

try {   
    function uploadData(){
        while (listmodel.firstChild) {
            listmodel.removeChild(listmodel.firstChild);
        }
        try {
            const url = "http://localhost:40000/CassandraApi/api/listarcontratos/"+ruc
            console.log(url)
            fetch(url)
            .then(res => res.json())
            .then(data => showData(data))
        } catch (error) {
            console.log("ERROR CON API LISTAR CONTRATOS")
        }
        
    }

    function showData(data){
        listmodel = document.getElementById('listmodel');
        data.forEach((element) => {
            const optionsdata = document.createElement("div");
            optionsdata.classList.add('grid-data')
            optionsdata.innerHTML = `
            <div class="data"><input type="checkbox" value="${element.id}" name="idcontrato" /></div>
            <div class="data"><p>${element.nombreDocumentoLegal}</p></div>
            <div class="data"><p>${element.estadoProceso}</p></div>
            <div class="data"><p>${element.fechaEnvio}</p></div>
            <div class="data"><p>${element.totalDocumentos}</p></div>
            <div class="data"><p>${element.usuarioLogin}</p></div>
            <div class="data"><p>${element.usuarioNombre}</p></div>`
            listmodel.appendChild(optionsdata)
        });
    }

    
    function uploadDataNotificaciones(){
        const listmodel = document.getElementById('listmodel-notificaciones');
        while (listmodel.firstChild) {
            listmodel.removeChild(listmodel.firstChild);
        }
        const url = "http://localhost:40000/CassandraApi/api/notificacioneslaborales/"+ruc
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => showDataNotificacionesLaborales(data))
    }

    function showDataNotificacionesLaborales(data){
        const listmodel = document.getElementById('listmodel-notificaciones');
        data.forEach((element) => {
            const optionsdata = document.createElement("div");
            optionsdata.classList.add('grid-data-notificaciones')
            optionsdata.innerHTML = `
            <div class="data"><input type="checkbox" value="${element.id}" name="idcontrato" /></div>
            <div class="data"><p>${element.nombreTipoDocumento}</p></div>
            <div class="data"><p>${element.estadoProceso}</p></div>
            <div class="data"><p>${element.fechaEnvio}</p></div>
            <div class="data"><p>${element.totalDocumentos}</p></div>
            <div class="data"><p>${element.usuarioLogin}</p></div>
            <div class="data"><p>${element.usuarioNombre}</p></div>`
            listmodel.appendChild(optionsdata)
        });

    }

    function uploadDataComunication(){
        const url = "http://localhost:40000/CassandraApi/api/listarcomunicados/"+ruc
        const listmodel = document.getElementById('listmodel-comunicados');
        while (listmodel.firstChild) {
            listmodel.removeChild(listmodel.firstChild);
        }
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => showDataComunicados(data))
    }

    function showDataComunicados(data){
        const listmodel = document.getElementById('listmodel-comunicados');
        while (listmodel.firstChild) {
            listmodel.removeChild(listmodel.firstChild);
        }
        data.forEach((element) => {
            const optionsdata = document.createElement("div");
            optionsdata.classList.add('grid-data-comunicados')
            optionsdata.innerHTML = `
            <div class="data"><input type="checkbox" value="${element.id}" name="idcontrato" /></div>
            <div class="data"><p>${element.tipoFormatoNombre}</p></div>
            <div class="data"><p>${element.estadoProceso}</p></div>
            <div class="data"><p>${element.fechaEnvio}</p></div>
            <div class="data"><p>${element.totalDocumentos}</p></div>
            <div class="data"><p>${element.usuarioLogin}</p></div>
            <div class="data"><p>${element.usuarioNombre}</p></div>`
            listmodel.appendChild(optionsdata)
        });

    }
} catch (e) {
    console.log("error cargar documentos")
}
//js para los botones
/*BOTONES DE PARA ELIMINAR DATOS*/
const buttoneliminarcontratos = document.getElementById("buttoneliminarcontrato")
buttoneliminarcontratos.addEventListener("click", alertContrato);
function alertContrato(){
    console.log("ELIMINAR CONTRATOS")
    const url = "http://localhost:40000/CassandraApi/api/deleteallcontracts/"+ruc
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data + " CONTRATOS ELIMINADOS"))
}

const buttoneliminarcomunicado = document.getElementById("buttoneliminarcomunicado")
buttoneliminarcomunicado.addEventListener("click", alertdatanotificaciones);

function alertdatanotificaciones(){
    console.log("ELIMINAR COMUNICADO")
    const url = "http://localhost:40000/CassandraApi/api/deleteallreleases/"+ruc
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data + " COMUNICADOS ELIMINADOS"))
}

const buttoneliminarnotificaciones = document.getElementById("buttoneliminarnotificaciones")
buttoneliminarnotificaciones.addEventListener("click" , alertnotificaciones)
function alertnotificaciones(){
    console.log("ELIMINAR NOTIFICACIONES")
    const url = "http://localhost:40000/CassandraApi/api/deleteallnotification/"+ruc
    fetch(url)
        .then(res => res.json())
        .then(data => console.log(data + " NOTIFICACIONES ELIMINADOS"))
}

/*BOTONES DE ACTIVAR ELIMINAR*/
let buttoneliminarcontrato = document.getElementById('buttonactivareliminarcontrato')
buttoneliminarcontrato.addEventListener("click", activarbottoncontratos);
function activarbottoncontratos(){
    document.getElementById("buttoneliminarcontrato").removeAttribute("disabled")
}

let buttonactivareliminarnotificaciones = document.getElementById('buttonactivareliminarnotificaciones')
buttonactivareliminarnotificaciones.addEventListener("click", activarbottonnotificaciones);
function activarbottonnotificaciones(){
    document.getElementById("buttoneliminarnotificaciones").removeAttribute("disabled")
}

let buttonactivareliminarcomunicados = document.getElementById('buttonactivareliminarcomunicados')
buttonactivareliminarcomunicados.addEventListener("click", activarbottoncomunicados);
function activarbottoncomunicados(){
    document.getElementById("buttoneliminarcomunicado").removeAttribute("disabled")
}