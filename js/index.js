// Your code goes here

function randomColor() {
    const character = '0123456789ABCDEFGHIJ';
    let color = '#';
    for(let i = 0; i < 6; i++){
        color += character[Math.floor(Math.random() * 20
            )];
    }
    return color;
}
//      click
const pTags = document.querySelectorAll('p');
pTags.forEach(pTags => {
    pTags.addEventListener('click', event => {
        event.preventDefault();
        pTags.style.color = randomColor();
    })
})

//      Mouseover
const aTags = document.querySelectorAll('a');
aTags.forEach((aTags, index ) => {
    aTags.addEventListener('mouseover', event => {
        event.preventDefault();
        aTags.style.fontSize = '2rem';
    });
//      Mouseout
    aTags.addEventListener('mouseout', event => {
        event.preventDefault();
        aTags.style.fontSize = '1.6rem';
    });
});

//      Wheel
let scroll = document.querySelector('.main-navigation');
scroll.addEventListener('wheel', event => {
  event.target.style.backgroundColor = 'yellow';
})
//      Keydown
const outputBox = document.createElement('p');
document.querySelector('body').append(outputBox);
document.addEventListener('keydown', event => {
    outputBox.textContent += `${event.key}`
})

//      Drag and Drop
var dragged;

/* events fired on the draggable target */
pTags.addEventListener("drag", function(event) {}, false);

document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
}, false);

document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
}, false);

/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
}, false);

pTags.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "lightBlue";
  }

}, false);

document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }

}, false);

document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    dragged.parentNode.removeChild( dragged );
    event.target.appendChild( dragged );
  }
}, false);



  






