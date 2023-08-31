document.getElementById('registrationForm').addEventListener('submit', function(event) {
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    if (username === '' || email === '' || password === '' || confirmPassword === '') {
      alert('Por favor, preencha todos os campos.');
      event.preventDefault(); // Impede o envio do formulário vazio
    } else if (password !== confirmPassword) {
      alert('As senhas não coincidem.');
      event.preventDefault();
    } else {
      // Aqui você pode adicionar a lógica para autenticar o usuário
      // Pode ser uma chamada para um servidor ou outra forma de autenticação
      alert('Usuário cadastrado com sucesso!');
    }
  });