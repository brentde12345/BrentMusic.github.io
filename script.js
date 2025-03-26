// Smooth scrolling voor navigatielinks
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
      });
    });
  });
  
  // Fade-in animaties met IntersectionObserver
  document.addEventListener("DOMContentLoaded", function() {
    const elements = document.querySelectorAll('.animate');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, { threshold: 0.2 });
    elements.forEach(el => observer.observe(el));
  });
  
  // Header verkleinen op scroll & scroll progress bar
  window.addEventListener('scroll', function() {
    const header = document.getElementById("header");
    if (window.scrollY > 80) {
      header.classList.add("shrink");
    } else {
      header.classList.remove("shrink");
    }
    // Update scroll progress bar
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    document.getElementById("progress-bar").style.width = scrolled + "%";
  });
  
  // Typewriter-effect voor hero-titel
  document.addEventListener("DOMContentLoaded", function() {
    const heroTitle = document.getElementById("heroTitle");
    const text = "Exclusieve Kledingcollectie";
    let i = 0;
    function type() {
      if (i < text.length) {
        heroTitle.innerHTML += text.charAt(i);
        i++;
        setTimeout(type, 120);
      }
    }
    type();
  });
  