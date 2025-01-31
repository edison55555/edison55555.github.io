document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll("article img");

    images.forEach((img) => {
        img.addEventListener("click", () => {
            alert("¡Has clicado en una imagen!");
        });
    });

    const titulo = document.getElementById("titulo");
    titulo.addEventListener("mouseenter", () => {
        titulo.style.color = "red";
    });

    titulo.addEventListener("mouseleave", () => {
        titulo.style.color = "white";
    });
});
