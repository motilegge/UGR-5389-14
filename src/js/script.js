document.addEventListener('DOMContentLoaded', function () {
    // Animation for the "About Me" section
    const aboutMeAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.about-me',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    aboutMeAnimation.from('.about-me__image', { opacity: 0, x: -100, duration: 0.5 });
  
    // Animation for the "Featured Projects" section
    const featuredProjectsAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.featured-projects',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    featuredProjectsAnimation.from('.featured-projects__image', { opacity: 0, x: 100, duration: 0.5 });
  
    // Animation for the "Skills and Expertise" section
    const skillsAndExpertiseAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.skills-and-expertise',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    skillsAndExpertiseAnimation.from('.skills-and-expertise__image', { opacity: 0, x: -100, duration: 0.5 });
  
    // Animation for the "Contact Form" section
    const contactFormAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.contact-form',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    contactFormAnimation.from('.contact-form__element', { opacity: 0, y: 50, duration: 0.5 });
  
    // Animation for the "Direct Contact" section
    const directContactAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.direct-contact',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    directContactAnimation.from('.direct-contact__element', { opacity: 0, y: 50, duration: 0.5 });
  
    // Animation for the "Address" section
    const addressAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.address',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    addressAnimation.from('.address__element', { opacity: 0, y: 50, duration: 0.5 });
  
    // Animation for the "Social Media" section
    const socialMediaAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: '.social-media',
        start: 'top center',
        end: 'bottom center',
        scrub: true,
      },
    });
  
    socialMediaAnimation.from('.social-media__icon', { opacity: 0, y: 50, duration: 0.5 });
  
  });
  