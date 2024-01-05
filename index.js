// Write your code here!
const main = document.getElementById('main');
main.remove();

const body = document.querySelector('body');
body.innerHTML = '<h1 id="victory"></h1>'

const newHeader = document.querySelector('h1');
newHeader.textContent = "Diana is the champion";


// const newHeader = document.createElement('h1');
// document.body.append(newHeader);
// newHeader.id = 'victory';
// newHeader.textContent = 'Diana is the champion';