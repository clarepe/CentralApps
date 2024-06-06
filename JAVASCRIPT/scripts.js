document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleMenu');
    const menuLateral = document.getElementById('meunuLateral');

    // Alterna a abertura e fechamento do menu ao clicar no botão
    toggleBtn.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no botão feche imediatamente o menu
        menuLateral.classList.toggle('open');
        toggleBtn.classList.toggle('hidden');
    });

    // Impede que o menu feche ao clicar dentro dele
    menuLateral.addEventListener('click', function(event) {
        event.stopPropagation(); // Impede que o clique no menu feche o menu
    });

    // Fecha o menu ao clicar fora dele
    document.addEventListener('click', function(event) {
        if (menuLateral.classList.contains('open')) {
            menuLateral.classList.remove('open');
            toggleBtn.classList.remove('hidden');
        }
    });
});
