import * as firebase from 'firebase'
import 'firebase/auth'
import { eventChannel } from 'redux-saga'

import { getHandledBy, uuidv4 } from 'utils/utils'

const firebaseConfig = {}

firebase.initializeApp(firebaseConfig)
export const auth = firebase.auth()
const provider = new firebase.auth.GoogleAuthProvider()
const databaseRef = firebase.database()
const storage = firebase.storage()
console.log('calling firebase')

export async function googleLogin() {
  try {
    const result = await auth.signInWithPopup(provider)
    const { user } = result
    const userInfo = {
      name: user.displayName,
      imageUrl: user.photoURL,
      uuid: user.uid,
      email: user.email,
      creationTime: user.metadata.a,
      lastSignedIn: user.metadata.b,
    }
    return userInfo
  } catch (error) {
    const errorRes = {
      errorCode: error.code,
      errorMessage: error.message,
      email: error.email,
      credential: error.credential,
    }
    return errorRes
  }
}

export async function fbSetFirebaseUser(userData) {
  const uuid = auth.currentUser.uid

  try {
    const resp = await databaseRef.ref(`/users/${uuid}`).set(userData)
    return resp
  } catch {}
}

export async function updateUserData(userData) {
  const uuid = auth.currentUser.uid
  try {
    await databaseRef.ref(`/users/${uuid}`).update(userData)
  } catch {}
}

export async function getUserData() {
  const uuid = auth.currentUser.uid
  try {
    const res = await databaseRef.ref(`/users/${uuid}`).once('value')
    return res.val()
  } catch {}
}

export async function uploadImage(fileName, file) {
  try {
    let imageUrl
    const uploadTask = storage.ref().child(`userProfilePics/${fileName}`).put(file)

    await uploadTask.snapshot.ref.getDownloadURL().then(async function (downloadURL) {
      await updateUserData({ imageUrl: downloadURL })
      imageUrl = downloadURL
    })
    return imageUrl
  } catch {}
}

export async function getDefaultProfileImages() {
  try {
    const defaultImagesRef = storage.ref('defaultPofilePics')
    const result = await defaultImagesRef.listAll()
    const images = result.items.map(async (imageRef) => {
      const imageUrl = await imageRef.getDownloadURL()
      return imageUrl
    })
    return Promise.all(images)
  } catch {}
}

export function addPost(postData, metaData) {
  try {
    const uuid = auth.currentUser.uid
    const postId = uuidv4()
    const handledBy = getHandledBy(postData.publisher)

    const modifiedPostData = {
      data: postData,
      createdAt: firebase.database.ServerValue.TIMESTAMP,
      postId,
      uuid,
      handledBy,
      ...metaData,
    }
    console.log('!! adding posts')

    const resp = databaseRef.ref(`/posts/${postId}`).set(modifiedPostData)
    return resp
  } catch {}
}

export function postsListener() {
  const channel = eventChannel((emiter) => {
    const listener = databaseRef
      .ref('posts')
      .orderByChild('isPublic')
      .equalTo(true)
      .on('value', (snapshot) => {
        emiter(snapshot.val() || {})
      })

    return () => {
      listener.off()
      // databaseRef.off('value', listener)
    }
  })

  console.log('returning')

  return channel
}

export async function getUserPosts(uuid = auth.currentUser.uid) {
  try {
    const res = await databaseRef.ref('posts').orderByChild('uuid').equalTo(uuid).once('value')

    return res.val()
  } catch (e) {
    return e
  }
}
