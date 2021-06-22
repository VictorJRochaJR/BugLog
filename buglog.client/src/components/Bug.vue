<template>
  <div title="filter bug status" class="row">
    <button class=" btn btn-primary btn-sm btn-radius mt-2 ml-1" @click="filterClosed">
      Toggle Closed
    </button>
  </div>
  <div class="row  mt-2">
    <div class="col-3">
      <h3>Title</h3>
    </div>
    <div class="col-3">
      <h3>Reported By</h3>
    </div>
    <div class="col-3">
      <h3>  Status </h3>
    </div>
    <div class="col-3">
      <h3>  Last Updated </h3>
    </div>
  </div>
  <div class="row">
    <BugTemplate v-for="b in state.bugs" :key="b.id" :bug="b" />
  </div>
</template>

<script>
import { AppState } from '../AppState'
import { reactive } from '@vue/reactivity'
import { computed } from 'vue'
export default {
  setup() {
    const state = reactive({
      bugs: computed(() => {
        if (state.showClosed) {
          return AppState.bugs
        }

        return AppState.bugs.filter(c => c.closed === false)
      }),
      showClosed: true
    })
    return {
      state,
      filterClosed() {
        state.showClosed = !state.showClosed
      }
    }
  }
}

</script>

<style lang="scss" scoped>

</style>
