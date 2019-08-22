import CHANGE_ALIGNMENT from './action'

// handle the alignment state
export default function kingdomAlignment(state = "N", action) {
  switch (action.type) {
    case CHANGE_ALIGNMENT:
      return Object.assign({}, state, { alignment: action.alignment});
    default:
      return state;
  }
}
