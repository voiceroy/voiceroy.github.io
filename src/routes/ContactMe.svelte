<script>
	import Contact from './Contact.svelte';

	import linkedinDark from '$lib/assets/images/dark/linkedin.svg';
	import githubDark from '$lib/assets/images/dark/github.svg';

	import linkedinLight from '$lib/assets/images/light/linkedin.svg';
	import githubLight from '$lib/assets/images/light/github.svg';
</script>

<div id="contactme">
	<Contact
		contact_name="Github"
		contact_url="https://github.com/voiceroy"
		contact_icon_dark={githubDark}
		contact_icon_light={githubLight}
	/>
	<Contact
		contact_name="LinkedIn"
		contact_url="https://www.linkedin.com/in/harishankargaddanakeri/"
		contact_icon_dark={linkedinDark}
		contact_icon_light={linkedinLight}
	/>
</div>

<style>
	div {
		display: flex;
		flex-direction: row;
		justify-content: center;
	}
</style>
