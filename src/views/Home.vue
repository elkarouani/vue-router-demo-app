<template>
  <div class="home">
    <h1>Adopt a new best friend.</h1>
    {{ animalsCount }}
    {{ getAllCats.length }}
    <button @click="togglePetForm" class="btn btn-primary">Add New Pet</button>

    <b-form @submit.prevent="handleSubmit" v-if="showPetForm">
      <b-form-group id="input-group-2" label="Pet's Name:" label-for="input-2">
        <b-form-input
          id="input-2"
          v-model="formData.name"
          required
          placeholder="Enter name"
        ></b-form-input>
      </b-form-group>

      <b-form-group id="input-group-3" label="Species:" label-for="input-3">
        <b-form-select
          id="input-3"
          v-model="formData.species"
          :options="['cats', 'dogs']"
          required
        ></b-form-select>
      </b-form-group>

      <b-form-group id="input-group-2" label="Pet's Age:" label-for="input-2">
        <b-form-input
          id="input-2"
          type="number"
          v-model="formData.age"
          required
          placeholder="Enter age"
        ></b-form-input>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
  import { mapActions, mapGetters } from 'vuex'
  import Swal from 'sweetalert2'

  export default {
    name: 'home',
    data () {
      return {showPetForm: false, formData: {name: '', age: 0, species: null}}
    },
    computed: {
      ...mapGetters([
        'animalsCount',
        'getAllCats'
      ])
    },
    methods: {
      ...mapActions([
        'addPet',
        'deletePet'
      ]),
      togglePetForm () {this.showPetForm = !this.showPetForm;},
      handleSubmit () {
        const { species, age, name } = this.formData;
        this.addPet({ species, pet: { name, age } })
        this.formData = {name: '', age: 0, species: null};
        Swal.fire({type: 'success', title: 'Form well submited', showConfirmButton: false, timer: 1500})
      }

    }
  }
</script>
