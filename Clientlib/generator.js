const generateButton = document.getElementById('generate-button');
const pinDisplay = document.getElementById('pin-display');

generateButton.addEventListener('click', () => {
  const pin = Math.floor(Math.random() * 10000).toString().padStart(4, '0');
  pinDisplay.textContent = pin;
});
