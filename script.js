let jogador = document.getElementById("jogador");
let obstaculo = document.getElementById("obstaculo");
let moeda = document.getElementById("moeda");

let pontos = 0;
let vidas = 3;

let pulando = false;



// Movimento do obstáculo

setInterval(function(){

    let posicao = obstaculo.offsetLeft;

    obstaculo.style.left = (posicao - 10) + "px";


    if(posicao < -50){

        obstaculo.style.left = "800px";

    }


    verificarColisao();


},30);





// Movimento da moeda

setInterval(function(){

    let posicao = moeda.offsetLeft;


    moeda.style.left = (posicao - 8) + "px";


    if(posicao < -50){

        moeda.style.left = "800px";

        moeda.style.bottom =
        Math.random()*200 + "px";

    }


    pegarMoeda();


},30);





// Pular

function pular(){


    if(pulando == false){

        pulando = true;

        jogador.classList.add("pular");


        setTimeout(function(){

            jogador.classList.remove("pular");

            pulando=false;


        },600);

    }


}





// Tecla espaço

document.addEventListener("keydown",function(event){

    if(event.code=="Space"){

        pular();

    }

});





// Verificar colisão com obstáculo

function verificarColisao(){


let j = jogador.getBoundingClientRect();

let o = obstaculo.getBoundingClientRect();



if(

j.left < o.right &&
j.right > o.left &&
j.top < o.bottom &&
j.bottom > o.top

){


vidas--;


document.getElementById("vidas").innerHTML = vidas;


document.getElementById("mensagem").innerHTML =
"☄️ Cuidado! Você bateu em um asteroide!";



obstaculo.style.left="800px";



if(vidas <=0){

document.getElementById("mensagem").innerHTML =
"💥 Fim da aventura! Clique em reiniciar.";

obstaculo.style.display="none";

}


}


}





// Pegar moeda

function pegarMoeda(){


let j = jogador.getBoundingClientRect();

let m = moeda.getBoundingClientRect();



if(

j.left < m.right &&
j.right > m.left &&
j.top < m.bottom &&
j.bottom > m.top

){


pontos +=10;


document.getElementById("pontos").innerHTML=pontos;


document.getElementById("mensagem").innerHTML =
"🪙 Moeda espacial coletada!";


moeda.style.left="800px";



if(pontos>=100){

document.getElementById("mensagem").innerHTML =
"🏆 Parabéns! Você venceu a missão espacial!";

}


}


}





// Reiniciar

function reiniciar(){


pontos=0;

vidas=3;


document.getElementById("pontos").innerHTML=0;

document.getElementById("vidas").innerHTML=3;


document.getElementById("mensagem").innerHTML =
"🚀 Nova missão iniciada!";


obstaculo.style.display="block";

obstaculo.style.left="800px";

moeda.style.left="600px";


}
