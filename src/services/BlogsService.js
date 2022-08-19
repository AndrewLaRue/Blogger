import { AppState } from "../AppState.js"
import { Blog } from "../models/Blog.js"
import { logger } from "../utils/Logger.js"
import { bcwSandbox } from "./AxiosService.js"

class BlogsService{
async getBlogs() {
  const res = await bcwSandbox.get('api/blogs')
  logger.log('get blogs res',res.data)
  AppState.blogs = res.data.map(b => new Blog(b))
  }
  
  async getBlogById(blogId) {
    const res = await bcwSandbox.get('api/blogs', {
      params: {
        blogId
      }
    })
    AppState.activeBlog = new Blog(res.data)
  }





}

export const blogsService = new BlogsService()