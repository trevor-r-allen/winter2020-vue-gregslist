import { AppState } from '../AppState'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    // fetch data
    const res = await api.get('')
    // add to AppState
    AppState.cars = res.data
  }

  async getOne(id) {
    const res = await api.get(id)
    AppState.activeCar = res.data
  }
}

export const carsService = new CarsService()
