import * as types from './mutation-types'

const mutations = {
  [types.SET_PER_PAGE] (state, perPage) {
    state.perPage = perPage
  },
  [types.SET_SORT] (state, commonSort) {
    state.commonSort = commonSort
  },
  [types.SET_KEYWORD] (state, keyword) {
    state.keyword = keyword
  },
  [types.SET_KIND] (state, commonKind) {
    state.commonKind = commonKind
  },
  [types.SET_CATE_ID] (state, cateId) {
    state.cateId = cateId
  }
}

export default mutations
