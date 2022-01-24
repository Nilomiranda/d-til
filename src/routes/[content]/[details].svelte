<script lang="ts">
    import { page } from '$app/stores'
    import { useQuery } from '@sveltestack/svelte-query';
    import { defaultQueryFunction } from '../../config/query/client';
    import SvelteMarkdown from 'svelte-markdown'
    
    const { url: { pathname } } = $page;

    const repositoryData = useQuery(`repos/nilomiranda/TIL/contents${pathname}`, ({ queryKey }) => defaultQueryFunction({ queryKey, config: {
        headers: {
            Accept: 'application/vnd.github.v3.raw+json'
        }
    } }))
</script>

<div>
    <h1>Content</h1>

    {#if $repositoryData.isLoading}
        <strong>Loading</strong>
    {:else}
        <!-- <p>{$repositoryData.data}</p> -->
        <SvelteMarkdown source={$repositoryData.data} />
    {/if}
</div>