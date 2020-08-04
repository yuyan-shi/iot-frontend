<template>
  <div class="EnergyMonitoring">
    <!-- <h1>This is this Energy Monitoring page</h1> -->
      <!-- <v-layout row wrap class="mt-4">
        <v-flex d-flex xs10 offset-xs1> -->
          <v-container>
            <v-form ref="form" v-model="valid">
              <v-row class="ml-2 mr-2">
                <v-col cols="12" sm="5">
                  <v-select
                    :items="apartments"
                    v-model="selected_apartment"
                    label="select apartment"
                    :rules="[v => !!v || 'Item is required']"
                    required
                  ></v-select>
                </v-col>
                <v-col cols="12" sm="5">
                  <v-menu
                    ref="menu"
                    v-model="menu"
                    :close-on-content-click="false"
                    :return-value.sync="selected_period"
                    transition="scale-transition"
                    offset-y
                    min-width="290px"
                  >
                    <template v-slot:activator="{ on, attrs }">
                      <v-text-field
                        v-model="selected_period"
                        label="select period"
                        v-bind="attrs"
                        v-on="on"
                        :rules="[v => (v && v.length == 2) || 'Select a date range']"
                        required
                      ></v-text-field>
                    </template>
                    <v-date-picker v-model="selected_period" no-title scrollable range>
                    <v-spacer></v-spacer>
                    <v-btn text color="primary" @click="menu = false">Cancel</v-btn>
                    <v-btn text color="primary" @click="datePicker">OK</v-btn>
                    </v-date-picker>
                  </v-menu>
                </v-col>
                <v-col cols="12" sm="2">
                  <v-btn :disabled="!date_saved && !valid" @click="submitForm">submit</v-btn>
                </v-col>
              </v-row>
            </v-form>
          
            <v-row>
                <v-col col="2" outlined>
                  <h2 v-if="this.submitted">{{this.selected_apartment}}</h2>
                </v-col>
                <v-col col="8" outlined>
                  <h4 v-if="this.submitted">{{this.selected_period}}</h4>
                </v-col>
            </v-row>

            <v-row row-wrap v-if="this.submitted">
              <v-col cols="12" sm="3">
                <v-card
                  class="pa-2 mb-4"
                  outlined
                  tile
                >
                  <v-card-text>
                    <h2> Alerts</h2>
                      <ul>
                        <li v-for="alert in alerts" :key="alert.message">
                          {{alert.message}}
                        </li>
                      </ul>
                 </v-card-text>
                </v-card>
                <v-card
                  class="pa-2 mb-1"
                  outlined
                  tile
                  v-for="text_comp in text_components" :key="text_comp.label"
                >
                 <p>{{text_comp.label}}</p>
                 <h3>{{text_comp.text}}</h3>
                </v-card>
              </v-col>
                <v-card
                  outlined
                  tile
                  max-width="400px"
                  v-for="graph in graph_components" :key="graph.id"
                >
                 <Plotly :data="graph.data" :layout="graph.layout" :display-mode-bar="true"></Plotly>
                </v-card>
              
            </v-row>

          </v-container>

  </div>
</template>

<script>
import { Plotly } from 'vue-plotly';
export default {
  name: 'EnergyMonitoring',
  data: function(){
    return{
      valid: false,
      apartments: ['all', 'apartment 1', 'apartment 2', 'apartment 3'],
      machines: ['machine 1', 'machine 2', 'machine 3'],
      min_date: "2000-08-06",
      max_date: "2020-08-13",
      date_saved: false,
      selected_period: [],
      menu: false,
      selected_apartment: "",
      submitted: false,
      alerts:[
        {message: "Alert 1"}
      ],
      text_components:[
        {label: "Total Consumption", text:"200MW"},
        {label: "Total Cost", text:"$423.21"}
      ],
      graph_components:[
        {id:1,
        data: [{
          x:['2020-10-04', '2021-11-04', '2023-12-04'],
          y: [90, 40, 60],
          type: 'scatter'
          }],
        layout:{
          title: 'Scroll and Zoom',
          showlegend: false 
        }},
        {id:2,
        data: [{
          values: [40, 10, 30],
          rotation: 90,
          textinfo: "none",
          marker: {
            colors: ["orange", "yellow", "BLUE"]
          },
          labels: ["remaing", "done", "doing"],
          hoverinfo: "label+value+percent",
          hole: 0.5,
          type: "pie",
          showlegend: false
          }],
        layout:{
          font: {
            color: "white"
          },
          title: {
            text: "pie"
          },
          plot_bgcolor: "black",
          paper_bgcolor: "black"
        }
        },
      ],    
    }
  },
  components:{
    Plotly,
  },
  methods:{
    datePicker(){
      this.$refs.menu.save(this.selected_period);
      this.date_saved = true;
    },
    submitForm(){
      console.log(this.valid)
      if(this.$refs.form.validate()){
        this.submitted = true;
        //add api call here to populate dashboard
      }
    }
  }
}
</script>