<template>
  <div class="house-details">
    <div class="card">
      <img class="card-img-top" :src="house.imgUrl" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ house.bedrooms }} beds | {{ house.bedrooms }} baths | {{ house.bedrooms }} floors | ${{ house.bedrooms }}
        </h4>
        <p class="card-text">
          {{ house.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { housesService } from '../services/HousesService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({

    })
    onMounted(() => {
      try {
        housesService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    onBeforeRouteLeave(() => {
      AppState.activeHouse = {}
    })
    return {
      state,
      house: computed(() => AppState.activeHouse)
    }
  }

}
</script>

<style>

</style>
