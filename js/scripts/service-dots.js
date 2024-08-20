"use strict";
function homeAnimateCY(element, start, end, duration, hold) {
    if(!element) return;
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
            setTimeout(() => requestAnimationFrame(animate), hold); // Pause for 1 second before reversing the animation
        }
    }
    requestAnimationFrame(animate);
}
/*-- orange starts here --*/
const hOrangeDot1 = document.querySelector('.h-orange-dot-1');
const hOrangeDot2 = document.querySelector('.h-orange-dot-2');
const hOrangeDot3 = document.querySelector('.h-orange-dot-3');
setTimeout(function(){
    homeAnimateCY(hOrangeDot1, 222.146, 314.146, 800, 2000);
    homeAnimateCY(hOrangeDot2, 25.2232, 92.223, 800, 2000);
    homeAnimateCY(hOrangeDot3, 152.746, 219.746, 800, 2000);
}, 2000);

/*-- pink starts here --*/
const hPinkDot1 = document.querySelector('.h-pink-dot-1');
const hPinkDot2 = document.querySelector('.h-pink-dot-2');
const hPinkDot3 = document.querySelector('.h-pink-dot-3');
setTimeout(function(){
    homeAnimateCY(hPinkDot1, 25.2231, 117.2231, 800, 3000);
    homeAnimateCY(hPinkDot2, 157.205, 224.205, 800, 3000);
    homeAnimateCY(hPinkDot3, 25.3809, 115.3809, 800, 3000);
}, 3000);

/*-- purple starts here --*/
const hPurpleDot1 = document.querySelector('.h-purple-dot-1');
const hPurpleDot2 = document.querySelector('.h-purple-dot-2');
const hPurpleDot3 = document.querySelector('.h-purple-dot-3');
setTimeout(function(){
    homeAnimateCY(hPurpleDot1, 153.891, 245.891, 800, 4000);
    homeAnimateCY(hPurpleDot2, 282.944, 342.944, 800, 4000);
    homeAnimateCY(hPurpleDot3, 90.96, 182.96, 800, 4000);
}, 4000);

/*-- purple starts here --*/
const hBlueDot1 = document.querySelector('.h-blue-dot-1');
const hBlueDot2 = document.querySelector('.h-blue-dot-2');
const hBlueDot3 = document.querySelector('.h-blue-dot-3');
const hBlueDot4 = document.querySelector('.h-blue-dot-4');
const hBlueDot5 = document.querySelector('.h-blue-dot-5');
const hBlueDot6 = document.querySelector('.h-blue-dot-6');
const hBlueDot7 = document.querySelector('.h-blue-dot-7');
const hBlueDot8 = document.querySelector('.h-blue-dot-8');
const hBlueDot9 = document.querySelector('.h-blue-dot-9');
setTimeout(function(){
    homeAnimateCY(hBlueDot1, 90.96, 190.96, 800, 6000);
    homeAnimateCY(hBlueDot2, 25.2231, 116.223, 800, 6000);
    homeAnimateCY(hBlueDot3, 157.047, 250.047, 800, 6000);
    homeAnimateCY(hBlueDot4, 90.8027, 180.8027, 800, 6000);
    homeAnimateCY(hBlueDot5, 152.746, 218.746, 800, 6000);
    homeAnimateCY(hBlueDot6, 91.6027, 181.6027, 800, 6000);
    homeAnimateCY(hBlueDot7, 217.207, 310.207, 800, 6000);
    homeAnimateCY(hBlueDot8, 348.777, 441.777, 800, 6000);
    homeAnimateCY(hBlueDot9, 282.786, 374.786, 800, 6000);
}, 5000)
