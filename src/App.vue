<script lang="ts">
/* eslint-disable */
import Store from "./store"
import Background from "./components/Background.vue"
import Footer from "./components/Footer.vue"
import Filler from "./components/Filler.vue"

import Vue from 'vue'
export default Vue.extend ({
  data() {
    return {
      globalData: Store.state
    }
  },
  methods: {
    getAbout(child: string): String {
      return Object.assign(Store.state.about)[child];
    },
    getSocialMedia(child: string): String {
      return Object.assign(Store.state.social_media)[child];
    },
    getFooterSocmed(): Object {
      let x = Store.state.social_media;
      return {
        fb: x.facebook,
        twit: x.twitter,
        ig: x.instagram,
        yt: x.youtube,
        dc: x.discord.invite
      }
    },
  },
  components: { 
    Background,
    Footer,
    Filler
  }
})
</script>

<style src="./css/style.css"></style>

<template>
  <div id="app">
    <div class="container">
      <Background/>
      <Filler 
        :main_text="globalData.ctx.main_text" 
        :sub_text="globalData.ctx.sub_text" 
        :discord_frame="globalData.social_media.discord.frame"
      />
      <Footer 
        :project_name="getAbout('name')" 
        :project_year_start="getAbout('project_year_start')" 
        :socmed="getFooterSocmed()
      "/>
    </div>
  </div>
</template>
