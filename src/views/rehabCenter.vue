
<template>

  <div>
    
    <form novalidate class="md-layout md-alignment-center" @submit.prevent="validateUser">
      <md-card class="md-layout-item md-size-50 md-small-size-100">
        <md-card-header>
          <div class="md-title">Add Relief Camp</div>
        </md-card-header>

        <md-card-content>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('description')">
                <label for="description">Description</label>
                <md-input name="description" id="description"  v-model="form.description" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('address')">
                <label for="address">address</label>
                <md-input name="address" id="address"  v-model="form.address" :disabled="sending" />
              </md-field>
            </div>
          </div>

          <div id="mapid" style="height: 180px;"></div>



          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('latitude')">
                <label for="latitude">Latitude</label>
                <md-input name="latitude" id="latitude"  v-model="form.latitude" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <div class="md-layout md-gutter">
            <div class="md-layout-item md-small-size-100">
              <md-field :class="getValidationClass('longitude')">
                <label for="longitude">Longitude</label>
                <md-input name="longitude" id="longitude" autocomplete="longitude" v-model="form.longitude" :disabled="sending" />
              </md-field>
            </div>
          </div>
          <div id="map"></div>

        </md-card-content>

        <md-progress-bar md-mode="indeterminate" v-if="sending" />

        <md-card-actions>
          <md-button class="md-raised md-accent" type="submit" @click="submit()"  :disabled="sending">Create Relief Camp</md-button>
        </md-card-actions>
      </md-card>

      <md-snackbar :md-active.sync="userSaved">The user {{ lastUser }} was saved with success!</md-snackbar>
    </form>
  </div>
</template>

<script>
  import { validationMixin } from 'vuelidate'
  import {
    required,
    email,
    minLength,
    maxLength
  } from 'vuelidate/lib/validators'
  import axios from 'axios'

  export default {
    name: 'FormValidation',
    mixins: [validationMixin],
    data: () => ({
      form: {
        firstName: null,
        lastName: null,
        gender: null,
        age: null,
        email: null,
        latitude:null,
        longitude:null,
        address:null
      },
      userSaved: false,
      sending: false,
      lastUser: null
    }),
    validations: {
      form: {
        latitude: {
          required,
          minLength: minLength(3)
        },
        longitude: {
          required,
          minLength: minLength(3)
        },
        description: {
          required,
          maxLength: minLength(3)
        },
        address: {
          required
        },
        email: {
          required,
          email
        }
      }
    },
    methods: {
      submit(){
        // console.log(this.form);
        var self=this;
        axios({
          method:'post',
          url:'http://localhost:3030/apis/rehab/addrehab',
          data:{
            description:this.form.description,
            lat:this.form.latitude,
            long:this.form.longitude,
            path:"dummy/Path",
            stockData:"No stock data available",
            address:this.form.address
          }
        }).then(function(res){
            console.log(res);
            alert("Relief Camp Added")
            self.$router.push('/');
          }).catch((err)=>{
            console.log(err);
          })
      },
      getValidationClass (fieldName) {
        const field = this.$v.form[fieldName]

        if (field) {
          return {
            'md-invalid': field.$invalid && field.$dirty
          }
        }
      },
      clearForm () {
        this.$v.$reset()
        this.form.firstName = null
        this.form.lastName = null
        this.form.age = null
        this.form.gender = null
        this.form.email = null
      },
      saveUser () {
        this.sending = true

        // Instead of this timeout, here you can call your API
        window.setTimeout(() => {
          this.lastUser = `${this.form.firstName} ${this.form.lastName}`
          this.userSaved = true
          this.sending = false
          this.clearForm()
        }, 1500)
      },
      validateUser () {
        this.$v.$touch()

        if (!this.$v.$invalid) {
          this.saveUser()
        }
      }
    },
    mounted(){
      var self = this;
      var mymap = L.map('mapid').setView([8.5471, 76.9139], 13);
            L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
              attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
              maxZoom: 18,
              id: 'mapbox.streets',
              accessToken: 'pk.eyJ1IjoidXNlcjk3NDciLCJhIjoiY2puaTA5N2oxMDMxZjNybXc4bXEzbnVuciJ9.l1acHqpPtnnOGvIF9_7EnA'
              }).addTo(mymap);

            function onMapClick(e) {
                 self.form.latitude=e.latlng.lat;
                 self.form.longitude=e.latlng.lng;
              }

              mymap.on('click', onMapClick);
    }
  }
</script>

<style lang="css" scoped>
  .md-progress-bar {
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
  }
   
</style>
