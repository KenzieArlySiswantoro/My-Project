window.onload = function () {
  var welcomeText = document.getElementById("welcome");
  var text = welcomeText.textContent;
  welcomeText.textContent = "";
  var i = 0;

  function typeWriter() {
    if (i < text.length) {
      welcomeText.textContent += text.charAt(i);
      i++;
      setTimeout(typeWriter, 100);
    }
  }

  typeWriter();
};

document
  .getElementById("contact-form")
  .addEventListener("submit", function (event) {
    event.preventDefault();
    var email = this.querySelector("input[type='email']").value;
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
    alert("Form submitted successfully!");
  });
