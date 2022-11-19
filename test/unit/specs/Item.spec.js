import { mount } from '@vue/test-utils'
import Item from '@/components/Item.vue'

const testPropData = {
  story: {
    by: 'cheinyeanlim',
    descendants: 0,
    id: 33667880,
    score: 1,
    time: 1668842385,
    title: 'NASA’s Artemis Launch Just Kicked Off a New Age in Space Exploration',
    type: 'story',
    url: 'https://singularityhub.com/2022/11/18/a-new-age-in-space-exploration-began-this-week-with-the-artemis-launch/'
  }
}

const wrapper = mount(Item, {
  propsData: testPropData
})

describe('Item.vue', () => {
  it('Should render title', () => {
    expect(wrapper.find('h2').exists()).toBe(true)
  })

  it('Should render exact title', () => {
    expect(wrapper.find('h2').text()).toEqual(testPropData.story.title)
  })

  it('Computed should return the correct date', () => {
    expect(Item.computed.formattedDate.call(testPropData)).toEqual('November 19, 2022')
  })
})
