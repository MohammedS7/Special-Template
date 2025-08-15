// Start Scroll Up Button
const upButton = document.querySelector(".up-btn");

// Display Button
window.addEventListener("scroll", () => {
    if(window.scrollY >= 800) {
        upButton.classList.add("display-btn");
    }
    else {
        upButton.classList.remove("display-btn");
    }
});

// Scroll To Up
function scrollUp() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}
// Start Scroll Up Button
