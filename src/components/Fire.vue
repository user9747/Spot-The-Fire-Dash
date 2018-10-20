<template>
  <div class="hello">
    <ol>
    <li>
      
      <h3  >{{ fires.lat }}</h3>
      <h3  >{{ fires.long }}</h3>
      <h3  >{{ fires.discription }}</h3>
      <h3  >{{ fires.openDate }}</h3>
    </li>
  </ol>
  </div>
</template>

<script>
  import firebase from 'firebase'
  var keys=[],values=[],fires,fireVal,refUrl,newURl;
  export default {
  name: 'Fire',
  props: {
    msg: String
  },  
  data:function(){
    return{
      keys,
      values,
      fires,
    }
  },
  methods:{
    changeType:function(fireList){
      console.log(this.$store.state.url);
      console.log(this.$store.state.type);
    }
  },
  mounted(){
    var self=this;
    console.log(this.$store.state.type);
    refUrl=this.$store.state.url;
    console.log(refUrl);
    var fireRef = firebase.database().ref(refUrl);
    fireRef.on('value',function(snap){
      self.fires=snap.val();
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
