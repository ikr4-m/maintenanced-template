<template>
<section class="filer" id="filler">
  
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
