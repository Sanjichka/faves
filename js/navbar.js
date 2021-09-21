const navSlide = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('#nr');
    const navLinks = document.querySelectorAll('#navlista li');

    burger.addEventListener('click', ()=>{
        //Toggle Nav
        nav.classList.toggle('nav-active');

        //Burger Animation
        burger.classList.toggle('toggle');
    });

    
}

navSlide();