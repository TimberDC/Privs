import storage from 'good-storage'

const SORT_KEY = '_currentSort_'
const KIND_KEY = '_currentKind_'
const CATE_ID = '_currentCate_'

export function saveSort (query) {
  storage.set(SORT_KEY, query)
  return query
}

export function loadSort () {
  return storage.get(SORT_KEY, 'date')
}

export function saveKind (query) {
  storage.set(KIND_KEY, query)
  return query
}

export function loadKind () {
  return storage.get(KIND_KEY)
}

export function saveCate (query) {
  storage.set(CATE_ID, query)
  return query
}

export function loadCate () {
  return storage.get(CATE_ID)
}
