<template>
  <div class="modal" tabindex="-1" role="dialog" id="postModal">
    <div class="modal-dialog" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">
            New Bug
          </h5>
          <button type="button" class="close" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
          </button>
        </div>
        <div class="modal-body">
          <form @submit.prevent="createBug">
            <input type="text"
                   v-model="state.newBug.title "
                   placeholder="Bug Title"
                   required
            >
            <label for="exampleFormControlTextarea1"></label>
            <textarea class="form-control"
                      id="exampleFormControlTextarea1"
                      rows="3"
                      v-model="state.newBug.description"
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
import { bugsService } from '../services/BugsService'
import { useRoute, useRouter } from 'vue-router'
export default {

  setup() {
    const state = reactive({

      newBug: {}
    })
    const router = useRouter()

    return {
      state,
      async createBug() {
        try {
          const bug = await bugsService.createBug(state.newBug)
          router.push({ name: 'BugDetails', params: { id: bug.id } })
          state.newBug = {}
        } catch (error) {
          console.log(state.newBug)
          console.log(error)
        }
      }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
