import { createSelector } from 'reselect'

const loggingDataSelector = (state) => state.login

export const isUserLoggedInSelector = createSelector(loggingDataSelector, (loggingData) => loggingData.isUserLoggedIn)
