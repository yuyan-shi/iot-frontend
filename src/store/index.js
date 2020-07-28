import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    url: "http://192.168.1.228:8050/api/v1/graph"
  },
  mutations: {
    UPDATE_DATA(state,arr){
      state.data = arr;
    }
  },
  actions: {
    GET_DATA(context){
        axios({
          method:'get', 
          url: this.state.url,
          // headers:{
          //   "Access-Control-Allow-Origin": "*"
          // }
        }).then(function(response){
          let data = Object.values(response.data.data);
          // console.log(response);
          context.commit('')
        })
        .catch(function(error){
          console.warn(error);
        })
    }
  },
  modules: {
  }
})
