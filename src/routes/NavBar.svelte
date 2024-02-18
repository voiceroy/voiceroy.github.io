<script lang="ts">
	import { toggleTheme } from '$lib/changeTheme';

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
</style>
