<template>
  <div class="home">
    <HomeMenu></HomeMenu>
  </div>
</template>

<script>
// @ is an alias to /src
import HomeMenu from '@/components/HomeMenu.vue'

export default {
  name: 'Home',
  components: {
    HomeMenu
  }
}
</script>
