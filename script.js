let personagem = document.getElementById("personagem");
let inimigo = document.getElementById("inimigo");

let pontos = 0;
let vidas = 3;

let pulando = false;



// Faz o obstáculo andar

let movimento = setInterval(function(){

    let posicao = inimigo.offsetLeft;


    inimigo.style.left = (posicao - 8) + "px";



    if(posicao < -60){

        inimigo.style.left = "700px";

        pontos++;

        document.getElementById("pontos").innerHTML = pontos;

    }



    colisao();



},30);





// Pular

function pular(){


    if(pulando == false){

        pulando=true;


        personagem.classList.add("pulo");


        setTimeout(function(){

            personagem.classList.remove("pulo");

            pulando=false;


        },600);

    }

}





// Espaço também pula

document.addEventListener("keydown",function(e){

    if(e.code=="Space"){

        pular();

    }

});






// Verifica batida

function colisao(){


let p = personagem.getBoundingClientRect();

let i = inimigo.getBoundingClientRect();



if(

p.left < i.right &&
p.right > i.left &&
p.bottom > i.top &&
p.top < i.bottom

){


vidas--;


document.getElementById("vidas").innerHTML=vidas;


document.getElementById("mensagem").innerHTML=
"💥 Você bateu! Pule os obstáculos!";



inimigo.style.left="700px";



if(vidas <= 0){


document.getElementById("mensagem").innerHTML=
"🏆 Fim do jogo! Clique em reiniciar.";


clearInterval(movimento);


}


}



}







function reiniciar(){


pontos=0;

vidas=3;



document.getElementById("pontos").innerHTML=0;

document.getElementById("vidas").innerHTML=3;


document.getElementById("mensagem").innerHTML=
"🏃 Nova corrida começou!";



inimigo.style.left="700px";


location.reload();


}
