import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: [],
    layout: {}, 
  },

  mutations: {
    UPDATE_DATA(state,arr){
      state.data = arr;
    },
    UPDATE_LAYOUT(state,dict){
      state.layout = dict;
    }
  },

  actions: {
    GET_DATA(context){
      let id = "1";
      axios({
        method:'get', 
        url: "http://192.168.1.228:8050/api/v3/graph?id=" + id
      }).then(function(response){
        context.commit('UPDATE_DATA', response.data.data);
        context.commit('UPDATE_LAYOUT', response.data.layout);
      })
      .catch(function(error){
        console.warn(error);
      })
    },

    POST_DATE(context, date){
      var FormData = require('form-data');
      var data = new FormData();
      data.append('id', '0');
      data.append('date', date);

      var config = {
        method: 'post',
        url: 'http://192.168.1.228:8050/api/v2/graph',
        data : data
      };

      axios(config).then(function(response){
        context.commit('UPDATE_DATA', response.data.data);
        context.commit('UPDATE_LAYOUT', response.data.layout);
      })
      .catch(function(error){
        console.warn(error);
      })
    }
  },

  modules: {
  }
})
