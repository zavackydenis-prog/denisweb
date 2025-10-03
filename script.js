const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
<script>
document.addEventListener("DOMContentLoaded", () => {
  // funkcia, ktorá spracuje jeden formulár
  function handleForm(formId, thankyouId) {
    const form = document.getElementById(formId);
    const thankyou = document.getElementById(thankyouId);

    if (!form || !thankyou) return;

    form.addEventListener("submit", async (e) => {
      e.preventDefault(); // zastaví presmerovanie

      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: form.method,
          body: formData,
          headers: { "Accept": "application/json" }
        });

        if (response.ok) {
          thankyou.style.display = "block"; // ukáž ďakovnú správu
          form.reset(); // vymaž polia

          setTimeout(() => {
            thankyou.style.display = "none"; // skry po 5 sekundách
          }, 5000);
        } else {
          alert("Nastala chyba pri odosielaní správy ❌");
        }
      } catch (error) {
        alert("Nepodarilo sa pripojiť k serveru ❌");
      }
    });
  }

  // zavoláme funkciu pre oba formuláre
  handleForm("kontakt-form-1", "thankyou-1");
  handleForm("kontakt-form-2", "thankyou-2");
});
