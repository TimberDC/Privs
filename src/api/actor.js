import { commonParamsB } from './config'
import axios from 'axios'

export function getActorList () {
  const url = 'https://api.dmm.com/affiliate/v3/ActressSearch?'

  const data = Object.assign({}, commonParamsB, {
    hits: 30
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}
