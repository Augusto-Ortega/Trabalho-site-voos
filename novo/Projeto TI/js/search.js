document.getElementById('search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Impede o envio do formulário

    // Captura o destino
    const destination = document.getElementById('destination').value;

    // Armazena o destino em localStorage
    localStorage.setItem('destination', destination);
    window.location.href = '../html/results.html'; // Redireciona para a página de resultados
});