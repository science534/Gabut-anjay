export function initStars(containerId) {
    const container = document.getElementById(containerId);
    for (let i = 0; i < 150; i++) {
        const star = document.createElement('div');
        star.className = 'star-particle';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDuration = `${Math.random() * 3 + 2}s`;
        container.appendChild(star);
    }
}
