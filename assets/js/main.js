let formOne = document.querySelector('.tab-one')
let formTwo = document.querySelector('.tab-two')
let formThree = document.querySelector('.tab-three')
let tabOne = document.querySelector('#tab-one')
let tabTwo = document.querySelector('#tab-two')
let tabThree = document.querySelector('#tab-three')

tabOne.addEventListener('click',()=>{
    formOne.style.display = "block";
tabOne.classList.add('active')
    formThree.style.display = "none";
    formTwo.style.display = "none";
    tabTwo.classList.remove('active')
    tabThree.classList.remove('active')
})
tabTwo.addEventListener('click',()=>{
    formOne.style.display = "none";
    formThree.style.display = "none";
    tabTwo.classList.add('active')
    tabOne.classList.remove('active')
    tabThree.classList.remove('active')
    formTwo.style.display = "block";
})
tabThree.addEventListener('click',()=>{
    formOne.style.display = "none";
    formThree.style.display = "block";
    tabThree.classList.add('active');
    tabOne.classList.remove('active');
    tabTwo.classList.remove('active');
    formTwo.style.display = "none";
})