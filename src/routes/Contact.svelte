<script lang="ts">
	export let contact_name: string;
	export let contact_url: string;
	export let contact_icon: string;
</script>

<div class="contact">
	<p>
		<a href={contact_url}>
			<img src={contact_icon} alt={contact_name} />
		</a>
	</p>
</div>

<style>
	img {
		max-width: 64px;
		max-height: 64px;
		margin: 5px;
	}
</style>
