import { AppState } from '../AppState'
import { api } from './AxiosService'

class JobsService {
  async getJobs() {
    const res = await api.get('/jobs')
    AppState.jobs = res.data
  }

  async getOne(id) {
    const res = await api.get(`/jobs/${id}`)
    AppState.activeJob = res.data
  }

  async create(job) {
    const res = await api.post('/jobs', job)
    AppState.jobs.push(res.data)
    return res.data.id
  }
}

export const jobsService = new JobsService()
