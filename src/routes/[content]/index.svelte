<script lang="ts">
    import { page } from '$app/stores'
    import { useQuery } from '@sveltestack/svelte-query';
    import { githubUserName, repositoryName } from '../../constants';
    import type { RepositoryData } from '../../interfaces/repository';
    
    const { params: { content }, url } = $page;

    const repositoryData = useQuery<unknown, unknown, RepositoryData[]>(`repos/${githubUserName}/${repositoryName}/contents/${content}`)
</script>

<svelt:head>
    <title>{url?.pathname?.replace('/', '')}</title>
</svelt:head>

<div class="w-full flex flex-col items-center">
    {#if $repositoryData.isLoading}
        <strong>Loading repository details</strong>
    {:else}
        <a href="../" class="block mb-11">Go back</a>

        <h1 class="heading-h1 mb-10">Content about {url?.pathname?.replace('/', '')}</h1>

        {#each $repositoryData.data as repositoryContent}
            <a href="/{repositoryContent.path}">{repositoryContent.name.replace('.md', '')}</a>
        {/each}
    {/if}
</div>