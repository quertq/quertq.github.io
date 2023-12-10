document.getElementById('contactForm').addEventListener('submit', function (event) {
  event.preventDefault();

  const formData = new FormData(event.target);

  // Simulate sending form data to the server (replace with actual AJAX request)
  console.log({
    name: formData.get('name'),
    email: formData.get('email'),
    message: formData.get('message'),
  });

  // Optionally, you can redirect the user or show a thank you message
  alert('Thank you for your message!');
});
