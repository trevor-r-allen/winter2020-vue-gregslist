<template>
  <div class="job-details">
    <div class="card">
      <img class="card-img-top" src="job.image" alt="">
      <div class="card-body">
        <h4 class="card-title">
          {{ job.company }} | {{ job.jobTitle }} | ${{ job.rate }}
        </h4>
        <p class="card-text">
          {{ job.description }}
        </p>
      </div>
    </div>
    <img src="" alt="">
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { onBeforeRouteLeave, useRoute } from 'vue-router'
import { AppState } from '../AppState'
import { jobsService } from '../services/JobsService'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({

    })
    onMounted(() => {
      try {
        // REVIEW route format looks like wat?
        jobsService.getOne(route.params.id)
      } catch (error) {
        console.error(error)
      }
    })
    onBeforeRouteLeave(() => {
      AppState.activeJob = {}
    })
    return {
      state,
      job: computed(() => AppState.activeJob)
    }
  }

}
</script>

<style>

</style>
