<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';
	import sun from '$lib/assets/images/light/sun.svg';
	import moon from '$lib/assets/images/dark/moon.svg';

	type NavItem = {
		name: string;
		link: string;
	};

	export let brand_name: string;
	export let nav_links: NavItem[];
</script>

<nav>
	<ul>
		<li><span>{brand_name}</span></li>
		<ThemeToggle />
		<img alt="themeIndicator" src={moon} class="darktheme" />
		<img alt="themeIndicator" src={sun} class="lighttheme" />
	</ul>
	<ul>
		{#each nav_links as item}
			<li><a href={item.link}>{item.name}</a></li>
		{/each}
	</ul>
</nav>

<style>
	nav {
		border-bottom: 1px solid;
		margin-bottom: 5px;
	}

	span {
		font-family: 'Raleway';
	}

	li {
		font-family: 'Raleway';
	}

	img {
		max-width: 16px;
		max-height: 16px;
		margin: 5px;
	}

	nav .darktheme,
	nav .lighttheme {
		display: none;
	}

	[data-theme='dark'] nav .darktheme {
		display: inline;
	}

	[data-theme='light'] nav .lighttheme {
		display: inline;
	}
</style>
