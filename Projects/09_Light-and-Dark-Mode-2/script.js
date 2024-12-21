// Global theme toggle
const themeToggle = document.getElementById('theme-toggle');
const containerToggle = document.getElementById('container-theme-toggle');
const customContainer = document.querySelector('.custom-container');

// Global theme function
function toggleGlobalTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    document.documentElement.setAttribute('data-theme', newTheme);
    themeToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Container theme function
function toggleContainerTheme() {
    const currentTheme = customContainer.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    customContainer.setAttribute('data-theme', newTheme);
    containerToggle.textContent = newTheme === 'dark' ? '☀️' : '🌙';
}

// Check user's preferred color scheme for global theme
if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
    document.documentElement.setAttribute('data-theme', 'dark');
    themeToggle.textContent = '☀️';
}

// Event listeners
themeToggle.addEventListener('click', toggleGlobalTheme);
containerToggle.addEventListener('click', toggleContainerTheme);