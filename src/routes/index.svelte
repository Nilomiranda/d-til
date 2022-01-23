<script lang="ts">
    import { QueryClient, QueryClientProvider, useQuery } from '@sveltestack/svelte-query'
import Contents from '../lib/repo/Contents.svelte';
import Repositoy from '../lib/repo/Repositoy.svelte';
import User from '../lib/user/User.svelte';

    const defaultQueryFunction = async ({ queryKey }) => {
        const response = await fetch(`https://api.github.com/${queryKey[0]}`)
        const responseJson = await response.json();
        return responseJson;
    }

    const queryClient = new QueryClient({
        defaultOptions: {
            queries: {
                queryFn: defaultQueryFunction,
            }
        }
    });
</script>

<QueryClientProvider client={queryClient}>
    <main>
        <User />
        <Repositoy />

        <Contents />
    </main>
</QueryClientProvider>