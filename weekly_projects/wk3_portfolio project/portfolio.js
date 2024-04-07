function toggleText() {
  var hiddenText = document.getElementById("hiddenText");
  var toggleButton = document.getElementById("toggleButton");
  if (hiddenText.style.display === "none") {
    hiddenText.style.display = "block";
    toggleButton.textContent = "Hide Text";
  } else {
    hiddenText.style.display = "none";
    toggleButton.textContent = "Show Text";
  }
}