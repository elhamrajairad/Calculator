const currentTheme = localStorage.getItem("theme");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

if (currentTheme == "dark") {
  document.querySelector(".main").classList.toggle("dark-theme");
} else if (currentTheme == "light") {
  document.querySelector(".main").classList.toggle("light-theme");
}

document.querySelector(".btn-toggle").addEventListener("click", function (e) {
  if (prefersDarkScheme.matches) {
    document.querySelector(".main").classList.toggle("light-theme");
    var theme = document
      .querySelector(".main")
      .classList.contains("light-theme")
      ? "light"
      : "dark";
  } else {
    document.querySelector(".main").classList.toggle("dark-theme");
    var theme = document.querySelector(".main").classList.contains("dark-theme")
      ? "dark"
      : "light";
  }
  localStorage.setItem("theme", theme);
  if (theme == "dark") {
    document.querySelector(
      ".btn-toggle"
    ).innerHTML = `<i class="fa-solid fa-sun" ></i>
  `;
  } else {
    document.querySelector(
      ".btn-toggle"
    ).innerHTML = `<i class="fa-solid fa-moon" ></i>
    `;
  }
});
