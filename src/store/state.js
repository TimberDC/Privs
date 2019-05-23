import { loadSort, loadKind, loadCate } from 'common/js/cache'

const state = {
  perPage: 30,
  commonSort: loadSort(),
  keyword: '',
  commonKind: loadKind(),
  cateId: loadCate()
}

export default state
