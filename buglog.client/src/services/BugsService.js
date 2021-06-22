import { AppState } from '../AppState'
import { api } from './AxiosService'

class BugsService {
  async getBugs() {
    const res = await api.get('api/bugs')
    AppState.bugs = res.data
    console.log(res.data)
  }

  async createBug(newBug) {
    const res = await api.post('api/bugs', newBug)
    console.log(res.data)
    return res.data
  }

  async getBugById(id) {
    const res = await api.get(`api/bugs/${id}`)
    AppState.bugDetail = res.data
    console.log('bug data', res.data)
  }

  async closeBug(id) {
    const res = await api.delete(`api/bugs/${id}`)
    console.log(res.data)
  }
}

export const bugsService = new BugsService()
