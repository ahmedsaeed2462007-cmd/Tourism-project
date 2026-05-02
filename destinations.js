
var programMap = {
    "Cairo Classic Journey":  "egypt-cairo",
    "Kings of the Nile":      "egypt-kings",
    "Red Sea Adventure":      "egypt-redsea",
    "Istanbul Splendor":      "turkey-istanbul",
    "Cappadocia Adventure":   "turkey-cappadocia",
    "Turquoise Coast":        "turkey-coast",
    "Cultural Escape":        "spain-cultural",
    "Andalusia Adventure":    "spain-andalusia",
    "Costa del Sol":          "spain-costa"
};

function goToProgram(typedValue) {

    var cardId = programMap[typedValue];

    if (!cardId) return;

    var previousHighlighted = document.querySelectorAll(".card-highlighted");
    previousHighlighted.forEach(function(card) {
        card.classList.remove("card-highlighted");
    });

    var targetCard = document.getElementById(cardId);
    targetCard.classList.add("card-highlighted");
    targetCard.scrollIntoView({ behavior: "smooth", block: "center" });

    setTimeout(function() {
        targetCard.classList.remove("card-highlighted");
        document.getElementById("program-search").value = "";
    }, 2000);
}

function showDetails(programName) {

    var detailsUrl = "details.html?program=" + encodeURIComponent(programName);

    window.location.href = detailsUrl;
}

function bookProgram(programName) {

    var bookingUrl = "booking.html?destination=" + encodeURIComponent(programName);

    window.location.href = bookingUrl;
}
