type QueryFunctionConfig = {
    headers: Record<string, string>
}

export const defaultQueryFunction = async ({ queryKey, config }: { queryKey: string[], config?: QueryFunctionConfig }) => {
    const response = await fetch(`https://api.github.com/${queryKey[0]}`, {
        headers: config?.headers,
    })

    const contentFormat = config?.headers?.accept?.includes('raw') || config?.headers?.Accept?.includes('raw') ? 'text' : 'json'

    const parsedResponse = await response[contentFormat]();

    return parsedResponse;
}