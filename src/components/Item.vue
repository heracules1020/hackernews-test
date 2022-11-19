<template>
  <div class="story">
    <h2 class="story-title">{{ story.title }}</h2>
    <span class="story-meta"
      >by {{ story.by }} | {{ formattedDate }}
      {{ story.url ? " | " : "" }}</span
    >
    <a
      class="story-link"
      :href="story.url"
      v-if="story.url"
      target="_blank"
      >Read More</a
    >
  </div>
</template>

<script>
const monthNames = ['January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
]

export default {
  name: 'Item',
  props: [
    'story'
  ],
  computed: {
    formattedDate () {
      const date = new Date(this.story.time * 1000)
      return `${monthNames[date.getMonth()]} ${date.getDate()}, ${date.getFullYear()}`
    }
  }
}
</script>

<style scoped>
.story {
  background-color: #fff;
  padding: 20px 0;
  border-bottom: 1px solid #eee;
  position: relative;
  line-height: 20px;
}
.story .story-title {
  font-size: 19px;
  line-height: 30px;
  margin-bottom: 0px;
}
.story .story-meta,
.story-link {
  font-size: 0.85em;
  color: #828282;
}
</style>
