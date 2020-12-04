var tarjets = document.querySelectorAll('.tarjet');
tarjets [0].addEventListener('click', function(){

   window.location.href = "intro1.html";
    
});

    //obtener nombre
    var  nombre = document.querySelector('.name');

    nombre.innerText= localStorage.getItem('nombre');