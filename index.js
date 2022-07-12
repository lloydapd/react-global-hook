import globalhook from './globalHook'
import request from './actions/utils'

export default {
  globalhook,
  ...request.requestAPI
}

console.log(globalhook, request)