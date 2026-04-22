const yearEl = document.getElementById("year");
const themeToggleBtn = document.getElementById("theme-toggle");
const rootBody = document.body;
const preferredTheme = localStorage.getItem("portfolio-theme");

yearEl.textContent = new Date().getFullYear();

if (preferredTheme === "light") {
  rootBody.classList.add("light");
}

themeToggleBtn.addEventListener("click", function () {
  rootBody.classList.toggle("light");
  const mode = rootBody.classList.contains("light") ? "light" : "dark";
  localStorage.setItem("portfolio-theme", mode);
});
