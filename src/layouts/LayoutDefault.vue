<template>
  <div class="min-vh-100">
    <navbar />
    <div class="content pt-22 pt-md-13 pb-13">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import Navbar from '@molecules/Navbar'

export default defineComponent({
  name: 'LayoutDefault',
  components: {
    Navbar
  }
})
</script>
