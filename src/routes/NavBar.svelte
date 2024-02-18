<script lang="ts">
	import { toggleTheme } from '$lib/changeTheme';
	import moon from '$lib/assets/images/dark/moon.svg';
	import sun from '$lib/assets/images/light/sun.svg';

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
		<input name="theme" type="checkbox" role="switch" checked on:change={toggleTheme} />
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

	input {
		margin-left: 10px;
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
