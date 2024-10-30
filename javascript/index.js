// Sempre que a página for carregada, exibe o formulário
window.onload = function() {
    const name = localStorage.getItem("name");
    const email = localStorage.getItem("email");

    // Se já existir nome e email no localStorage, oculta o formulário
    if (name && email) {
        document.getElementById("formModal").style.display = "none";
        document.getElementById("mainContent").style.display = "block";
    } else {
        // Mostra o formulário
        document.getElementById("formModal").style.display = "flex";
    }
};

// Evento para o envio do formulário
document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores dos campos de nome e email
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    // Salva os dados no localStorage
    localStorage.setItem("name", name);
    localStorage.setItem("email", email);

    // Oculta o formulário e exibe o conteúdo principal
    document.getElementById("formModal").style.display = "none";
    document.getElementById("mainContent").style.display = "block";
});
