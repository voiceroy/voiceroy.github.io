<script>
	import Project from './Project.svelte';

	import aocDark from '$lib/assets/images/projects/aoc-dark.png?enhanced';
	import aocLight from '$lib/assets/images/projects/aoc-light.png?enhanced';
	import wordle from '$lib/assets/images/projects/wordle-clone.png?enhanced';
</script>

<p>Check out my <a href="https://adventofcode.com/">Advent Of Code</a> solutions</p>

<Project
	project_name="Advent Of Code"
	project_link="https://github.com/voiceroy/aoc"
	project_description="Advent Of Code Solutions, primarily in Golang with Python and Rust here and there"
	project_icon_dark={aocDark}
	project_icon_light={aocLight}
/>

<p>Some of my projects:</p>

<Project
	project_name="Wordle Clone"
	project_link="https://github.com/voiceroy/Wordle-Clone"
	project_description="My version of the Wordle puzzle."
	project_icon_dark={wordle}
	project_icon_light={wordle}
/>

<style>
	p {
		font-family: 'Montserrat';
		font-size: 1.125rem;
	}
</style>
