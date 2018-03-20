import { FETCH_NEWS } from '../actions';

export default function(state=null, action) {
  switch(action.type) {
    case FETCH_NEWS:
      //console.log({news: action.payload});
      return action.payload.data.articles;
    default:
      return state;
  }
}
