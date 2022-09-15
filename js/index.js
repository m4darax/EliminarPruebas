let ruc = document.getElementById("input_ruc").value
let button = document.getElementById("button_ruc_buscar")
button.addEventListener("click", buscarruc)

function buscarruc(){
    try{
        document.addEventListener("DOMContentLoaded", uploadData(document.getElementById("input_ruc").value));
        document.addEventListener("DOMContentLoaded", uploadDataNotificaciones(ruc));
        document.addEventListener("DOMContentLoaded", uploadDataComunication(ruc));
    }catch (e) {
        console.log("error")
    }
}

try {   
    function uploadData(){
        
        const url = "http://localhost:40000/CassandraApi/api/listarcontratos/"+ruc
        console.log(url)
        fetch(url)
        .then(res => res.json())
        .then(data => showData(data))
    }

    function showData(data){
        const listmodel = document.getElementById('listmodel');
        data.forEach((element) => {
            document.getElementById("empresa_id").value = `${element.empresaId}`
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
        const url = "http://localhost:40000/CassandraApi/api/notificacioneslaborales/"+ruc
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
        fetch(url)
        .then(res => res.json())
        .then(data => showDataComunicados(data))
    }

    function showDataComunicados(data){
        const listmodel = document.getElementById('listmodel-comunicados');
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
const buttoneliminarcomunicado = document.getElementById("buttoneliminarcomunicado")
buttoneliminarcomunicado.addEventListener("click", alertdata);

function alertdata(){
    console.log("buttoneliminarcomunicado")
}

const buttoneliminarnotificaciones = document.getElementById("buttoneliminarnotificaciones")
buttoneliminarnotificaciones.addEventListener("click" , alertnotificaciones)
function alertnotificaciones(){
    console.log("buttoneliminarnotificaciones")
}

