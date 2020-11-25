import { actionTypes } from './constants'

export function startImageUpload(file) {
  return {
    type: actionTypes.START_IMAGE_UPLOAD,
    payload: file,
  }
}

export function succesImageUpload() {
  return {
    type: actionTypes.SUCCESS_IMAGE_UPLOAD,
  }
}

export function failedImageUpload() {
  return {
    type: actionTypes.FAILED_IMAGE_UPLOAD,
  }
}

export function startGettingDefaultImages() {
  return {
    type: actionTypes.START_GETTING_DEFAULT_IMAGES,
  }
}

export function successGettingDefaultImages(images) {
  return {
    type: actionTypes.SUCCESS_GETTING_DEFAULT_IMAGES,
    payload: images,
  }
}

export function failedGettingDefaultImages(error) {
  return {
    type: actionTypes.FAILED_GETTING_DEFAULT_IMAGES,
    error,
  }
}

export function startAddingDefaultPic(imageUrl) {
  return {
    type: actionTypes.START_ADDING_DEFAULT_PIC,
    payload: imageUrl,
  }
}

export function successAddingDefaultPic() {
  return {
    type: actionTypes.SUCCESS_ADDING_DEFAULT_PIC,
  }
}

export function failedAddingDefaultPic() {
  return {
    type: actionTypes.FAILED_ADDING_DEFAULT_PIC,
  }
}

export function startGettingUserPosts() {
  return {
    type: actionTypes.START_GETTING_USER_POSTS,
  }
}

export function successGettingUserPosts(posts) {
  return {
    type: actionTypes.SUCCESS_GETTING_USER_POSTS,
    payload: posts,
  }
}

export function failedGettingUserPosts(error) {
  return {
    type: actionTypes.FAILED_GETTING_USER_POSTS,
    error,
  }
}
