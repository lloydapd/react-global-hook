import { async } from "q";

const appActions = {
  addItem: async (store, item) => {
    await store.setState({ items: [...store.state.items, item] })
  }
}

export default appActions