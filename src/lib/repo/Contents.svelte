<script lang="ts">
    import { useQuery } from "@sveltestack/svelte-query";
    import { allowedFolderNames, githubUserName, repositoryName } from "../../constants";
    import type { RepositoryContent } from "../../interfaces/repository";

    const contents = useQuery<unknown, unknown, RepositoryContent[]>(`repos/${githubUserName}/${repositoryName}/contents`)
</script>

<div class="flex flex-col items-center">
    {#if $contents.isLoading}
        <strong>Loading contents</strong>
    {:else}
        
        <ul class="flex flex-col items-center">
            {#each $contents.data as content}
            {#if allowedFolderNames.includes(content.name)}
                <li>
                    <a href="/{content.name}">{content.name}</a>
                </li>
            {/if}
        {/each}
        </ul>

    {/if}
</div>