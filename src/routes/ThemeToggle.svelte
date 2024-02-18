<script lang="ts">
	import { onMount } from 'svelte';

	let currentTheme: string;
	const STORAGE_KEY = 'theme';
	const DARK_PREFERENCE = '(prefers-color-scheme: dark)';
	const prefersDarkTheme = () => window.matchMedia(DARK_PREFERENCE).matches;

	const THEMES = {
		DARK: 'dark',
		LIGHT: 'light'
	};

	function toggleTheme() {
		const stored = localStorage.getItem(STORAGE_KEY);

		if (stored) {
			localStorage.removeItem(STORAGE_KEY);
		} else {
			localStorage.setItem(STORAGE_KEY, prefersDarkTheme() ? THEMES.LIGHT : THEMES.DARK);
		}

		applyTheme();
	}

	function applyTheme() {
		const preferredTheme = prefersDarkTheme() ? THEMES.DARK : THEMES.LIGHT;
		currentTheme = localStorage.getItem(STORAGE_KEY) ?? preferredTheme;

		let containerTag = document.documentElement;
		if (currentTheme == THEMES.DARK) {
			containerTag.setAttribute('data-theme', THEMES.DARK);
		} else {
			containerTag.setAttribute('data-theme', THEMES.LIGHT);
		}
	}

	onMount(() => {
		applyTheme();
		window.matchMedia(DARK_PREFERENCE).addEventListener('change', applyTheme);
	});
</script>

<input
	name="theme"
	type="checkbox"
	role="switch"
	checked={currentTheme !== THEMES.DARK}
	on:change={toggleTheme}
/>
