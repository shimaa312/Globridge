function flipCard(cardElement) {
  cardElement.classList.toggle("flipped");
}
document.addEventListener("DOMContentLoaded", function () {
  const claimButton = document.querySelector(".claim-button");

  claimButton.addEventListener("click", function () {
    alert("Thank you for your interest! Our team will contact you shortly to help you claim your company profile.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".faq-question");

  questions.forEach((btn) => {
    btn.addEventListener("click", function () {
      const answer = this.nextElementSibling;
      const isActive = this.classList.contains("active");

      document.querySelectorAll(".faq-answer").forEach(a => a.style.display = "none");
      document.querySelectorAll(".faq-question").forEach(q => q.classList.remove("active"));

      if (!isActive) {
        this.classList.add("active");
        answer.style.display = "block";
      }
    });
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const contactBtn = document.querySelector(".contact-button");

  contactBtn.addEventListener("click", function () {
    alert("Thank you for reaching out! A Globridge professional will contact you soon.");
  });
});
document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("contactForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    let valid = true;

    const fields = [
      { id: "firstName", msg: "Please enter your first name." },
      { id: "lastName", msg: "Please enter your last name." },
      { id: "email", msg: "Please enter a valid email." },
      { id: "phoneCode", msg: "Please select a country code." },
      { id: "phone", msg: "Please enter your phone number." },
      { id: "company", msg: "Please enter your company name." },
      { id: "website", msg: "Please enter your website URL." },
      { id: "message", msg: "Please enter your message." },

    ];

    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const error = document.getElementById("error-" + field.id);
      if (!input.value.trim()) {
        error.textContent = field.msg;
        error.style.display = "block";
        valid = false;
      } else {
        error.textContent = "";
        error.style.display = "none";
      }
    });

    if (valid) {
      alert("Thank you for your message! A specialist will contact you shortly.");
      form.reset();
    }
  });
});


