<template>
  <div class="hello">
    <ol>
    <li>
       <div>
      <md-card>
      <md-card-header>
        <div class="md-title"> {{fires.state}}       </div>
      </md-card-header>
      <md-card-content>
         <h3>{{ fires.lat }}</h3>
      <h3>{{ fires.long }}</h3>
      <h3>{{ fires.description }}</h3>
      <h3>{{ fires.openDate }}</h3>
       <video width="640" height="240" controls>
  <source :src="fires.imgPath" type="video/mp4">
  <source :src="fires.imgPath" type="video/ogg">
Your browser does not support the video tag.
</video> 
      </md-card-content>
        <md-button @click="changeType(key)">Back</md-button>
      
    </md-card>
      </div> 
     
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
      const urlPrev = this.$store.state.url
      var url = urlPrev.substring(0, urlPrev.lastIndexOf("/") + 1);
      // console.log(url)
      this.$store.commit('updateUrl',url)
      this.$store.commit('changeType','FireList')
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
