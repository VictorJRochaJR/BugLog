<template>
  <div class="col-12 border p-3 m-3 shadow-lg">
    <div class="row">
      <router-link class="col-3" title="go to details" :to="{name: 'BugDetails', params:{ id: bug.id}}">
        <div>
          <span><u>{{ bug.title }}<u></u></u></span>
        </div>
      </router-link>
      <div class="col-3">
        <span>
          {{ bug.creator.name }}
        </span>
      </div>
      <div class="col-3">
        <span class="text-danger" v-if="bug.closed === true">Closed</span>
        <!-- {{ bug.closed ? }} -->
        <span class="text-success" v-else>Open </span>
      </div>
      <div class="col-3">
        <span>
          {{ lastModified(bug.updatedAt) }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
import { reactive } from '@vue/reactivity'
export default {
  props: {
    bug: { type: Object, required: true }
  },
  setup(props) {
    const state = reactive({

    })
    return {
      state,

      lastModified(updatedAt) {
        const m = moment(updatedAt).format('MM-DD-YYYY')
        return m
      }
    }
  }
}

</script>

<style lang="scss" scoped>
router-link{
  color: black !important;
}

</style>
