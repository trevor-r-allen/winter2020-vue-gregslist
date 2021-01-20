import { createRouter, createWebHashHistory } from 'vue-router'
// @ts-ignore
import CarDetailsPage from '../pages/CarDetailsPage.vue'
// @ts-ignore
import CarsPage from '../pages/CarsPage.vue'
// @ts-ignore
import HouseDetailsPage from '../pages/HouseDetailsPage'
// @ts-ignore
import JobDetailsPage from '../pages/JobDetailsPage'
// @ts-ignore
import JobsPage from '../pages/JobsPage'
// @ts-ignore
import HousesPage from '../pages/HousesPage'

const routes = [
  {
    path: '/cars',
    name: 'Cars',
    component: CarsPage
  }, {
    path: '/cars/:id',
    name: 'CarDetails',
    component: CarDetailsPage
  }, {
    path: '/jobs',
    name: 'Jobs',
    component: JobsPage
  }, {
    path: '/jobs/:id',
    name: 'JobDetails',
    component: JobDetailsPage
  }, {
    path: '/houses',
    name: 'Houses',
    component: HousesPage
  }, {
    path: '/houses/:id',
    name: 'HouseDetails',
    component: HouseDetailsPage
  }, {
    path: '/:catchAll(.*)*',
    redirect: '/houses',
    component: null
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
