<template>
  <div class="container-fluid">
    <Bug />
  </div>
</template>

<script>
import { onMounted } from '@vue/runtime-core'
import Notification from '../utils/Notification'
import { useRouter } from 'vue-router'
import { bugsService } from '../services/BugsService'
export default {
  setup() {
    onMounted(async() => {
      try {
        await bugsService.getBugs()
      } catch (error) {
        Notification.toast(error.message)
      }
    })
  }
}
</script>

<style scoped lang="scss">
.home{
  text-align: center;
  user-select: none;
  > img{
    height: 200px;
    width: 200px;
  }
}
</style>
