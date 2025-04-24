const horas = document.getElementById("horas");
const minutos = document.getElementById("minutos");
const segundos = document.getElementById("segundos");  

const dia = document.getElementById("dias");
const mes = document.getElementById("mes");
const ano = document.getElementById("ano"); 




const dataHoje = setInterval(function data() {
    let data = new Date();
    let diaHoje = data.getDate();
    let mesHoje = data.getMonth() + 1; // Janeiro é 0
    let anoHoje = data.getFullYear();

    if (diaHoje < 10) {
        diaHoje = "0" + diaHoje;
    }

    if (mesHoje < 10) {
        mesHoje = "0" + mesHoje;
    }

    dia.textContent = diaHoje;
    mes.textContent = mesHoje;
    ano.textContent = anoHoje;
})


const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let mn = dateToday.getMinutes();
    let sg = dateToday.getSeconds();

    if (hr < 10) {
        hr = "0" + hr;
    }

    if (mn < 10) {
        mn = "0" + mn;
    }

    if (sg < 10) {
        sg = "0" + sg;
    }

    horas.textContent = hr;
    minutos.textContent = mn;
    segundos.textContent = sg;


    if (hr < 12){
        document.body.style.background = 'liner-gradient(12deg,#041dff 0%, #f7c171 100%)'
    } else if(hr < 18){
        document.body.style.background = 'linear-gradient(120deg, #00c6ff 0%,  #feb47b 50%, #0072ff 100%)'
    } else{
        document.body.style.background = 'linear-gradient(120deg,rgb(150, 123, 2),rgb(0, 86, 156),rgb(31, 0, 88))'
    }
})



