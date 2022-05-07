export type StrapiMeta = {
    pagination: StrapiPagination
}

type StrapiPagination = {
    page: number
    pageSize: number
    pageCount: number
    total: number
}

export type StrapiDates = {
    createdAt: string
    updatedAt: string
    publishedAt: string
}

export type StrapiImage = {
    data: {
        id: number
        attributes: ImageAttributes
    }
}

type ImageAttributes = {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats?: any
    hash: string
    ext: string
    mime: string
    size: number
    url: string
    previewUrl?: any
    provider: string
    provider_metadata?: any
    createdAt: string
    updatedAt: string
}
