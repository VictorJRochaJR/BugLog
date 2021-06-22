<template>
  <div>
    <NoteTemplate v-for="n in state.notes" :key="n.id" :note="n" />
  </div>
</template>

<script>
import { reactive } from '@vue/reactivity'
import { computed } from '@vue/runtime-core'
import { AppState } from '../AppState'
export default {
  setup() {
    const state = reactive({
      notes: computed(() => AppState.bugNotes)
    })
    return {
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
