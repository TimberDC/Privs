import { commonParamsA } from './config'
import axios from 'axios'

export function getHomeList (floor, sort, hits, offset, keyword) {
  const url = 'https://api.dmm.com/affiliate/v3/ItemList?'

  const data = Object.assign({}, commonParamsA, {
    floor: floor || 'videoa',
    sort: sort,
    hits: hits || 30,
    offset: offset || 1,
    keyword: keyword || ''
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getCateList (floor, sort, hits, id, offset) {
  const url = 'https://api.dmm.com/affiliate/v3/ItemList?'

  const data = Object.assign({}, commonParamsA, {
    floor: floor || 'videoa',
    sort: sort,
    hits: hits || 30,
    article: 'genre',
    article_id: id,
    offset: offset || 1
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
