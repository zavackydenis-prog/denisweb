const hamburger = document.getElementById('hamburger');
const navLinks = document.getElementById('nav-links');

hamburger.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});
<script>
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("form");

  forms.forEach(form => {
    form.addEventListener("submit", (e) => {
      // tu máš už asi odosielanie cez mail handler
      setTimeout(() => {
        form.reset(); // vymaže všetky polia
      }, 500);
    });
  });
});
</script>

