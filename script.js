// Seleciona todos os links dos produtos
const productLinks = document.querySelectorAll('.product-link');

// Adiciona um evento de clique a cada link
productLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        event.preventDefault();  // Evita o comportamento padrão de navegação
        // Simulando redirecionamento para uma página de vendas que não existe ainda
        const productPage = `/venda-quadro${index + 1}.html`;
        window.location.href = productPage;
        console.log(`Redirecionando para: ${productPage}`);
    });
});
