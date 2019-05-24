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

export function getActorID(arr) {
  var newArray = []
  for (let i = 0; i < arr.length; i++) {
    newArray.push(arr[i].id)
  }
  return newArray
}

export function getActorImg(arr) {
  var newArray = []
  var actorURL = ''
  for (let i = 0; i < arr.length; i++) {
    getActorDetail(arr[i]).then((res) => {
      res = res.result
      if (!res.actress[0].imageURL) {
        actorURL = 'https://via.placeholder.com/120'
      } else {
        actorURL = res.actress[0].imageURL.large
      }
      newArray.push(actorURL)
    })
  }
  return newArray
}

function getActorDetail(id) {
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
  var geki = new RegExp(/geki/)
  var arm = new RegExp(/arm/)
  var hjmo = new RegExp(/hjmo/)
  var mide = new RegExp(/mide/)
  var kane = new RegExp(/kane/)
  var juy = new RegExp(/juy/)
  var aukg = new RegExp(/aukg/)
  if (cid.match(dvaj) || cid.match(ssni) || cid.match(hnd) || cid.match(jufe) || cid.match(miaa) || cid.match(suji) || cid.match(mifd) || cid.match(ipx) || cid.match(geki) || cid.match(arm) || cid.match(hjmo) || cid.match(mide) || cid.match(kane) || cid.match(juy) || cid.match(aukg)) {
    url = `https://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${cid}/${cid}_dmb_w.mp4`
  } else if (cid.match(xrw)) {
    var xrwCid = newCid.substring(3)
    url = `https://cc3001.dmm.co.jp/litevideo/freepv/8/84x/84${xrwCid}/84${xrwCid}_dmb_w.mp4`
  } else {
    url = `https://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${newCid}/${newCid}_dmb_w.mp4`
  }
  return url
}
