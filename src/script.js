const shareBtn = document.querySelectorAll(".share-btn");
const socialPanel = document.getElementById("social-panel");

shareBtn.forEach((button) => {
  button.addEventListener("click", () => {
    socialPanel.classList.toggle("hidden");
    shareBtn[0].classList.toggle("bg-[#ECF2F8]");
    shareBtn[0].classList.toggle("bg-[#6E8098]");
    shareBtn[0].children[0].children[0].classList.toggle("fill-white");
  });
});
