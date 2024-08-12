gsap.from("#services", {
    opacity: 0,
    duration: 1,
    scale: 1,
    scrollTrigger: {
        trigger: '.hero',
        scroller: 'body',
        start: "bottom 80%"
    }
})

gsap.from('#services-index-1 img', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services .h2-heading',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-1 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services .h2-heading',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-2 img', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services-index-1',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-2 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services-index-1',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-3 img', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services-index-2',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-3 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services-index-2',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-4 img', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services-index-3',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-4 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services-index-3',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-5 img', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services-index-4',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-5 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services-index-4',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-6 img', {
    opacity: 0,
    duration: 0.8,
    x: 500,
    scrollTrigger: {
        trigger: '#services-index-5',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})

gsap.from('#services-index-6 .service-content', {
    opacity: 0,
    duration: 0.8,
    x: -500,
    scrollTrigger: {
        trigger: '#services-index-5',
        scroller: 'body',
        markers: false,
        start: "bottom 80%"
    }
})