export type SiteSettingsResponse = {
    data: Data
    meta: Meta
}

type Meta = {}

type Data = {
    id: number
    attributes: Attributes
}

type Attributes = {
    business_name: string
    contact_number: string
    google_maps_link: string
    createdAt: string
    updatedAt: string
    publishedAt: string
}
