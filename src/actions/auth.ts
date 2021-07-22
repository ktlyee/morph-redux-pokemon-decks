import { REGISTER } from './types'
  
export const register = (payload: object) => {
    return {
        type: REGISTER,
        payload
    }
}