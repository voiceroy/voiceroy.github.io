export let darkMode: boolean = true;

export function toggleTheme() {
    darkMode = !darkMode;
    let containerTag = document.documentElement;
    containerTag.setAttribute('data-theme', darkMode ? 'dark' : 'light');
}
