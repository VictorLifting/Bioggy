const next= document.querySelector('.btn--next');
const back= document.querySelector('.btn--back');

next.addEventListener('click',function(){
window.location.href="video2.html";

/*
var user ={
    
    name: localStorage.getItem('nombre') ,
    points: puntaje
        }

        var jsonUser = JSON.stringify(user);

        window.localStorage.setItem("nombre", jsonUser);

        */
});


back.addEventListener('click',function(){
    window.location.href="video1.html";
    });