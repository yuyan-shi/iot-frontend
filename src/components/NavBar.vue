<template>
  <div id="nav">
    <v-app-bar
      app
      clipped-left
      color="white"
    >
      <v-toolbar-title>PUMAS</v-toolbar-title>

      <router-link 
        to="/"
        class="ml-4"
      >
        <v-toolbar-title>
          Home
        </v-toolbar-title>
      </router-link>

      <router-link 
        to="/about"
        class="ml-4"
        >
        <v-toolbar-title>
          About
        </v-toolbar-title>
      </router-link>

      <v-spacer></v-spacer>

      <v-btn>Log in</v-btn>

    </v-app-bar>
  </div>

</template>

<script>
  export default {
    data: () => ({
      drawer: null,
    }),
  }
</script>
