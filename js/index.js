const canvas = document.getElementById('stars');
const ctx = canvas.getContext('2d');
let gl = canvas.getContext('webgl');


function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
}

// Resize the canvas to fill browser window dynamically
window.addEventListener('resize', resizeCanvas, false);
resizeCanvas();
let currentTheme;

function switchTheme(themeName) {
    // console.log('switching theme')
    if (currentTheme) {
        // Stop the current theme's animation loop if necessary
    }

    switch (themeName) {
        case 'starryNight':
            // console.log('starry night')
            currentTheme = new StarryNightTheme(ctx, canvas, gl);
            break;
        case 'starryMulticolor':
            currentTheme = new MulticoloredStarsTheme(ctx, canvas, gl);
            break;
        // Add more cases for additional themes
    }
    currentTheme.initialize();
    currentTheme.start();
}

// Start with the default theme
switchTheme('starryNight');

function decodeEmail(emailElement, buttonElement) {
    let decodedEmail = '';
    let encodedEmail = emailElement.innerHTML;
    for (let i = 0; i < encodedEmail.length; i++) {
        let charCode = encodedEmail.charCodeAt(i);
        if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
            let offset = (charCode >= 97) ? 97 : 65;
            decodedEmail += String.fromCharCode((charCode - offset + 13) % 26 + offset);
        } else {
            decodedEmail += encodedEmail[i];
        }
    }
    emailElement.outerHTML = `<a href="mailto:${decodedEmail}">${decodedEmail}</a>`
    buttonElement.remove();
  }