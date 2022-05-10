export type HomePageRequest = {
    data: HomePageData
    meta: Meta
}

type Meta = {}

type HomePageData = {
    id: number
    attributes: HomePageAttributes
}

type HomePageAttributes = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    hero: Hero
}

type Hero = {
    data: HeroData
}

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
}
