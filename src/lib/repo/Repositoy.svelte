<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'

    const repository = useQuery('repos/nilomiranda/TIL')
</script>

<main>
    {#if $repository.isLoading}
        <strong>Loading repository</strong>
    {:else}
        <a rel="noreferrer" href={$repository.data.html_url}>Go to repository on Github</a>
    {/if}
</main>