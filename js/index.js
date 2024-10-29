// Função para exibir a landing page e ocultar o formulário
function mostrarLandingPage() {
    document.getElementById("formModal").style.display = "none";
    document.getElementById("landingPage").style.display = "block";
}

// Verificar se já existem dados no localStorage ao carregar a página
window.onload = function() {
    const nomeSalvo = localStorage.getItem("nome");
    const emailSalvo = localStorage.getItem("email");

    // Se nome e email estão salvos, exibe a landing page diretamente
    if (nomeSalvo && emailSalvo) {
        mostrarLandingPage();
    } else {
        // Caso contrário, mantém o modal do formulário visível
        document.getElementById("formModal").style.display = "flex";
    }
};

// Evento para o envio do formulário
document.getElementById("contatoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    // Captura os valores dos campos de nome e email
    const nome = document.getElementById("nome").value;
    const email = document.getElementById("email").value;

    // Salva os dados no localStorage
    localStorage.setItem("nome", nome);
    localStorage.setItem("email", email);

    // Exibe a landing page e oculta o formulário
    mostrarLandingPage();

    alert("Bem-vindo, " + nome + "!");
});
