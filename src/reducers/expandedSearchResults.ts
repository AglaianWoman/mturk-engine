import { Set } from 'immutable';
import { ExpandedSearchResultsSet } from '../types';
import { SearchExpandAction } from '../actions/toggleExpand';
import {
  TOGGLE_SEARCH_RESULT_EXPAND,
  COLLAPSE_ALL_SEARCH_RESULTS
} from '../constants';

const initial: ExpandedSearchResultsSet = Set<string>([]);

export default (state = initial, action: SearchExpandAction) => {
  switch (action.type) {
    case TOGGLE_SEARCH_RESULT_EXPAND:
      return state.has(action.hit.groupId)
        ? state.delete(action.hit.groupId)
        : state.add(action.hit.groupId);
    case COLLAPSE_ALL_SEARCH_RESULTS:
      return state.clear();
    default:
      return state;
  }
};
