<template>
  <div>
    <h1>{{ animal.name }}</h1>
    <p>{{ animal.age }}</p>
    <p>{{ animal.breed }}</p>
  </div>
</template>
<script>
  import { mapState } from 'vuex'

  export default {
    data () {return {
      animal: {}
    }},
    computed: {...mapState(['cats', 'dogs']),},
    mounted () {this.animal = this[this.$route.params.species][this.$route.params.id];}
  }
</script>
