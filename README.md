# react-global-hook

# What is this?

Get a state and actions management for your app 

# Installation

`npm i react-global-hook --save`

Then...

...

import React from 'react'
import { globalhook, request } from 'react-global-hook'

const initialState = {
  items: []
}

const appActions = {
  setItems: async(store, items) => {
    await store.setState({ items: items })
  }
}

const useGlobal = globalhook(initialState, actions)

function App() {
  const [state, actions] = useGlobal(['items'])

  function requestAPI() {
    request(method, API_URL + url, data, headers)
  }

}
...

## Use this

* *globalhook* - requires initialState and actions
* *request* - request to your rest API
