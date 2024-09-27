<template>
  <div>
    <h1>Shared happy notes</h1>
    <div style="margin-bottom: 20px">
      This is a webpage where you share your positive notes with people. <br />
      You can create a new note, or delete a negative one, the app is based on trust and positivity.
    </div>
    <router-link to="/create" class="create-button">Create</router-link>
    <div class="note-container" v-for="note in notes" :key="note.id">
      <div class="note-format">
        <h3>Title: &nbsp;</h3>
        <h2>{{ note.title }}</h2>
      </div>
      <div class="note-format">
        <h3>Text: &nbsp;</h3>
        <p>{{ note.text }}</p>
      </div>
      <button @click="deleteNote(note.title, note.text)" class="delete-button">Delete</button>
    </div>
  </div>
</template>

<script>
import db from '../db'

export default {
  name: 'NotesList',
  data() {
    return {
      notes: []
    }
  },
  methods: {
    async deleteNote(title, text) {
      await db.deleteNote(title, text)
      this.notes = await db.fetchNotes()
    }
  },
  async created() {
    this.notes = await db.fetchNotes()
  }
}
</script>

<style scoped>
.note-container {
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 20px;
  margin-top: 20px;
}
.note-format {
  display: flex;
  align-items: center;
}
.create-button {
  background-color: green;
  color: white;
  padding: 10px 20px;
  text-decoration: none;
  border-radius: 4px;
}

.delete-button {
  background-color: red;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
}
</style>
