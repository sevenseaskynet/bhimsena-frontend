const swiper = new Swiper('.swiper', {
    loop: true,                  // Infinite loop
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
  const links = document.querySelectorAll('.nav-link');

links.forEach(link => {
  link.addEventListener('click', () => {
    links.forEach(l => l.classList.remove('active'));
    link.classList.add('active');
  });
});
document.getElementById('membershipForm').addEventListener('submit', function(e) {
  e.preventDefault(); // Prevent actual submission

  const fullName = document.getElementById('fullname').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value;
  const membership = document.getElementById('membership').value;

  if (fullName && email && password && membership) {
    // Display a confirmation message
    document.getElementById('message').textContent = `Thank you for joining, ${fullName}!`;
    // Optionally clear form
    this.reset();
  } else {
    alert('Please fill out all fields.');
  }
});
document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();
  const status = document.getElementById('formStatus');

  if (name === '' || email === '' || message === '') {
    status.textContent = 'Please fill in all fields.';
    status.style.color = 'red';
    return;
  }

  // Simulate sending the message (in real use, you'd send it to a server)
  status.textContent = `Thanks, ${name}! Your message has been sent.`;
  status.style.color = 'green';

  // Reset form
  this.reset();
});
// script.js

// Example: Fill card data dynamically
document.addEventListener("DOMContentLoaded", () => {
  const name = "Jane Smith";
  const id = "789012";
  const dept = "Marketing";
  const photoUrl = "https://via.placeholder.com/100";

  document.querySelector(".details").innerHTML = `
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>ID:</strong> ${id}</p>
    <p><strong>Department:</strong> ${dept}</p>
  `;

  document.querySelector(".photo img").src = photoUrl;
});

  