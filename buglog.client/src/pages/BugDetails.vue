<template>
  <div class="container-fluid">
    <div class="row align-items-baseline">
      <div class="col-3 pr-0" style="text-align: right;">
        <h5>Reported By:</h5>
      </div>
      <div class="col" style="text-align: left;">
        <h3>
          <div v-if="details.creator">
            {{ details.creator.name }}
            <img class="rounded-pill" :src="details.creator.picture" alt="Card image cap" height="60">
          </div>
        </h3>
      </div>
      <div class="col-3" style="text-align: right;">
        <span class="mr-1">Status:</span>
        <span class="text-danger" style="text-align: right;" v-if="details.closed === true">Closed</span>
        <!-- {{ bug.closed ? }} -->
        <span class="text-success" style="text-align: right;" v-else>Open </span>
      </div>
    </div>
    <div class="row">
      <div class="card col ml-3 mr-3">
        <div>
          {{ details.description }}
        </div>
      </div>
    </div>
    <div class="row float-right mr-2 mt-2">
      <div class="">
        <button v-if="account.id===details.creatorId && details.closed === false " class="btn btn-primary" @click="closeBug">
          Close Bug
        </button>
      </div>
    </div>
    <div class="row mt-4">
      <span><h2>Bug Notes</h2></span>
    </div>
    <div>
      <Notes />
    </div>
    <div>
      <button data-toggle="modal" data-target="#noteModal">
        Add Bug Note
      </button>
    </div>
  </div>
  <CreateNoteModal />
</template>

<script>
import { computed, onMounted } from '@vue/runtime-core'
import { notesService } from '../services/NotesService'
import { useRoute } from 'vue-router'
import { bugsService } from '../services/BugsService'
import { AppState } from '../AppState'
import Notification from '../utils/Notification'
export default {
  name: 'BugDetails',
  setup() {
    const route = useRoute()
    onMounted(async() => {
      try {
        await notesService.getNotesByBugId(route.params.id)
      } catch (error) {
        console.log(error)
      }
      try {
        await bugsService.getBugById(route.params.id)
      } catch (error) {
        console.log(error)
      }
    })
    return {
      async closeBug() {
        if (await Notification.confirmAction('Are you sure you want to close?')) {
          await bugsService.closeBug(route.params.id)
        }
      },
      details: computed(() => AppState.bugDetail),
      account: computed(() => AppState.account)
    }
  },
  components: {}
}
</script>

<style lang="scss" scoped>

</style>
