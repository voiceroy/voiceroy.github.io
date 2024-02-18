<script>
	import Project from './Project.svelte';

	import wordleClone from '$lib/assets/images/projects/wordle-clone.png';
</script>

<p>Some of my projects:</p>
<Project
	project_name="Wordle Clone"
	project_link="https://github.com/voiceroy/Wordle-Clone"
	project_description="My version of the Wordle puzzle."
	project_icon={wordleClone}
/>

<style>
	p {
		font-family: 'Montserrat';
		font-size: 1.125rem;
	}
</style>
