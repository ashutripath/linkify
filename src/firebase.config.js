import firebase from 'firebase/app'
import 'firebase/auth'

const firebaseConfig = {}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
