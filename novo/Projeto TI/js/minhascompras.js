// minhasCompras.js
async function carregarCompras() {
    const response = await fetch('/compras');
    if (response.ok) {
        const compras = await response.text();
        const listaCompras = document.getElementById('compras-list');
        listaCompras.innerHTML = compras.split('\n').map(compra => `<p>${compra}</p>`).join('');
    }
}

// Carrega as compras ao abrir a página
window.onload = carregarCompras;
