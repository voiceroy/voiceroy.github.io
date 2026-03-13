<script>
	import Project from './Project.svelte';
</script>

<p>Check out my <a href="https://adventofcode.com/">Advent Of Code</a> solutions</p>

<Project
	project_name="Advent Of Code"
	project_link="https://github.com/voiceroy/aoc"
	project_description="Advent Of Code Solutions, primarily in Golang with Python and Rust here and there"
	project_icon_dark={'/aoc-dark.png'}
	project_icon_light={'/aoc-light.png'}
/>

<p>Some of my projects:</p>

<Project
	project_name="Wordle Clone"
	project_link="https://github.com/voiceroy/Wordle-Clone"
	project_description="My version of the Wordle puzzle."
	project_icon_dark={'/wordle-clone.png'}
	project_icon_light={'/wordle-clone.png'}
/>

<style>
	p {
		font-family: 'Montserrat';
		font-size: 1.125rem;
	}
</style>
