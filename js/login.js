document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Simulando validação de login (substitua isso pela lógica real de login)
    if (username === 'usuario' && password === 'senha') {
        alert('Login bem-sucedido!');
        // Aqui você pode redirecionar o usuário para outra página
    } else {
        document.getElementById('error-message').textContent = 'Usuário ou senha incorretos.';
    }
});