export const callApi = async <DataShape>(
    url: string,
    options: RequestInit = {},
): Promise<DataShape> => {
    return fetch(url, options)
        .then((response) => response.json())
        .then((data) => data as DataShape)
}
