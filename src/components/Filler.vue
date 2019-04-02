<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  props: {
    main_text: { type: String, required: true },
    sub_text: {type: String, required: true},
    discord_frame: { type: String }
  }
})
</script>


<template>
  <div v-if="discord_frame.length > 0" class="filler">
    <div class="filler-kiri">
      <div id="main-text">{{this.main_text}}</div>
      <div id="sub-text">{{this.sub_text}}</div>
    </div>
    <div class="filler-kanan">
      <iframe id="discord-frame" :src="discord_frame" frameborder="0"></iframe>
    </div>
  </div>
  <div v-else class="filler">
    <div class="filler-tengah">

    </div>
  </div>
</template>
