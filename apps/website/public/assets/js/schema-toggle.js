// Schema toggle via URL
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const getSchema = urlParams.get("schema");
if (getSchema === "dark") {
  document.documentElement.classList.add("uk-dark");
  localStorage.setItem("darkMode", "1");
} else if (getSchema === "light") {
  document.documentElement.classList.remove("uk-dark");
  localStorage.setItem("darkMode", "0");
}
