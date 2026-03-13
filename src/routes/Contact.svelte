<script lang="ts">
	interface Props {
		contact_name: string;
		contact_url: string;
		contact_icon_dark: string;
		contact_icon_light: string;
	}

	let { contact_name, contact_url, contact_icon_dark, contact_icon_light }: Props = $props();
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
</style>
