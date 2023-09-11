function toggleMode(newMode) {
    const root = document.documentElement;
    if (newMode === 'dark') {
        root.style.setProperty('--fgColor', 'var(--dark-fgColor)');
        root.style.setProperty('--bgColor', 'var(--dark-bgColor)');
        root.style.setProperty('--bgFilter', 'var(--dark-bgFilter)');
        root.style.setProperty('--bgImage', 'var(--dark-bgImage)');
    } else {
        root.style.setProperty('--fgColor', 'var(--light-fgColor)');
        root.style.setProperty('--bgColor', 'var(--light-bgColor)');
        root.style.setProperty('--bgFilter', 'var(--light-bgFilter)');
        root.style.setProperty('--bgImage', 'var(--light-bgImage)');
    }

    // Store the selected mode in localStorage
    localStorage.setItem('mode', newMode);
}

function detectAndToggleMode() {
    // Detect user preference for dark mode
    const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;

    // Set the initial mode based on user preference or stored preference
    const initialMode = localStorage.getItem('mode') || (prefersDarkMode ? 'dark' : 'light');
    toggleMode(initialMode);

    // Watch for changes in system color scheme preference
    window.matchMedia('(prefers-color-scheme: dark)').addListener(event => {
        toggleMode(event.matches ? 'dark' : 'light');
    });
}

// Call the function to detect and toggle the mode
detectAndToggleMode();
