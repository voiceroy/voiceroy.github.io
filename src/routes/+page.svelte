<script lang="ts">
	import '../styles.scss';

	import NavBar from './NavBar.svelte';
	import Header from './Header.svelte';
	import Projects from './Projects.svelte';
	import ContactMe from './ContactMe.svelte';
	import Copyright from './Copyright.svelte';

	type NavItem = {
		name: string;
		link: string;
	};

	let brand_name: string = 'Harishankar G';
	let nav_links: NavItem[] = [
		{ name: 'About Me', link: '#aboutme' },
		{ name: 'Contact', link: '#contact' }
	];
</script>

<svelte:head>
	<title>Harishankar G</title>
</svelte:head>

<header>
	<NavBar {brand_name} {nav_links} />
	<Header />
</header>
<main>
	<Projects />
</main>

<footer>
	<ContactMe />
	<Copyright copyright_holder="Harishankar G" />
</footer>
