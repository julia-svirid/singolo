/* Навигация */

const MENU = document.getElementById('menu');



MENU.addEventListener('click', (event)=>{
    MENU.querySelectorAll('a').forEach(e=>e.classList.remove('active'));
    event.target.classList.add('active');
});

/* Смена экрана айфона */

const phone = document.getElementById('vertical__iphone');
phone.addEventListener('click', ()=>{
    let black = phone.querySelector('img');
        black.classList.remove('black__vertical');
        black.classList.add('black__vertical__none');

});


const phone__2 = document.getElementById('horisontal__iphone');

phone__2.addEventListener('click', ()=>{
    let black__2 = phone__2.querySelector('.black__horisontal');
    black__2.classList.remove('black__horisontal');
    black__2.classList.add('black__horisontal__none');
})




/* отправка формы */

