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
      <House v-for="house in houses" :key="house.id" :house="house" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House'
import { useRouter } from 'vue-router'

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
