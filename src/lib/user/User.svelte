<script lang="ts">
    import { useQuery } from '@sveltestack/svelte-query'
import type { User } from '../../interfaces/user';

    const githubUser = useQuery<unknown, unknown, User>('users/nilomiranda')
</script>

<main class="flex flex-col items-center">
    {#if $githubUser.isLoading}
        <strong class="text-3xl font-bold underline">Loading user</strong>
    {:else}
        <div class="flex flex-col items-center">
            <img class="h-20 w-20 rounded-full" src={$githubUser.data.avatar_url} alt="{$githubUser.data.login} profile picture" />
            <h1 class="heading-h1 text-center w-full">{$githubUser.data.login}'s TIL</h1>
        </div>
    {/if}
</main>