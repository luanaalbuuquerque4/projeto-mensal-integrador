// Função para verificar se o formulário já foi preenchido
function checkForm() {
    if (localStorage.getItem('formCompleted')) {
        document.getElementById('form-overlay').style.display = 'none';
    } else {
        document.getElementById('form-overlay').style.display = 'flex';
    }
}

// Função para processar o formulário
function submitForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    if (name && email) {
        // Armazenar os dados no Local Storage
        localStorage.setItem('formCompleted', true);
        localStorage.setItem('userName', name);
        localStorage.setItem('userEmail', email);

        // Esconder o formulário e mostrar a página principal
        document.getElementById('form-overlay').style.display = 'none';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

