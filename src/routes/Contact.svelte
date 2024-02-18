<script lang="ts">
	export let contact_name: string;
	export let contact_url: string;
	export let contact_icon_dark: string;
	export let contact_icon_light: string;
</script>

<div class="contact">
	<p>
		<a href={contact_url}>
			<img src={contact_icon_dark} alt={contact_name} class="darktheme" />
			<img src={contact_icon_light} alt={contact_name} class="lighttheme" />
		</a>
	</p>
</div>

<style>
	img {
		max-width: 64px;
		max-height: 64px;
		margin: 5px;
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
