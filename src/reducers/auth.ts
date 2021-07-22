import { REGISTER } from '../actions/types'

const auth = (state: any, action: any) => {
  // const newState = Object.assign({}, state)
 
  switch(action.type) {
    case REGISTER:
      return action.payload
  }
}

export default auth