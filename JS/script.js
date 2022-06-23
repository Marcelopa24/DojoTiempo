
function eliminacookie(){
    var elementcookie = document.querySelector(".cookie")
    elementcookie.remove();
}

function loadingw(city){
    alert("Loading weding report of " + city + "...");

    var elementh2 =document.querySelector(".sanjose h2");
    elementh2.innerHTML= city; 
}

function convert(){    
    const switchTemp = document.querySelector(".temp").value
    const temps = document.querySelectorAll(".tempmax, .tempmin");

    if(switchTemp === "F"){
        convertToFarenheit(temps)
    }

    if(switchTemp === "C"){       
        for(const idx in temps){                 
            const celsius=  (parseInt(temps[idx].innerHTML) - 32) *  (5/9);  
            temps[idx].innerHTML = Math.ceil(celsius) 
        }
    }
}

const convertToFarenheit = (temps) => {
    for(const idx in temps){    
       let farenheite =(parseInt (temps[idx].innerHTML) * 9/5)+32;
        temps[idx].innerHTML = farenheite; 
    }
}