//import * as types from '../constants/actions';
//import * as types from '../actions';

const initialState = {
  inbox: [],
};

export default function inbox(state = initialState, action) {
  switch (action.type) {
    case 'INBOX_RECEIVED':
      //console.log(JSON.stringify(action.inbox));
      return {...state, inbox: action.inbox};
    case 'LOAD_INBOX_FAILURE':
      return state;
    default:
      return state
  }
}
