document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".burger-btn");
  const navUL = document.querySelector(".nav-list");
  const bars = document.querySelectorAll(".bar");

  hamburger.addEventListener("click", () => {
    navUL.classList.toggle("show");

    bars.forEach((Element) => {
      Element.classList.toggle("active");
    });
  });
  navUL.addEventListener("click", () => {
    navUL.classList.remove("show");

    bars.forEach((Element) => {
      Element.classList.remove("active");
    });
  });

  /* =========SCROLL========= */
  // Get the button
  const scrollToTopBtn = document.getElementById("scrollToTop");

  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 20 ||
      document.documentElement.scrollTop > 20
    ) {
      scrollToTopBtn.style.display = "block";
    } else {
      scrollToTopBtn.style.display = "none";
    }
  }

  // When the user clicks on the button, scroll to the top of the document
  scrollToTopBtn.addEventListener("click", function () {
    // Smooth scrolling behavior
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  });
});
