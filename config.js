let fundo = document.getElementById("tela-fundo");
let body = document.querySelector("body");
let a = document.querySelectorAll("a");
let botao = document.getElementById("botao-b")
let controle = true;

function light_mode(){
    if(controle==true){
        fundo.style.backgroundColor = "rgb(237, 235, 228)";
        body.style.backgroundColor = "rgb(117, 117, 117)";
        body.style.color = "black";
        for(let i =0; i<a.length; i++){
            a[i].style.color = "black";
        }
        botao.style.backgroundColor = "rgb(181, 181, 181)";
        botao.style.color="black";
        botao.style.borderColor="rgb(181, 181, 181)";
        controle = false;
    }
    else{
        fundo.style.backgroundColor = "rgb(84, 84, 83)";
        body.style.backgroundColor = "rgba(0,0,0,0.87)" ;
        body.style.color = "white";
        for(let i =0; i<a.length; i++){
            a[i].style.color = "white";
        }
        botao.style.backgroundColor = "rgb(119, 118, 118)";
        botao.style.color="white";
        botao.style.borderColor="rgb(119, 118, 118)";

        controle = true; 
    }  
    
}