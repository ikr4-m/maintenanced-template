<script lang="ts">
/* eslint-disable */
import Store from "./store";
import Filler from "./components/Filler.vue";
import Footer from "./components/Footer.vue";

import Vue from "vue";
export default Vue.extend({
  data() {
    return {
      globalData: Store.state,
      titleWebsite: `${Store.state.about.name} | Under Maintenanced`
    };
  },
  methods: {
    getFooterSocmed(): Object {
      let x = Store.state.social_media;
      return {
        fb: x.facebook,
        twit: x.twitter,
        ig: x.instagram,
        yt: x.youtube,
        dc: x.discord.invite
      };
    }
  },
  components: {
    Filler,
    Footer
  }
});
</script>

<style>
html, body {
  height: 100%;
  background-color: #333;
  background: url('./assets/background.png') center center fixed no-repeat;
  box-shadow: inset 0px 20px 20px rgba(1, 1, 1, .9);
}

body {
  color: #fff;
  text-shadow: 0 .05rem .1rem rgba(252, 234, 234, 0.5);
}
</style>

<template>
  <div id="app" class="mx-auto d-flex h-100 flex-column">
    <header class="mb-auto"></header>
    <Filler
      :main_text="globalData.ctx.main_text"
      :sub_text="globalData.ctx.sub_text"
      :discord_frame="globalData.social_media.discord.frame"
    />
    <Footer
      :project_name="globalData.about['name']"
      :project_year_start="globalData.about['project_year_start']"
      :socmed="getFooterSocmed()"
      :footer_color="globalData.about.footer_color"
    />
  </div>
</template>
