<template>
  <div class="HomeMenu">
      <v-container fluid grid-list-md>
    <v-layout row wrap>
      <v-flex d-flex xs12 sm6 md4>
        <v-card color="purple" dark>
          <v-card-title primary class="title">Energy Monitoring</v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-card color="indigo" dark>
              <v-card-title primary class="title">Process Control</v-card-title>
            </v-card>
          </v-flex>
          <v-flex d-flex>
            <v-layout row wrap>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
      <v-flex d-flex xs12 sm6 md2 child-flex>
        <v-card color="green lighten-2" dark>
          <v-card-title>Parameter Monitoring</v-card-title>
        </v-card>
      </v-flex>
      <v-flex d-flex xs12 sm6 md3>
        <v-card color="blue lighten-2" dark>
          <v-card-title>Track and Trace</v-card-title>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu',

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
