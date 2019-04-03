<template>
<footer class="footer" id="footer">

</footer>
</template>

<script lang="ts">
const date = new Date();

import Vue from 'vue'
export default Vue.extend({
  props: {
    project_name: { type: String, required: true },
    project_year_start: { type: String, required: true },
    socmed: { type: Object }
  }
})
</script>
