import { StrapiDates, StrapiImage, StrapiMeta } from './strapi'

export type BarbersResponse = {
    data: Data[]
    meta: StrapiMeta
}

type Data = {
    id: number
    attributes: Barber
}

export type Barber = {
    name: string
    bio: string
    photo: StrapiImage
} & StrapiDates
