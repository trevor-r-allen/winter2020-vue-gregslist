<template>
  <div class="cars-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1><img alt="Vue logo" src="../assets/logo.png" class="logo" />ars</h1>
      </div>
    </div>
    <div class="row">
      <Car v-for="car in cars" :key="car.id" :car="car" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from 'vue'
import { carsService } from '../services/CarsService'
import { AppState } from '../AppState'
import Car from '../components/Car.vue'

export default {
  name: 'CarsPage',
  setup() {
    // NOTE on mounted gets called when the page is first mounted to the dom
    onMounted(() => {
      try {
        carsService.getCars()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      // if data changes dynimcally in the appstate use a computed
      cars: computed(() => AppState.cars)
    }
  },
  components: {
    Car
  }
}
</script>

<style lang="scss">
  .logo {
   transform: rotateZ(90deg);
   height: 1em
  }
</style>
