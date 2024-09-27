<template>
  <div>
    <h1>Create a Note</h1>
    <form @submit.prevent="submit">
      <label>
        Title
        <input v-model="title" />
      </label>
      <label>
        Content
        <textarea v-model="text"></textarea>
      </label>
      <button type="submit">Create</button>
    </form>
  </div>
</template>

<script>
import db from '../db'

export default {
  name: 'NoteCreator',
  data() {
    return {
      title: '',
      text: ''
    }
  },
  methods: {
    async submit() {
      const note = await db.createNote({ title: this.title, text: this.text })
      //console.log('Created note:', note)
      this.title = ''
      this.text = ''
      this.$router.push('/')
    }
  }
}
</script>

<style scoped>
label {
  display: block;
  margin-bottom: 1em;
}
</style>
