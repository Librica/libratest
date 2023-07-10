window.onload = function () {
  var loader = document.querySelector(".loader");
  setTimeout(function () {
    loader.style.display = "none";
  }, 1000); // Adjust the delay time (in milliseconds) as needed
};

//login
function togglePass(section) {
  var passwordInput = document.getElementById(section + "-password");
  var eyeIcon = document.getElementById(section + "-eye-icon");
  if (passwordInput.type === "password") {
    passwordInput.type = "text";
    eyeIcon.classList.remove("fa-eye-slash");
    eyeIcon.classList.add("fa-eye");
  } else {
    passwordInput.type = "password";
    eyeIcon.classList.remove("fa-eye");
    eyeIcon.classList.add("fa-eye-slash");
  }
}

//carousel
