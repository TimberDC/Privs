import * as types from './mutation-types'
import { saveSort, saveKind, saveCate } from 'common/js/cache'

export const saveSortToState = function ({commit}, query) {
  commit(types.SET_SORT, saveSort(query))
}

export const saveKindToState = function ({commit}, query) {
  commit(types.SET_KIND, saveKind(query))
}

export const saveCateToState = function ({commit}, query) {
  commit(types.SET_CATE_ID, saveCate(query))
}
