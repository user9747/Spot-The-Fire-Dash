<template>
  <div class="hello">
    <ol>
    <li v-for="key in keys">
      {{ key }}
      <button @click="states(key)" >hello</button>
    </li>
  </ol>
  </div>
</template>

<script>
  import firebase from 'firebase'
  var keys=[],values=[],fires,state;
export default {
  name: 'Country',
  props: {
    msg: String
  },  
  data:function(){
    return{
      keys,
      values,fires,state
    }
  },
  methods:{
  },
  mounted(){
    var fireRef = firebase.database().ref("fire_loc");
    fireRef.on('value',function(snap){
      fires=snap.val();
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
