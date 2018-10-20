<template>
  <div >
  <form novalidate class="md-layout md-size-50 md-small-size-100" >
<md-card class="md-layout-item md-size-50 md-small-size-100">
  <md-card-header>
    <div class="md-title">Add REhab Center</div>
  </md-card-header>
    <md-field>
      <label>Description</label>
      <md-input v-model="description"></md-input>
      <span class="md-helper-text">Description</span>
    </md-field>

    <md-field>
      <label>Latitude</label>
      <md-input v-model="lat" placeholder="A nice placeholder"></md-input>
    </md-field>

    <md-field md-inline>
      <label>Longitude</label>
      <md-input v-model="long"></md-input>
    </md-field>
    </md-card-content>

        
      </md-card>

    </form>
  </div>
</template>

<script>
  export default {
    name: 'TextFields',
    data: () => ({
      initial: 'Initial Value',
      type: null,
      withLabel: null,
      inline: null,
      number: null,
      textarea: null,
      autogrow: null,
      disabled: null
    })
  }
</script>
