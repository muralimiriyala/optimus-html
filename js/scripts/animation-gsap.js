var DrawSVGPlugin = DrawSVGPlugin || window.DrawSVGPlugin 
var CountUp = CountUp || window.CountUp 

gsap.registerPlugin(DrawSVGPlugin)
function getRandomInt(min, max) { return Math.random() * (max - min) + min; }


const $quoteicon = jQuery(".quote-icon");
$quoteicon.each(function(){
    var $self = jQuery(this)
    var $qpath = $self.find('svg path');
    var tl = gsap.timeline({ paused: true })
    tl.fromTo($qpath[0], {opacity: '0', }, {opacity: '1', duration: 2, ease: 'power1.out'}, 'start')
    tl.fromTo($qpath[2], { scale: '0', opacity: '0', }, {scale: '1', opacity: '1', duration: 0.75, ease: 'power1.out'}, 'start')
    tl.fromTo($qpath[3], { scale: '0', opacity: '0', }, {scale: '1', opacity: '1', duration: 0.75, ease: 'power1.out'}, 'start')
    $self[0].tl = tl;
})
