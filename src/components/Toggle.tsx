import React, { useContext } from 'react'
import NavContext from '../context/NavContext'

const Toggle = () => {
  const { state, dispatch } = useContext(NavContext)
  return (
    <>
      <div
        className={state ? 'toggle-closed' : 'toggle-open'}
        onClick={() => dispatch({ type: 'TOGGLE_NAV' })}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
    </>
  )
}

export default Toggle
