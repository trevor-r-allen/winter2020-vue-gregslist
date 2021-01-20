<template>
  <h1>jobs page</h1>
</template>

<script>
import { onMounted, reactive } from "vue"
import { useRouter } from "vue-router"
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
        
      } catch (error) {
        console.log(error)
      }
    })
  }
}
</script>

<style>

</style>
