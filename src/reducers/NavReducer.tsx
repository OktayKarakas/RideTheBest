const NavReducer = (state: boolean, action: any) => {
  if (action.type === 'TOGGLE_NAV') {
    return !state
  } else {
    return state
  }
}

export default NavReducer
