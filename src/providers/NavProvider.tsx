import { useReducer } from 'react'
import NavContext from '../context/NavContext'
import NavReducer from '../reducers/NavReducer'

const NavProvider = (props: any) => {
  const [state, dispatch] = useReducer(NavReducer, false)
  return (
    <NavContext.Provider value={{ state, dispatch }}>
      {props.children}
    </NavContext.Provider>
  )
}

export default NavProvider
