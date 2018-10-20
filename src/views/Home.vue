<template>
  <div class="home">
    <div v-if="this.currenType === 'Country'"><Country/></div>
    <div v-if="this.currenType === 'State'"><State/></div>
    <div v-if="this.currenType === 'District'"><District/></div>
    <div v-if="this.currenType === 'FireList'"><FireList/></div>
    <div v-if="this.currenType === 'Fire'"><Fire/></div>
  </div>
</template>

<script>
// @ is an alias to /src
import Country from '@/components/Country.vue'
import State from '@/components/State.vue'
import District from '@/components/District.vue'
import FireList from '@/components/fireList.vue'
import Fire from '@/components/Fire.vue'


export default {
  name: 'home',
  components: {
    Country,
    State,
    District,
    FireList,
    Fire
  },
  computed:{
  	currenType:function(){
  		console.log(this.$store.state.type);
  		return this.$store.state.type;
  	}
  }
}
</script>
