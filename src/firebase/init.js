import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyAaercJ9rwxfhVR5cJmwECFA7XyiP1xEfU',
  authDomain: 'web2-6.firebaseapp.com',
  projectId: 'web2-6',
  storageBucket: 'web2-6.appspot.com',
  messagingSenderId: '1022402284701',
  appId: '1:1022402284701:web:812023be92cb72f2035874'
}

initializeApp(firebaseConfig)

const db = getFirestore()
export default db
