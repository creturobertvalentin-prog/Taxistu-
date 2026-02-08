const uploadInput = document.getElementById("backgroundUpload");
const hero = document.querySelector(".hero");

uploadInput.addEventListener("change", (event) => {
  const file = event.target.files && event.target.files[0];
  if (!file) {
    return;
  }

  const reader = new FileReader();
  reader.onload = (loadEvent) => {
    hero.style.backgroundImage = `url("${loadEvent.target.result}")`;
    hero.classList.add("has-custom-background");
  };
  reader.readAsDataURL(file);
});
