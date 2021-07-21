import { REGISTER } from '../actions/types'

const auth = (state: any, action: any) => {
  const newState = Object.assign({}, state)
 
  switch(action.type) {
    case REGISTER:
      return newState[
        Math.random()
          .toString(36)
          .replace(/[^a-z]+/g, "")
      ] = (action.payload)
  }
}

export default auth