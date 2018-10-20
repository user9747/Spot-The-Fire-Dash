import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'

var config = {
apiKey: "AIzaSyChg60s1BcbXk2aFNL6J86KrWt5IjYWhtU",
authDomain: "spot-that-fire-nsac.firebaseapp.com",
databaseURL: "https://spot-that-fire-nsac.firebaseio.com",
projectId: "spot-that-fire-nsac",
storageBucket: "spot-that-fire-nsac.appspot.com",
messagingSenderId: "1074092663397"
};
firebase.initializeApp(config);

  
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
