export function manageFriends(state = {friends: []}, action) {
  switch(action.type) {
    case 'ADD_FRIEND': return {...state, friends: [...state.friends].concat(action.friend)}
    case 'REMOVE_FRIEND': 
      const index = state.friends.indexOf(state.friends.find(e => e.id === action.id))
      let new_friends = [...state.friends]
      new_friends.splice(index, 1)
      return {...state, friends: new_friends}
    default: return state
  }
}
