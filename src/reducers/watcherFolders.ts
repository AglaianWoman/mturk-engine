import { WatcherFolderAction } from '../actions/watcherFolders';
import {
  WATCHER_FOLDER_TOGGLE_EXPAND,
  WATCHER_FOLDER_EDIT
} from '../constants';
import { WatcherFolder, Watcher } from '../types';
import { Map } from 'immutable';
import { DEFAULT_WATCHER_FOLDER_ID } from '../constants/misc';

const initial = Map<string, WatcherFolder>({
  [DEFAULT_WATCHER_FOLDER_ID]: {
    expanded: true,
    id: DEFAULT_WATCHER_FOLDER_ID,
    name: 'Unsorted Watchers',
    watchers: Map<string, Watcher>()
  }
});

export default (
  state = initial,
  action: WatcherFolderAction
): Map<string, WatcherFolder> => {
  switch (action.type) {
    case WATCHER_FOLDER_TOGGLE_EXPAND:
      return state.update(action.folderId, folder => ({
        ...folder,
        expanded: !folder.expanded
      }));
    case WATCHER_FOLDER_EDIT:
      return state.update(action.folderId, folder => ({
        ...folder,
        [action.field]: action.value
      }));
    default:
      return state;
  }
};
