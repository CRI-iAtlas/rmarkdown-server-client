import {useRedux} from 'hooks-for-redux'
import pages from '../pages.json'

export const [usePage, setPage] = useRedux('page', pages[0])