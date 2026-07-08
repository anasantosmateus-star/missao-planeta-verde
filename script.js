let personagem = document.getElementById("personagem");
let reciclavel = document.getElementById("reciclavel");
let lixo = document.getElementById("lixo");

let pontos = 0;

let posX = 50;
let posY = 170;


document.addEventListener("keydown", function(event){

    if(event.key == "ArrowRight"){
        posX += 15;
    }

    if(event.key == "ArrowLeft"){
        posX -= 15;
    }

    if(event.key == "ArrowUp"){
        posY -= 15;
    }

    if(event.key == "ArrowDown"){
        posY += 15;
    }


    personagem.style.left = posX + "px";
    personagem.style.top = posY + "px";


    verificarColisao();

});



function verificarColisao(){

let jogador = personagem.getBoundingClientRect();
let item = reciclavel.getBoundingClientRect();
let perigo = lixo.getBoundingClientRect();



if(
jogador.left < item.right &&
jogador.right > item.left &&
jogador.top < item.bottom &&
jogador.bottom > item.top
){

pontos++;

document.getElementById("pontos").innerHTML=pontos;

document.getElementById("mensagem").innerHTML=
"🌎 Muito bem! Você ajudou a reciclar!";


reciclavel.style.left=
Math.random()*500+"px";

reciclavel.style.top=
Math.random()*300+"px";

}



if(
jogador.left < perigo.right &&
jogador.right > perigo.left &&
jogador.top < perigo.bottom &&
jogador.bottom > perigo.top
){

document.getElementById("mensagem").innerHTML=
"⚠️ Cuidado! O lixo prejudica o meio ambiente.";

pontos--;

if(pontos<0){
pontos=0;
}

document.getElementById("pontos").innerHTML=pontos;

}

}



function reiniciar(){

pontos=0;

posX=50;
posY=170;

personagem.style.left=posX+"px";
personagem.style.top=posY+"px";

document.getElementById("pontos").innerHTML=0;

document.getElementById("mensagem").innerHTML=
"🌱 Vamos salvar o planeta!";

}
