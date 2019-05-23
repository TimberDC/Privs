import {
  commonParamsA,
  commonParamsB
} from './config'
import axios from 'axios'

export function getDetailList(floor, cid) {
  const url = 'https://api.dmm.com/affiliate/v3/ItemList?'

  const data = Object.assign({}, commonParamsA, {
    floor: floor,
    cid: cid
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getActorImg(id) {
  const url = 'https://api.dmm.com/affiliate/v3/ActressSearch?'
  const data = Object.assign({}, commonParamsB, {
    actress_id: id
  })

  return axios.get(url, {
    params: data
  }).then((res) => {
    return Promise.resolve(res.data)
  })
}

export function getLargeImg(arr) {
  var newArray = []
  var frontUrl = ''
  var endUrl = ''
  var url = ''
  for (let i = 0; i < arr.length; i++) {
    var dotIndex = arr[i].indexOf('-')
    frontUrl = arr[i].substring(0, dotIndex)
    endUrl = arr[i].substring(dotIndex)
    url = frontUrl.concat('jp').concat(endUrl)
    newArray.push(url)
  }
  return newArray
}

export function getVideoUrl(cid) {
  const firstWord = cid.substr(0, 1)
  const secondWord = cid.substr(0, 3)
  var url = ''
  var newCid = cid.replace('00', '')
  var dvaj = new RegExp(/dvaj/)
  var ssni = new RegExp(/ssni/)
  var hnd = new RegExp(/hnd/)
  var xrw = new RegExp(/xrw/)
  var jufe = new RegExp(/jufe/)
  var miaa = new RegExp(/miaa/)
  var suji = new RegExp(/suji/)
  var mifd = new RegExp(/mifd/)
  var ipx = new RegExp(/ipx/)
  if (cid.match(dvaj) || cid.match(ssni) || cid.match(hnd) || cid.match(jufe) || cid.match(miaa) || cid.match(suji) || cid.match(mifd) || cid.match(ipx)) {
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${cid}/${cid}_dmb_w.mp4`
  } else if (cid.match(xrw)) {
    var xrwCid = newCid.substring(3)
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/8/84x/84${xrwCid}/84${xrwCid}_dmb_w.mp4`
  } else {
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${newCid}/${newCid}_dmb_w.mp4`
  }
  return url
}
