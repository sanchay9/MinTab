function setMode(isDark) {
  const root = document.documentElement;

  if (isDark) {
    root.style.setProperty("--fgColor", "var(--dark-fgColor)");
    root.style.setProperty("--bgColor", "var(--dark-bgColor)");
    root.style.setProperty("--bgFilter", "var(--dark-bgFilter)");
    root.style.setProperty("--bgImage", "var(--dark-bgImage)");
  } else {
    root.style.setProperty("--fgColor", "var(--light-fgColor)");
    root.style.setProperty("--bgColor", "var(--light-bgColor)");
    root.style.setProperty("--bgFilter", "var(--light-bgFilter)");
    root.style.setProperty("--bgImage", "var(--light-bgImage)");
  }
}

// Set initial mode
setMode(window.matchMedia("(prefers-color-scheme: dark)").matches);

// Listen for changes in system color scheme preference
window
  .matchMedia("(prefers-color-scheme: dark)")
  .addEventListener("change", (event) => {
    setMode(event.matches);
  });
