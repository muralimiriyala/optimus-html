document.addEventListener("DOMContentLoaded", () => {
    const orange1 = document.querySelector(".orange-anim-1");
    const orangec1 = orange1.querySelector("circle");
    let currentY = parseFloat(orangec1.getAttribute("cy"));
    const targetY = 313.146;
    const step = 2.5; // Adjust the step for smoothness and speed
    const interval = 1; // Interval in milliseconds

    const animate = setInterval(() => {
        if (currentY < targetY) {
            currentY += step;
            orangec1.setAttribute("cy", currentY);
        } else {
            clearInterval(animate);
        }
    }, interval);
});