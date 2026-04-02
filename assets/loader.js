// Loader for modular HTML structure
document.addEventListener("DOMContentLoaded", () => {
    const includes = document.querySelectorAll("[data-include]");

    includes.forEach(el => {
        const file = el.getAttribute("data-include");
        fetch(file)
            .then(response => response.text())
            .then(data => {
                el.innerHTML = data;
            })
            .catch(err => {
                el.innerHTML = "<p>Kunne ikke laste modul.</p>";
                console.error("Include error:", err);
            });
    });
});
