document.addEventListener("DOMContentLoaded", function () {
    const images = document.querySelectorAll(".gallery img");
    const lightbox = document.createElement("div");
    lightbox.classList.add("lightbox");
    document.body.appendChild(lightbox);

    const lightboxImg = document.createElement("img");
    lightbox.appendChild(lightboxImg);

    images.forEach(img => {
        img.addEventListener("click", () => {
            lightboxImg.src = img.src;
            lightbox.classList.add("show");
        });
    });

    lightbox.addEventListener("click", () => {
        lightbox.classList.remove("show");
    });
});
