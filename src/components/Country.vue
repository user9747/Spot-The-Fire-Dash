<template>
  <div class="md-layout md-gutter md-alignment-center">
    <ol>
    <li v-for="key in keys">
      
      <!-- <button  > -->
         <p @click="changeType(key)">
      <md-card class="md-layout-item ">
      <md-card-header>
        <div class="md-title" style="padding:80px;padding-top:25px;padding-bottom:25px;font-size:30px;font-weight:900;"> {{key}}       </div>
      </md-card-header>
      
    </md-card>

      </p>
      <!-- </button> -->
    </li>
  </ol>
  </div>
</template>

<script>
  import firebase from 'firebase'
  var keys=[],values=[],fires,refUrl;
  export default {
  name: 'Country',
  props: {
    msg: String
  },  
  data:function(){
    return{
      keys,
      values,
      fires
    }
  },
  methods:{
    changeType:function(country){
      this.$store.commit('updateUrl','fire_loc/'+country);
      console.log(this.$store.state.url);
      this.$store.commit('changeType','State');
      console.log(this.$store.state.type);
    }
  },
  mounted(){
    this.$store.commit('updateUrl','fire_loc')
    refUrl=this.$store.state.url;
    var fireRef = firebase.database().ref(refUrl);
    fireRef.on('value',function(snap){
      fires=snap.val();
      keys.length = 0;
      for(var i in fires){
        keys.push(i);
      }
    });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
li a{
  color: #42b983;
  text-decoration: none;
}
</style>
