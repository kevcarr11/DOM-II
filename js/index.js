// Your code goes here

const home = document.querySelector('a');
home.addEventListener('mouseover', (event) => {
    event.target.style.color = 'yellow';
});
const homeStyle = document.querySelector('a');
homeStyle.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});
const aboutUs = document.querySelector('nav a:nth-child(2)');
aboutUs.addEventListener('mouseover', (event) => {
    event.target.style.color = 'yellow';
});
const aboutUsStyle = document.querySelector('nav a:nth-child(2)');
aboutUsStyle.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});
const blog = document.querySelector('nav a:nth-child(3)');
blog.addEventListener('mouseover', (event) => {
    event.target.style.color = 'yellow';
});
const blogStyle = document.querySelector('nav a:nth-child(3)');
blogStyle.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});
const contact = document.querySelector('nav a:nth-child(4)');
contact.addEventListener('mouseover', (event) => {
    event.target.style.color = 'yellow';
});
const contactStyle = document.querySelector('nav a:nth-child(4)');
contactStyle.addEventListener('mouseout', (event) => {
    event.target.style.color = 'black';
});
const keyPress = document.querySelector('body');
keyPress.addEventListener('keypress', (event) => {
    alert('key was pressed!')
});
let scroll = document.querySelector('html');
scroll.addEventListener('wheel', (event) => {
  event.target.style.backgroundColor = 'yellow'
})

  






