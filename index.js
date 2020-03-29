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




/* SLIDER */

const chevL = document.getElementById('chevL');
const chevR = document.getElementById('chevR');

chevL.addEventListener('click', ()=>{
    const slide = document.getElementById('second__slide');
    if (slide.className == 'show'){
        slide.classList.remove('show');
    }
    else {
        slide.classList.add('show');
    }
    
});


chevR.addEventListener('click', ()=>{
    
    const slide = document.getElementById('second__slide');
    if (slide.className == 'show'){
        
        slide.classList.remove('show');
        
    }
    else {
        
        slide.classList.add('show');
    }
    
})






/* Portfolio */

const nav = document.getElementById('navigation__2__id');

let pictures = document.getElementById('pictures__id');
let pic = pictures.querySelectorAll('.pic');



pictures.addEventListener('click', (event)=>{
    pictures.querySelectorAll('.pic').forEach(e=>e.classList.remove('active'));
    event.target.classList.add('active');
});



const picSrc = {
    0: "./assets/singolo2/1.png",
    1: "./assets/singolo2/2.png",
    2: "./assets/singolo2/3.png",
    3: "./assets/singolo2/4.png",
    4: "./assets/singolo2/5.png",
    5: "./assets/singolo2/6.png",
    6: "./assets/singolo2/7.png",
    7: "./assets/singolo2/8.png",
    8: "./assets/singolo2/9.png",
    9: "./assets/singolo2/10.png",
    10: "./assets/singolo2/11.png",
    11: "./assets/singolo2/12.png",
}








nav.addEventListener('click', (event)=>{
    nav.querySelectorAll('a').forEach(e=>e.classList.remove('activated'));
    event.target.classList.add('activated');

    pictures.innerHTML = "";
    let srcArr = [];
    for(let i in picSrc){
        srcArr.push(picSrc[i]);
    };
   
    srcArr.sort(() => Math.random() - 0.5);


    for (let i = 0; i<12; i++){
        picSrc[i] = srcArr[i];
        let picture = document.createElement('img');
        picture.classList.add = 'pic';
        picture.src = picSrc[i];
        pictures.appendChild(picture);
    }
   

}); 





 
/*for (let key in picSrc) {

    let picture = document.createElement('img');
        picture.classList.add = 'pic';
        picture.src = picSrc[+key+1];
        pictures.appendChild(picture);
    }
*/








/* отправка формы */

const button = document.getElementById('btn');
const closeButton = document.getElementById('ok__button');


button.addEventListener('click', ()=>{

    let subject =  document.getElementById('subject').value;
    let description =  document.getElementById('describe').value;
    if (subject == ""){
        subject = 'No subject ';
    } 
    if (description == "") {
        description = 'No description';
    }
    document.getElementById('result').innerText = 'Subject: ' + subject+ '\n' +'Description: ' + description;
    document.getElementById('message__block').classList.remove('hidden');
});



closeButton.addEventListener('click', ()=>{
    document.getElementById('result').innerText = "";
    document.getElementById('message__block').classList.add('hidden');
});



