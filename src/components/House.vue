<template>
  <div class="car col-4">
    <router-link :to="{ name: 'CarDetails', params: { id: car.id } }">
      <div class="card">
        <img class="card-img-top" :src="car.imgUrl" alt="" />
        <div class="card-body">
          <h4 class="card-title">
            {{ car.make }} | {{ car.model }}
          </h4>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'House',
  props: {
    house: {
      type: Object,
      required: true
    }
  }
}
</script>

<style>

</style>
