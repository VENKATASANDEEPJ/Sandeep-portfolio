// Handle Welcome Screen Button
const enterBtn = document.getElementById('enterBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const portfolio = document.getElementById('portfolio');

enterBtn.addEventListener('click', () => {
  welcomeScreen.style.display = 'none';
  portfolio.classList.remove('hidden');
  portfolio.classList.add('show');
});
