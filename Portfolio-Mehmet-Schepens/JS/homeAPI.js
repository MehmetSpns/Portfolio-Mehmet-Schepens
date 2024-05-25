// Picture/unplash API

document.getElementById('picSearchBtn').addEventListener('click', searchPictures);
// hier gebruik ik een constante
const token = '8m5NFf5G8_R6vOSJRUP7LG6cu2hypx6bQbDHb_Ua13I';
// Hier maak ik gebruik van een async | await |promises functions
async function searchPictures() {
    const input = document.getElementById('pictureSearcher').value;
    try {
        // Hier fetch ik data direct van Unsplash API + template literals
        const response = await fetch(`https://api.unsplash.com/search/photos?query=${input}&client_id=${token}`);
        // Hier voer ik een error uit als de response niet ok is
        if (!response.ok) {
            throw new Error(`ERROR!`);
        }
        const data = await response.json();
        showOutput(data);
    } catch (error) {
        // Als de API niet werkt, krijg je een alert
        alert('Er is een probleem met de API. Probeer het later opnieuw.');
    }
}

function showOutput(data) {
    const resultsContainer = document.getElementById('picOutput');
    // Hier maak ik de container leeg voor dde nieuwe foto's
    resultsContainer.innerHTML = '';
    // Hier geef ik een alert als er geen resultaten zijn gevonden door Unsplash
    if (data.results.length === 0) {
        alert('Geen resultaten gevonden. Probeer een andere zoekterm.');
        return;
    }
    data.results.forEach(photo => {
        // Opmaken van een nieuwe container voor de foto's
        const photoElement = document.createElement('div');
        photoElement.classList.add('pic-container');
        // invoegen van de foto's in onze container
        photoElement.innerHTML = `
            <img src="${photo.urls.small}" alt="${photo.alt_description}">
        `;
        resultsContainer.appendChild(photoElement);
    });
}

