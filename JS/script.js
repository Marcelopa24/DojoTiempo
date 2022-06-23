function eliminacookie(){
    var elementcookie = document.querySelector(".cookie")
    elementcookie.remove();
}

function loadingw(city){
    alert("Loading weding report of " + city + "...");

    var elementh2 =document.querySelector(".sanjose h2");
    elementh2.innerHTML= city; 
}


const switchTemp = document.querySelector(".temp")


    switchTemp.addEventListener('change', (event) => {
        const currentTemp = event.target
         console.log(currentTemp)
     });

function convert(){
    

    var temps =document.querySelectorAll(".tempmax, .tempmin");
    /*var FoC = elementselect.value;*/
    for(const idx in temps){
        
        let farenheite =(parseInt (temps[idx].innerHTML) * 9/5)+32;
        temps[idx].innerHTML=farenheite;
    }
    /*if(var temps =document.querySelectorAll(".tempmax, .tempmin");){
        temps[idx].innerHTML=farenheite
    }
    else{
        nome.innerHTML="Jane Doe"
    }
    }*/
}

