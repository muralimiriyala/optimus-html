

gsap.registerPlugin(ScrollTrigger);
const $animation_elements = jQuery('[data-animation]');
$animation_elements.each(function(){
    const $self = jQuery(this);
    const animation = $self.data('animation');
    const delay = $self.data('animation-delay');
    const timeline = $self[0].tl
    const counter = $self[0].counter

    gsap.to($self, {
        scrollTrigger: {
            trigger: $self,
            start: 'top 90%',
            end: 'top 10%', 
            toggleActions: "play none none none",
            // markers: true, 
            onEnter: function(){
              $self.addClass(animation).addClass('visible');
              if (timeline) {
                  timeline.play();
                }   
            },
            onLeave: function(){
              if (timeline && timeline.progress() > 0) {
                timeline.progress(0);
                timeline.pause(); 
              }
              if (counter) {
                counter.reset();
              }
            },
            onEnterBack: function(){
              if(timeline) {
                timeline.restart(); // Restart the timeline when scrolling back into view
              } 
            }
        },
        ease: 'power1.inOut',
    });
});