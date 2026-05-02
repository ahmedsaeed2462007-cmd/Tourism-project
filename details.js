// بيانات كل البرامج
var programsData = {
    "Cairo Classic Journey": {
        name: "Cairo Classic Journey",
        price: "$899",
        duration: "4 days / 3 nights",
        image: "media/Egypt-program1.png",
        country: "Egypt",
        description: "Discover the wonders of ancient Egypt with a comprehensive tour of Cairo's most iconic landmarks.",
        highlights: [
            "Pyramids of Giza",
            "Sphinx",
            "Grand Egyptian Museum",
            "Salah El-Dien Citadel",
            "Muhammad Ali Mosque",
            "Khan El-Khalili Bazaar"
        ],
        features: [
            {
                title: "Guided Tours",
                description: "Expert guides will lead you through the historical landmarks and explain their significance."
            },
            {
                title: "Comfortable Accommodation",
                description: "Stay in 4-star hotels in the heart of Cairo with all modern amenities."
            },
            {
                title: "Local Cuisine",
                description: "Experience authentic Egyptian food at traditional restaurants and local eateries."
            },
            {
                title: "Transportation",
                description: "All transfers included with private air-conditioned vehicles."
            }
        ]
    },
    "Kings of the Nile": {
        name: "Kings of the Nile",
        price: "$1,299",
        duration: "5 days / 4 nights",
        image: "media/Egypt-program2.png",
        country: "Egypt",
        description: "Experience the majesty of ancient Egyptian royalty with visits to the Valley of the Kings and a luxury Nile River cruise.",
        highlights: [
            "Valley of the Kings",
            "Tutankhamun's Tomb",
            "Karnak Temple",
            "Luxor Temple",
            "Luxury Nile River Cruise",
            "West Bank exploration"
        ],
        features: [
            {
                title: "Luxury Cruise",
                description: "5-star Nile River cruise with all-inclusive dining and entertainment."
            },
            {
                title: "Expert Egyptologists",
                description: "Learn from leading experts about pharaohs and ancient civilization."
            },
            {
                title: "Exclusive Access",
                description: "Priority access to restricted archaeological sites and museums."
            },
            {
                title: "Cultural Shows",
                description: "Evening entertainment with traditional music and dance performances."
            }
        ]
    },
    "Red Sea Adventure": {
        name: "Red Sea Adventure",
        price: "$749",
        duration: "4 days / 3 nights",
        image: "media/Egypt-program3.png",
        country: "Egypt",
        description: "Dive into paradise with world-class scuba diving and water sports in the stunning Red Sea.",
        highlights: [
            "Ras Muhammad National Park",
            "Scuba Diving",
            "White Island",
            "Coral Reefs",
            "Water Sports",
            "Beach Relaxation"
        ],
        features: [
            {
                title: "Diving Certification",
                description: "PADI certified diving courses available for beginners."
            },
            {
                title: "Marine Life",
                description: "Explore vibrant coral reefs and encounter tropical fish species."
            },
            {
                title: "Beach Resorts",
                description: "Stay at beachfront resorts with stunning sea views."
            },
            {
                title: "Water Activities",
                description: "Snorkeling, jet skiing, windsurfing, and more water sports."
            }
        ]
    },
    "Istanbul Splendor": {
        name: "Istanbul Splendor",
        price: "$799",
        duration: "4 days / 3 nights",
        image: "media/Turkey-program1.png",
        country: "Turkey",
        description: "Immerse yourself in the enchanting culture and architecture of Istanbul, where East meets West.",
        highlights: [
            "Blue Mosque",
            "Hagia Sophia",
            "Topkapi Palace",
            "Underground Cistern",
            "Grand Bazaar",
            "Spice Market",
            "Bosphorus Cruise"
        ],
        features: [
            {
                title: "Historical Tours",
                description: "Comprehensive guided tours of UNESCO World Heritage Sites."
            },
            {
                title: "Bosphorus Cruise",
                description: "Scenic evening cruise with dinner on the famous Bosphorus strait."
            },
            {
                title: "Bazaar Shopping",
                description: "Experience the vibrant Grand Bazaar and Spice Market with local guides."
            },
            {
                title: "Turkish Cuisine",
                description: "Taste traditional Turkish meals at authentic restaurants."
            }
        ]
    },
    "Cappadocia Adventure": {
        name: "Cappadocia Adventure",
        price: "$999",
        duration: "4 days / 3 nights",
        image: "media/Turkey-program2.png",
        country: "Turkey",
        description: "Float above fairy chimneys in hot air balloons and explore the magical underground cities of Cappadocia.",
        highlights: [
            "Hot Air Balloon Flight",
            "Fairy Chimneys",
            "Derinkuyu Underground City",
            "Kaymakli Underground City",
            "Goreme Open Air Museum",
            "Rose Valley Hiking"
        ],
        features: [
            {
                title: "Balloon Experience",
                description: "Early morning hot air balloon flight with champagne breakfast."
            },
            {
                title: "Underground Exploration",
                description: "Guided tours through ancient carved underground cities."
            },
            {
                title: "Cave Hotels",
                description: "Stay in unique cave hotels carved into the rock formations."
            },
            {
                title: "Sunset Hiking",
                description: "Scenic hikes through Rose Valley and stunning viewpoints."
            }
        ]
    },
    "Turquoise Coast": {
        name: "Turquoise Coast",
        price: "$1,299",
        duration: "5 days / 4 nights",
        image: "media/Turkey-program3.png",
        country: "Turkey",
        description: "Sail along Turkey's pristine Turquoise Coast on a traditional wooden gulet yacht.",
        highlights: [
            "Gulet Sailing Yacht",
            "Turtle Beach",
            "Blue Voyage",
            "Snorkeling",
            "Dalyan",
            "Bodrum Castle"
        ],
        features: [
            {
                title: "Gulet Yacht",
                description: "Traditional wooden sailing yacht with all luxurious amenities."
            },
            {
                title: "Snorkeling",
                description: "Daily snorkeling in crystal clear Mediterranean waters."
            },
            {
                title: "Turtle Watching",
                description: "Visit Turtle Beach and see endangered sea turtles."
            },
            {
                title: "Blue Voyage",
                description: "The famous Blue Voyage sailing experience along the coast."
            }
        ]
    },
    "Cultural Escape": {
        name: "Cultural Escape",
        price: "$1,099",
        duration: "5 days / 4 nights",
        image: "media/Spain-program1.png",
        country: "Spain",
        description: "Discover Spain's rich cultural heritage with visits to world-renowned museums and architectural masterpieces.",
        highlights: [
            "Prado Museum",
            "Royal Palace of Madrid",
            "Park Güell",
            "Sagrada Família Cathedral",
            "Gothic Quarter",
            "Flamenco Show"
        ],
        features: [
            {
                title: "Museum Tours",
                description: "Skip-the-line access to the Prado Museum and modern art galleries."
            },
            {
                title: "Gaudí Architecture",
                description: "Explore the genius works of Antoni Gaudí in Barcelona."
            },
            {
                title: "Flamenco Performance",
                description: "Authentic flamenco show with dinner in a traditional venue."
            },
            {
                title: "Art Workshops",
                description: "Optional art classes with local artists and craftspeople."
            }
        ]
    },
    "Andalusia Adventure": {
        name: "Andalusia Adventure",
        price: "$899",
        duration: "4 days / 3 nights",
        image: "media/Spain-program2.png",
        country: "Spain",
        description: "Experience the passion and beauty of Andalusia with its historic cities, stunning architecture, and flamenco culture.",
        highlights: [
            "Seville Cathedral",
            "Royal Alcázar",
            "Flamenco Show",
            "White Villages Tour",
            "Olive Oil Farm",
            "Plaza de España"
        ],
        features: [
            {
                title: "Flamenco Culture",
                description: "Learn about and experience authentic flamenco dancing and music."
            },
            {
                title: "White Villages",
                description: "Tour picturesque white-washed villages in the Andalusian countryside."
            },
            {
                title: "Local Cuisine",
                description: "Enjoy Andalusian tapas and traditional dishes at family-run restaurants."
            },
            {
                title: "Farm Experience",
                description: "Visit working olive oil farms and learn about production."
            }
        ]
    },
    "Costa del Sol": {
        name: "Costa del Sol",
        price: "$1,199",
        duration: "5 days / 4 nights",
        image: "media/Spain-program3.png",
        country: "Spain",
        description: "Relax on beautiful Mediterranean beaches while exploring stunning mountain towns and historic sites.",
        highlights: [
            "Mediterranean Beaches",
            "Alhambra Palace",
            "Nerja Caves",
            "Granada's Albaicín",
            "Arab Baths",
            "Water Sports"
        ],
        features: [
            {
                title: "Beach Resorts",
                description: "Luxurious beachfront resorts with world-class facilities."
            },
            {
                title: "Alhambra Tours",
                description: "Guided tours of the stunning Alhambra Palace in Granada."
            },
            {
                title: "Cave Exploration",
                description: "Spectacular underground caves with stalactites and stalagmites."
            },
            {
                title: "Spa Experience",
                description: "Traditional Arab baths and spa treatments for ultimate relaxation."
            }
        ]
    }
};

// الحصول على اسم البرنامج من URL
function getProgramFromURL() {
    var urlParams = new URLSearchParams(window.location.search);
    return decodeURIComponent(urlParams.get('program') || '');
}

// ملء التفاصيل على الصفحة
function displayProgramDetails() {
    var programName = getProgramFromURL();
    var program = programsData[programName];

    if (!program) {
        document.getElementById('program-details').innerHTML = `
            <h1>Program Not Found</h1>
            <p>Sorry, the program you're looking for doesn't exist.</p>
            <a href="destinations-1.html" class="back-btn">← Back to Destinations</a>
        `;
        return;
    }

    var html = `
        <h1>${program.name}</h1>
        
        <div class="details-content">
            <div class="image-section">
                <img src="${program.image}" alt="${program.name}">
            </div>
            
            <div class="info-section">
                <h2>${program.country}</h2>
                <div class="price-tag">
                    ${program.price} • ${program.duration}
                </div>
                <p>${program.description}</p>
                <h3 style="color: var(--color-earthydrift); margin-top: 20px; margin-bottom: 15px;">Highlights:</h3>
                <ul>
                    ${program.highlights.map(h => `<li>${h}</li>`).join('')}
                </ul>
            </div>
        </div>

        <div class="features-section">
            <h2>What's Included</h2>
            <div class="features-grid">
                ${program.features.map(f => `
                    <div class="feature-card">
                        <h3>${f.title}</h3>
                        <p>${f.description}</p>
                    </div>
                `).join('')}
            </div>
        </div>

        <div class="action-buttons">
            <button class="book-btn" onclick="bookProgram('${program.name}')">
                <i class="fas fa-ticket-alt"></i> Book Now
            </button>
            <button class="share-btn" onclick="shareProgram('${program.name}')">
                <i class="fas fa-share-alt"></i> Share
            </button>
        </div>
    `;

    document.getElementById('program-details').innerHTML = html;
}

// دالة الحجز
function bookProgram(programName) {
    var bookingUrl = "booking.html?destination=" + encodeURIComponent(programName);
    window.location.href = bookingUrl;
}

// دالة المشاركة
function shareProgram(programName) {
    if (navigator.share) {
        navigator.share({
            title: 'Travella - ' + programName,
            text: 'Check out this amazing travel program!',
            url: window.location.href
        }).catch(err => console.log('Error sharing:', err));
    } else {
        alert('Share this link: ' + window.location.href);
    }
}

// تحميل التفاصيل عند تحميل الصفحة
window.addEventListener('load', function() {
    displayProgramDetails();
    // السكرول لأعلى الصفحة
    window.scrollTo(0, 0);
});