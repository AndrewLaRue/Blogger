<template>
  <div class="home-page">
    <div class="container">
      <div class="row">
        <div class="col-md-4" v-for="b in blogs" :key="b.id">
          <BlogCard :blog="b" />
        </div>
      </div>
    </div>

  </div>
</template>


<script>
import { computed } from '@vue/reactivity';
import { onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { logger } from '../utils/Logger.js';
import Pop from '../utils/Pop.js';
import { blogsService } from '../services/BlogsService.js';

export default {
  setup() {
    async function getBlogs() {
      try {
        await blogsService.getBlogs();
      }
      catch (error) {
        logger.error(error);
        Pop.toast(error.message, "error");
      }
    }
    onMounted(() => {
      getBlogs();
    });
    return {
      blogs: computed(() => AppState.blogs)
    };
  },

}
</script>
<!-- TODO  check the id for the blog that we are redirectiong to to see if it exists. -->

<style lang="scss" scoped>
</style>