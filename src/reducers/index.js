import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import TodayReducer from './reducer_today';
import TermReducer from './reducer_term';
import ProviderReducer from './reducer_provider';
import BooleanReducer from './reducer_boolean';
import SearchBooleanReducer from './reducer_search_boolean';

const rootReducer = combineReducers({
  todays_news: TodayReducer,
  term_results: TermReducer,
  provider_news: ProviderReducer,
  boolean: BooleanReducer,
  search_boolean: SearchBooleanReducer,
  routing: routerReducer
});

export default rootReducer;
