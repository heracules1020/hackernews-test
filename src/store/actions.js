import debounce from '@/plugins/debounce'
const { default: Axios } = require('axios')

const httpReqInstance = Axios.create({
  baseURL: 'https://hacker-news.firebaseio.com/v0'
})

export default {
  fetch_new_stories: debounce(({ commit }) => {
    commit('CLEAR_NEW_STORY')

    httpReqInstance.get('/newstories.json')
      .then(resp => {
        let results = resp.data.slice(0, 10)
        results.forEach(element => {
          httpReqInstance.get('/item/' + element + '.json')
            .then((result) => {
              commit('APPEND_NEW_STORY', result.data)
            })
            .catch((err) => {
              console.log(err)
            })
        })
      })
      .catch(err => {
        console.log(err)
      })
  })
}
