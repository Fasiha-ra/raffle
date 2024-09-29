document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.querySelector(".menu-icon");
    const nav = document.querySelector("nav");
  
    menuIcon.addEventListener("click", function () {
      menuIcon.classList.toggle("active");  // Toggle the cross icon
      nav.classList.toggle("active");       // Show or hide the nav links
    });
  });
  function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
      section.classList.remove('active');
    });

    // Show the selected section
    const sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');

    // Update the URL hash without refreshing the page
    window.location.hash = sectionId;
  }

  // When page loads or refreshes, check the URL hash and show the correct section
  function handleHashChange() {
    // Get the current hash value (without the # symbol)
    const hash = window.location.hash.replace('#', '');

    // If hash is empty, default to 'home'
    const sectionToShow = hash || 'home';

    // Show the correct section
    showSection(sectionToShow);
  }

  // Attach event listener for hash changes (for back/forward navigation)
  window.addEventListener('hashchange', handleHashChange);

  // Call the function on page load to show the correct section
  handleHashChange();


  $('.slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
   arrows:false,
    responsive: [
         
          {
            breakpoint: 1200,
            settings: {
              slidesToShow: 3
            }
          },
          {
            breakpoint: 992,
            settings: {
              slidesToShow: 2
            }
          },
          {
            breakpoint: 576,
            settings: {
              slidesToShow: 1
            }
          }
        ]
      
  });