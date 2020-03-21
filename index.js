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

/* Portfolio */

const nav = document.getElementById('navigation__2__id');

let pictures = document.getElementById('pictures__id');
let pic = pictures.querySelectorAll('.pic');
let arr = [];
arr.push(pic); console.log(arr);



nav.addEventListener('click', (event)=>{
    nav.querySelectorAll('a').forEach(e=>e.classList.remove('activated'));
    event.target.classList.add('activated');
    shuffle(arr);

}); 
console.log(arr);


function shuffle(arr){
    arr.sort(() => Math.random() - 0.5);
    pic = arr;
}











/* отправка формы */

const button = document.getElementById('btn');
const closeButton = document.getElementById('ok__button');


button.addEventListener('click', ()=>{
    const subject =  document.getElementById('subject').value;
    const description =  document.getElementById('describe').value;
    document.getElementById('result').innerText = 'Subject: ' + subject+ '\n' +'Description: ' + description;
    document.getElementById('message__block').classList.remove('hidden');
});



closeButton.addEventListener('click', ()=>{
    document.getElementById('result').innerText = "";
    document.getElementById('message__block').classList.add('hidden');
});