<template>
  <div class="modal" tabindex="-1" role="dialog" id="noteModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            New Note
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createNote">
            <label for="exampleFormControlTextarea1"></label>
            <textarea class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="state.newNote.body"
            ></textarea>
            <button type="submit" class="btn btn-primary">
              Save changes
            </button>
            <button type="button" class="btn btn-secondary" data-dismiss="modal">
              Close
            </button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
export default {
  setup() {
    const route = useRoute()
    const state = reactive({
      newNote: {}
    })
    return {
      state,
      async createNote() {
        try {
          state.newNote.bug = route.params.id
          await notesService.createNote(state.newNote)
          await notesService.getNotesByBugId(route.params.id)
          state.newNote = {}
        } catch (error) {
          console.log(error)
          console.log(state.newNote)
        }
      }
    }
  }

}
</script>

<style lang="scss" scoped>

</style>
