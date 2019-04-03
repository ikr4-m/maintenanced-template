<style src="./css/filler.css"></style>
<template>
<section class="filler" id="filler">
  <div class="container">
    <div v-if="discord_frame.length > 0" class="row">
      <div class="col-lg-8 my-auto">
        <h1 class="display-3 mt-5" id="main-text-half">{{main_text}}</h1>
        <hr id="border-half">
        <h3 id="sub-text-half">{{sub_text}}</h3>
      </div>
      <div class="col-lg-4 mt-5 mb-5 text-center">
        <iframe :src="discord_frame" frameborder="0" id="discord-frame" class="mx-auto my-auto"></iframe>
      </div>
    </div>
    <div v-else class="row">
      <div class="col-lg-12 my-auto">
        <h1 class="display-3 mt-5" id="main-text-full">{{main_text}}</h1>
        <hr id="border-full">
        <h3 id="sub-text-full">{{sub_text}}</h3>
      </div>
    </div>
  </div>
</section>
</template>

<script lang="ts">
import Vue from "vue";
export default Vue.extend({
  props: {
    main_text: { type: String, required: true },
    sub_text: { type: String, required: true },
    discord_frame: { type: String }
  }
});
</script>
