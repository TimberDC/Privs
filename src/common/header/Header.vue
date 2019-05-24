<template>
  <div>
    <b-navbar toggleable="lg" type="light" variant="light" fixed="top" style="box-shadow: 0 3px 10px #DDDEE0;">
      <b-navbar-brand class="ml-lg-4" href="/">Privs</b-navbar-brand>

      <b-navbar-toggle target="nav-collapse" style="border: none; outline: none"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav>
        <!-- <b-navbar-nav class="ml-lg-4">
          <b-nav-item class="mr-lg-4" href="#/actor/a/" disabled="">A</b-nav-item>
          <b-nav-item href="#/category/c/" disabled>C</b-nav-item>
        </b-navbar-nav> -->
        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto" v-if="showCategory">
          <b-nav-form>
            <b-form-input
              size="sm"
              placeholder="记得加空格..."
              v-model="keyword"
              @keyup.enter="submitKeyword"
            >
            </b-form-input>
            <button
              type="button"
              class="btn btn-danger btn-sm ml-lg-2 ml-md-2 mt-2 mt-lg-0 mt-md-0"
              @click="submitKeyword"
            >
              搜索
            </button>
          </b-nav-form>

          <!-- 种类按钮 -->
          <b-button
            v-b-modal.modal-lg
            variant="warning"
            class="ml-lg-3 mt-2 mt-lg-1"
            size="sm"
            style="height: 32px"
            v-if="showCategory"
          >
            {{this.currentCate}}
          </b-button>
          <b-modal
            ref="cateModal"
            id="modal-lg"
            size="lg"
            title="分类"
            ok-only
            centered
            ok-title="关闭"
          >
            <category @clickCategory="clickCateItem"></category>
          </b-modal>

          <!-- 类别按钮 -->
          <b-nav-item-dropdown class="ml-lg-3" right v-if="showCategory">
            <template slot="button-content">
              {{this.currentKind}}
            </template>
            <b-dropdown-item disabled>请选择</b-dropdown-item>
            <b-dropdown-item @click="clickVideoa">Video</b-dropdown-item>
            <b-dropdown-item @click="clickVideoc">newactor</b-dropdown-item>
            <b-dropdown-item @click="clickAdult">adult</b-dropdown-item>
            <b-dropdown-item @click="clickComic">comic</b-dropdown-item>
          </b-nav-item-dropdown>

          <b-nav-item-dropdown class="ml-lg-3" right v-if="showCategory">
            <template slot="button-content">
              {{this.currentSort}}
            </template>
            <b-dropdown-item disabled>请选择</b-dropdown-item>
            <b-dropdown-item @click="clickDate">日期</b-dropdown-item>
            <b-dropdown-item @click="clickRank">人气</b-dropdown-item>
            <b-dropdown-item @click="clickPrice">价格</b-dropdown-item>
            <b-dropdown-item @click="clickReview">评价</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapMutations } from 'vuex'
import Category from 'common/category/Category'
import { getCateName } from 'api/category'

export default {
  name: 'CommonHeader',
  data () {
    return {
      showCategory: true,
      currentSort: '日期',
      currentKind: 'Video',
      currentCate: '',
      keyword: ''
    }
  },
  methods: {
    ...mapActions([
      'saveSortToState',
      'saveKindToState',
      'saveCateToState'
    ]),
    ...mapMutations({
      setKeyword: 'SET_KEYWORD'
    }),
    submitKeyword () {
      if (this.keyword.length) {
        this.setKeyword(this.keyword)
      }
    },
    // 设置类别
    clickCateItem (cate) {
      this.currentCate = cate.name
      this.saveCateToState(cate.id)
      this.$refs.cateModal.hide()
    },
    // 设置大类别
    clickVideoa () {
      this.currentKind = 'Video'
      this.saveKindToState('videoa')
    },
    clickVideoc () {
      this.currentKind = 'newactor'
      this.saveKindToState('videoc')
    },
    clickAdult () {
      this.currentKind = 'adult'
      this.saveKindToState('nikkatsu')
    },
    clickComic () {
      this.currentKind = 'comic'
      this.saveKindToState('anime')
    },
    // 设置排序
    clickDate () {
      this.currentSort = '日期'
      this.saveSortToState('date')
    },
    clickRank () {
      this.currentSort = '人气'
      this.saveSortToState('rank')
    },
    clickPrice () {
      this.currentSort = '价格'
      this.saveSortToState('price')
    },
    clickReview () {
      this.currentSort = '评价'
      this.saveSortToState('review')
    }
  },
  watch: {
    $route () {
      if (this.$route.name === 'Detail' || this.$route.name === 'Category') {
        this.showCategory = false
      } else {
        this.showCategory = true
      }
    },
    currentSort () {
      this.$router.push({
        path: '/'
      })
    }
  },
  components: {
    Category
  },
  computed: {
    ...mapGetters([
      'commonSort',
      'commonKind',
      'cateId'
    ])
  },
  mounted () {
    switch (this.commonSort) {
      case 'date':
        this.currentSort = '日期'
        break
      case 'rank':
        this.currentSort = '人气'
        break
      case 'price':
        this.currentSort = '价格'
        break
      case 'review':
        this.currentSort = '评价'
        break
    }
    // 判断首页加载时，导航条应该显示的类别
    switch (this.commonKind) {
      case 'videoa':
        this.currentKind = 'Video'
        break
      case 'videoc':
        this.currentKind = 'newactor'
        break
      case 'nikkatsu':
        this.currentKind = 'adult'
        break
      case 'anime':
        this.currentKind = 'comic'
        break
    }
    if (this.cateId) {
      var cateItem = getCateName(this.cateId)
      this.currentCate = cateItem[0].name
    } else {
      this.currentCate = '分类'
    }
  }
}
</script>
