<template>
  <div class="TimeSeries">
    <plotly :data="data" :layout="layout" :display-mode-bar="false"></plotly>
  </div>
</template>

<script>
  import { Plotly } from 'vue-plotly';
  import { mapActions } from 'vuex';
  export default {
    data:function(){
      return{
        data:[{
          x: [1,2,3,4],
          y: [10,15,13,17],
          type:"scatter"
        }],
        layout: {
          title:'chart title',
          xaxis: {
            title: 'xaxis title'
          },
          yaxis: {
            title: 'yaxis title'
          }
        }
        
      }
    },
    components:{
      Plotly
    },
    methods:{
      ...mapActions(['GET_DATA']),
    },
    created(){
      this.GET_DATA();
    }
  }
</script>