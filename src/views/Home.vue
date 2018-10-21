<template>
<div>
  <div>
        <md-toolbar class="md-primary">
          <md-button class="md-icon-button" @click="showNavigation = true"><a style="color:white">&#9776;</a></md-button>
         <h3 class="md-title">Dashboard</h3>
        </md-toolbar>
          <md-drawer :md-active.sync="showNavigation">
      <md-toolbar class="md-transparent" md-elevation="0">
        <span class="md-title">Dashboard</span>
      </md-toolbar>

      <md-list>
        <md-list-item>
          <router-link to='/'>
          <span class="md-list-item-text">Home</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/fires">
          <span class="md-list-item-text">Fires</span>
          </router-link>
        </md-list-item>
        <md-list-item>
          <router-link to="/rehab">
          <span class="md-list-item-text">Rehab</span>
          </router-link>
        </md-list-item>

      </md-list>
    </md-drawer>
    </div>
  <div class="home">
    
    <div v-if="this.currenType === 'Country'"><Country/></div>
    <div v-if="this.currenType === 'State'"><State/></div>
    <div v-if="this.currenType === 'District'"><District/></div>
    <div v-if="this.currenType === 'FireList'"><FireList/></div>
    <div v-if="this.currenType === 'Fire'"><Fire/></div>
  </div>

</div>
</template>

<script>
// @ is an alias to /src
import Country from "@/components/Country.vue";
import State from "@/components/State.vue";
import District from "@/components/District.vue";
import FireList from "@/components/fireList.vue";
import Fire from "@/components/Fire.vue";

var showNavigation,showSidepanel
export default {
  name: "home",
  components: {
    Country,
    State,
    District,
    FireList,
    Fire,
    
  },
  computed: {
    currenType: function() {
      console.log(this.$store.state.type);
      return this.$store.state.type;
    }
  },
  data:()=>{
    return{
      showNavigation: false,
      showSidepanel: false
    }
  }
};
</script>
