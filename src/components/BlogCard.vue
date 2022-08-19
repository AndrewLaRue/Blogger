<template>
  <div class="blog-card card my-2">
    <h6 class="text-center elevation-2">{{ blog.title }}</h6>
    <router-link :to="{ name: 'Blog', params: { blogId: blog.id } }">
      <img class="img-fluid rounded-bottom selectable" :src="blog.imgUrl" alt="" title="Go to Blog Page">

    </router-link>

    <img class="creator-img selectable" :src="blog.creator.picture" alt="" :title="blog.creator.name">
  </div>

</template>


<script>
import { Blog } from '../models/Blog.js';

export default {
  props: {
    blog: { type: Blog, required: true }
  },
  setup() {


    return {

    }
  }
}
</script>


<style lang="scss" scoped>
.blog-card {
  position: relative;
  min-height: 33vh;
}

.creator-img {
  position: absolute;
  bottom: 8px;
  right: 8px;
  border-radius: 50%;
  height: 30px;
  width: 30px;
}
</style>