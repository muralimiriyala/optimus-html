document.addEventListener("DOMContentLoaded", () => {
    /*-- orange dot starts animation --*/
    const orange1 = document.querySelector(".orange-dot-1");
    const orangec1 = orange1.querySelector("circle");
    const orange2 = document.querySelector(".orange-dot-2");
    const orangec2 = orange2.querySelector("circle");
    const orange3 = document.querySelector(".orange-dot-3");
    const orangec3 = orange3.querySelector("circle");
    let currentY1 = parseFloat(orangec1.getAttribute("cy"));
    let currentY2 = parseFloat(orangec2.getAttribute("cy"));
    let currentY3 = parseFloat(orangec3.getAttribute("cy"));
    const targetY1 = 313.146;
    const targetY2 = 92.223;
    const targetY3 = 220.746;
    const step1 = 3.5;
    const step2 = 2.5;
    const step3 = 2.5;
    const interval = 1; 
    const animate = setInterval(() => {
        if (currentY1 < targetY1 && currentY2 < targetY2 && currentY3 < targetY3 ) {
            currentY1 += step1;
            currentY2 += step2;
            currentY3 += step3;
            orangec1.setAttribute("cy", currentY1);
            orangec2.setAttribute("cy", currentY2);
            orangec3.setAttribute("cy", currentY3);
        } else {
            clearInterval(animate);
        }
    }, interval);
    /*-- orange dot ends animation --*/

    /*-- purple dot starts animation --*/
    const purple1 = document.querySelector(".orange-dot-1");
    const purplec1 = purple1.querySelector("circle");
    const purple2 = document.querySelector(".orange-dot-2");
    const purplec2 = purple2.querySelector("circle");
    const purple3 = document.querySelector(".orange-dot-3");
    const purplec3 = purple3.querySelector("circle");
    let currentPY1 = parseFloat(purplec1.getAttribute("cy"));
    let currentPY2 = parseFloat(purplec2.getAttribute("cy"));
    let currentPY3 = parseFloat(purplec3.getAttribute("cy"));
    const targetPY1 = 313.146;
    const targetPY2 = 92.223;
    const targetPY3 = 220.746;
    const stepP1 = 3.5;
    const stepP2 = 2.5;
    const stepP3 = 2.5;
    const intervalP = 1; 
    const animateP = setInterval(() => {
        if (currentPY1 < targetPY1 && currentPY2 < targetPY2 && currentPY3 < targetPY3 ) {
            currentPY1 += stepP1;
            currentPY2 += stepP2;
            currentPY3 += stepP3;
            purplec1.setAttribute("cy", currentPY1);
            purplec2.setAttribute("cy", currentPY2);
            purplec3.setAttribute("cy", currentPY3);
        } else {
            clearInterval(animateP);
        }
    }, intervalP);  
    /*-- purple dot ends animation --*/




});