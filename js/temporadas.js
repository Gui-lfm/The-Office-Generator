var temp1 = [1,2,3,4,5,6];
var temp2 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22];
var temp3 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25];
var temp4 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19];
var temp5 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28];
var temp6 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26];
var temp7 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];
var temp8 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24];
var temp9 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27];

var temporadas = [temp1, temp2, temp3, temp4, temp5, temp6, temp7, temp8, temp9];

var botao = document.querySelector(".botao-principal");

var campoEp = document.querySelector(".campo-episodio");
var txtEp = document.createElement("p");

botao.addEventListener("click", function(){

    var tempAleatoria = temporadas[Math.round(Math.random() * (temporadas.length -1))];
        
    var epAleatorio = tempAleatoria[Math.round(Math.random() * (tempAleatoria.length -1))];

    var numTemp = (temporadas.indexOf(tempAleatoria) + 1);
    var numEp = (tempAleatoria.indexOf(epAleatorio) + 1);

    console.log( "temporada Nº " + numTemp);
    console.log("episódio Nº " + numEp);

    criaTxt(numEp, numTemp);    
        
})

function criaTxt(ep, temp){
    txtEp.remove();
    
    campoEp.appendChild(txtEp);

    txtEp.classList.add("episodio-gerado");

    txtEp.innerHTML = ("Que tal assistir o episódio  " + ep + " da temporada " + temp + " ?");    
}

