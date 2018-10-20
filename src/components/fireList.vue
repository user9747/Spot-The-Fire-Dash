<template>
  <div class="hello">
    <ol>
    <li v-for="key in keys">
     
        <p @click="changeType(key)">
      <md-card>
      <md-card-header>
        <div class="md-title"> {{key}}       </div>
      </md-card-header>


      
    </md-card>
      </p>
    </li>
  </ol>
   <md-speed-dial md-event="click" md-direction="bottom">
      <md-speed-dial-target class="md-primary" @click="goBack">
        <p style="color:white;font-size:30px;">&#8592;</p>
      </md-speed-dial-target>

    </md-speed-dial>
  </div>
</template>

<script>
  import firebase from 'firebase'

  var keys=[],values=[],fires,refUrl,newURl;
  export default {
  name: 'FireList',
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
    changeType:function(fireList){
      this.$store.commit('updateUrl',this.$store.state.url+"/"+fireList);
      console.log(this.$store.state.url);
      this.$store.commit('changeType','Fire');
      console.log(this.$store.state.type);
    },
    goBack:function(){
      const urlPrev = this.$store.state.url
      var url = urlPrev.substring(0, urlPrev.lastIndexOf("/"));
      // console.log(url)
      this.$store.commit('updateUrl',url)
      this.$store.commit('changeType','District')
    }
  },
  mounted(){
    console.log(this.$store.state.type);
    refUrl=this.$store.state.url;
    console.log(refUrl);
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
a {
  color: #42b983;
}
</style>
