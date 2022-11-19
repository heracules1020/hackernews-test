import { mount, createLocalVue } from '@vue/test-utils'
import Vuex from 'vuex'
import Home from '@/views/Home.vue'
import Item from '@/components/Item.vue'
import Vue from 'vue'

const localVue = createLocalVue()
localVue.use(Vuex)

const testStoryData = {
  stories: [{
    by: 'cheinyeanlim',
    descendants: 0,
    id: 33667880,
    score: 1,
    time: 1668842385,
    title: 'NASA’s Artemis Launch Just Kicked Off a New Age in Space Exploration',
    type: 'story',
    url: 'https://singularityhub.com/2022/11/18/a-new-age-in-space-exploration-began-this-week-with-the-artemis-launch/'
  },
  {
    by: 'TangerineDream',
    descendants: 0,
    id: 33668577,
    score: 1,
    time: 1668850206,
    title: 'This week in KDE: less-rage-inducing error messages in Discover',
    type: 'story',
    url: 'https://pointieststick.com/2022/11/18/this-week-in-kde-less-rage-inducing-error-messages-in-discover/'
  },
  {
    by: 'mdp2021',
    descendants: 0,
    id: 33668576,
    score: 1,
    time: 1668850203,
    title: 'Artificial neural networks learn better when they spend time not learning at all',
    type: 'story',
    url: 'https://phys.org/news/2022-11-artificial-neural-networks.html'
  }]
}

const store = new Vuex.Store({
  state () {
    return {
      newStories: testStoryData.stories
    }
  },
  actions: {
    fetch_new_stories () {
      console.log('fetch_new_stories')
    }
  }
})

const wrapper = mount(Home, {store, localVue})

describe('Dispatch Store Action', () => {
  let spy
  it('fetch_new_stories() its been called', () => {
    spy = jest.spyOn(store, 'dispatch')
    localVue.nextTick(() => {
      expect(spy).toHaveBeenCalledWith('fetch_new_stories')
      spy.mockReset()
    })
  })
})

describe('Home.vue', () => {
  it('Should render the right number of children', () => {
    const children = wrapper.findAllComponents(Item)
    expect(children).toHaveLength(3)
  })
})
