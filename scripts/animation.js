window.onload = function() {
    gsap.from("h1", 
                { scaleY: 0, y: 350, duration: 2}
    );
    gsap.from("#img", {duration: 1.5, scale: 1.5, opacity: 0.5});
    gsap.from(".right-footer button, .icons, .left-footer img", {duration: 1.5, scale: 0, opacity: 0.5});
    gsap.from(".right-header p, .left-footer p ",{duration: 2.5,delay:1, opacity: 0})
    
    gsap.from(".content p", {duration: 1.2,delay:0.8, y: -20, opacity: 0})
    gsap.fromTo(".left-footer button", {duration: 2, width: 47, y:80},{width: 47, y:0} )
    gsap.to(".left-footer button", {duration: 1, width: 196, delay:1})

    

    gsap.from("#logo", {y:40, opacity: 0, duration: 1, delay: 1.3})

}