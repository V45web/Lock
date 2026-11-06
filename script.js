let number = 0
let numtext = document.querySelector('#dot');
let pass = "";

const btn = document.querySelector('#fullscreenBtn');
btn.addEventListener('click', (event) => {
  // Makes the entire <html> page full screen
  document.documentElement.requestFullscreen();
  event.target.style.display = 'none'
});


function dot() {
  if (number < 4) { // counting 
    numtext.children[0].remove() // remove first child 
    
    const newChild = document.createElement('div'); // create new child 
    newChild.innerHTML = '&#9679';
    
    numtext.append(newChild) // add new child at end
    
    number += 1 // counting added
  } else {
    document.body.style.backgroundImage = "url('home.jpg')";
    document.getElementById('unlock').style.display = 'block'
    document.getElementById('unlock').innerText = pass;
    document.getElementById('hi').style.display = 'none'
  }
}

// Select all list items inside .numbers
const listItems = document.querySelectorAll('.numbers li');

listItems.forEach(item => {
  item.addEventListener('click', (event) => {
    const clickedLi = event.target;
    pass += clickedLi.textContent; 
    dot()
  });
});

