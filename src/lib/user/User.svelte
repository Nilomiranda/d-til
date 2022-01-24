<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'
    import { githubUserName } from '../../constants';
    import type { User } from '../../interfaces/user';

    const githubUser = useQuery<unknown, unknown, User>(`users/${githubUserName}`)
</script>

<svelt:head>
    <title>{githubUserName}'s TIL</title>
</svelt:head>

<main class="flex flex-col items-center">
    {#if $githubUser.isLoading}
        <strong class="text-3xl font-bold underline">Loading user</strong>
    {:else}
        <div class="flex flex-col items-center">
            <a href={$githubUser.data.html_url}>
                <img class="h-20 w-20 rounded-full" src={$githubUser.data.avatar_url} alt="{$githubUser.data.login} profile picture" />
            </a>
            <h1 class="heading-h1 text-center w-full">{$githubUser.data.login}'s TIL</h1>
        </div>
    {/if}
</main>