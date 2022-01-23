<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'

    const githubUser = useQuery('users/nilomiranda')
</script>

<main>
    {#if $githubUser.isLoading}
        <strong>Loading user</strong>
    {:else}
        <div>
            <img src={$githubUser.data.avatar_url} alt="{$githubUser.data.login} profile picture" />
            <h1>{$githubUser.data.login}'s TIL</h1>
        </div>
    {/if}
</main>