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
  var diyCid = cid.replace('000', '0')
  var abp = new RegExp(/abp/)
  var aka = new RegExp(/aka/)
  var bazx = new RegExp(/bazx/)
  var diy = new RegExp(/diy/)
  var dkdn = new RegExp(/dkdn/)
  var dpmi = new RegExp(/dpmi/)
  var fset = new RegExp(/fset/)
  var gets = new RegExp(/gets/)
  var gvg = new RegExp(/gvg/)
  var hihl = new RegExp(/hihl/)
  var hxad = new RegExp(/hxad/)
  var jbs = new RegExp(/jbs/)
  var tamm = new RegExp(/tamm/)
  var mxgs = new RegExp(/mxgs/)
  var nhdtb = new RegExp(/nhdtb/)
  var pxh = new RegExp(/pxh/)
  var rctd = new RegExp(/rctd/)
  var ppt = new RegExp(/ppt/)
  var pym = new RegExp(/pym/)
  var star = new RegExp(/star/)
  var pts = new RegExp(/pts/)
  var chn = new RegExp(/chn/)
  var sga = new RegExp(/sga/)
  var supa = new RegExp(/supa/)
  var sdmm = new RegExp(/sdmm/)
  var sw = new RegExp(/sw/)
  var vrtm = new RegExp(/vrtm/)
  var xv = new RegExp(/xv/)
  var t282 = new RegExp(/55t28/)
  var zmen = new RegExp(/zmen/)
  var nfdm = new RegExp(/nfdm/)
  var xrw = new RegExp(/xrw/)
  if (cid.match(abp) || cid.match(dpmi) || cid.match(fset) || cid.match(gets) || cid.match(gvg) || cid.match(hihl) || cid.match(hxad) || cid.match(jbs) || cid.match(tamm) || cid.match(mxgs) || cid.match(nhdtb) || cid.match(pxh) || cid.match(rctd) || cid.match(ppt) || cid.match(pym) || cid.match(star) || cid.match(pts) || cid.match(chn) || cid.match(sga) || cid.match(supa) || cid.match(sdmm) || cid.match(sw) || cid.match(vrtm) || cid.match(xv) || cid.match(t282) || cid.match(zmen) || cid.match(aka) || cid.match(nfdm)) {
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${newCid}/${newCid}_dmb_w.mp4`
  } else if (cid.match(dkdn)) {
    var dkdnCid = newCid.substring(2)
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/h/h_1/h_139${dkdnCid}/h_139${dkdnCid}_dmb_w.mp4`
  } else if (cid.match(bazx)) {
    var bazxCid = newCid.substring(2)
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/8/84b/84${bazxCid}/84${bazxCid}_dmb_w.mp4`
  } else if (cid.match(xrw)) {
    var xrwCid = newCid.substring(3)
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/8/84x/84${xrwCid}/84${xrwCid}_dmb_w.mp4`
  } else if (cid.match(diy)) {
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${diyCid}/${diyCid}_dmb_w.mp4`
  } else {
    url = `http://cc3001.dmm.co.jp/litevideo/freepv/${firstWord}/${secondWord}/${cid}/${cid}_dmb_w.mp4`
  }
  return url
}
