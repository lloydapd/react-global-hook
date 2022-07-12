
# What is this?

Get a state and actions management for your app 

# Installation

`npm i hook-use --save`

Then...

```
import useStore from 'hook-use'

const initialState = { counter: 0 }

const actions = { add: (store, value) => { store.setState({ counter: value }) } }

const useGlobal = useStore(initialState, actions) 

function App() {
  const [state, actions] = useGlobal(['item'])

}
```

