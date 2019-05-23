<template>
  <div class="category-contaier ml-4 mr-4">
    <div
      v-for="item in list"
      :key="item.id"
      class="category-item"
      @click="clickItem(item)"
    >
      <span class="category-name">{{item.name}}</span>
    </div>
  </div>
</template>

<script>
import { categoryList } from 'api/category'

export default {
  name: 'Category',
  data () {
    return {
      list: []
    }
  },
  methods: {
    clickItem (item) {
      this.$emit('clickCategory', item)
    }
  },
  mounted () {
    this.list = categoryList
  }
}
</script>

<style lang="stylus" scoped>
  .category-contaier
    display flex
    flex-wrap wrap
    .category-item
      display flex
      margin-right 32px
      margin-bottom 20px
      border 1px solid #ccc
      background #F8F9FB
      color black
      border-radius 8px
      justify-content center
      align-items center
      cursor pointer
    .category-item span
      margin: 10px 20px
    .category-item:hover
      background #E2E6EA
</style>
