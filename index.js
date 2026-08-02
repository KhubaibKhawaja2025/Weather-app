let tempOptions = document.querySelectorAll(".option1");
let windSpeedOptions = document.querySelectorAll(".option2");
let precipitationOptions = document.querySelectorAll(".option3");

function toggleSelection(options, clickedOption) {
  options.forEach((opt) => {
    opt.querySelector("img")?.classList.add("hide");
    opt.classList.remove("bg");
  });

  clickedOption.querySelector("img")?.classList.remove("hide");
  clickedOption.classList.add("bg");
}

tempOptions.forEach((option) => {
  option.addEventListener("click", () => {
    toggleSelection(tempOptions, option);
  });
});

windSpeedOptions.forEach((option) => {
  option.addEventListener("click", () => {
    toggleSelection(windSpeedOptions, option);
  });
});

precipitationOptions.forEach((option) => {
  option.addEventListener("click", () => {
    toggleSelection(precipitationOptions, option);
  });
});
