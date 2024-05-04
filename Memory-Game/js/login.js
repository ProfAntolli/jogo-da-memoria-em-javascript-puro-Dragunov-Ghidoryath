const input = document.querySelector('.login_input');
const button = document.querySelector('.login_button');
const form = document.querySelector('.login-form');

const validateInput = ({ target }) => {
  console.log("Input event triggered:", target.value); // Para verificar o valor do input em tempo real
  if (target.value.length > 3) {
    console.log("Button should be enabled");
    button.removeAttribute('disabled');
  } else {
    console.log("Button should be disabled");
    button.setAttribute('disabled', '');
  }
}

const handleSubmit = (event) => {
  event.preventDefault();

  localStorage.setItem('player', input.value);
  window.location = 'pages/game.html';
}

input.addEventListener('input', validateInput);
form.addEventListener('submit', handleSubmit);