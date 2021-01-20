<template>
  <div class="houses-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Houses</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent=""></form>
      </div>
    </div>
    <div class="row">
      <House />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import housesService from '../services/HousesService'
import { AppState } from '../AppState'
import { useRouter } from 'vue-router'
import House from '../components/House'
export default {
  name: 'HousesPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      houses: computed(() => AppState.houses),
      router
    }
  },
  components: {
    House
  }

}
</script>

<style>

</style>
