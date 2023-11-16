const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');


navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})
function getVal() {
    const val = document.querySelector('input').value;
    console.log(val);
    }
console.log("tole")    