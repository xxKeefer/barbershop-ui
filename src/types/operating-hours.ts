export type OperatingHoursResponse = {
    data: Data
    meta: Meta
}

type Meta = {}

type Data = {
    id: number
    attributes: Attributes
}

type Attributes = {
    createdAt: string
    updatedAt: string
    publishedAt: string
    time_slot: Timeslot[]
}

type Timeslot = {
    id: number
    open: string
    close: string
    operating: boolean
    name: string
}
