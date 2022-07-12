import React from 'react'
import globalHook from './globalHook'

// all states here
const initialState = {
  token: '',
  counter: 0
}

const useGlobal = globalHook(initialState, actions)
export default useGlobal
