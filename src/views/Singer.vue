<template>
  <div class="singer" v-loading="!singerList.length">
    <index-list :data="singerList" @select="selectSinger"></index-list>
    <router-view v-slot="{ Component }">
      <transition name="slide" appear>
        <component :is="Component" :singer="selectedSinger"></component>
      </transition>
    </router-view>
  </div>
</template>
<script>
import { getSingerList } from '@/service/singer'
import IndexList from '@/components/base/indexList/IndexList.vue'

import storage from 'good-storage'
import { SINGER_KEY } from '@/assets/js/constant'

export default {
  components: { IndexList },
  name: 'Singer',
  data() {
    return {
      singerList: [],
      selectedSinger: null
    }
  },
  async created() {
    const result = await getSingerList()
    this.singerList = result.singers
  },
  methods: {
    selectSinger(singer) {
      this.selectedSinger = singer
      this.cacheSinger(singer)
      this.$router.push({
        path: `/singer/${singer.mid}`
      })
    },
    cacheSinger(singer) {
      storage.session.set(SINGER_KEY, singer)
    }
  }
}
</script>
<style lang="scss" scoped>
.singer {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
}
</style>
