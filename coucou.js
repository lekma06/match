let title = document.querySelector("#coucou");
title.addEventListener("mouseover",function(){
    if(this.innerText==="Les moyens de locomotion"){
        this.innerText = "coucou"
    }else{
        this.innerText = "Les moyens de locomotion"
    }
});

let H1 = document.querySelector("#ferrari");
H1.addEventListener("click",function(){
    if(this.innerText==="Voiture"){
        this.innerText = "ferrari"
    }else{
        this.innerText = "Voiture"
    }
});
let H2 = document.querySelector("#R1");
H2.addEventListener("click",function(){
    if(this.innerText==="Moto"){
        this.innerText = "R1"
    }else{
        this.innerText = "Moto"
    }
});
let H3 = document.querySelector("#VTT");
H3.addEventListener("click",function(){
    if(this.innerText==="Vélo"){
        this.innerText = "VTT"
    }else{
        this.innerText = "Vélo"
    }
});

let array = ["ferrari", "R1", "VTT"];
array[0] = "ferrari rouge";
console.log(array[0]);