const circles = document.querySelectorAll(".circle");

circles.forEach(circle => {

    circle.addEventListener("mouseenter", () => {
        circle.classList.add("hover");
    });

    circle.addEventListener("mouseleave", () => {
        circle.classList.remove("hover");
    });

});