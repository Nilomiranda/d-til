<script lang="ts">
    import { page } from '$app/stores'
    import { useQuery } from '@sveltestack/svelte-query';
    
    const { params: { content } } = $page;

    const repositoryData = useQuery(`repos/nilomiranda/TIL/contents/${content}`)
</script>

<div>
    {#if $repositoryData.isLoading}
        <strong>Loading repository details</strong>
    {:else}
        {#each $repositoryData.data as repositoryContent}
            <a href="/{repositoryContent.path}">{repositoryContent.name.replace('.md', '')}</a>
        {/each}
    {/if}
</div>