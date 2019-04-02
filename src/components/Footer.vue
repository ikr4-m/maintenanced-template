<template>
  <div class="footer">
    <div class="footer-container">
      <div class="footer-content">
        <div id="footer-copyright">
          {{copyRighted}}
        </div>
        <div id="footer-social-media">
          <div id="social-facebok" v-if="socmed.fb.length > 0"></div>
          <div id="social-empty" v-else></div>

          <div id="social-instagram" v-if="socmed.ig.length > 0"></div>
          <div id="social-empty" v-else></div>

          <div id="social-youtube" v-if="socmed.yt.length > 0"></div>
          <div id="social-empty" v-else></div>

          <div id="social-twitter" v-if="socmed.twit.length > 0"></div>
          <div id="social-empty" v-else></div>

          <div id="social-discord" v-if="socmed.dc.length > 0"></div>
          <div id="social-empty" v-else></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
const date = new Date();

import Vue from 'vue'
export default Vue.extend({
  props: {
    project_name: { type: String, required: true },
    project_year_start: { type: String, required: true },
    socmed: { type: Object }
  },
  data() {
    return {
      copyRighted:
        `(C) ${this.project_year_start} - ${date.getFullYear()} ${this.project_name}. All Right Reserved.`
    }
  }
})
</script>

