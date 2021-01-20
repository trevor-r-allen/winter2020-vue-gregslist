<template>
  <div class="jobs-page container-fluid">
    <div class="row">
      <div class="col text-center">
        <h1>Jobs</h1>
      </div>
    </div>
    <div class="row">
      <div class="col">
        <form @submit.prevent=""></form>
      </div>
    </div>
    <div class="row">
      <Job v-for="job in jobs" :key="job.id" :job="job" />
    </div>
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { jobsService } from '../services/JobsService'
import { AppState } from '../AppState'
import Job from '../components/Job'
import { useRouter } from 'vue-router'
export default {
  name: 'JobsPage',
  setup() {
    // REVIEW wat dis do again?
    const router = useRouter()
    const state = reactive({
      newJob: {}
    })
    onMounted(() => {
      try {
        jobsService.getJobs()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,
      jobs: computed(() => AppState.jobs),
      router
    }
  },
  components: {
    Job
  }
}
</script>

<style>

</style>
