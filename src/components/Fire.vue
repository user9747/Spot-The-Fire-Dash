<template>
  <div >
    <ol>
    <li>
       <div class="md-layout md-gutter md-alignment-center">
      <md-card >
      <md-card-header>
        <div class="md-title" style="text-align:left;margin-left:1vw;"> {{fires.district}}  Fire    </div>
        <p class="md-subtitle" style="text-align:left;margin-left:2vw;margin-top:1vh"> {{fires.state}},{{fires.country}}<span style="margin-left:15vw;"> <a>&#127760;</a> <a style="text-decoration:underline;font-size:15px;"> {{ fires.lat }} , {{ fires.long }}</a></span></p>

      </md-card-header>
      <md-card-content>
      <p style="text-align:left;margin-left:4vw;">Requestee Phone:&nbsp; &nbsp;{{mobileNo}}</p>
      <p style="text-align:left;margin-left:4vw;">{{ fires.description }}</p>
      <div class="container">
       <video width="140px" controls>
       <source :src="fires.imgPath" type="video/mp4">
       <source :src="fires.imgPath" type="video/ogg">
Your browser does not support the video tag.
</video> 
  </div>
      <p>{{ fires.openDate }}</p>
      <div v-if="fires.isVerified === true" >
      <md-button @click="verifyFire(fires)">Verify Fire</md-button>
      </div>

      </md-card-content>
      
    </md-card>
      </div> 
     
    </li>
  </ol>
   <md-speed-dial md-event="click" md-direction="bottom" >
      <md-speed-dial-target class="md-primary" @click="changeType()">
        <p style="color:white;font-size:30px;">&#8592;</p>
      </md-speed-dial-target>

    </md-speed-dial>
  </div>
</template>

<script>
  import firebase from 'firebase'
  import axios from 'axios'
  var keys=[],values=[],fires,fireVal,refUrl,newURl,mobileNo;
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
      mobileNo
    }
  },
  methods:{
    changeType:function(fireList){
      const urlPrev = this.$store.state.url
      var url = urlPrev.substring(0, urlPrev.lastIndexOf("/"));
      this.$store.commit('updateUrl',url)
      this.$store.commit('changeType','FireList')
    },
    verifyFire:function(fire){
      const url = 'http://localhost:3030/apis/fireLoc/verify'
        axios({
          method:'post',
          url:url,
          data:fire
        }).then(function(res){
            console.log(res)
        }).catch(function(err){
            console.log(err)
        })
    }
  },
  mounted(){
    var self=this;
    const url = this.$store.state.url
    console.log(this.$store.state.type);
    refUrl=this.$store.state.url;
    console.log(refUrl);
    var fireRef = firebase.database().ref(refUrl);
    fireRef.on('value',function(snap){
      self.fires=snap.val();
    });
    self.mobileNo = url.substring(url.lastIndexOf('/')+1,url.length)
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
.container{
background-color: black;
}

</style>
