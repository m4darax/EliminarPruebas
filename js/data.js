

function validateListContracts(){
    const inputruc = document.getElementById("inputruc").value
    const url = "http://localhost:40000/CassandraApi/api/listarcontratos/"+inputruc;
    fetch(url)
    .then(res => res.json())
    .then(data => redirect(data))
    

function redirect(data){
    window.location.href = 'http://127.0.0.1:5500/index.html';
}

document.addEventListener("DOMContentLoaded", uploadData);

function uploadData(){
    const url = "http://localhost:40000/CassandraApi/api/listarcontratos/20607942944"
    fetch(url)
    .then(res => res.json())
    .then(data => showData(data))
}

function showData(data){
    
}
