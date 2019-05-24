<template>
  <div>
    <div class="list-container" ref="listContainer">
      <router-link
        tag="div"
        :to="'/detail/' + item.content_id"
        class="list-item"
        v-for="item in list"
        :key="item.content_id"
      >
        <img v-lazy="item.imageURL.small" class="list-item-img">
        <div class="list-content">
          <p class="list-item-title">{{item.content_id}}</p>
          <p class="list-item-desc">{{item.title}}</p>
          <p class="list-item-date">{{item.date}}</p>
        </div>
      </router-link>
    </div>
    <b-pagination-nav
      v-model="currentPage"
      first-text="首页"
      prev-text="上页"
      next-text="下页"
      last-text="末页"
      align="center"
      class="mt-3 mt-lg-5"
      :number-of-pages="totalPage ? totalPage : 1"
      use-router
      @change="changePage"
    >
    </b-pagination-nav>
    <div class="jump">
      <b-input-group
        size="sm"
        prepend="输入页码"
        :style="styleObj"
      >
        <b-form-input
          v-model="jumpNum"
          @click="inputClicked"
          @blur="inputBlur"
          :placeholder="totalPage + ''"
        >
        </b-form-input>
        <b-input-group-append>
          <b-button variant="info" @click="jumpPage">跳转</b-button>
        </b-input-group-append>
      </b-input-group>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  name: 'CommonList',
  props: {
    list: Array,
    totalCount: Number,
    perPage: Number,
    pathNum: Number,
    cateChange: Boolean
  },
  data () {
    return {
      currentPage: 1,
      initNum: 1,
      styleObj: {
        marginBottom: '25px'
      },
      jumpNum: ''
    }
  },
  methods: {
    changePage (e) {
      this.currentPage = e
      this.initNum = e * this.perPage - (this.perPage - 1)
      this.$emit('pageChanged', this.initNum)
    },
    inputClicked () {
      this.styleObj.marginBottom = '65px'
    },
    inputBlur () {
      this.styleObj.marginBottom = '25px'
    },
    jumpPage () {
      let num = parseInt(this.jumpNum)
      if (num > 0 && num <= this.totalPage) {
        this.currentPage = num
        this.$emit('changeJump', num)
      }
      if (num > this.totalPage) {
        alert('跳转页数不能大于总页数 ！！！')
        this.jumpNum = ''
        window.scrollTo(0, document.body.scrollHeight)
      }
      if (num <= 0) {
        alert('页数不能为 0 或小于 0 ！！！')
        this.jumpNum = ''
        window.scrollTo(0, document.body.scrollHeight)
      }
      this.$router.push('/' + this.jumpNum)
      this.jumpNum = ''
    }
  },
  computed: {
    totalPage () {
      return Math.ceil(this.totalCount / this.perPage)
    },
    ...mapGetters([
      'commonSort',
      'commonKind',
      'cateId'
    ])
  },
  watch: {
    commonSort () {
      this.currentPage = 1
    },
    commonKind () {
      this.currentPage = 1
    },
    cateId () {
      this.currentPage = 1
    }
  },
  created () {
    if (this.$route.path.length > 1) {
      this.currentPage = this.$route.path.substr(1)
    }
  }
}
</script>

<style lang="stylus" scoped>
  .list-container
    display flex
    flex-flow row wrap
    justify-content space-around
    margin-top 56px
    background #EEEEEB
    .list-item
      margin 10px
      width 160px
      display flex
      flex-direction column
      align-items center
      justify-content flex-start
      border-radius 5px
      cursor pointer
      background white
      box-shadow 0 1px 3px rgba(0,0,0,.3);
    .list-item-img
      width 150px
      height 200px
      margin-top 5px
      border-radius 5px
    .list-content
      word-wrap break-word
      max-width 160px
      margin-top 10px
      padding 5px
      .list-item-title
        font-size 16px
        font-weight bold
        color #D984A8
      .list-item-date
        color red
  .jump
    width 180px
    margin 0 auto
</style>
