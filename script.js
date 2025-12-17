document.addEventListener("DOMContentLoaded", function () {
    const dropdowns = document.querySelectorAll(".dropdown > a");

    dropdowns.forEach(dropdown => {
        dropdown.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior

            let parent = this.parentElement;
            parent.classList.toggle("active");
        });
    });
});
