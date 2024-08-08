"use strict";

document.addEventListener("DOMContentLoaded", () => {
    /*-- orange dot starts animation --*/
    const orange1 = document.querySelector(".orange-dot-1");
    const orange2 = document.querySelector(".orange-dot-2");
    const orange3 = document.querySelector(".orange-dot-3");
    
    if (!orange1 || !orange2 || !orange3) {
        return;
    }
    const orangec1 = orange1.querySelector("circle");
    const orangec2 = orange2.querySelector("circle");
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

    /*-- blue dot starts animation --*/
    const blue1 = document.querySelector(".blue-dot-1");
    const bluec1 = blue1.querySelector("circle");
    const blue2 = document.querySelector(".blue-dot-2");
    const bluec2 = blue2.querySelector("circle");
    const blue3 = document.querySelector(".blue-dot-3");
    const bluec3 = blue3.querySelector("circle");
    const blue4 = document.querySelector(".blue-dot-4");
    const bluec4 = blue4.querySelector("circle");
    const blue5 = document.querySelector(".blue-dot-5");
    const bluec5 = blue5.querySelector("circle");
    const blue6 = document.querySelector(".blue-dot-6");
    const bluec6 = blue6.querySelector("circle");

    // Initial and target positions
    const initialBY1 = parseFloat(bluec1.getAttribute("cy"));
    const initialBY2 = parseFloat(bluec2.getAttribute("cy"));
    const initialBY3 = parseFloat(bluec3.getAttribute("cy"));
    const initialBY4 = parseFloat(bluec4.getAttribute("cy"));
    const initialBY5 = parseFloat(bluec5.getAttribute("cy"));
    const initialBY6 = parseFloat(bluec6.getAttribute("cy"));
    const targetBY1 = 190.8027;
    const targetBY2 = 252.047;
    const targetBY3 = 441.777;
    const targetBY4 = 374.786;
    const targetBY5 = 218.746;
    const targetBY6 = 222.746;
    const stepB1 = 4;
    const stepB2 = 4;
    const stepB3 = 2.5;
    const stepB4 = 2.5;
    const stepB5 = 2.5;
    const stepB6 = 2.5;
    const blueinterval = 10; // Animation blueinterval in milliseconds
    const bluedelay = 2000; // Delay in milliseconds

    // Animation to target function
    const animateToTargetBlue = (callback) => {
        let currentBY1 = initialBY1;
        let currentBY2 = initialBY2;
        let currentBY3 = initialBY3;
        let currentBY4 = initialBY4;
        let currentBY5 = initialBY5;
        let currentBY6 = initialBY6;

        const animateInterval = setInterval(() => {
            let allReached = true;

            // Move to target position
            if (currentBY1 < targetBY1) {
                currentBY1 += stepB1;
                if (currentBY1 > targetBY1) currentBY1 = targetBY1;
                bluec1.setAttribute("cy", currentBY1);
                allReached = false;
            }

            if (currentBY2 < targetBY2) {
                currentBY2 += stepB2;
                if (currentBY2 > targetBY2) currentBY2 = targetBY2;
                bluec2.setAttribute("cy", currentBY2);
                allReached = false;
            }

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

            if (currentBY5 < targetBY5) {
                currentBY5 += stepB5;
                if (currentBY5 > targetBY5) currentBY5 = targetBY5;
                bluec5.setAttribute("cy", currentBY5);
                allReached = false;
            }

            if (currentBY6 < targetBY6) {
                currentBY6 += stepB6;
                if (currentBY6 > targetBY6) currentBY6 = targetBY6;
                bluec6.setAttribute("cy", currentBY6);
                allReached = false;
            }

            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToInitialBlue(callback);
                }, bluedelay);
            }
        }, blueinterval);
    };

    // Animation to initial function
    const animateToInitialBlue = (callback) => {
        let currentBY1 = targetBY1;
        let currentBY2 = targetBY2;
        let currentBY3 = targetBY3;
        let currentBY4 = targetBY4;
        let currentBY5 = targetBY5;
        let currentBY6 = targetBY6;

        const animateInterval = setInterval(() => {
            let allReached = true;

            // Move back to initial position
            if (currentBY1 > initialBY1) {
                currentBY1 -= stepB1;
                if (currentBY1 < initialBY1) currentBY1 = initialBY1;
                bluec1.setAttribute("cy", currentBY1);
                allReached = false;
            }

            if (currentBY2 > initialBY2) {
                currentBY2 -= stepB2;
                if (currentBY2 < initialBY2) currentBY2 = initialBY2;
                bluec2.setAttribute("cy", currentBY2);
                allReached = false;
            }

            if (currentBY3 > initialBY3) {
                currentBY3 -= stepB3;
                if (currentBY3 < initialBY3) currentBY3 = initialBY3;
                bluec3.setAttribute("cy", currentBY3);
                allReached = false;
            }

            if (currentBY4 > initialBY4) {
                currentBY4 -= stepB4;
                if (currentBY4 < initialBY4) currentBY4 = initialBY4;
                bluec4.setAttribute("cy", currentBY4);
                allReached = false;
            }

            if (currentBY5 > initialBY5) {
                currentBY5 -= stepB5;
                if (currentBY5 < initialBY5) currentBY5 = initialBY5;
                bluec5.setAttribute("cy", currentBY5);
                allReached = false;
            }

            if (currentBY6 > initialBY6) {
                currentBY6 -= stepB6;
                if (currentBY6 < initialBY6) currentBY6 = initialBY6;
                bluec6.setAttribute("cy", currentBY6);
                allReached = false;
            }

            if (allReached) {
                clearInterval(animateInterval);
                setTimeout(() => {
                    animateToTargetBlue(callback); // Restart the animation cycle
                }, bluedelay);
            }
        }, blueinterval);
    };
    animateToTargetBlue();
    /*-- blue dot ends animation --*/


    /*-- pink dot starts animation --*/
    const pink1 = document.querySelector(".pink-dot-1");
    const pinkc1 = pink1.querySelector("circle");
    const pink2 = document.querySelector(".pink-dot-2");
    const pinkc2 = pink2.querySelector("circle");
    const pink3 = document.querySelector(".pink-dot-3");
    const pinkc3 = pink3.querySelector("circle");

    // Initial and target positions
    const initialPinkY1 = parseFloat(pinkc1.getAttribute("cy"));
    const initialPinkY2 = parseFloat(pinkc2.getAttribute("cy"));
    const initialPinkY3 = parseFloat(pinkc3.getAttribute("cy"));
    const targetPinkY1 = 313.146;
    const targetPinkY2 = 223.205;
    const targetPinkY3 = 220.746;
    const stepPink1 = 3.5;
    const stepPink2 = 2.5;
    const stepPink3 = 2.5;
    const stepPinkInterval = 10;
    const stepPinkDelay = 1000;

    const animateToPinkMain = (callback) => {
    let currentY1 = initialPinkY1;
    let currentY2 = initialPinkY2;
    let currentY3 = initialPinkY3;
    let animating = true;

    const animateToPinkTarget = setInterval(() => {
        let allReached = true;
        // Move to target position
        if (currentY1 < targetPinkY1) {
            currentY1 += stepPink1;
            if (currentY1 > targetPinkY1) currentY1 = targetPinkY1;
            pinkc1.setAttribute("cy", currentY1);
            allReached = false;
        }
        if (currentY2 < targetPinkY2) {
            currentY2 += stepPink2;
            if (currentY2 > targetPinkY2) currentY2 = targetPinkY2;
            pinkc2.setAttribute("cy", currentY2);
            allReached = false;
        }
        if (currentY3 < targetPinkY3) {
            currentY3 += stepPink3;
            if (currentY3 > targetPinkY3) currentY3 = targetPinkY3;
            pinkc3.setAttribute("cy", currentY3);
            allReached = false;
        }
        if (allReached) {
            clearInterval(animateToPinkTarget);
            setTimeout(() => {
                animateToPinkIntial(callback);
            }, stepPinkDelay);
        }
    }, stepPinkInterval);
    };
    const animateToPinkIntial = (callback) => {
    let currentY1 = targetPinkY1;
    let currentY2 = targetPinkY2;
    let currentY3 = targetPinkY3;

    const animateToPinkTarget = setInterval(() => {
        let allReached = true;
        // Move back to initial position
        if (currentY1 > initialPinkY1) {
            currentY1 -= stepPink1;
            if (currentY1 < initialPinkY1) currentY1 = initialPinkY1;
            pinkc1.setAttribute("cy", currentY1);
            allReached = false;
        }

        if (currentY2 > initialPinkY2) {
            currentY2 -= stepPink2;
            if (currentY2 < initialPinkY2) currentY2 = initialPinkY2;
            pinkc2.setAttribute("cy", currentY2);
            allReached = false;
        }

        if (currentY3 > initialPinkY3) {
            currentY3 -= stepPink3;
            if (currentY3 < initialPinkY3) currentY3 = initialPinkY3;
            pinkc3.setAttribute("cy", currentY3);
            allReached = false;
        }

        if (allReached) {
            clearInterval(animateToPinkTarget);
            setTimeout(() => {
                animateToPinkMain(); // Restart the animation cycle
            }, 2000); // Wait 2 seconds before starting the animation again
        }
    }, stepPinkInterval);
    };
    animateToPinkMain();
    /*-- pink dot ends animation --*/



});