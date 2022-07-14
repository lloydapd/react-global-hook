const appActions = {
  addItem: (store, item) => {
    store.setState({ items: [...store.state.items, item] })
  }
}

export default appActions