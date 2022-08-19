<template>
  <div class="blog-page">
    <div>
      {{ activeBlog }}
    </div>
  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { AppState } from '../AppState.js';
import { blogsService } from '../services/BlogsService.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';



export default {
  setup() {

    const route = useRoute()

    async function getBlogById() {
      try {
        await blogsService.getBlogById(route.params.blogId)
      } catch (error) {
        logger.error(error)
        Pop.toast(error.message, 'error')
      }
    }


    onMounted(() => {
      getBlogById()
    })
    return {
      activeBlog: computed(() => AppState.activeBlog)
    }
  }
}
</script>


<style lang="scss" scoped>
</style>