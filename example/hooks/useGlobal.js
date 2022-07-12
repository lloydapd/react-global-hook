import useStore from "hook-use"
import actions from "./actions"

const initialState = {
  items: []
}

const useGlobal = useStore(initialState, actions)
export default useGlobal