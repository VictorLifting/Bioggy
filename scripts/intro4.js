const next= document.querySelector('.btn--next');
const back= document.querySelector('.btn--back');

next.addEventListener('click',function(){
window.location.href="video1.html";
});

back.addEventListener('click',function(){
    window.location.href="intro3.html";
    });
        //obtener nombre
  var  nombre = document.querySelector('.name');

  nombre.innerText= localStorage.getItem('nombre');