document.addEventListener("DOMContentLoaded", () => {
    /*-- orange dot starts animation --*/
    const orange1 = document.querySelector(".orange-dot-1");
    const orangec1 = orange1.querySelector("circle");
    const orange2 = document.querySelector(".orange-dot-2");
    const orangec2 = orange2.querySelector("circle");
    const orange3 = document.querySelector(".orange-dot-3");
    const orangec3 = orange3.querySelector("circle");

    // Initial and target positions
    const initialY1 = parseFloat(orangec1.getAttribute("cy"));
    const initialY2 = parseFloat(orangec2.getAttribute("cy"));
    const initialY3 = parseFloat(orangec3.getAttribute("cy"));
    const targetY1 = 313.146;
    const targetY2 = 92.223;
    const targetY3 = 220.746;
    const step1 = 3.5;
    const step2 = 2.5;
    const step3 = 2.5;
    const interval = 10;
    const delay = 1000;

    const animateToTarget = (callback) => {
        let currentY1 = initialY1;
        let currentY2 = initialY2;
        let currentY3 = initialY3;
        let animating = true;

        const animateInterval = setInterval(() => {
            let allReached = true;
            // Move to target position
            if (currentY1 < targetY1) {
                currentY1 += step1;
                if (currentY1 > targetY1) currentY1 = targetY1;
                orangec1.setAttribute("cy", currentY1);
                allReached = false;
            }
            if (currentY2 < targetY2) {
                currentY2 += step2;
                if (currentY2 > targetY2) currentY2 = targetY2;
                orangec2.setAttribute("cy", currentY2);
                allReached = false;
            }
            if (currentY3 < targetY3) {
                currentY3 += step3;
                if (currentY3 > targetY3) currentY3 = targetY3;
                orangec3.setAttribute("cy", currentY3);
                allReached = false;
            }
            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToInitial(callback);
                }, delay);
            }
        }, interval);
    };
    const animateToInitial = (callback) => {
        let currentY1 = targetY1;
        let currentY2 = targetY2;
        let currentY3 = targetY3;

        const animateInterval = setInterval(() => {
            let allReached = true;
            // Move back to initial position
            if (currentY1 > initialY1) {
                currentY1 -= step1;
                if (currentY1 < initialY1) currentY1 = initialY1;
                orangec1.setAttribute("cy", currentY1);
                allReached = false;
            }

            if (currentY2 > initialY2) {
                currentY2 -= step2;
                if (currentY2 < initialY2) currentY2 = initialY2;
                orangec2.setAttribute("cy", currentY2);
                allReached = false;
            }

            if (currentY3 > initialY3) {
                currentY3 -= step3;
                if (currentY3 < initialY3) currentY3 = initialY3;
                orangec3.setAttribute("cy", currentY3);
                allReached = false;
            }

            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToTarget(); // Restart the animation cycle
                }, 2000); // Wait 2 seconds before starting the animation again
            }
        }, interval);
    };
    animateToTarget();
    /*-- orange dot ends animation --*/

    /*-- purple dot starts animation --*/
    const purple1 = document.querySelector(".purple-dot-1");
    const purplec1 = purple1.querySelector("circle");
    const purple2 = document.querySelector(".purple-dot-2");
    const purplec2 = purple2.querySelector("circle");
    const purple3 = document.querySelector(".purple-dot-3");
    const purplec3 = purple3.querySelector("circle");

    const initialPY1 = parseFloat(purplec1.getAttribute("cy"));
    const initialPY2 = parseFloat(purplec2.getAttribute("cy"));
    const initialPY3 = parseFloat(purplec3.getAttribute("cy"));
    const targetPY1 = 245.891;
    const targetPY2 = 190.96;
    const targetPY3 = 340.944;
    const stepP1 = 4;
    const stepP2 = 4;
    const stepP3 = 2.5;
    const pinterval = 10; // Animation interval in milliseconds
    const pdelay = 1000; // Delay in milliseconds

    const animateToTargetPurple = () => {
        let currentPY1 = initialPY1;
        let currentPY2 = initialPY2;
        let currentPY3 = initialPY3;

        const animateInterval = setInterval(() => {
            let allReached = true;

            // Move to target position
            if (currentPY1 < targetPY1) {
                currentPY1 += stepP1;
                if (currentPY1 > targetPY1) currentPY1 = targetPY1;
                purplec1.setAttribute("cy", currentPY1);
                allReached = false;
            }

            if (currentPY2 < targetPY2) {
                currentPY2 += stepP2;
                if (currentPY2 > targetPY2) currentPY2 = targetPY2;
                purplec2.setAttribute("cy", currentPY2);
                allReached = false;
            }

            if (currentPY3 < targetPY3) {
                currentPY3 += stepP3;
                if (currentPY3 > targetPY3) currentPY3 = targetPY3;
                purplec3.setAttribute("cy", currentPY3);
                allReached = false;
            }

            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToInitialPurple();
                }, pdelay);
            }
        }, pinterval);
    };

    const animateToInitialPurple = () => {
        let currentPY1 = targetPY1;
        let currentPY2 = targetPY2;
        let currentPY3 = targetPY3;

        const animateInterval = setInterval(() => {
            let allReached = true;

            // Move back to initial position
            if (currentPY1 > initialPY1) {
                currentPY1 -= stepP1;
                if (currentPY1 < initialPY1) currentPY1 = initialPY1;
                purplec1.setAttribute("cy", currentPY1);
                allReached = false;
            }

            if (currentPY2 > initialPY2) {
                currentPY2 -= stepP2;
                if (currentPY2 < initialPY2) currentPY2 = initialPY2;
                purplec2.setAttribute("cy", currentPY2);
                allReached = false;
            }

            if (currentPY3 > initialPY3) {
                currentPY3 -= stepP3;
                if (currentPY3 < initialPY3) currentPY3 = initialPY3;
                purplec3.setAttribute("cy", currentPY3);
                allReached = false;
            }

            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToTargetPurple(); // Restart the animation cycle after delay
                }, pdelay);
            }
        }, pinterval);
    };
    animateToTargetPurple();
    /*-- purple dot ends animation --*/




    /*-- blut dot starts animation --*/
    const blue1 = document.querySelector(".blue-dot-1");
    const bluec1 = blue1.querySelector("circle");
    const blue2 = document.querySelector(".blue-dot-2");
    const bluec2 = blue2.querySelector("circle");
    const blue3 = document.querySelector(".blue-dot-3");
    const bluec3 = blue3.querySelector("circle");
    const blue4 = document.querySelector(".blue-dot-4");
    const bluec4 = blue4.querySelector("circle");
    const initialBY1 = parseFloat(bluec1.getAttribute("cy"));
    const initialBY2 = parseFloat(bluec2.getAttribute("cy"));
    const initialBY3 = parseFloat(bluec3.getAttribute("cy"));
    const initialBY4 = parseFloat(bluec4.getAttribute("cy"));
    const targetBY1 = 245.891;
    const targetBY2 = 190.96;
    const targetBY3 = 441.777;
    const targetBY4 = 374.786;
    const stepB1 = 4;
    const stepB2 = 4;
    const stepB3 = 2.5;
    const stepB4 = 2.5;
    /*-- blue 3 & 4 --*/
    const animateB3 = () => {
        let currentBY3 = initialBY3;
        let currentBY4 = initialBY3;
        const interval = setInterval(() => {
            let allReached = true;
            if (currentBY3 < targetBY3) {
                currentBY3 += stepB3;
                if (currentBY3 > targetBY3) currentBY3 = targetBY3;
                bluec3.setAttribute("cy", currentBY3);
                allReached = false;
            }
            if (currentBY4 < targetBY4) {
                currentBY4 += stepB4;
                if (currentBY4 > targetBY4) currentBY4 = targetBY4;
                bluec4.setAttribute("cy", currentBY4);
                allReached = false;
            }
            if (allReached) {
                clearInterval(interval);
                setTimeout(animateB3, 5000);
            }
        }, 3);
    };
    animateB3();

    const animateB4 = () => {
        let currentBY4 = initialBY4;
        const interval = setInterval(() => {
            let allReached = true;
            if (currentBY4 < targetBY4) {
                currentBY4 += stepB4;
                if (currentBY4 > targetBY4) currentBY4 = targetBY4;
                bluec4.setAttribute("cy", currentBY4);
                allReached = false;
            }
            if (allReached) {
                clearInterval(interval);
                setTimeout(animateB4, 6000);
            }
        }, 2);
    };
    animateB4();

    /*-- blut dot ends animation --*/



});