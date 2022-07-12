import React from 'react'
import useGlobal from '../useGlobal'

function App() {
  const [state, actions] = useGlobal(['items'])

  console.log(state)

  return (
    <button onClick={() => actions.addItem('hello')}>Add Item</button>
  )
}

export default App