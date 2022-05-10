export type HeroResponse = {
    data: HeroData
    meta: Meta
}

type Meta = {}

type HeroData = {
    id: number
    attributes: HeroAttributes
}

type HeroAttributes = {
    heading: string
    subheading: string
    linkText: string
    linkUrl?: any
    createdAt: string
    updatedAt: string
    publishedAt: string
    mainImage: Image
    secondImage: Image
}

type Image = {
    data: DataImage
}

type DataImage = {
    id: number
    attributes: ImageAttributes
}

type ImageAttributes = {
    name: string
    alternativeText: string
    caption: string
    width: number
    height: number
    formats: Formats
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

type Formats = {
    thumbnail: Thumbnail
    large: Thumbnail
    medium: Thumbnail
    small: Thumbnail
}

type Thumbnail = {
    name: string
    hash: string
    ext: string
    mime: string
    path?: any
    width: number
    height: number
    size: number
    url: string
}
