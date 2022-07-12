'use strict'
window.addEventListener('load',function(){

    function intervalo()
    
    {
        var tiempo = setInterval(function() {
            console.log("Set interval ejecutnado");
        
        var encabezado = document.querySelector("h1");
            if(encabezado.style.fontSize=="50px")
            {
                encabezado.style.fontSize="20px";
            }else
            {
                encabezado.style.fontSize="50px";
            }
        }, 1000);
        return tiempo;
    }
    
    var tiempo = intervalo();


    var stop= document.querySelector("#stop");

    stop.addEventListener("click",function()
    {
        alert("has parado le intervalo ")
         clearInterval(tiempo);
    })

    var start= document.querySelector("#start");
    start.addEventListener("click",function()
    {
        alert("has iniciado le intervalo ")
         intervalo();
    });

});