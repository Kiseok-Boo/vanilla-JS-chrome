const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const greetingUser = document.querySelector("#greeting_user");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  const userInput = loginInput.value;
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  localStorage.setItem(USERNAME_KEY, userInput);
  paintGreetings(userInput);
}
function paintGreetings(name) {
  greetingUser.innerText = `Hello ${name}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  console.dir(greeting);
  greeting.style.display = "flex";
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}
