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
// 1      click
const pTags = document.querySelectorAll('p');
pTags.forEach(pTags => {
    pTags.addEventListener('click', event => {
        event.preventDefault();
        pTags.style.color = randomColor();
    })
})
// 2    dblclick
const funBus = document.querySelector('h1');
funBus.addEventListener('dblclick', event => {
    event.preventDefault();
    funBus.textContent = 'Magic School Bus'
    event.target.style.color = 'yellow';
})
// 3     Mouseover
const aTags = document.querySelectorAll('a');
aTags.forEach((aTags, index ) => {
    aTags.addEventListener('mouseover', event => {
        event.preventDefault();
        aTags.style.fontSize = '2rem';
    });
// 4     Mouseout
    aTags.addEventListener('mouseout', event => {
        event.preventDefault();
        aTags.style.fontSize = '1.6rem';
    });
});
// 5     Wheel

let scroll = document.querySelector('.main-navigation');
scroll.addEventListener('wheel', event => {
  event.target.style.backgroundColor = randomColor();
})
// 6     Keydown

const outputBox = document.createElement('p');
document.querySelector('body').append(outputBox);
document.addEventListener('keydown', event => {
    outputBox.textContent += `${event.key}`
})
// 7     Drag and Drop all p tags on page

let dragged;
pTags.forEach(pTag => {
    pTag.draggable = true;
    pTag.classList.add('dropzone')
})
/* events fired on the draggable target */
document.addEventListener("drag", function(event) {}, false);
document.addEventListener("dragstart", function(event) {
  // store a ref. on the dragged elem
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
});
document.addEventListener("dragend", function(event) {
  // reset the transparency
  event.target.style.opacity = "";
});
/* events fired on the drop targets */
document.addEventListener("dragover", function(event) {
  // prevent default to allow drop
  event.preventDefault();
});
document.addEventListener("dragenter", function(event) {
  // highlight potential drop target when the draggable element enters it
  if (event.target.className == "dropzone") {
    event.target.style.background = "lightBlue";
  }
});
document.addEventListener("dragleave", function(event) {
  // reset background of potential drop target when the draggable element leaves it
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
  }
});
document.addEventListener("drop", function(event) {
  // prevent default action (open as link for some elements)
  event.preventDefault();
  // move dragged elem to the selected drop target
  if (event.target.className == "dropzone") {
    event.target.style.background = "";
    let temp = dragged.textContent 
    dragged.textContent = event.target.textContent;
    event.target.textContent = temp;
  }
});

// 8     Focus
const password = document.querySelector('input[type="password"]');
password.addEventListener('focus', (event) => {
  event.target.style.background = 'pink';    
});

// 9     Blur
password.addEventListener('blur', (event) => {
  event.target.style.background = '';    
});

// 10    Scroll

const pics = document.querySelectorAll('img');
let blur = 0;
let lastKnownPosition = 0;
let ticking = false;

window.addEventListener('scroll', event => {
    if(lastKnownPosition < window.scrollY){
        blur += 1
    }
    else if(lastKnownPosition > window.scrollY){
        blur -= 1
    }
    lastKnownPosition = window.scrollY;
    pics.forEach(pic => pic.style.filter = `blur(${blur}px)`);

    if (!ticking) {
        window.requestAnimationFrame(function() {
            ticking = false;
        });
        ticking = true;
    }
});
  






