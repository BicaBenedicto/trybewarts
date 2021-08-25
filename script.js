let loginButton= document.body.querySelector('.login-button')
let inputEmail= document.body.querySelector('#email');
let inputPassword= document.body.querySelector('#password')
loginButton.addEventListener('click', function(){
    if(inputEmail.value === 'tryber@teste.com' && inputPassword.value === '123456'){
      alert('Olá, Tryber!')
    } else{
      alert('Email ou senha inválidos.')}
})


