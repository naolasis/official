const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');

navToggle.addEventListener('click', () => {
    nav.classList.toggle('nav--visible');
})

// Listen for scroll event
window.onscroll = function() {
    scrollFunction();
  };
  
  function scrollFunction() {
    const upArrow = document.getElementById("upArrow");
    if (document.body.scrollTop > 700 || document.documentElement.scrollTop > 700) {
      upArrow.style.display = "block"; // Show the arrow
    } else {
      upArrow.style.display = "none"; // Hide the arrow
    }
  }
  
  // Scroll to top when arrow is clicked
  function scrollToTop() {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  
const width = window.innerWidth;
const footer = document.querySelector(".footer");
const parent = document.querySelector(".contact-left");
const parent2 = document.querySelector(".contact-right");
if(width > 800){
 parent.insertAdjacentElement('beforeend',footer);
}

window.addEventListener("resize", function() {
  const newWidth = window.innerWidth;
  if (newWidth > 800) {
    parent.insertAdjacentElement('beforeend',footer);
  } else if (newWidth < 800) {
    parent2.insertAdjacentElement('afterend', footer);
  }
});