<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

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
</style>
