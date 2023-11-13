let inputL = document.querySelector('.input-left');
let inputR = document.querySelector('.input-right');
let btnsL = document.querySelector('.btns-left');
let btnsR = document.querySelector('.btns-right');
// let btns = document.querySelector('.btns');

// btns.addEventListener('click',(e)=>{
//     const clickedBtn = e.target;
//     btns.querySelectorAll('.btn').forEach(otherBtn=>{
//         otherBtn.classList.remove('selected');
//     })
//     clickedBtn.classList.add('selected');
// })

btnsL.addEventListener('click',(e)=>{
    const clickedBtn = e.target;
    btnsL.querySelectorAll('.btn').forEach(otherBtn=>{
        otherBtn.classList.remove('selected');
    })
    clickedBtn.classList.add('selected');
});

btnsR.addEventListener('click',(e)=>{
    const clickedBtn = e.target;
    btnsR.querySelectorAll('.btn').forEach(otherBtn=>{
        otherBtn.classList.remove('selected');
    })
    clickedBtn.classList.add('selected');
});