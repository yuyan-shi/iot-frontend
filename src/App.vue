<template>
  <v-app id="app">
    <NavBar></NavBar>
    <v-main>
      <router-view/>
    </v-main>
    <Footer></Footer>
  </v-app>
</template>

<script>
  import NavBar from '@/components/NavBar.vue';
  import Footer from '@/components/Footer.vue';
  export default {
    props: {
      source: String,
    },
    data: () => ({
      drawer: null,
    }),
    components:{
      NavBar,
      Footer,
    },
    created () {
      // this.$vuetify.theme.dark = true
    },
  }
</script>
