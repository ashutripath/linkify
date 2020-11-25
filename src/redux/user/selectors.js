import { createSelector } from 'reselect'

export const userStateSelector = (state) => state.user

export const userDataSelector = createSelector(userStateSelector, (userState) => {
  const userData = userState.user
  if (Object.keys(userData).length) {
    return userData
  }
  return []
})

export const isFetchingUserDataSelector = createSelector(userStateSelector, (userState) => {
  return (userState || {}).isFetchingUserData
})

export const userImageSelector = createSelector(userDataSelector, (userData) => (userData || {}).imageUrl)
