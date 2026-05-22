const form = document.getElementById('loginForm');
const message = document.getElementById('message');

form.addEventListener('submit', function(e) {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  if(email === 'admin@email.com' && password === '123456') {
    message.textContent = 'Login realizado com sucesso!';
  } else {
    message.textContent = 'Email ou senha inválidos';
  }
});