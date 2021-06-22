<template>
  <div class="col-12 border py-3 my-2 shadow-lg">
    <div class="row align-items-baseline">
      <div class="col-3">
        <img class="rounded-pill" :src="note.creator.picture" alt="Card image cap" height="60">

        {{ note.creator.name }}
      </div>
      <div class="col-6 text-center">
        {{ note.body }}
      </div>
      <div v-if="account.id===note.creator.id" class="col-3 text-right">
        <button @click="deleteNote">
          Delete
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { computed } from '@vue/runtime-core'
import { useRoute } from 'vue-router'
import { notesService } from '../services/NotesService'
import Notification from '../utils/Notification'
import { AppState } from '../AppState'
export default {
  props: {
    note: { type: Object, required: true }
  },
  setup(props) {
    const route = useRoute()
    return {
      async deleteNote() {
        try {
          if (await Notification.confirmAction('Are you sure you want to delete?')) {
            await notesService.deleteNote(props.note.id)
            await notesService.getNotesByBugId(route.params.id)
          }
        } catch (error) {
          console.log(error)
        }
      },
      account: computed(() => AppState.account)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
