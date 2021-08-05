import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
  }

  async createBug(newBug) {
    const res = await api.post('api/bugs', newBug)

    return res.data
  }

  async getBugById(id) {
    const res = await api.get(`api/bugs/${id}`)
    AppState.bugDetail = res.data
  }

  async closeBug(id) {
    await api.delete(`api/bugs/${id}`)
  }
}

export const bugsService = new BugsService()
