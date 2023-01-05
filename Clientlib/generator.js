const generateButton = document.getElementById('generate-button');
const pinDisplay = document.getElementById('pin-display');

generateButton.addEventListener('click', () => {
  const pin = Math.floor(Math.random() * 1000000).toString().padStart(6, '0');
  pinDisplay.textContent = pin;
});
