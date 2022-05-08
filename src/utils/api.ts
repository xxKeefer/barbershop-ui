export const callApi = async <DataShape>(
    url: string,
    options: RequestInit = {},
    preview?: boolean,
): Promise<DataShape | null> => {
    const _url = preview ? `${url}&status=draft` : url
    const response = await fetch(_url, options)
    const data = response.json()
    if (!data) return null
    return data as Promise<DataShape>
}
