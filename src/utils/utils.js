/* eslint-disable */
export function uuidv4() {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == 'x' ? r : (r & 0x3) | 0x8
    return v.toString(16)
  })
}

export function getHandledBy(publisher) {
  const isHandledByReactPlayer = ['youtube', 'facebook', 'soundcloud', 'vimeo', 'wistia', 'mixcloud', 'dailymotion', 'twitch', 'file'].includes(publisher.toLowerCase())
  const isHandledBySpotify = publisher.toLowerCase() === 'spotify'
  if (isHandledByReactPlayer) {
    return 'player'
  }
  if (isHandledBySpotify) {
    return 'spotify'
  }
  return 'other'
}
