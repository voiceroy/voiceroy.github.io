<script lang="ts">
	import ThemeToggle from './ThemeToggle.svelte';

	type NavItem = {
		name: string;
		link: string;
	};

	interface Props {
		brand_name: string;
		nav_links: NavItem[];
	}

	let { brand_name, nav_links }: Props = $props();
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

	span,
	li {
		font-family: 'Raleway';
	}
</style>
