//your JS code here. If required.
document.addEventListener("DOMContentLoaded", () => {
  // ✅ Create a new div element
  const message = document.createElement("div");
  message.innerText = "DOM load success";

  // ✅ Append the div to the body
  document.body.appendChild(message);
});
