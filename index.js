let bgImage = document.getElementById("main-bg");
let bgSelector = document.getElementById("bg-selector");

let savedBg = localStorage.getItem("userBackground");

if (savedBg !== null) {
    bgImage.src = savedBg;
    bgSelector.value = savedBg;
}

bgSelector.addEventListener("change", function () {
    let newImage = bgSelector.value;

    bgImage.src = newImage;

    localStorage.setItem("userBackground", newImage);
});