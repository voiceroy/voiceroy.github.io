<script lang="ts">
	type NavItem = {
		name: string;
		link: string;
	};

	export let brand_name: string;
	export let nav_links: NavItem[];
	let darkMode: boolean = true;

	export function toggleTheme() {
		darkMode = !darkMode;
		let containerTag = document.getElementById('main')!;
		containerTag.setAttribute('data-theme', darkMode ? 'dark' : 'light');
		containerTag.style.backgroundColor = 'var(--pico-background-color);';
		containerTag.style.color = 'var(--pico-color);';
	}
</script>

<nav>
	<ul>
		<li><span>{brand_name}</span></li>
		<input name="theme" type="checkbox" role="switch" checked on:change={toggleTheme} />
	</ul>
	<ul>
		{#each nav_links as item}
			<li><a href={item.link}>{item.name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid white;
		margin-bottom: 5px;
	}

	span {
		font-family: 'Raleway';
	}

	li {
		font-family: 'Raleway';
	}

	input {
		margin-left: 10px;
	}
</style>
