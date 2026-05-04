// 1. Find the image and the dropdown menu on the page
let bgImage = document.getElementById("main-bg");
let bgSelector = document.getElementById("bg-selector");

// 2. Check if the user already saved a background preference in their browser
let savedBg = localStorage.getItem("userBackground");

// 3. If they do have a saved background, apply it right when the page loads
if (savedBg !== null) {
    bgImage.src = savedBg;
    bgSelector.value = savedBg; // Make sure the dropdown displays the correct name
}

// 4. Listen for when the user picks a new option from the dropdown menu
bgSelector.addEventListener("change", function () {
    let newImage = bgSelector.value; // Get the path of the image they just clicked

    bgImage.src = newImage;          // Change the picture on the screen

    // Save this new choice to the browser's memory so it remembers for next time
    localStorage.setItem("userBackground", newImage);
});