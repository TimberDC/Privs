<template>
  <div class="home-container">
    <common-list
      :list="homeList"
      :totalCount="totalCount"
      :perPage="perPage"
      :currentPathPage="currentPage"
      :pathNum="pathNum"
      @pageChanged="changePage"
      @changeJump='jumpChanged'
    >
    </common-list>
  </div>
</template>

<script>
import CommonList from 'common/list/List'
import { getHomeList, getCateList } from 'api/home'
import { ERR_OK } from 'api/config'
import { mapGetters, mapActions } from 'vuex'

export default {
  name: 'Home',
  data () {
    return {
      homeList: [],
      totalCount: 0,
      currentPage: 1,
      pathNum: 1,
      currentHomeCate: ''
    }
  },
  methods: {
    ...mapActions([
      'saveCateToState'
    ]),
    _getHomeInfo () {
      // 刷新首页分类自动变为初始状态
      this.saveCateToState(0)
      getHomeList(this.commonKind, this.commonSort, this.perPage).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    },
    changePage (offset) {
      window.scrollTo(0, 0)
      if (this.cateId) {
        getCateList(this.commonKind, this.commonSort, this.perPage, this.cateId, offset).then((res) => {
          res = res.result
          if (res.status === ERR_OK) {
            this.homeList = res.items
            this.totalCount = res.total_count
          }
        })
      } else {
        getHomeList(this.commonKind, this.commonSort, this.perPage, offset).then((res) => {
          res = res.result
          if (res.status === ERR_OK) {
            this.homeList = res.items
            this.totalCount = res.total_count
          }
        })
      }
    },
    jumpChanged (page) {
      window.scrollTo(0, 0)
      let jumpChangeNum = page * this.perPage - (this.perPage - 1)
      if (this.cateId) {
        getCateList(this.commonKind, this.commonSort, this.perPage, this.cateId, jumpChangeNum).then((res) => {
          res = res.result
          if (res.status === ERR_OK) {
            this.homeList = res.items
            this.totalCount = res.total_count
          }
        })
      } else {
        getHomeList(this.commonKind, this.commonSort, this.perPage, jumpChangeNum).then((res) => {
          res = res.result
          if (res.status === ERR_OK) {
            this.homeList = res.items
            this.totalCount = res.total_count
          }
        })
      }
    }
  },
  computed: {
    ...mapGetters([
      'perPage',
      'commonSort',
      'keyword',
      'commonKind',
      'cateId'
    ])
  },
  watch: {
    commonSort () {
      window.scrollTo(0, 0)
      getHomeList(this.commonKind, this.commonSort, this.perPage).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    },
    commonKind () {
      window.scrollTo(0, 0)
      getHomeList(this.commonKind, this.commonSort, this.perPage).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    },
    keyword () {
      window.scrollTo(0, 0)
      getHomeList(this.commonKind, this.commonSort, this.perPage, 1, this.keyword).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    },
    cateId () {
      window.scrollTo(0, 0)
      getCateList(this.commonKind, this.commonSort, this.perPage, this.cateId).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    }
  },
  mounted () {
    if (this.$route.path.length === 1) {
      this._getHomeInfo()
    }
    if (this.$route.path.length > 1 && this.cateId === 0) {
      let current = this.$route.path.substr(1)
      this.currentPage = parseInt(current)
      let offsetNum = this.currentPage * this.perPage - (this.perPage - 1)
      getHomeList(this.commonKind, this.commonSort, this.perPage, offsetNum).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    }
    if (this.cateId) {
      getCateList(this.commonKind, this.commonSort, this.perPage, this.cateId).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.homeList = res.items
          this.totalCount = res.total_count
        }
      })
    }
  },
  components: {
    CommonList
  }
}
</script>
