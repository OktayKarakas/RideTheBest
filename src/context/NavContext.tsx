import { createContext } from 'react'
interface context {
  state: boolean
  dispatch: any
}

const NavContext = createContext({} as context)

export default NavContext
