const loginButton = document.body.querySelector('.login-button');
const inputEmail = document.body.querySelector('#email');
const inputPassword = document.body.querySelector('#password');
const agreement = document.getElementById('agreement');
const buttonSubmitForm = document.getElementById('submit-btn');
const counter = document.getElementById('counter');
const textarea= document.getElementById('textarea')

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

function buttonSubmitForms(event) {
    event.preventDefault();
}

buttonSubmitForm.addEventListener('click', buttonSubmitForms);



// 1- pegar o numero de caracteres do text area
console.log(textarea)
console.log(textarea.lenght)

// 2- criar uma função contadora 

// 3- essa função subtrair o numero de caracteres já utilizados de 500

// 4- retornar o número de caracteres restantes 







function replyForm() {
  const inputName = document.getElementById('input-name');
  const inputLastname = document.getElementById('input-lastname');
  const inputEmail = document.getElementById('input-email');
  const house = document.getElementById('house');
  const family = document.getElementsByClassName('family-inputs');
  const matery = document.getElementsByClassName('subject');
  const rate = document.getElementsByClassName('rate-form');
  const obs = document.getElementById('textarea');
  const formReply = {
    'Nome: ' : inputName.value + ' ' + input.inputLastname.value,
    'Email: ' : inputEmail.value,
    'Casa: ' : house.value,
    'Família: ' : family ,
    'Matérias: ' : matery ,
    'Avaliação: ' : rate ,
    'Observações: ' : obs.value ,
    };
}