<script lang="ts">
	interface Props {
		project_name: string;
		project_description: string;
		project_link: string;
		project_icon_dark: string;
		project_icon_light: string;
	}

	let {
		project_name,
		project_description,
		project_link,
		project_icon_dark,
		project_icon_light
	}: Props = $props();
</script>

<div class="project">
	<article>
		<a class="project-name" href={project_link} target="_blank" rel="noopener noreferrer"
			>{project_name}</a
		>
		<p class="project-description">{project_description}</p>
		<enhanced:img src={project_icon_dark} alt={project_name} class="darktheme" />
		<enhanced:img src={project_icon_light} alt={project_name} class="lighttheme" />
	</article>
</div>

<style>
	.project {
		font-family: 'Montserrat';
	}

	.project-name {
		font-size: 1rem;
	}

	.project-description {
		font-size: 0.9rem;
	}

	enhanced\:img {
		border-radius: var(--pico-border-radius);
	}
</style>
