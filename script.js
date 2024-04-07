const audio = document.getElementById('audio');
const backButton = document.querySelector('.back-button');
const headline = document.getElementById('headline');

function playSound(sound, gifSrc) {
    stopSound();
    switch (sound) {
        case 'rain':
            audio.src = 'rain.mp3';
            break;
        case 'forest':
            audio.src = 'forest.mp3';
            break;
        case 'sea':
            audio.src = 'sea.mp3';
            break;
        case 'night':
            audio.src = 'night.mp3';
            break;
        case 'lightning':
            audio.src = 'lightning.mp3';
            break;
        default:
            break;
    }
    audio.play();
    document.body.style.backgroundImage = `url('${gifSrc}')`; // Set the clicked GIF as the background image
    document.body.style.backgroundSize = 'cover';
    document.body.style.backgroundPosition = 'center';
    document.body.style.backgroundRepeat = 'no-repeat';
    backButton.style.display = 'block'; // Show the back button
    adjustTextColor();
}

function stopSound() {
    audio.pause();
    audio.currentTime = 0;
    document.body.style.backgroundImage = 'none'; // Reset background image
    backButton.style.display = 'none'; // Hide the back button
    headline.style.color = '#fff'; // Reset headline color
}

// Close fullscreen gif on back button click
backButton.addEventListener('click', stopSound);

function adjustTextColor() {
    // Get background color brightness
    const backgroundColor = getComputedStyle(document.body).backgroundColor;
    const brightness = calculateBrightness(backgroundColor);
    // Set text color based on brightness
    headline.style.color = brightness > 125 ? '#000' : '#fff'; // Dark text for light backgrounds, light text for dark backgrounds
}

function calculateBrightness(color) {
    // Convert hex color to RGB
    const hex = color.replace('#', '');
    const r = parseInt(hex.substring(0, 2), 16);
    const g = parseInt(hex.substring(2, 4), 16);
    const b = parseInt(hex.substring(4, 6), 16);
    // Calculate brightness (using relative luminance formula)
    return (r * 299 + g * 587 + b * 114) / 1000;
}
