// JS to handle the transition from welcome screen to full portfolio
const enterButton = document.getElementById('enterBtn');
const welcomeScreen = document.getElementById('welcomeScreen');
const mainPortfolio = document.getElementById('mainPortfolio');

enterButton.addEventListener('click', () => {
  welcomeScreen.style.opacity = '0';
  setTimeout(() => {
    welcomeScreen.style.display = 'none';
    mainPortfolio.style.display = 'block';
    setTimeout(() => {
      mainPortfolio.style.opacity = '1';
    }, 50);
  }, 500);
});
