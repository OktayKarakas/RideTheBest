import React from 'react'
import { Link } from 'react-router-dom'
import { useContext } from 'react'
import NavContext from '../context/NavContext'

const Nav = () => {
  const { state, dispatch } = useContext(NavContext)
  return (
    <>
      {state ? <div className="navLayer"></div> : ''}
      <div className={state ? 'nav nav--open' : 'nav nav--close'}>
        <div className="nav__content">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  )
}

export default Nav
