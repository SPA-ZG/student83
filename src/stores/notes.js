import { defineStore } from 'pinia'

export const useNotesStore = defineStore('notes', () => {
  const notes = ref([])

  async function fetchNotes() {
    notes.value = await db.fetchNotes()
  }

  async function createNote(note) {
    await db.createNote(note)
    await fetchNotes()
  }

  return { notes, fetchNotes, createNote }
})
