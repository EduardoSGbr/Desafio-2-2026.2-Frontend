document.addEventListener('DOMContentLoaded', () => {
    // Seleciona o botão hamburguer e o menu de navegação
    const btnMenu = document.querySelector('button.md\\:hidden');
    const menu = document.querySelector('nav');

    // Adiciona o evento de clique ao botão
    btnMenu.addEventListener('click', () => {
        // Alterna a visibilidade do menu (mostra/esconde)
        menu.classList.toggle('hidden');
        
        // Adiciona as classes para formatar o menu no formato lista (mobile)
        menu.classList.toggle('flex-col');
        menu.classList.toggle('absolute');
        menu.classList.toggle('top-20');
        menu.classList.toggle('left-0');
        menu.classList.toggle('w-full');
        menu.classList.toggle('bg-brand-black');
        menu.classList.toggle('p-6');
        menu.classList.toggle('z-50');
        menu.classList.toggle('border-b-2');
        menu.classList.toggle('border-blue-500');
    });

    // Fecha o menu automaticamente quando se clica num link (útil para navegação)
    const links = menu.querySelectorAll('a');
    links.forEach(link => {
        link.addEventListener('click', () => {
            if (!menu.classList.contains('hidden') && window.innerWidth < 768) {
                btnMenu.click();
            }
        });
    });
});