document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const reason = document.getElementById("reason").value;
  const consent = document.getElementById("consent").checked;

  if (!name || !email || !reason || !consent) {
    alert("Please fill all required fields.");
    return;
  }

  alert("Thank you for reaching out. Your message has been sent.");
  this.reset();
});
