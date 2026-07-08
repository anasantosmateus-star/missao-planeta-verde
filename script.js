let cientista = document.getElementById("cientista");
let frasco = document.getElementById("frasco");
let perigo = document.getElementById("perigo");

let pontos = 0;
let vidas = 3;

let x = 50;
let y = 200;



document.addEventListener("keydown", function(event){

    if(event.key === "ArrowRight"){
        x += 20;
    }

    if(event.key === "ArrowLeft"){
        x -= 20;
    }

    if(event.key === "ArrowUp"){
        y -= 20;
    }

    if(event.key === "ArrowDown"){
        y += 20;
    }


    limites();

    cientista.style.left = x + "px";
    cientista.style.top = y + "px";


    verificar();

});




function limites(){

    if(x < 0){
        x = 0;
    }

    if(y < 0){
        y = 0;
    }

    if(x > 640){
        x = 640;
    }

    if(y > 380){
        y = 380;
    }

}




function verificar(){


let jogador = cientista.getBoundingClientRect();

let item = frasco.getBoundingClientRect();

let obstaculo = perigo.getBoundingClientRect();



/* pegar conhecimento */

if(

jogador.left < item.right &&
jogador.right > item.left &&
jogador.top < item.bottom &&
jogador.bottom > item.top

){


pontos += 10;


document.getElementById("pontos").innerHTML = pontos;


document.getElementById("mensagem").innerHTML =
"🧪 Excelente! Você encontrou uma descoberta científica!";



reposicionar(frasco);



if(pontos >= 100){

document.getElementById("final")
.classList.remove("escondido");


document.getElementById("mensagem").innerHTML =
"🏆 Laboratório concluído!";

}


}




/* tocar no perigo */


if(

jogador.left < obstaculo.right &&
jogador.right > obstaculo.left &&
jogador.top < obstaculo.bottom &&
jogador.bottom > obstaculo.top

){


vidas--;


document.getElementById("vidas").innerHTML = vidas;


document.getElementById("mensagem").innerHTML =
"☢️ Cuidado! Experimento perigoso!";



reposicionar(perigo);



if(vidas <= 0){

document.getElementById("mensagem").innerHTML =
"😢 O laboratório fechou. Tente novamente!";

}

}



}




function reposicionar(objeto){

objeto.style.left =
Math.random()*600 + "px";


objeto.style.top =
Math.random()*350 + "px";

}





function reiniciar(){

pontos = 0;

vidas = 3;


x = 50;

y = 200;



cientista.style.left = x+"px";

cientista.style.top = y+"px";



document.getElementById("pontos").innerHTML = 0;

document.getElementById("vidas").innerHTML = 3;


document.getElementById("final")
.classList.add("escondido");


document.getElementById("mensagem").innerHTML =
"🧪 Vamos começar a pesquisa!";

}
