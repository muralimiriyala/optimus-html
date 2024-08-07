"use strict";

function animateCY1(element, start, end, duration) {
    let startTime = null;
    let forward = true;

    function animate(time) {
        if (!startTime) startTime = time;
        const progress = time - startTime;
        const normalizedProgress = Math.min(progress / duration, 1);
        const cyValue = forward 
            ? start + (end - start) * normalizedProgress 
            : end - (end - start) * normalizedProgress;

        element.setAttribute('cy', cyValue);

        if (progress < duration) {
            requestAnimationFrame(animate);
        } else {
            // Reverse direction and reset start time
            forward = !forward;
            startTime = null;
            setTimeout(() => requestAnimationFrame(animate), 1000); // Pause for 1 second before reversing the animation
        }
    }

    requestAnimationFrame(animate);
}

const blueDot1 = document.querySelector('.t-b-dot-1');
const blueDot2 = document.querySelector('.t-b-dot-2');
const blueDot3 = document.querySelector('.t-b-dot-3');
const blueDot4 = document.querySelector('.t-b-dot-4');
const blueDot5 = document.querySelector('.t-b-dot-5');
const blueDot6 = document.querySelector('.t-b-dot-6');
const blueDot7 = document.querySelector('.t-b-dot-7');
const blueDot8 = document.querySelector('.t-b-dot-8');
const blueDot9 = document.querySelector('.t-b-dot-9');
const blueDot10 = document.querySelector('.t-b-dot-10');

animateCY(blueDot1, 140.023, 208.023, 1000);
animateCY(blueDot2, 197.439, 277.439, 1000);
animateCY(blueDot3, 197.603, 288.603, 1000);
animateCY(blueDot4, 26.0229, 118.0229, 1000);
animateCY(blueDot5, 148.548, 228.548, 1000);
animateCY(blueDot6, 91.6027, 181.6027, 1000);
animateCY(blueDot7, 153.546, 218.546, 1000);
animateCY(blueDot8, 153.546, 118.546, 1000);
animateCY(blueDot9, 283.586, 374.586, 1000);
animateCY(blueDot10, 349.577, 440.577, 1000);



const pinkDot1 = document.querySelector('.t-p-dot-1');
const pinkDot2 = document.querySelector('.t-p-dot-2');
const pinkDot3 = document.querySelector('.t-p-dot-3');
const pinkDot4 = document.querySelector('.t-p-dot-4');
const pinkDot5 = document.querySelector('.t-p-dot-5');
const pinkDot6 = document.querySelector('.t-p-dot-6');


animateCY(pinkDot1, 117.185, 206.185, 1000);
animateCY(pinkDot2, 81.023, 126.023, 1000);
animateCY(pinkDot3, 252.054, 320.054, 1000);
animateCY(pinkDot4, 252.054, 322.054, 1000);
animateCY(pinkDot5, 374.635, 181.6027, 1000);
animateCY(pinkDot6, 26.1804, 110.1804, 1000);

const purpleDot1 = document.querySelector('.t-purple-dot-1');
const purpleDot2 = document.querySelector('.t-purple-dot-2');
const purpleDot3 = document.querySelector('.t-purple-dot-3');
const purpleDot4 = document.querySelector('.t-purple-dot-4');
const purpleDot5 = document.querySelector('.t-purple-dot-5');
const purpleDot6 = document.querySelector('.t-purple-dot-6');


animateCY(purpleDot1, 308.84, 399.84, 1000);
animateCY(purpleDot2, 195.635, 252.635, 1000);
animateCY(purpleDot3, 154.691, 210.691, 1000);
animateCY(purpleDot4, 91.7602, 180.76, 1000);
animateCY(purpleDot5, 91.6027, 181.6027, 1000);
animateCY(purpleDot6, 323.641, 380.641, 1000);