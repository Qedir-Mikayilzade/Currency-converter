let inputL = document.querySelector('#amountL');
let inputR = document.querySelector('#amountR');
let btnsL = document.querySelector('.btns-left');
let btnsR = document.querySelector('.btns-right');
let btnL = document.querySelectorAll('.btns-left .btn');
let btnR = document.querySelectorAll('.btns-right .btn');
const api = 'https://api.exchangerate.host/live?access_key=f6338752102ad791591c5ae4dd7b66b7'; 
btnL.forEach(otherBtn=>{
        otherBtn.addEventListener('click',(e)=>{
            const clickedBtn = e.target;
                btnsL.querySelectorAll('.btn').forEach(otherBtn=>{
                    otherBtn.classList.remove('selected');
                });
                clickedBtn.classList.add('selected');
                inputL.focus();
            });
        });
        btnR.forEach(otherBtn=>{
            otherBtn.addEventListener('click',(e)=>{
                const clickedBtn = e.target;
                btnsR.querySelectorAll('.btn').forEach(otherBtn=>{
                    otherBtn.classList.remove('selected');
                });
                clickedBtn.classList.add('selected');
                inputR.focus();
    });
});

fetch('http://api.exchangerate.host/convert?access_key=f6338752102ad791591c5ae4dd7b66b7?from=EUR&to=GBP&amount=100')
.then(res=>res.json())
.then(data=>{
    console.log(data);
})