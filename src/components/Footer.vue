<style src="./css/footer.css"></style>
<template>
<footer class="footer mt-auto">
  <div class="container-fluid">
    <div class="row py-3" :style="{backgroundColor: footer_color}">
      <div class="col-lg-7 offset-lg-1 my-auto" id="copy-right">
        <span :title="copyright">
          <a href="https://github.com/skymunn" target="_blank" rel="noopener norefferer">&copy;</a> {{project_year_start}}-{{yearNow}} {{project_name}} | {{corporate_name}}. All right reserved.
        </span>
      </div>
      <div class="col-lg-3 text-center align-middle my-auto">
        <a v-if="socmed.fb.length > 0" :href="socmed['fb']" target="_blank" rel="noopener noreferrer">
          <img src="../assets/facebook.png" alt="facebook.png" id="facebook">
        </a>
        <a v-else id="blank"></a>

        <a v-if="socmed.twit.length > 0" :href="socmed['twit']" target="_blank" rel="noopener noreferrer">
          <img src="../assets/twitter.png" alt="twitter.png" id="twitter">
        </a>
        <a v-else id="blank"></a>

        <a v-if="socmed.dc.length > 0" :href="socmed['dc']" target="_blank" rel="noopener noreferrer">
          <img src="../assets/discord.png" alt="discord.png" id="discord">
        </a>
        <a v-else id="blank"></a>

        <a v-if="socmed.ig.length > 0" :href="socmed['ig']" target="_blank" rel="noopener noreferrer">
          <img src="../assets/instagram.png" alt="instagram.png" id="instagram">
        </a>
        <a v-else id="blank"></a>

        <a v-if="socmed.yt.length > 0" :href="socmed['yt']" target="_blank" rel="noopener noreferrer">
          <img src="../assets/youtube.png" alt="youtube.png" id="youtube">
        </a>
        <a v-else id="blank"></a>
      </div>
    </div>
  </div>
</footer>
</template>

<script lang="ts">
const date = new Date();

import Vue from 'vue'
export default Vue.extend({
  props: {
    project_name: { type: String, required: true },
    corporate_name: { type: String, required: true },
    project_year_start: { type: String, required: true },
    socmed: { type: Object },
    footer_color: { type: String }
  },
  data() {
    return {
      yearNow: date.getFullYear(),
      copyright: "Made by github/skymunn. Click over (C) to see my profile!"
    }
  }
})
</script>
