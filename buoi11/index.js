// const h1Elm = document.getElementById("h1")
// console.log(h1Elm);
// const h1Elm = document.getElementsByClassName("h1")
// console.log(h1Elm);
// const h1Elm = document.querySelector(h1);
// Kĩ thuật DOM:
// const list = document.getElementsByClassName('text');
// console.log(list);
// const P = document.getElementById('text');
// console.log(P);
//QuerySelector, QuerySelectorAll
// const list = document.querySelector('h1.text');
// console.log(list);
// P.style.color = 'red';
// P.style.backgroundColor = 'yellow';

//innerHTML
// list[0].innerHTML = '<a href="#">Đây là đổi html từ JS</a>';
// list[0].innerText = 'đay'

//Onclick:
let btnClickMe = document.getElementById('btn-clickme');
// console.log(btnClickMe);


// btnClickMe.onclick = function(e){
//     alert('Day la su kien duoc click boi button')
//     console.log(e.target.innerHTML);
// }
// btnClickMe.addEventListener('click', function(e){
//     console.log(e.target.innerHTML);
// })

let form = document.getElementById('form');
form.addEventListener('submit', function(e){
    e.preventDefault();
    console.log(form['email'].value);
    if (form['email'].value === ''){
        alert('ban can nhap email')
    }
})


let toggle = false;
btnClickMe.onclick = function(e){
    const P = document.getElementById('text');
    if (toggle === false) {
        toggle = true;
        P.style.display = 'block'
    } else{
        toggle = false;
        P.style.display = 'none'

    }
    }