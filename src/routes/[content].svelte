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
        <h1>{$repositoryData.data[0].name.replace('.md', '')}</h1>
    {/if}
</div>