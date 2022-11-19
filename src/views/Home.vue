<template>
  <div class="container">
    <item v-for="story in stories" :key="story.id" :story="story"></item>
  </div>
</template>

<script>
import Item from '@/components/Item.vue'

export default {
  name: 'New',
  components: {
    'item': Item
  },
  computed: {
    stories: function () {
      return this.$store.state.newStories
    }
  },
  created: function () {
    this.$store.dispatch('fetch_new_stories')
  }
}
</script>
