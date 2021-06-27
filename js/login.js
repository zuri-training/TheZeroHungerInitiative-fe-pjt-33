const d = document.querySelector(".login-mobile");

document.querySelector(".login-mobile").addEventListener("click", (e) => {
  e.preventDefault();
  d.innerHTML = `<div class="lds-hourglass"></div>`;
  console.log("hello");
})