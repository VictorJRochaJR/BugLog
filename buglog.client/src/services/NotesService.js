import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}/notes`)
    AppState.bugNotes = res.data
    console.log(res.data, 'bug notes')
  }

  async createNote(newNote) {
    const res = await api.post('api/notes/', newNote)
    console.log('newnote', res.data)
  }

  async deleteNote(noteId) {
    const res = await api.delete(`api/notes/${noteId}`)
    return res.data
  }
}

export const notesService = new NotesService()
