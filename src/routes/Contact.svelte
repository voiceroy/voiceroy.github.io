<script lang="ts">
	export let contact_name: string;
	export let contact_url: string;
	export let contact_icon_dark: string;
	export let contact_icon_light: string;
</script>

<div class="contact">
	<p>
		<a href={contact_url} target="_blank" rel="noopener noreferrer">
			<img src={contact_icon_dark} alt={contact_name} class="darktheme" />
			<img src={contact_icon_light} alt={contact_name} class="lighttheme" />
		</a>
	</p>
</div>

<style>
	img {
		max-width: 3rem;
		max-height: 3rem;
		margin: 0.25rem;
	}

	.contact .darktheme,
	.contact .lighttheme {
		display: none;
	}

	[data-theme='dark'] .contact .darktheme {
		display: inline;
	}

	[data-theme='light'] .contact .lighttheme {
		display: inline;
	}
</style>
