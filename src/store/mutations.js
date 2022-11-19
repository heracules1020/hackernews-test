export default {
  // APPEND_NEW_STORY: (state, articles) => {
  //   Object.assign(state.newStories, articles)
  // },
  APPEND_NEW_STORY: (state, articles) => {
    state.newStories.push(articles)
  },
  CLEAR_NEW_STORY: (state) => {
    state.newStories = []
  }
}
