const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
<script>
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("kontakt-form-1");
  const thankyou = document.getElementById("thankyou-1");

  form.addEventListener("submit", async (e) => {
    e.preventDefault(); // zastaví klasické odoslanie

    const data = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: data,
        headers: {
          'Accept': 'application/json'
        }
      });

      if (response.ok) {
        form.reset(); // vymaže polia
        thankyou.style.display = "block"; // ukáže ďakovnú správu
        setTimeout(() => thankyou.style.display = "none", 5000);
      } else {
        alert("Nastala chyba pri odoslaní správy ❌");
      }

    } catch (err) {
      alert("Nepodarilo sa pripojiť k serveru ❌");
    }
  });
});
