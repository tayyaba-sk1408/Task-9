const galleryImages = document.querySelectorAll(".gallery-item img");
const modal = document.getElementById("imageModal");
const previewImage = document.getElementById("previewImage");
const closeBtn = document.getElementById("closeBtn");

galleryImages.forEach((image) => {
    image.addEventListener("click", () => {
        previewImage.src = image.src;
        previewImage.alt = image.alt;
        modal.classList.add("active");
    });
});

closeBtn.addEventListener("click", () => {
    modal.classList.remove("active");
    previewImage.src = "";
});

modal.addEventListener("click", (event) => {
    if (event.target === modal) {
        modal.classList.remove("active");
        previewImage.src = "";
    }
});

document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
        modal.classList.remove("active");
        previewImage.src = "";
    }
});