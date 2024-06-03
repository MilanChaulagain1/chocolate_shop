/* ------------------------------------ Click on login and Sign Up to  changue and view the effect
---------------------------------------
*/
//show and hide login and signup screen
function login() {
  document.querySelector(".cont_forms").className =
    "cont_forms cont_forms_active_login";
  document.querySelector(".cont_form_login").style.display = "block";
  document.querySelector(".cont_form_sign_up").style.opacity = "0";

  setTimeout(function () {
    document.querySelector(".cont_form_login").style.opacity = "1";
  }, 400);

  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.display = "none";
    document.querySelector("#login").style.display = "none";
  }, 200);
}
//show and hide login and signup screen

function sign_up(at) {
  document.querySelector(".cont_forms").className =
    "cont_forms cont_forms_active_sign_up";
  document.querySelector(".cont_form_sign_up").style.display = "block";
  document.querySelector(".cont_form_login").style.opacity = "0";

  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.opacity = "1";
  }, 100);

  setTimeout(function () {
    document.querySelector(".cont_form_login").style.display = "none";
    document.querySelector("#signup").style.display = "none";
  }, 400);
}
//show and hide login and signup screen
function login_sign_up() {
  document.querySelector(".cont_forms").className = "cont_forms";
  document.querySelector(".cont_form_sign_up").style.opacity = "0";
  document.querySelector(".cont_form_login").style.opacity = "0";

  setTimeout(function () {
    document.querySelector(".cont_form_sign_up").style.display = "none";
    document.querySelector(".cont_form_login").style.display = "none";
  }, 500);
}

//checking username and password for login
function check() {
  var storedName = localStorage.getItem("name");
  var storedUserName = localStorage.getItem("username");

  var storedPw = localStorage.getItem("pw");

  var userName = document.getElementById("login_email").value;
  var userPw = document.getElementById("login_password").value;
  var userRemember = document.getElementById("rememberMe");

  if (
    (userName == storedName || userName == storedUserName) &&
    userPw == storedPw
  ) {
    window.location.href = "/loginSuccessfully.html";
  } else {
    alert("Error on login");
  }
}
//store username and password for login
function store() {
  //get user provided information from signup form
  var name = document.getElementById("email");
  var pw = document.getElementById("password");
  var userName = document.getElementById("username");
  var confirmPassword = document.getElementById("confirm_password");

  var lowerCaseLetters = /[a-z]/g;
  var upperCaseLetters = /[A-Z]/g;
  var numbers = /[0-9]/g;
  var regex_test = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; //regex to check valid email address

  //validate userinput in signup process
  if (name.value.length == 0) {
    alert("Please fill in email");
  } else if (!regex_test.test(name.value)) {
    alert("Please enter valid email address");
  } else if (pw.value.length == 0) {
    alert("Please fill in password");
  } else if (name.value.length == 0 && pw.value.length == 0) {
    alert("Please fill in email and password");
  } else if (pw.value.length < 8) {
    alert("Max of 8 characters in password required");
  } else if (!pw.value.match(numbers)) {
    alert("please add 1 number");
  } else if (userName.value.length == 0) {
    alert("Please fill in username");
  } else if (pw.value != confirmPassword.value) {
    alert("Passwords don't match. Try again!!");
  } else {
    //store the provided user information in local storage
    localStorage.setItem("name", name.value);
    localStorage.setItem("pw", pw.value);
    localStorage.setItem("username", userName.value);

    login();
  }
}
