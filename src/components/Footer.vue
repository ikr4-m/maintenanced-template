<style src="./css/footer.css"></style>
<template>
<footer class="footer mt-auto">
  <div class="container-fluid">
    <div class="row py-3" :style="{backgroundColor: footer_color}">
      <div class="col-lg-6 offset-lg-1 my-auto" id="copy-right">
        &copy; {{project_year_start}}-{{yearNow}} {{project_name}}. All Right Reserved.
      </div>
      <div class="col-lg-4 text-center align-middle my-auto">
        <a v-if="socmed.fb.length > 0" href="" target="_blank" rel="noopener noreferrer">
          <img src="../assets/facebook.png" alt="facebook.png" id="facebook">
        </a>
        <a v-else></a>

        <a v-if="socmed.twit.length > 0" href="" target="_blank" rel="noopener noreferrer">
          <img src="../assets/twitter.png" alt="twitter.png" id="twitter">
        </a>
        <a v-else></a>

        <a v-if="socmed.dc.length > 0" href="" target="_blank" rel="noopener noreferrer">
          <img src="../assets/discord.png" alt="discord.png" id="discord">
        </a>
        <a v-else></a>

        <a v-if="socmed.ig.length > 0" href="" target="_blank" rel="noopener noreferrer">
          <img src="../assets/instagram.png" alt="instagram.png" id="instagram">
        </a>
        <a v-else></a>

        <a v-if="socmed.yt.length > 0" href="" target="_blank" rel="noopener noreferrer">
          <img src="../assets/youtube.png" alt="youtube.png" id="youtube">
        </a>
        <a v-else></a>
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
    project_year_start: { type: String, required: true },
    socmed: { type: Object },
    footer_color: { type: String }
  },
  data() {
    return {
      yearNow: date.getFullYear()
    }
  }
})
</script>
