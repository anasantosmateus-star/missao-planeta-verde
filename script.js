let personagem = document.getElementById("personagem");
let moeda = document.getElementById("moeda");
let lixo = document.getElementById("lixo");

let pontos = 0;
let vidas = 3;
let fase = 1;

let posX = 60;
let posY = 200;


document.addEventListener("keydown", function(event){

    if(event.key === "ArrowUp"){
        mover("cima");
    }

    if(event.key === "ArrowDown"){
        mover("baixo");
    }

    if(event.key === "ArrowLeft"){
        mover("esquerda");
    }

    if(event.key === "ArrowRight"){
        mover("direita");
    }

});



function mover(direcao){

    if(direcao === "cima"){
        posY -= 20;
    }

    if(direcao === "baixo"){
        posY += 20;
    }

    if(direcao === "esquerda"){
        posX -= 20;
    }

    if(direcao === "direita"){
        posX += 20;
    }



    // limites do mapa

    if(posX < 0){
        posX = 0;
    }

    if(posY < 0){
        posY = 0;
    }

    if(posX > 640){
        posX = 640;
    }

    if(posY > 380){
        posY = 380;
    }



    personagem.style.left = posX + "px";
    personagem.style.top = posY + "px";


    verificar();

}




function verificar(){


let jogador = personagem.getBoundingClientRect();

let item = moeda.getBoundingClientRect();

let perigo = lixo.getBoundingClientRect();



/* coletar moeda */

if(
jogador.left < item.right &&
jogador.right > item.left &&
jogador.top < item.bottom &&
jogador.bottom > item.top
){

pontos += 10;


document.getElementById("pontos").innerHTML = pontos;


document.getElementById("mensagem").innerHTML =
"🪙 Você coletou uma moeda ecológica!";


moeda.style.left = Math.random()*600+"px";

moeda.style.top = Math.random()*350+"px";



faseVerificacao();


}



/* bater no lixo */


if(
jogador.left < perigo.right &&
jogador.right > perigo.left &&
jogador.top < perigo.bottom &&
jogador.bottom > perigo.top
){


vidas--;


document.getElementById("vidas").innerHTML = vidas;


document.getElementById("mensagem").innerHTML =
"🗑️ Cuidado! O lixo prejudica a natureza!";



lixo.style.left = Math.random()*600+"px";

lixo.style.top = Math.random()*350+"px";



if(vidas <= 0){

fimDeJogo();

}


}



}




function faseVerificacao(){


if(pontos >= 50){

fase = 2;

document.getElementById("fase").innerHTML = fase;


document.getElementById("mensagem").innerHTML =
"🌳 Fase 2 liberada! O planeta agradece!";


}


if(pontos >= 100){

fase = 3;

document.getElementById("fase").innerHTML = fase;


document.getElementById("mensagem").innerHTML =
"🏆 Última fase! Salve o planeta!";


}


if(pontos >= 150){

vitoria();

}


}




function vitoria(){


document.getElementById("certificado")
.classList.remove("oculto");


document.getElementById("mensagem").innerHTML =
"🎉 Parabéns! Você completou a missão verde!";


}




function fimDeJogo(){


document.getElementById("mensagem").innerHTML =
"😢 Você perdeu todas as vidas. Tente novamente!";


document.getElementById("jogo").style.opacity="0.5";


}




function reiniciar(){


pontos=0;

vidas=3;

fase=1;


posX=60;

posY=200;


personagem.style.left=posX+"px";

personagem.style.top=posY+"px";


document.getElementById("pontos").innerHTML=0;

document.getElementById("vidas").innerHTML=3;

document.getElementById("fase").innerHTML=1;


document.getElementById("certificado")
.classList.add("oculto");


document.getElementById("jogo").style.opacity="1";


document.getElementById("mensagem").innerHTML =
"🌱 Vamos salvar o planeta!";


}
