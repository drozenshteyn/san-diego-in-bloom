// Slideshow functionality
let slideIndex = 0;
const images = [
  "https://res.cloudinary.com/dqhrahy8h/image/upload/f_auto,q_auto,w_auto/v1745876355/SanDiego-Mission-Trails-Prettyface-wildflower-dr_001_y5gyhc.jpg",
  "https://res.cloudinary.com/dqhrahy8h/image/upload//f_auto,q_auto,w_auto/v1745876354/SanDiego-Orchid-Tree-flower-dr_002_zpjibl.jpg",
  "https://res.cloudinary.com/dqhrahy8h/image/upload/f_auto,q_auto,w_auto/v1745876353/SanDiego-Mission-Trails-Zeltnera-venusta-wildflower-dr_1_crjtuj.jpg",
  "https://res.cloudinary.com/dqhrahy8h/image/upload/f_auto,q_auto,w_auto/v1745876355/SanDiego-Lilly-of-the-valey-venusta-flower-dr_01_vndlyx.jpg"
];

function showSlides() {
  slideIndex = (slideIndex + 1) % images.length;
  document.getElementById("slide").src = images[slideIndex];
  setTimeout(showSlides, 4000); // Change image every 4 seconds
}

window.onload = showSlides;

// Disable right-click on images and display the message with a flower icon
const messageDiv = document.createElement('div');
messageDiv.classList.add('right-click-message');
messageDiv.innerHTML = '<span class="flower-icon">&#127804;</span> This image is not available for download. Please contact me for more information.';

// Style the message dynamically
const style = document.createElement('style');
style.innerHTML = `
  .right-click-message {
    position: fixed;
    bottom: 10px;  /* Slightly raised from the bottom */
    left: 50%;  /* Center the box horizontally */
    transform: translateX(-50%);  /* Align the box exactly to the center */
    background-color: rgba(0, 0, 0, 0.5);  /* Lighter background */
    color: white;
    text-align: center;
    padding: 8px 16px;  /* More compact padding */
    font-size: 14px;  /* Smaller text */
    display: none;
    z-index: 9999;
    border-radius: 8px;  /* Rounded corners for a smoother look */
    width: auto;  /* Automatic width adjustment */
    max-width: 400px;  /* Set a max width to prevent the box from becoming too wide */
  }
  .right-click-message .flower-icon {
    margin-right: 10px;
  }
`;
document.head.appendChild(style);

// Append the message div to the body
document.body.appendChild(messageDiv);

// Function to disable right-click on images
function disableRightClickOnImages() {
  const images = document.querySelectorAll('img');
  images.forEach(img => {
    img.addEventListener('contextmenu', function (e) {
      e.preventDefault(); // Prevent right-click
      messageDiv.style.display = 'block'; // Show the message
      setTimeout(() => {
        messageDiv.style.display = 'none'; // Hide the message after 5 seconds
      }, 5000);
    });
  });
}

// Run the disable right-click function once the page content is loaded
document.addEventListener('DOMContentLoaded', disableRightClickOnImages);


window.addEventListener('load', function () {
  setTimeout(function () {
      document.getElementById('welcome-screen').classList.add('fade-out');
      
      // Wait for the fade-out to finish before switching to main content
      setTimeout(function () {
          document.getElementById('welcome-screen').style.display = 'none';
          document.getElementById('main-content').style.display = 'block';
      }, 1000); // 1000ms matches the CSS transition time
  }, 1000); // Show welcome screen for 5 seconds
});


function toggleMenu() {
  const nav = document.getElementById("main-nav");
  nav.classList.toggle("show");
}

document.getElementById("year").textContent = new Date().getFullYear();


