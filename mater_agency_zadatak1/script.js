document.addEventListener("DOMContentLoaded", () => {
    let body = document.querySelector('body'); 

    // Lenis smooth scroll
    const lenis = new Lenis({
        autoRaf: true,
    });
    
    // Swiper init
    const heroSwiper = new Swiper(".swiper-hero", {
        slidesPerView: 1,
        spaceBetween: 0,
        loop: true,
        pagination: {
            el: ".swiper-hero .swiper-pagination",
            clickable: true,
        },        
        effect: "fade",
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 2500,
    });

    const lastMinuteSwiper = new Swiper(".swiper-last-minute", {
        slidesPerView: 1,
        slidesPerGroup: 1,
        spaceBetween: 40,
        loop: true,
        pagination: {
            el: ".swiper-last-minute .swiper-pagination",
            clickable: true,
        },        
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
        speed: 1000,
        breakpoints: {
            768: {
                slidesPerView: 2,
                slidesPerGroup: 2,
            },
            1200: {
                slidesPerView: 3,
                slidesPerGroup: 3,
            },
        },
    });    

    // Preloader animation
    const preloaderTimeline = gsap.timeline();

    gsap.set('#logoMask g', {
        scale: .1,
        transformOrigin: "center center",
    });
    

    preloaderTimeline.to('#logoMask g', {
        duration: 5,
        delay: 1,
        ease: "expo.inOut",
        transformOrigin: "center center",
        scale: 1000,
    }).to('.preloader-wrapper', {
        duration: 2,
        ease: "expo.inOut",
        backgroundColor: "rgba(0, 0, 0, 0)",
        onStart: () => {
            body.classList.add('scrollable');     
        },
        onComplete: () => {
            document.querySelector('.preloader-wrapper').remove();
        }        
    }, "-=4.5");

    // Mobile menu

    let navMenu = document.querySelector('.nav-menu-wrapper .nav-menu');
    let navMenuBackdrop = document.querySelector('.nav-menu-wrapper .nav-backdrop');
    let navMenuButton = document.querySelector('.nav-menu-wrapper .hamburger');

    navMenuButton.addEventListener('click', function() {
        if(navMenuButton.classList.contains('is-active')) {
            navMenuButton.classList.remove('is-active');
            
            gsap.to(navMenu, {
                duration: 1,            
                ease: "expo.inOut",
                x: "100%", 
            });

            gsap.to(navMenuBackdrop, {
                duration: 1,
                ease: "expo.inOut",
                width: "100%",
            });

            body.style.overflow = "auto";
        } else {
            navMenuButton.classList.add('is-active');
            
            gsap.to(navMenu, {
                duration: 1,            
                ease: "expo.inOut",
                x: 0, 
            });

            gsap.to(navMenuBackdrop, {
                duration: 1,
                ease: "expo.inOut",
                width: "200%",
            });

            body.style.overflow = "hidden";
        }        
    });

    navMenuBackdrop.addEventListener('click', function() {
        navMenuButton.classList.remove('is-active');
            
        gsap.to(navMenu, {
            duration: 1,            
            ease: "expo.inOut",
            x: "100%", 
        });

        gsap.to(navMenuBackdrop, {
            duration: 1,
            ease: "expo.inOut",
            width: "100%",
        });

        body.style.overflow = "auto";
    });
});