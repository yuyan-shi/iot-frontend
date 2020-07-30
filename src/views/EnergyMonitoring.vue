<template>
  <div class="EnergyMonitoring">
    <!-- <h1>This is this Energy Monitoring page</h1> -->
      <v-layout row wrap class="mt-4">
        <v-flex d-flex xs8 offset-xs2>
          <v-select
            :items="lines"
            label="select line"
            class="ml-4 mr-4"
          ></v-select>
          <v-select
            :items="machines"
            label="select machine"
            class="ml-4 mr-4"
          ></v-select>
        </v-flex>
        <v-flex xs10 offset-xs-1>
          <TimeSeries></TimeSeries>
        </v-flex>
      </v-layout>
  </div>
</template>

<script>
import TimeSeries from '@/components/TimeSeriesChart.vue';
export default {
  name: 'EnergyMonitoring',
  data: function(){
    return{
      lines: ['line 1', 'line 2', 'line 3'],
      machines: ['machine 1', 'machine 2', 'machine 3'],
    }
  },
  components:{
    TimeSeries,
  }
}
</script>