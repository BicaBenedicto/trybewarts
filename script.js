const loginButton = document.body.querySelector('.login-button');
const inputEmail = document.body.querySelector('#email');
const inputPassword = document.body.querySelector('#password');
const agreement = document.getElementById('agreement');
const buttonSubmitForm = document.getElementById('submit-btn');

loginButton.addEventListener('click', () => {
  if (
    inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
});

function changeDisabledButton() {
  if (agreement.checked) {
    buttonSubmitForm.removeAttribute('disabled');
  } else {
    buttonSubmitForm.setAttribute('disabled', true);
  }
}

agreement.addEventListener('click', changeDisabledButton);
