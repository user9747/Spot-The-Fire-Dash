<template>
  <div class="md-layout md-gutter md-alignment-center">
    <ol>
    <li v-for="key in keys">
      
      <!-- <button  > -->
         <a  @click="changeType(key)">
      <md-card class="md-layout-item md-medium-size-100">
      <md-card-header>
        <div class="md-title"> {{key}}       </div>
      </md-card-header>
        <md-button @click="changeType(key)">Action</md-button>
      
    </md-card>

      </a>
      <!-- </button> -->
    </li>
  </ol>
    <md-speed-dial md-event="click" md-direction="bottom">
      <md-speed-dial-target class="md-primary">
        <p style="color:white;font-size:30px;">&#8592;</p>
      </md-speed-dial-target>

    </md-speed-dial>
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
