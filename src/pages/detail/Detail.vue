<template>
  <div>
    <b-container class="desc-container" fluid>
      <b-row class="ml-md-5 ml-lg-0">
        <b-col lg="7">
          <b-img-lazy :src=coverImg fluid></b-img-lazy>
        </b-col>
        <b-col class="mt-4 mt-lg-0">
          <p class="title">{{list.title}}</p>
          <p class="average" v-if="list.average">评分：{{list.average}}分</p>
          <p class="time">时长：{{list.volume}}分钟</p>
          <div class="more">
            <b-button
              class="mb-2 mt-2"
              size="sm"
              v-b-toggle.collapse-a
              variant="info"
            >
              更多
            </b-button>
            <!-- Elements to collapse -->
            <b-collapse id="collapse-a" class="mt-2">
              <b-card class="mt-2" title="类别" title-tag="h6" v-if="genre">
                <b-link class="mr-3" v-for="item in genre" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="系列" title-tag="h6" v-if="series">
                <b-link class="mr-3" v-for="item in series" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="制造商" title-tag="h6" v-if="maker">
                <b-link class="mr-3" v-for="item in maker" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="导演" title-tag="h6" v-if="director">
                <b-link class="mr-3" v-for="item in director" :key="item.id">{{item.name}}</b-link>
              </b-card>
              <b-card class="mt-2" title="标签" title-tag="h6" v-if="label">
                <b-link class="mr-3" v-for="item in label" :key="item.id">{{item.name}}</b-link>
              </b-card>
            </b-collapse>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3" fluid>
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>演员</h4>
        </b-col>
      </b-row>
      <b-row class="ml-md-5 ml-lg-0">
        <b-col>
          <b-img-lazy
            class="mr-2 mb-2"
            width="80"
            thumbnail
            src="https://via.placeholder.com/120"
            fluid
            v-for="item in actorID"
            :key="item.id"
          >
          </b-img-lazy>

        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3" fluid>
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>剧照</h4>
        </b-col>
      </b-row>
      <b-row class="ml-md-5 ml-lg-0">
        <b-col>
          <div
            class="exp-img-container" @click="handleImgClicked">
            <b-img-lazy
              class="mr-2 mr-lg-4 mb-4"
              width="160"
              :src=item
              fluid
              v-for="(item, index) in sampleImg"
              :key="index"
            >
            </b-img-lazy>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <b-container class="mt-lg-3" fluid>
      <b-row class="ml-md-5 ml-lg-0 mb-1">
        <b-col>
          <h4>预览</h4>
        </b-col>
      </b-row>
      <b-row class="ml-md-5 ml-lg-0 mr-lg-1">
        <b-col>
          <div style="background: black">
            <b-embed
              type="video"
              :src=url
              controls
              preload
            ></b-embed>
          </div>
        </b-col>
      </b-row>
    </b-container>
    <gallary v-show="showBigImg" @close="handleBigImgClosed" :img="largeImg"></gallary>
  </div>
</template>

<script>
import Gallary from 'common/gallary/Gallary'
import { getDetailList, getVideoUrl, getLargeImg } from 'api/detail'
import { ERR_OK } from 'api/config'
import { mapGetters } from 'vuex'

export default {
  name: 'Detail',
  data () {
    return {
      showBigImg: false,
      detailId: '',
      url: '',
      list: [],
      coverImg: '',
      sampleImg: [],
      largeImg: [],
      genre: [],
      series: [],
      maker: [],
      director: [],
      label: [],
      actorID: []
    }
  },
  methods: {
    getDetailInfo () {
      getDetailList(this.commonKind, this.detailId).then((res) => {
        res = res.result
        if (res.status === ERR_OK) {
          this.list = res.items[0]
          this.coverImg = this.list.imageURL.large
          this.sampleImg = this.list.sampleImageURL.sample_s.image
          this.genre = this.list.iteminfo.genre
          this.series = this.list.iteminfo.series
          this.maker = this.list.iteminfo.maker
          this.director = this.list.iteminfo.director
          this.label = this.list.iteminfo.label
          this.actorID = this.list.iteminfo.actress
        }
      })
    },
    handleImgClicked () {
      this.showBigImg = true
      window.scrollTo(0, 0)
    },
    handleBigImgClosed () {
      this.showBigImg = false
    }
  },
  components: {
    Gallary
  },
  computed: {
    ...mapGetters([
      'commonKind'
    ])
  },
  mounted () {
    this.detailId = this.$route.params.id
    this.getDetailInfo()
    this.url = getVideoUrl(this.detailId)
    this.largeImg = getLargeImg(this.sampleImg)
  }
}
</script>

<style lang="stylus" scoped>
  .desc-container
    margin-top 71px
    p
      margin-bottom 0
</style>
