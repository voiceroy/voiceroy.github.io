<script lang="ts">
	export let project_name: string;
	export let project_description: string;
	export let project_link: string;
	export let project_icon: string;
</script>

<div class="project">
	<article>
		<a class="project-name" href={project_link} target="_blank" rel="noopener noreferrer"
			>{project_name}</a
		>
		<p class="project-description">{project_description}</p>
		<img src={project_icon} alt={project_name} />
	</article>
</div>

<style>
	.project {
		font-family: 'Montserrat';
	}

	.project-name {
		text-decoration: none;
		font-size: 1rem;
	}

	.project-description {
		font-size: 0.9rem;
	}

	img {
		border-radius: var(--pico-border-radius);
	}
</style>
