window.onload = function () {
  if (localStorage.getItem("theme") === "dark") {
    document.body.classList.add("dark");

    const btn = document.getElementById("themeToggle");

    if (btn) btn.innerHTML = "☀️";
  }
};

function toggleTheme() {
  document.body.classList.toggle("dark");

  const btn = document.getElementById("themeToggle");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    if (btn) btn.innerHTML = "☀️";
  } else {
    localStorage.setItem("theme", "light");
    if (btn) btn.innerHTML = "🌙";
  }
}
