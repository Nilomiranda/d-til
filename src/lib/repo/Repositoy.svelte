<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'
    import { githubUserName, repositoryName } from '../../constants';
    import type { Repository } from '../../interfaces/repository';

    const repository = useQuery<unknown, unknown, Repository>(`repos/${githubUserName}/${repositoryName}`)
</script>

<div class="flex flex-col items-center">
    {#if $repository.isLoading}
        <strong>Loading repository</strong>
    {:else}
        <a rel="noreferrer" class="mb-5 block" href={$repository.data.html_url}>Go to repository on Github</a>
    {/if}
</div>