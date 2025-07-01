function redirect(event) {
    event.preventDefault();

    // Pega o id do elemento do link (href="#id")
    let id_element = event.target.getAttribute("href");
    if (!id_element || !id_element.startsWith("#")) return;

    id_element = id_element.slice(1); // Remove o "#" do id

    const targetElement = document.getElementById(id_element);
    const navbar = document.querySelector('.navbar__container');

    if (targetElement && navbar) {
        const navbarHeight = navbar.offsetHeight;

        // Calcula a posição do elemento no documento (com compensação da navbar)
        const targetElementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const scrollToPosition = targetElementPosition - navbarHeight;

        // Scroll suave
        window.scrollTo({
            top: scrollToPosition,
            behavior: "smooth"
        });

        // Atualiza o título da aba
        const title = document.querySelector("title");
        let formattedText = id_element.charAt(0).toUpperCase() + id_element.slice(1);

        title.innerText = id_element === "intro"
            ? "Portfolio - João Gabriel"
            : `Portfolio - João Gabriel - ${formattedText}`;
    }
}
