import db from './firebase/init.js'

import { collection, doc, addDoc, getDocs, deleteDoc, where, query } from 'firebase/firestore'

export default {
  async fetchNotes() {
    const notes = await getDocs(collection(db, 'notes'))
    let notesList = []
    if (notes.empty) {
      //console.log('Empty database')
      return null
    } else {
      //console.log('Notes found')
      notes.forEach((note) => {
        notesList.push({ title: note.data().title, text: note.data().text })
      })
    }
    return notesList.reverse()
  },

  async createNote(note) {
    const docRef = await addDoc(collection(db, 'notes'), {
      title: note.title,
      text: note.text
    })
    //console.log('Document written with ID: ', docRef.id)
  },

  async deleteNote(title, text) {
    try {
      const d = query(
        collection(db, 'notes'),
        where('title', '==', title),
        where('text', '==', text)
      )
      const docSnap = await getDocs(d)
      docSnap.forEach((doc) => {
        deleteDoc(doc.ref)
      })

      await deleteDoc(doc(db, 'notes', 'P2IeScXVNcftYhtmbp3u'))
      //console.log('Document successfully deleted!')
    } catch (error) {
      //console.error('Error removing document: ', error)
    }
  }
}
