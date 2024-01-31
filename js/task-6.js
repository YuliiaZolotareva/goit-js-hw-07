
function createBoxes(amount) {
  const boxContainer = document.getElementById('boxes');
  const input = document.querySelector('input[type="number"]');
  
  if (input.value >= 1 && input.value <= 100) {
    boxContainer.innerHTML = '';
    
    for (let i = 0; i < amount; i++) {
      const box = document.createElement('div');
      const size = 30 + i * 10;
      box.style.width = `${size}px`;
      box.style.height = `${size}px`;
      box.style.backgroundColor = getRandomHexColor();
      
      boxContainer.appendChild(box);
    }
    
    input.value = '';
  }
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

document.querySelector('button[data-create]').addEventListener('click', () => {
  const input = document.querySelector('input[type="number"]');
  createBoxes(input.value);
});

document.querySelector('button[data-destroy]').addEventListener('click', () => {
  const boxContainer = document.getElementById('boxes');
  boxContainer.innerHTML = '';
});

function destroyBoxes() {
  const boxContainer = document.getElementById('boxes');
  boxContainer.innerHTML = '';
}

document.querySelector('button[data-destroy]').addEventListener('click', destroyBoxes);

