// Smooth scroll fallback
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    // Get actual nav height for dynamic offset
    const navHeight = document.querySelector('.container').offsetHeight;
    const offset = navHeight + 48; // nav height plus 3rem padding

    const element = document.querySelector(this.getAttribute('href'));
    const elementPosition = element.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: 'smooth',
    });
  });
});
