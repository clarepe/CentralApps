 

 document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('toggleMenu');
    const menuLateral = document.getElementById('meunuLateral');

    toggleBtn.addEventListener('click', function() {
        menuLateral.classList.toggle('open');
        toggleBtn.classList.toggle('hidden');
    });

    menuLateral.addEventListener('click', function() {
        if (menuLateral.classList.contains('open')) {
            menuLateral.classList.remove('open');
            toggleBtn.classList.remove('hidden');
        }
    });
});

