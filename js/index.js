// Your code goes here
let navLinks = document.querySelectorAll('.nav-link');
navLinks.forEach(item => 
    item.addEventListener('mouseover', event => 
    event.target.style.color = 'red'));

navLinks.forEach(item => 
    item.addEventListener('mouseout', event => 
    event.target.style.color = 'blue'));

let headings = document.querySelectorAll('h2');
headings.forEach(item =>
    item.addEventListener("click", event =>
    event.target.style.fontSize = '5rem'));

headings.forEach(item =>
    item.addEventListener("dblclick", event =>
    event.target.style.fontSize = '3.2rem'));

let container = document.querySelector('body');
window.addEventListener("scroll", event =>
    container.style.backgroundColor = 'yellow');

window.addEventListener("resize", event =>
    headings.forEach(item =>
        item.style.color = 'green'));