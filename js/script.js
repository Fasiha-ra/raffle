document.addEventListener("DOMContentLoaded", function () {
  const menuIcon = document.querySelector(".menu-icon");
  const nav = document.querySelector("nav");

  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("active"); // Toggle the cross icon
    nav.classList.toggle("active"); // Show or hide the nav links
  });
});
function showSection(sectionId) {
  // Hide all sections
  const sections = document.querySelectorAll(".section");
  sections.forEach((section) => {
    section.classList.remove("active");
  });

  // Show the selected section
  const sectionToShow = document.getElementById(sectionId);
  sectionToShow.classList.add("active");

  // Update the URL hash without refreshing the page
  window.location.hash = sectionId;
}

// When page loads or refreshes, check the URL hash and show the correct section
function handleHashChange() {
  // Get the current hash value (without the # symbol)
  const hash = window.location.hash.replace("#", "");

  // If hash is empty, default to 'home'
  const sectionToShow = hash || "home";

  // Show the correct section
  showSection(sectionToShow);
}

// Attach event listener for hash changes (for back/forward navigation)
window.addEventListener("hashchange", handleHashChange);

// Call the function on page load to show the correct section
handleHashChange();

$(".slides").slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});
$(".slider").slick({
  slidesToShow: 4,
  slidesToScroll: 2,
  autoplay: true,
  autoplaySpeed: 2000,
  arrows: false,
  dots: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      },
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 2,
      },
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 1,
      },
    },
  ],
});

document.querySelectorAll(".faq-question").forEach((item) => {
  item.addEventListener("click", () => {
    const parent = item.parentElement;
    const toggle = item.querySelector(".faq-toggle");

    // Toggle active state
    parent.classList.toggle("active");

    // Switch between + and - symbols
    if (parent.classList.contains("active")) {
      toggle.textContent = "-";
    } else {
      toggle.textContent = "+";
    }
  });
});

// Function to show error
function showError(field, message) {
  const errorElement = field.nextElementSibling;
  errorElement.innerText = message;
  field.classList.add("error-border");
}

// Function to clear error
function clearError(field) {
  const errorElement = field.nextElementSibling;
  errorElement.innerText = "";
  field.classList.remove("error-border");
}

// Function to clear error when user types again
function clearErrorOnInput(field) {
  field.addEventListener("input", function () {
    clearError(field);
  });
}

// Add input event listeners to all fields
const fields = [
  document.getElementById("name"),
  document.getElementById("email"),
  document.getElementById("phone"),
  document.getElementById("subject"),
  document.getElementById("message"),
];

fields.forEach((field) => clearErrorOnInput(field));

// Handling form submission and validation
document
  .getElementById("submitBtn")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent form from submitting

    // Get form field values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const phone = document.getElementById("phone").value.trim();
    const subject = document.getElementById("subject").value.trim();
    const message = document.getElementById("message").value.trim();

    // Simple validation
    let isValid = true;

    // Name validation
    const nameField = document.getElementById("name");
    if (name === "") {
      showError(nameField, "Name is required.");
      isValid = false;
    } else {
      clearError(nameField);
    }

    // Email validation
    const emailField = document.getElementById("email");
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (email === "") {
      showError(emailField, "Email is required.");
      isValid = false;
    } else if (!emailPattern.test(email)) {
      showError(emailField, "Enter a valid email.");
      isValid = false;
    } else {
      clearError(emailField);
    }

    // Phone validation
    const phoneField = document.getElementById("phone");
    if (phone === "") {
      showError(phoneField, "Phone number is required.");
      isValid = false;
    } else if (phone.length < 10) {
      showError(phoneField, "Enter a valid phone number.");
      isValid = false;
    } else {
      clearError(phoneField);
    }

    // Subject validation
    const subjectField = document.getElementById("subject");
    if (subject === "") {
      showError(subjectField, "Subject is required.");
      isValid = false;
    } else {
      clearError(subjectField);
    }

    // Message validation
    const messageField = document.getElementById("message");
    if (message === "") {
      showError(messageField, "Message is required.");
      isValid = false;
    } else {
      clearError(messageField);
    }

    // If form is valid, show data in the console
    if (isValid) {
      const formData = {
        name: name,
        email: email,
        phone: phone,
        subject: subject,
        message: message,
      };
      console.log("Form Data:", formData);
      alert("Form submitted successfully!");
      document.getElementById("name").value = "";
      document.getElementById("email").value = "";
      document.getElementById("phone").value = "";
      document.getElementById("subject").value = "";
      document.getElementById("message").value = "";
    }
  });
