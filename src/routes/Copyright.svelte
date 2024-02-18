<script lang="ts">
	export let copyright_holder: string;
</script>

<p>
	&copy; {new Date().getFullYear()}
	{copyright_holder} Powered by
	<span>
		<a href="https://www.svelte.dev">Svelte</a>
		&amp;
		<span><a href="https://picocss.com">PicoCSS</a></span>
	</span>
</p>

<style>
	p {
		text-align: center;
		font-family: 'Raleway';
		font-size: 0.75rem;
	}

	a {
		text-decoration: none;
	}
</style>
