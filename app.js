const navres = () =>{


    const burger= document.querySelector('.burger');
    const list= document.querySelector('.nav-list');

    burger.addEventListener('click', ()=>{
        list.classList.toggle('nav-active');

        burger.classList.toggle('navclose');
    });

}
navres();