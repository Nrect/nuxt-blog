// import ca from 'element-ui/src/locale/lang/ca'

const posts = [
  { title: 'Post 1', date: new Date(), views: 22, comments: [1, 2], _id: 'post_1' },
  { title: 'Post 2', date: new Date(), views: 32, comments: [1, 2], _id: 'post_2' },
  { title: 'Post 3', date: new Date(), views: 65, comments: [1, 2], _id: 'post_3' }
]

export const actions = {
  // eslint-disable-next-line no-empty-pattern
  async fetchAdmin ({}) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts)
      }, 500)
    })
  },
  // eslint-disable-next-line require-await
  async create ({ commit }, { title, text, image }) {
    try {
      const formData = new FormData()
      formData.append('title', title)
      formData.append('text', text)
      formData.append('image', image, image.name)

      return new Promise((resolve) => {
        setTimeout(() => resolve(), 500)
      })
    } catch (e) {
      commit('setError', e, { root: true })
      throw e
    }
  },
  // eslint-disable-next-line no-empty-pattern
  async remove ({}, id) {

  },
  // eslint-disable-next-line no-empty-pattern
  async update ({}, { id, text }) {

  },
  // eslint-disable-next-line no-empty-pattern
  async fetchAdminById ({}, id) {
    return await new Promise((resolve) => {
      setTimeout(() => {
        resolve(posts.find(post => post._id === id))
      }, 500)
    })
  }
}
