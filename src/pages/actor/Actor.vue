<template>
  <div>
    <div class="actor-container ml-lg-4" ref="actorContainer">
      <div
        class="actor-item"
        v-for="(item, index) in pages[currentPage - 1]"
        :key="index"
      >
        <img :src="item.img" class="actor-item-img">
        <div class="actor-content">
          <p class="actor-item-title">{{item.title}}</p>
        </div>
      </div>
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
  </div>
</template>

<script>

export default {
  name: 'Actor',
  data () {
    return {}
  }
}
</script>

<style lang="stylus" scoped>
  .actor-container
    display flex
    flex-flow row wrap
    margin-top 56px
    .actor-item
      margin 10px
      width 80px
      border 1px solid #ccc
      border-radius 5px
      display flex
      flex-direction column
      align-items center
    .actor-item-img
      width 70px
      margin-top 5px
      border-radius 5px
    .actor-content
      min-width 143px
      padding 5px 0 0 38px
</style>
