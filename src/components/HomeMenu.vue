<template>
  <div class="HomeMenu">
<v-container fluid grid-list-sm ma-6>
    <v-layout row wrap>
      <v-flex d-flex xs10 offset-xs1>
        <v-layout row wrap>
          <v-flex d-flex>
            <v-layout row>
              <v-flex
                v-for="block in blocks"
                :key="block"
                d-flex
              >
                <v-card
                  :color=block.color
                  flat
                  dark
                  :to=block.link
                >
                  <v-card-title class="headline">{{block.title}}</v-card-title>
                  <v-card-text>(brief explanation insert here)</v-card-text>
                </v-card>
              </v-flex>
            </v-layout>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
  </v-container>
  </div>
</template>

<script>
export default {
  name: 'HomeMenu',
  data:function(){
    return {
      blocks:[
        { title: 'Track and Trace', color: 'indigo', link:'/TrackAndTrace'},
        { title: 'Parameter Monitoring', color: 'purple', link:'/ParameterMonitoring'},
        { title: 'Energy Monitoring', color: 'red lighten-2', link:'/EnergyMonitoring'},
        { title: 'Process Control', color: 'blue lighten-1', link:'/ProcessControl' },
      ]
    }
  }
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
