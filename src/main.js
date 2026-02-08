import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register GSAP plugins
gsap.registerPlugin(ScrollTrigger);

// ============================================
// SMOOTH SCROLL WITH LENIS
// ============================================
const lenis = new Lenis({
  duration: 1.2,
  easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
  direction: 'vertical',
  gestureDirection: 'vertical',
  smooth: true,
  smoothTouch: false,
  touchMultiplier: 2,
});

function raf(time) {
  lenis.raf(time);
  requestAnimationFrame(raf);
}

requestAnimationFrame(raf);

// Sync ScrollTrigger with Lenis
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);

// ============================================
// HERO SECTION ANIMATIONS
// ============================================
function initHeroAnimations() {
  const heroTitle = document.querySelector('.hero-title');
  const heroSubtitle = document.querySelector('.hero-subtitle');
  const heroCTA = document.querySelector('.hero-cta');
  const heroBlobs = document.querySelectorAll('.blob');

  // Stagger animation for hero elements
  gsap.from([heroTitle, heroSubtitle, heroCTA], {
    duration: 1,
    opacity: 0,
    y: 50,
    stagger: 0.2,
    ease: 'power3.out',
  });

  // Floating blob animation
  heroBlobs.forEach((blob, index) => {
    gsap.to(blob, {
      duration: 6 + index * 2,
      y: -50,
      rotation: 360,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
    });
  });

  // Parallax effect on hero background
  const heroGradient = document.querySelector('.hero-gradient');
  if (heroGradient) {
    gsap.to(heroGradient, {
      scrollTrigger: {
        trigger: heroGradient,
        start: 'top top',
        end: 'bottom top',
        scrub: 1,
        markers: false,
      },
      y: -50,
      ease: 'none',
    });
  }
}

// ============================================
// SCROLL REVEAL ANIMATIONS
// ============================================
function initScrollReveal() {
  const revealElements = document.querySelectorAll('.reveal');

  revealElements.forEach((element) => {
    gsap.from(element, {
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        end: 'top 50%',
        scrub: 0.5,
        markers: false,
      },
      opacity: 0,
      y: 50,
      duration: 1,
      ease: 'power3.out',
    });
  });
}

// ============================================
// VALUE CARDS ANIMATION
// ============================================
function initValueCardsAnimation() {
  const cards = document.querySelectorAll('.value-card');

  cards.forEach((card, index) => {
    // Hover animation
    card.addEventListener('mouseenter', () => {
      gsap.to(card, {
        y: -10,
        duration: 0.3,
        ease: 'power2.out',
      });

      // Glow effect on hover
      gsap.to(card, {
        boxShadow: '0 20px 40px rgba(59, 130, 246, 0.2)',
        duration: 0.3,
      });
    });

    card.addEventListener('mouseleave', () => {
      gsap.to(card, {
        y: 0,
        duration: 0.3,
        ease: 'power2.out',
      });

      gsap.to(card, {
        boxShadow: '0 10px 20px rgba(0, 0, 0, 0.2)',
        duration: 0.3,
      });
    });

    // Initial stagger reveal
    gsap.from(card, {
      scrollTrigger: {
        trigger: card,
        start: 'top 85%',
      },
      opacity: 0,
      y: 30,
      duration: 0.8,
      delay: index * 0.1,
      ease: 'power3.out',
    });
  });
}

// ============================================
// SERVICES GRID ANIMATION
// ============================================
function initServicesAnimation() {
  const serviceItems = document.querySelectorAll('.service-item');

  serviceItems.forEach((item, index) => {
    // Hover effect
    item.addEventListener('mouseenter', () => {
      // Lift the card
      gsap.to(item, {
        y: -15,
        duration: 0.4,
        ease: 'power2.out',
      });

      // Animate the icon
      const icon = item.querySelector('.service-icon');
      if (icon) {
        gsap.to(icon, {
          scale: 1.1,
          rotation: 10,
          duration: 0.4,
        });
      }

      // Add glow
      gsap.to(item, {
        boxShadow: '0 30px 60px rgba(59, 130, 246, 0.25)',
        duration: 0.4,
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(item, {
        y: 0,
        duration: 0.4,
        ease: 'power2.out',
      });

      const icon = item.querySelector('.service-icon');
      if (icon) {
        gsap.to(icon, {
          scale: 1,
          rotation: 0,
          duration: 0.4,
        });
      }

      gsap.to(item, {
        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.2)',
        duration: 0.4,
      });
    });

    // Scroll reveal
    gsap.from(item, {
      scrollTrigger: {
        trigger: item,
        start: 'top 90%',
      },
      opacity: 0,
      y: 40,
      duration: 0.8,
      delay: index * 0.12,
      ease: 'power3.out',
    });
  });
}

// ============================================
// ANIMATED NUMBERS (COUNTERS)
// ============================================
function animateCounter(element, target, duration = 2) {
  const updateCounter = (frame) => {
    element.textContent = Math.floor(frame * target);
  };

  gsap.fromTo(
    { frame: 0 },
    { frame: 1, duration, onUpdate: () => updateCounter(gsap.getProperty({ frame: 0 }, 'frame')) },
    { ease: 'power1.inOut' }
  );
}

function initCounterAnimation() {
  const counters = document.querySelectorAll('.counter');

  counters.forEach((counter) => {
    gsap.from(counter, {
      scrollTrigger: {
        trigger: counter,
        start: 'top 80%',
        onEnter: () => {
          const target = parseInt(counter.getAttribute('data-target'));
          animateCounter(counter, target);
        },
        once: true,
      },
    });
  });
}

// ============================================
// PORTFOLIO SLIDER ANIMATION
// ============================================
function initPortfolioSlider() {
  const sliderTrack = document.querySelector('.portfolio-slider-track');
  const slides = document.querySelectorAll('.portfolio-slide');
  const prevBtn = document.querySelector('.slider-prev');
  const nextBtn = document.querySelector('.slider-next');

  if (!sliderTrack || slides.length === 0) return;

  let currentIndex = 0;

  const updateSlider = () => {
    gsap.to(sliderTrack, {
      x: -currentIndex * 100 + '%',
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  prevBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlider();
  });

  nextBtn?.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlider();
  });

  // Hover effect on slides
  slides.forEach((slide, index) => {
    slide.addEventListener('mouseenter', () => {
      gsap.to(slide, {
        scale: 1.05,
        duration: 0.4,
        ease: 'power2.out',
      });
    });

    slide.addEventListener('mouseleave', () => {
      gsap.to(slide, {
        scale: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    });
  });
}

// ============================================
// PROCESS TIMELINE ANIMATION
// ============================================
function initTimelineAnimation() {
  const timelineItems = document.querySelectorAll('.timeline-item');

  timelineItems.forEach((item, index) => {
    const dot = item.querySelector('.timeline-dot');
    const content = item.querySelector('.timeline-content');

    // Dot animation
    gsap.from(dot, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      scale: 0,
      opacity: 0,
      duration: 0.6,
      delay: index * 0.1,
      ease: 'back.out',
    });

    // Content animation
    gsap.from(content, {
      scrollTrigger: {
        trigger: item,
        start: 'top 80%',
      },
      opacity: 0,
      x: index % 2 === 0 ? -30 : 30,
      duration: 0.8,
      delay: index * 0.1 + 0.1,
      ease: 'power3.out',
    });

    // Hover effect
    item.addEventListener('mouseenter', () => {
      gsap.to(dot, {
        scale: 1.3,
        boxShadow: '0 0 20px rgba(59, 130, 246, 0.6)',
        duration: 0.3,
      });
    });

    item.addEventListener('mouseleave', () => {
      gsap.to(dot, {
        scale: 1,
        boxShadow: 'none',
        duration: 0.3,
      });
    });
  });
}

// ============================================
// PRICE CALCULATOR
// ============================================
function initPriceCalculator() {
  const sliders = document.querySelectorAll('.price-slider');
  const displayPrice = document.querySelector('.calculated-price');

  if (sliders.length === 0 || !displayPrice) return;

  const updatePrice = () => {
    let total = 0;
    sliders.forEach((slider) => {
      total += parseInt(slider.value);
    });

    // Animate price change
    gsap.to(displayPrice, {
      textContent: total,
      duration: 0.5,
      snap: { textContent: 1 },
      ease: 'power1.out',
    });
  };

  sliders.forEach((slider) => {
    slider.addEventListener('input', updatePrice);
  });

  updatePrice();
}

// ============================================
// TESTIMONIALS SLIDER
// ============================================
function initTestimonialsSlider() {
  const testimonialsTrack = document.querySelector('.testimonials-track');
  const testimonialCards = document.querySelectorAll('.testimonial-card');
  const testimonialPrev = document.querySelector('.testimonial-prev');
  const testimonialNext = document.querySelector('.testimonial-next');

  if (!testimonialsTrack || testimonialCards.length === 0) return;

  let currentTestimonial = 0;

  const updateTestimonials = () => {
    gsap.to(testimonialsTrack, {
      x: -currentTestimonial * 100 + '%',
      duration: 0.8,
      ease: 'power2.inOut',
    });
  };

  testimonialPrev?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial - 1 + testimonialCards.length) % testimonialCards.length;
    updateTestimonials();
  });

  testimonialNext?.addEventListener('click', () => {
    currentTestimonial = (currentTestimonial + 1) % testimonialCards.length;
    updateTestimonials();
  });
}

// ============================================
// STICKY TELEGRAM BUTTON
// ============================================
function initStickyButton() {
  const stickyBtn = document.querySelector('.sticky-telegram-btn');
  
  if (!stickyBtn) return;

  // Show/hide on scroll
  gsap.registerEffect({
    name: 'toggleButton',
    effect: (targets) => {
      return gsap.timeline()
        .to(targets, { opacity: 1, duration: 0.3, pointerEvents: 'auto' })
        .to(targets, { opacity: 0, duration: 0.3, pointerEvents: 'none' }, '+=2');
    },
    defaults: { duration: 0.5 },
  });

  window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
      gsap.to(stickyBtn, {
        opacity: 1,
        pointerEvents: 'auto',
        duration: 0.3,
      });
    } else {
      gsap.to(stickyBtn, {
        opacity: 0.3,
        pointerEvents: 'none',
        duration: 0.3,
      });
    }
  });

  // Hover animation
  stickyBtn.addEventListener('mouseenter', () => {
    gsap.to(stickyBtn, {
      scale: 1.1,
      boxShadow: '0 10px 40px rgba(59, 130, 246, 0.6)',
      duration: 0.3,
    });
  });

  stickyBtn.addEventListener('mouseleave', () => {
    gsap.to(stickyBtn, {
      scale: 1,
      boxShadow: '0 5px 20px rgba(59, 130, 246, 0.3)',
      duration: 0.3,
    });
  });
}

// ============================================
// BACKGROUND PARTICLES/DOTS ANIMATION
// ============================================
function initBackgroundAnimation() {
  const dots = document.querySelectorAll('.bg-dot');

  dots.forEach((dot) => {
    const randomDuration = 3 + Math.random() * 4;
    const randomDelay = Math.random() * 2;

    gsap.to(dot, {
      y: -30,
      opacity: 0.3,
      duration: randomDuration,
      repeat: -1,
      yoyo: true,
      ease: 'sine.inOut',
      delay: randomDelay,
    });
  });
}

// ============================================
// INTERSECTION OBSERVER FOR ELEMENTS
// ============================================
function initIntersectionObserver() {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, observerOptions);

  document.querySelectorAll('.reveal').forEach((el) => {
    observer.observe(el);
  });
}

// ============================================
// BUTTON CLICK ANIMATIONS
// ============================================
function initButtonAnimations() {
  const buttons = document.querySelectorAll('.btn-gradient, .btn-outline-gradient');

  buttons.forEach((btn) => {
    btn.addEventListener('click', function () {
      // Ripple effect
      gsap.to(this, {
        duration: 0.6,
        boxShadow: '0 0 0 15px rgba(59, 130, 246, 0)',
        ease: 'power1.out',
      });
    });

    // Hover scale
    btn.addEventListener('mouseenter', () => {
      gsap.to(btn, {
        scale: 1.05,
        duration: 0.3,
        ease: 'back.out',
      });
    });

    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, {
        scale: 1,
        duration: 0.3,
        ease: 'back.out',
      });
    });
  });
}

// ============================================
// PAGE LOAD ANIMATION
// ============================================
function initPageLoad() {
  gsap.set('body', { opacity: 1 });

  // Create timeline for page load
  const loadTimeline = gsap.timeline();

  loadTimeline
    .from('.hero-section', {
      opacity: 0,
      duration: 0.5,
    })
    .from('.hero-title', {
      opacity: 0,
      y: 40,
      duration: 0.8,
      ease: 'power3.out',
    }, 0.2);
}

// ============================================
// INIT ALL ANIMATIONS
// ============================================
function initAllAnimations() {
  // Wait for DOM to be fully loaded
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
      initPageLoad();
      initHeroAnimations();
      initScrollReveal();
      initValueCardsAnimation();
      initServicesAnimation();
      initCounterAnimation();
      initPortfolioSlider();
      initTimelineAnimation();
      initPriceCalculator();
      initTestimonialsSlider();
      initStickyButton();
      initBackgroundAnimation();
      initIntersectionObserver();
      initButtonAnimations();

      // Refresh ScrollTrigger
      ScrollTrigger.refresh();
    });
  } else {
    initPageLoad();
    initHeroAnimations();
    initScrollReveal();
    initValueCardsAnimation();
    initServicesAnimation();
    initCounterAnimation();
    initPortfolioSlider();
    initTimelineAnimation();
    initPriceCalculator();
    initTestimonialsSlider();
    initStickyButton();
    initBackgroundAnimation();
    initIntersectionObserver();
    initButtonAnimations();

    ScrollTrigger.refresh();
  }
}

// Start animations
initAllAnimations();

// Refresh ScrollTrigger on window resize
window.addEventListener('resize', () => {
  ScrollTrigger.refresh();
});

// Export for external use
export { lenis, gsap, ScrollTrigger };
