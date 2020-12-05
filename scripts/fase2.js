const next= document.querySelector('.btn--next');
const back= document.querySelector('.btn--back');




        //obtener nombre

        var  nombre = document.querySelector('.name');

        nombre.innerText= localStorage.getItem('nombre');









next.addEventListener('click',function(){
/*
var user ={
    
    name: nombre.name ,
    points: puntaje + puntajeanterior
        }

        var jsonUser = JSON.stringify(user);

        window.localStorage.setItem("nombre", jsonUser);

*/


window.location.href="video3.html";


});


back.addEventListener('click',function(){
    window.location.href="video2.html";
    });

