<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'

    const repository = useQuery('repos/nilomiranda/TIL')
</script>

<div class="flex flex-col items-center">
    {#if $repository.isLoading}
        <strong>Loading repository</strong>
    {:else}
        <a rel="noreferrer" class="mb-5 block" href={$repository.data.html_url}>Go to repository on Github</a>
    {/if}
</div>