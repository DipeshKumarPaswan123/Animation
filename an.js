const userNameElement = document.getElementById('userName');
const animateNameButton = document.getElementById('animateNameButton');

animateNameButton.addEventListener('click', () => {
    // Change the color of the button
    animateNameButton.style.backgroundColor = getRandomColor();

    gsap.to(userNameElement, {
        duration: 1,
        scale: 1.2,
        opacity: 0.7,
        y: 20,
        ease: 'power2.inOut',
        onComplete: () => {
            const newName = prompt('Enter your new name:');
            if (newName) {
                userNameElement.textContent = newName;
                gsap.from(userNameElement, { duration: 1, scale: 1, opacity: 0.7, y: -20, ease: 'power2.inOut' });
            }
        }
    });
});

// Function to generate a random color
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
