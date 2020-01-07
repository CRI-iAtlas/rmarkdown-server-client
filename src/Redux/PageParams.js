import { useRedux } from 'hooks-for-redux'
import { page } from './Page'

export const [usePageParams, setPageParams] = useRedux('pageParams', {})

page.subscribe((p) => {
  const parsedUrl = new URL(p.url)
  setPageParams(null)
  fetch(parsedUrl.origin + "/params" + parsedUrl.pathname)
    .then(response => response.json())
    .then(setPageParams)
})