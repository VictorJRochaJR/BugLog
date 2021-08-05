import { AppState } from '../AppState'
import { api } from './AxiosService'

class NotesService {
  async getNotesByBugId(id) {
    const res = await api.get(`api/bugs/${id}/notes`)
    AppState.bugNotes = res.data
  }

  async createNote(newNote) {
    await api.post('api/notes/', newNote)
  }

  async deleteNote(noteId) {
    const res = await api.delete(`api/notes/${noteId}`)
    return res.data
  }
}

export const notesService = new NotesService()
