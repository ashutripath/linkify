import { createSelector } from 'reselect'

export const ogDataStateSelector = (state) => state.ogData

export const ogDataSelector = createSelector(ogDataStateSelector, (ogDataState) => {
  const ogData = ogDataState.data

  if (Object.keys(ogData).length) {
    return ogData
  }

  return null
})

export const isLoadingOgDataSelector = createSelector(ogDataStateSelector, (ogDataState) => ogDataState.isLoadingOgData)
