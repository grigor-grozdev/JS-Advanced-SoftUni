function notify(message) {
  console.log('todo')

  let divRef = document.getElementById("notification");
  divRef.textContent = message;
  divRef.style.display = "block";

  divRef.addEventListener("click", clickHandler);

  function clickHandler(e) {
    divRef.style.display = "none";
  }
}