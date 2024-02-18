<script>
	import Contact from './Contact.svelte';

	import linkedin from '$lib/assets/images/linkedin.svg';
	import github from '$lib/assets/images/github.svg';
</script>

<div id="contactme">
	<Contact contact_name="Github" contact_url="https://github.com/voiceroy" contact_icon={github} />
	<Contact
		contact_name="LinkedIn"
		contact_url="https://www.linkedin.com/in/harishankargaddanakeri/"
		contact_icon={linkedin}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
