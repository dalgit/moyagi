import { useReducer } from 'react'

export enum Actions {
  Set = 'SET_INDEX',
}

export interface actionType {
  type: Actions
  idx: number
}

export interface stateType {
  activeIdx: number
}

export const initialState = {
  activeIdx: 0,
}

export const tabReducer = (state: stateType, action: actionType) => {
  switch (action.type) {
    case Actions.Set:
      return { ...state, activeIdx: action.idx }
    default:
      throw new Error(`${action.type} not allowed`)
  }
}

export const useTabReducer = () => {
  return useReducer(tabReducer, initialState)
}
