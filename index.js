const MENU = document.getElementById('menu');

MENU.querySelectorAll('a');


MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(e=>e.classList.remove('active'));
    event.target.classList.add('active');
});