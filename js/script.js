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
    var sections = document.querySelectorAll('.section');
    sections.forEach(function (section) {
      section.classList.remove('active');
    });

    // Show the selected section
    var sectionToShow = document.getElementById(sectionId);
    sectionToShow.classList.add('active');
  }

  // Show the "Home" section by default
  document.getElementById('home').classList.add('active');


  $('.slides').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  //  arrows:true,
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