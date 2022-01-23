<script lang="ts">
    import { useQuery } from "@sveltestack/svelte-query";

    const allowedFolderNames = ['html', 'mongo'];

    const contents = useQuery('repos/nilomiranda/TIL/contents')
</script>

<main>
    {#if $contents.isLoading}
        <strong>Loading contents</strong>
    {:else}
        
        <ul>
            {#each $contents.data as content}
            {#if allowedFolderNames.includes(content.name)}
                <li>
                    <a href="/{content.name}">{content.name}</a>
                </li>
            {/if}
        {/each}
        </ul>

    {/if}
</main>