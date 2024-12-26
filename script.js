// Example service names in JSON format
const serviceNames = [
    "Virtual WhatsApp numbers",
    "Capcut pro",
    "UK/USA Tiktok account",
    "Tiktok Monetization",
    "YouTube Monetization",
    "Netflix Single Screen",
    "Prime Video Full account",
    "YT Premium 1 month Invite",
    "Canva Edu",
    "Chaupal",
    "Chaupal World-wide",
    "Zee5 HD",
    "Zee5 4K",
    "Sonylive",
    "Hotflix",
    "UllU",
    "ALT Balaji",
    "Primeshots",
    "Rabbit",
    "Zoneflix",
    "Disney+",
    "HBO Max HD",
    "Disney+ Hotstar Canada",
    "Disney+ Hotstar India with VPN",
    "Jiocinema with VPN",
    "Hulu No Ads",
    "Crunchyroll",
    "Paramount + Showtime (No Ads)",
    "Peacock TV + Wwe (No Ads)",
    "Curiosity Stream",
    "Discovery+",
    "Apple Music 3 month",
    "Apple TV 3 months",
    "WWE Official Log in",
    "Express VPN",
    "Express VPN PC Key",
    "HMA VPN",
    "HMA VPN PC Key",
    "Proton VPN",
    "Nord VPN",
    "Cyberghost",
    "Surfshark",
    "IP Vanish",
    "PIA",
    "Hotspot Shield",
    "CHATGPT",
    "Grammarly",
    "Quillbot",
    "Freepik",
    "Rolex TV",
    "Bos TV",
    "Opplex",
    "Starshare",
    "B1g",
    "5glive",
    "Zain TV",
    "Trex"
];


// Function to generate service divs dynamically
function generateServiceDivs(services) {
    // Get the container where divs will be added
    const container = document.getElementById('services-container');

    // Clear existing content in the container
    container.innerHTML = '';

    // Loop through the services and create a div for each
    services.forEach(service => {
        // Create a div element
        const serviceDiv = document.createElement('div');

        // Add the "service-item" class to the div
        serviceDiv.className = 'service-item';

        // Create a heading element
        const heading = document.createElement('h3');
        heading.textContent = service;

        // Append the heading to the div
        serviceDiv.appendChild(heading);

        // Append the div to the container
        container.appendChild(serviceDiv);
    });
}

// Call the function with the service names
generateServiceDivs(serviceNames);
