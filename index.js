function toggleMenu(){
    const menu=document.querySelector(".side-menulinks");
    const icon=document.querySelector(".side-icon")
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// for logeeshwara letter

document.addEventListener("DOMContentLoaded", function () {
  const text = "LOGEESHWARA PA"; // Text to display letter by letter
  const target = document.getElementById("typewriter");
  let index = 0;

  function typeWriter() {
      if (index < text.length) {
          target.textContent += text.charAt(index);
          index++;
          setTimeout(typeWriter, 100); // Adjust typing speed here (150ms)
      }
  }

  typeWriter();
});

// Initialize EmailJS
window.onload = function () {
    emailjs.init("95EdBk8UFz6NFc9Un"); // Replace with your public key
  };
  
  // Form submission event listener
  document.getElementById("contactform").addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent page refresh
  
    // Get form values
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const ph = document.getElementById("ph").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;
  
    const templateParams = {
      name: name,
      email: email,
      ph: ph,
      subject: subject,
      message: message,
    };
  
    // Send email using EmailJS
    emailjs
      .send("service_kxdomg9", "template_p0wmilm", templateParams)
      .then(function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("Sent successfully!");
      })
      .catch(function (error) {
        console.error("FAILED...", error);
        alert("Failed to send. Please try again.");
      });
  });