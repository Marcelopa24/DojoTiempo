function eliminacookie(){
    var elementcookie = document.querySelector(".cookie")
    elementcookie.remove();
}

function loadingw(city){
    alert("Loading weding report of " + city + "...");

    var elementh2 =document.querySelector(".sanjose h2");
    elementh2.innerHTML= city; 
}