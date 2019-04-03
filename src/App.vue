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

<template>
  <div id="app">
    <Filler
      :main_text="globalData.ctx.main_text"
      :sub_text="globalData.ctx.sub_text"
      :discord_frame="globalData.social_media.discord.frame"
    />
    <Footer
      :project_name="globalData.about['name']"
      :project_year_start="globalData.about['project_year_start']"
      :socmed="getFooterSocmed()"
    />
  </div>
</template>
