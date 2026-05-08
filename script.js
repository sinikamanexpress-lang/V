// ANIMATION DES BOUTONS

const buttons = document.querySelectorAll('.action-btn');

buttons.forEach(button => {

  button.addEventListener('click', () => {

    button.style.transform = 'scale(0.95)';

    setTimeout(() => {
      button.style.transform = 'scale(1)';
    }, 150);

    if (navigator.vibrate) {
      navigator.vibrate(40);
    }

  });

});


// ANIMATION SOLDE

const balance = document.querySelector('.balance-amount');

setInterval(() => {

  balance.style.textShadow = `
    0 0 10px rgba(255,119,0,0.5),
    0 0 20px rgba(255,119,0,0.8)
  `;

  setTimeout(() => {

    balance.style.textShadow = `
      0 0 5px rgba(255,119,0,0.3)
    `;

  }, 500);

}, 1500);
