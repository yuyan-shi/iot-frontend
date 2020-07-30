<template>
  <div class="TimeSeries">
    <v-layout row wrap>
      <v-flex xs10 offset-xs-1>
        <plotly :data="this.data" :layout="this.layout" :display-mode-bar="true"></plotly>
      </v-flex>
    <v-flex xs8>
      <v-menu
        ref="menu"
        v-model="menu"
        :close-on-content-click="false"
        :return-value.sync="date"
        transition="scale-transition"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-text-field
            label="Picker in menu"
            v-bind="attrs"
            v-on="on"
          ></v-text-field>
        </template>
        <v-date-picker 
          v-model="date" 
          no-title scrollable
          :min="min_date"
          :max="max_date"
          >
          <v-spacer></v-spacer>
          <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
          <v-btn text color="primary" @click="PostDate()">OK</v-btn>
        </v-date-picker>
      </v-menu>
    </v-flex>
    </v-layout>
  </div>
</template>

<script>
  import { Plotly } from 'vue-plotly';
  import { mapActions, mapState } from 'vuex';
  export default {
    data:function(){
      return{
        min_date: "2000-08-06",
        max_date: "2020-08-13",
        date: new Date().toISOString().substr(0, 10),
        menu: false,
      }
    },
    computed:{
      ...mapState(['data', 'layout']),
    },
    components:{
      Plotly
    },
    methods:{
      ...mapActions(['GET_DATA','POST_DATE']),
      PostDate(){
        console.log('in post date function ' + this.date);
        this.POST_DATE(this.date);
      }
    },
    created(){
      this.GET_DATA();
      // this.POST_DATE();
    }
  }
</script>