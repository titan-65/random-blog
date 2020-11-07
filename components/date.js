import {format} from 'date-fns'
import parseISO from 'date-fns/parseISO'

export default function Date({ dateString }) {
    const date = parseISO(dateString)
    return <time dateTime={dateString}>{format(date, 'MM/dd/yyyy')}</time>
}
