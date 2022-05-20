import { format, parse } from 'date-fns'

const TIME_STRAPI_FORMAT = 'H:mm:ss.SSS'
const TIME_VIEW_FORMAT = 'h:mm a'

export const formatOperatingHours = (time: string) => {
    const date = parse(time, TIME_STRAPI_FORMAT, new Date())
    return format(date, TIME_VIEW_FORMAT)
}
